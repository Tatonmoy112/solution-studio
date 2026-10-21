import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

function verifySvixSignature(rawBody: string, headers: Headers, secret: string): boolean {
  try {
    const svixId = headers.get("svix-id");
    const svixTimestamp = headers.get("svix-timestamp");
    const svixSignature = headers.get("svix-signature");

    if (!svixId || !svixTimestamp || !svixSignature) {
      return false;
    }

    // Verify timestamp within 5-minute tolerance to prevent replay attacks
    const timestampSec = parseInt(svixTimestamp, 10);
    const nowSec = Math.floor(Date.now() / 1000);
    if (Math.abs(nowSec - timestampSec) > 300) {
      return false;
    }

    const cleanSecret = secret.replace(/^whsec_/, "");
    const secretBuffer = Buffer.from(cleanSecret, "base64");
    const signedContent = `${svixId}.${svixTimestamp}.${rawBody}`;

    const computedSig = crypto
      .createHmac("sha256", secretBuffer)
      .update(signedContent)
      .digest("base64");

    const passedSignatures = svixSignature
      .split(" ")
      .map((part) => {
        const commaIndex = part.indexOf(",");
        return commaIndex !== -1 ? part.slice(commaIndex + 1) : part;
      });

    return passedSignatures.some((sig) => {
      try {
        const sigBuf = Buffer.from(sig);
        const compBuf = Buffer.from(computedSig);
        return sigBuf.length === compBuf.length && crypto.timingSafeEqual(sigBuf, compBuf);
      } catch {
        return false;
      }
    });
  } catch (err) {
    console.warn("Signature verification exception:", err);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn("Resend webhook skipped: RESEND_API_KEY not configured.");
      return NextResponse.json({ message: "API key not configured" }, { status: 200 });
    }

    const rawBody = await request.text();
    const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;

    // Verify cryptographic signature if secret is configured in Vercel
    if (webhookSecret) {
      const isValid = verifySvixSignature(rawBody, request.headers, webhookSecret);
      if (!isValid) {
        console.warn("Resend webhook rejected: Invalid signature.");
        return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
      }
    }

    const event = JSON.parse(rawBody);

    // Verify it is an email.received event
    if (event.type !== "email.received" || !event.data) {
      return NextResponse.json({ message: "Ignored event type", type: event.type }, { status: 200 });
    }

    const emailId = event.data.email_id || event.data.id;
    const clientFrom = event.data.from || "Unknown Client";
    const subject = event.data.subject || "No Subject";
    const targetEmail = process.env.LEAD_NOTIFICATION_EMAIL || "sales@solutionstudio.bd";

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
