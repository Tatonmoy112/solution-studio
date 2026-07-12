import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(200),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(5000),
  company: z.string().optional().default(""),
});

const RATE_LIMIT_WINDOW_MINUTES = 10;
const RATE_LIMIT_MAX_SUBMISSIONS = 3;

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  return "unknown";
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, subject, message, company } = parsed.data;

  if (company && company.length > 0) {
    return NextResponse.json({ success: true });
  }

  const ip = getClientIp(request);
  let supabaseServer: ReturnType<typeof createSupabaseServerClient>;

  try {
    supabaseServer = createSupabaseServerClient();
  } catch (error) {
    console.error("Supabase configuration error:", error);
    return NextResponse.json(
      { error: "Server is not configured to receive submissions yet." },
      { status: 500 }
    );
  }

  if (ip !== "unknown") {
    const windowStart = new Date(
      Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000
    ).toISOString();

    const { count, error: countError } = await supabaseServer
      .from("leads")
      .select("id", { count: "exact", head: true })
      .eq("ip_address", ip)
      .gte("created_at", windowStart);

    if (countError) {
      console.error("Rate limit check failed:", countError);
    } else if ((count ?? 0) >= RATE_LIMIT_MAX_SUBMISSIONS) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again in a few minutes." },
        { status: 429 }
      );
    }
  }

  const { error: insertError } = await supabaseServer.from("leads").insert({
    name,
    email,
    subject,
    message,
    ip_address: ip,
    source: "contact_form",
  });

  if (insertError) {
    console.error("Failed to insert lead:", insertError);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  // Send email notification via Resend
  const resendApiKey = process.env.RESEND_API_KEY;
  const leadNotificationEmail = process.env.LEAD_NOTIFICATION_EMAIL || "tatonmoy112@gmail.com";
  const leadNotificationFrom = process.env.LEAD_NOTIFICATION_FROM || "Solution Studio <contact@solutionstudio.bd>";

  if (resendApiKey) {
    try {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: leadNotificationFrom,
          to: leadNotificationEmail,
          subject: `New Lead: ${subject}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 10px; margin-top: 0;">New Lead Submitted</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Subject:</strong> ${subject}</p>
              <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #cbd5e1;">
                <p style="margin: 0; font-weight: bold; color: #475569;">Message:</p>
                <p style="margin: 5px 0 0 0; white-space: pre-wrap; color: #334155;">${message}</p>
              </div>
              <p style="font-size: 11px; color: #94a3b8; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 10px; margin-bottom: 0;">
                Submitted from IP: ${ip} via Contact Form.
              </p>
            </div>
          `,
        }),
      });

      if (!emailRes.ok) {
        const errorText = await emailRes.text();
        console.error("Resend API returned error:", errorText);
      }
    } catch (emailError) {
      console.error("Failed to send lead email notification via Resend:", emailError);
    }
  } else {
    console.warn("Resend notification skipped: missing environment variables.");
  }

  return NextResponse.json({ success: true });
}
