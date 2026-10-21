import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn("Resend webhook skipped: RESEND_API_KEY not configured.");
      return NextResponse.json({ message: "API key not configured" }, { status: 200 });
    }

    const event = await request.json();

    // Verify it is an email.received event
    if (event.type !== "email.received" || !event.data) {
      return NextResponse.json({ message: "Ignored event type", type: event.type }, { status: 200 });
    }

    const emailId = event.data.email_id || event.data.id;
    const clientFrom = event.data.from || "Unknown Client";
    const subject = event.data.subject || "No Subject";
    const targetEmail = process.env.LEAD_NOTIFICATION_EMAIL || "tatonmoy112@gmail.com";

    console.log(`Processing inbound email ${emailId} from: ${clientFrom}`);

    // 1. Fetch full email body from Resend receiving API
    let emailHtml = "";
    let emailText = "";

    try {
      const receivingRes = await fetch(
        `https://api.resend.com/emails/receiving/${emailId}`,
        {
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
          },
        }
      );

      if (receivingRes.ok) {
        const emailDetail = await receivingRes.json();
        emailHtml = emailDetail.html || "";
        emailText = emailDetail.text || "";
      } else {
        const errText = await receivingRes.text();
        console.warn(`Could not fetch full email body for ${emailId}:`, errText);
      }
    } catch (fetchErr) {
      console.error("Error fetching receiving email content:", fetchErr);
    }

    // 2. Build forward template
    const forwardedHeader = `
      <div style="background-color: #f1f5f9; border-left: 4px solid #013AFF; padding: 16px; border-radius: 6px; margin-bottom: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; color: #334155;">
        <p style="margin: 0 0 6px 0; font-weight: 700; color: #0f172a; font-size: 14px;">Incoming Client Email Forwarded</p>
        <p style="margin: 0 0 4px 0;"><strong>From:</strong> ${clientFrom}</p>
        <p style="margin: 0 0 4px 0;"><strong>To:</strong> sales@solutionstudio.bd</p>
        <p style="margin: 0;"><strong>Original Subject:</strong> ${subject}</p>
        <p style="margin: 8px 0 0 0; font-size: 12px; color: #64748b;">(Tip: Hitting 'Reply' in Gmail will reply directly to this client)</p>
      </div>
    `;

    const finalHtml = emailHtml
      ? `${forwardedHeader}<div>${emailHtml}</div>`
      : `${forwardedHeader}<div style="white-space: pre-wrap; font-family: monospace; font-size: 14px; color: #1e293b;">${emailText || "No text body found in message."}</div>`;

    // 3. Dispatch the forwarded email to your personal inbox
    const forwardRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Solution Studio Forwarder <sales@solutionstudio.bd>",
        to: targetEmail,
        reply_to: clientFrom,
        subject: `[Fwd: ${subject}] from ${clientFrom}`,
        html: finalHtml,
        text: emailText || `Forwarded message from: ${clientFrom}\n\nSubject: ${subject}`,
      }),
    });

    if (forwardRes.ok) {
      const forwardData = await forwardRes.json();
      console.log(`Successfully forwarded inbound email ${emailId} to ${targetEmail}`);
      return NextResponse.json({ success: true, forwardId: forwardData.id });
    } else {
      const forwardErr = await forwardRes.text();
      console.error("Failed to forward inbound email:", forwardErr);
      return NextResponse.json({ error: forwardErr }, { status: 500 });
    }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal error";
    console.error("Inbound webhook handler error:", errorMsg);
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}

