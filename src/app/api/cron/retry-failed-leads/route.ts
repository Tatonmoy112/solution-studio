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

    const leadNotificationEmail =
      process.env.LEAD_NOTIFICATION_EMAIL || "contact@solutionstudio.bd";
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

        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: leadNotificationFrom,
            to: leadNotificationEmail,
            subject: `[RETRY SUCCESS] ${emailPayload.subject}`,
            html: emailPayload.html,
          }),
        });

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
        }
      } catch (retryErr) {
        console.error(`Retry failed for lead ${lead.id}:`, retryErr);
      }
    }

    return NextResponse.json({
      success: true,
      totalFailedFound: failedLeads.length,
      recoveredCount,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

