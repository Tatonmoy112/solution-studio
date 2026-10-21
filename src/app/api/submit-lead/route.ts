import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { leadFormSchema } from "@/lib/validation/lead";
import { createSupabaseAdminClient } from "@/lib/supabase/server";
import {
  generateLeadNotificationEmail,
  generateProspectConfirmationEmail,
} from "@/lib/email/templates";

const RATE_LIMIT_WINDOW_MINUTES = 15;
const RATE_LIMIT_MAX_SUBMISSIONS = 4;
const IP_SALT = process.env.CRON_SECRET || "solution-studio-default-salt-2026";

function getClientIpHash(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const rawIp = forwardedFor
    ? forwardedFor.split(",")[0].trim()
    : request.headers.get("x-real-ip") || "unknown";

  return crypto
    .createHash("sha256")
    .update(`${rawIp}:${IP_SALT}`)
    .digest("hex");
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON request payload." },
      { status: 400 }
    );
  }

  // 1. Zod Validation
  const validation = leadFormSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Validation failed. Please review the highlighted fields.",
        details: validation.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const {
    name,
    email,
    companyName,
    phone,
    services,
    budgetRange,
    timeline,
    message,
    website_url_hp,
  } = validation.data;

  // 2. Honeypot check - silently discard bot automated payloads
  if (website_url_hp && website_url_hp.trim().length > 0) {
    return NextResponse.json({
      success: true,
      leadId: `discarded_${Date.now()}`,
    });
  }

  const ipHash = getClientIpHash(request);
  const idempotencyHeader = request.headers.get("X-Idempotency-Key");
  const idempotencyKey =
    idempotencyHeader ||
    crypto
      .createHash("sha256")
      .update(`${email}:${Date.now()}`)
      .digest("hex");

  // 3. Database Persistence & Rate Limiting via Supabase
  let leadId = idempotencyKey;
  let supabaseAvailable = false;

  try {
    const supabase = createSupabaseAdminClient();
    supabaseAvailable = true;

    // Check rate limit
    const windowStart = new Date(
      Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000
    ).toISOString();

    const { count, error: countError } = await supabase
      .from("leads")
      .select("id", { count: "exact", head: true })
      .eq("ip_hash", ipHash)
      .gte("created_at", windowStart);

    if (countError) {
      console.warn("Supabase rate-limit check warning:", countError.message);
    } else if ((count ?? 0) >= RATE_LIMIT_MAX_SUBMISSIONS) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Too many submissions from this connection. Please wait 15 minutes or email us directly.",
        },
        { status: 429 }
      );
    }

    // Insert lead into Supabase
    const { data: insertedData, error: insertError } = await supabase
      .from("leads")
      .insert({
        name,
        email,
        company_name: companyName || null,
        phone: phone || null,
        services,
        budget_range: budgetRange || null,
        timeline: timeline || null,
        message,
        ip_hash: ipHash,
        idempotency_key: idempotencyKey,
        notification_status: "pending",
      })
      .select("id")
      .single();

    if (insertError) {
      // Check if duplicate idempotency key
      if (insertError.code === "23505") {
        return NextResponse.json({
          success: true,
          message: "Inquiry previously recorded.",
          leadId: idempotencyKey,
        });
      }
      console.error("Failed to insert lead into Supabase:", insertError);
    } else if (insertedData) {
      leadId = insertedData.id;
    }
  } catch (dbError) {
    console.warn("Supabase client unavailable (missing environment vars):", dbError);
  }

  // 4. Dispatch Email Notifications via Resend (with fail-safe fallback to personal inbox)
  const resendApiKey = process.env.RESEND_API_KEY;
  const fallbackEmail = "tatonmoy112@gmail.com";
  const targetEmail = process.env.LEAD_NOTIFICATION_EMAIL || fallbackEmail;
  const leadNotificationFrom =
    process.env.LEAD_NOTIFICATION_FROM ||
    "Solution Studio <onboarding@resend.dev>";

  let notificationStatus: "sent" | "failed" = "failed";
  let notificationError: string | null = null;
  let resendMessageId: string | null = null;

  if (resendApiKey) {
    try {
      const emailPayload = generateLeadNotificationEmail({
        name,
        email,
        companyName,
        phone,
        services,
        budgetRange,
        timeline,
        message,
        ipHash,
        leadId,
      });

      let resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: leadNotificationFrom,
          to: targetEmail,
          subject: emailPayload.subject,
          html: emailPayload.html,
        }),
      });

      // If initial dispatch failed (e.g. custom domain unverified in Resend), fallback to personal inbox
      if (!resendRes.ok && targetEmail !== fallbackEmail) {
        console.warn(`Resend dispatch to ${targetEmail} failed. Retrying dispatch to verified personal inbox ${fallbackEmail}`);
        resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Solution Studio <onboarding@resend.dev>",
            to: fallbackEmail,
            subject: emailPayload.subject,
            html: emailPayload.html,
          }),
        });
      }

      if (resendRes.ok) {
        const resendData = await resendRes.json();
        resendMessageId = resendData.id || null;
        notificationStatus = "sent";

        // Dispatch optional prospect auto-responder
        try {
          const autoresponder = generateProspectConfirmationEmail(name);
          await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${resendApiKey}`,
            },
            body: JSON.stringify({
              from: leadNotificationFrom,
              to: email,
              subject: autoresponder.subject,
              html: autoresponder.html,
            }),
          });
        } catch (autoErr) {
          console.warn("Autoresponder dispatch notice:", autoErr);
        }
      } else {
        const errorText = await resendRes.text();
        notificationError = `Resend API Error: ${errorText}`;
        console.error("Resend error:", errorText);
      }
    } catch (mailError) {
      notificationError =
        mailError instanceof Error ? mailError.message : "Unknown mail error";
      console.error("Email dispatch failed:", mailError);
    }
  } else {
    notificationError = "RESEND_API_KEY not configured.";
    console.warn("Skipping email dispatch: RESEND_API_KEY environment variable missing.");
  }

  // 5. Update Notification Status in Supabase for auditability
  if (supabaseAvailable) {
    try {
      const supabase = createSupabaseAdminClient();
      await supabase
        .from("leads")
        .update({
          notification_status: notificationStatus,
          notification_error: notificationError,
          resend_message_id: resendMessageId,
          notification_sent_at:
            notificationStatus === "sent" ? new Date().toISOString() : null,
          updated_at: new Date().toISOString(),
        })
        .eq("id", leadId);
    } catch (updateErr) {
      console.warn("Could not update lead notification status:", updateErr);
    }
  }

  return NextResponse.json({
    success: true,
    leadId,
    message: "Inquiry successfully processed.",
  });
}
