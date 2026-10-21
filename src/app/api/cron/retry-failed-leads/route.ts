import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/server";
import { generateLeadNotificationEmail } from "@/lib/email/templates";

export async function GET(request: NextRequest) {
  // Check authorization header for Cron secret
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return NextResponse.json(
      { error: "RESEND_API_KEY is not configured." },
      { status: 500 }
    );
  }

  try {
    const supabase = createSupabaseAdminClient();

    // Query failed leads from the last 3 days (max 20 per cron run)
    const threeDaysAgo = new Date(
      Date.now() - 3 * 24 * 60 * 60 * 1000
    ).toISOString();

    const { data: failedLeads, error } = await supabase
      .from("leads")
      .select("*")
      .eq("notification_status", "failed")
      .gte("created_at", threeDaysAgo)
      .limit(20);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!failedLeads || failedLeads.length === 0) {
      return NextResponse.json({ message: "No failed leads requiring retry." });
    }

    const fallbackEmail = "tatonmoy112@gmail.com";
    const targetEmail = process.env.LEAD_NOTIFICATION_EMAIL || fallbackEmail;
    const leadNotificationFrom =
      process.env.LEAD_NOTIFICATION_FROM ||
      "Solution Studio <onboarding@resend.dev>";

    let recoveredCount = 0;

    for (const lead of failedLeads) {
      try {
        const emailPayload = generateLeadNotificationEmail({
          name: lead.name,
          email: lead.email,
          companyName: lead.company_name || undefined,
          phone: lead.phone || undefined,
          services: lead.services || [],
          budgetRange: lead.budget_range || undefined,
          timeline: lead.timeline || undefined,
          message: lead.message,
          ipHash: lead.ip_hash,
          leadId: lead.id,
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
            subject: `[RETRY SUCCESS] ${emailPayload.subject}`,
            html: emailPayload.html,
          }),
        });

        if (!resendRes.ok && targetEmail !== fallbackEmail) {
          resendRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${resendApiKey}`,
            },
            body: JSON.stringify({
              from: "Solution Studio <onboarding@resend.dev>",
              to: fallbackEmail,
              subject: `[RETRY SUCCESS] ${emailPayload.subject}`,
              html: emailPayload.html,
            }),
          });
        }

        if (resendRes.ok) {
          const resendData = await resendRes.json();
          await supabase
            .from("leads")
            .update({
              notification_status: "sent",
              notification_error: null,
              resend_message_id: resendData.id,
              notification_sent_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            })
            .eq("id", lead.id);

          recoveredCount++;
        } else {
          const errText = await resendRes.text();
          await supabase
            .from("leads")
            .update({
              notification_error: `Retry failed: ${errText}`,
              updated_at: new Date().toISOString(),
            })
            .eq("id", lead.id);
        }
      } catch (leadError) {
        console.error(`Error retrying lead ${lead.id}:`, leadError);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Recovered and dispatched ${recoveredCount} of ${failedLeads.length} failed leads.`,
      recoveredCount,
      totalFailed: failedLeads.length,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
