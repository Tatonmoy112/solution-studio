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

  return NextResponse.json({ success: true });
}
