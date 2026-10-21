function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export interface LeadEmailPayload {
  name: string;
  email: string;
  companyName?: string;
  phone?: string;
  services: string[];
  budgetRange?: string;
  timeline?: string;
  message: string;
  ipHash: string;
  leadId: string;
}

export function generateLeadNotificationEmail(payload: LeadEmailPayload): {
  subject: string;
  html: string;
} {
  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safeCompany = payload.companyName ? escapeHtml(payload.companyName) : "Not specified";
  const safePhone = payload.phone ? escapeHtml(payload.phone) : "Not specified";
  const safeBudget = payload.budgetRange ? escapeHtml(payload.budgetRange) : "Not specified";
  const safeTimeline = payload.timeline ? escapeHtml(payload.timeline) : "Not specified";
  const safeServices = payload.services.map(escapeHtml).join(", ") || "General Inquiry";
  const safeMessage = escapeHtml(payload.message).replace(/\n/g, "<br/>");

  const subject = `[New Project Lead] ${payload.name} (${safeCompany})`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Lead Notification</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0d0e; color: #f1f5f9; padding: 32px 16px; margin: 0;">
  <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 620px; background-color: #121517; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; overflow: hidden;">
    <!-- Header -->
    <tr>
      <td style="padding: 28px 32px; background: linear-gradient(135deg, #013AFF 0%, #001f8f 100%);">
        <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">Solution Studio</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0 0; font-size: 13px;">New Inbound Client Project Inquiry</p>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding: 32px;">
        <table width="100%" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding-bottom: 24px;">
              <h2 style="font-size: 16px; font-weight: 600; color: #10B981; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 0.05em;">Contact Information</h2>
              <table width="100%" border="0" cellpadding="6" cellspacing="0" style="font-size: 14px; color: #cbd5e1;">
                <tr>
                  <td width="30%" style="color: #94a3b8; font-weight: 500;">Prospect Name:</td>
                  <td style="font-weight: 600; color: #ffffff;">${safeName}</td>
                </tr>
                <tr>
                  <td style="color: #94a3b8; font-weight: 500;">Email:</td>
                  <td><a href="mailto:${safeEmail}" style="color: #38bdf8; text-decoration: none;">${safeEmail}</a></td>
                </tr>
                <tr>
                  <td style="color: #94a3b8; font-weight: 500;">Company / Org:</td>
                  <td>${safeCompany}</td>
                </tr>
                <tr>
                  <td style="color: #94a3b8; font-weight: 500;">Phone:</td>
                  <td>${safePhone}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Scope -->
          <tr>
            <td style="padding-bottom: 24px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 24px;">
              <h2 style="font-size: 16px; font-weight: 600; color: #10B981; margin: 0 0 16px 0; text-transform: uppercase; letter-spacing: 0.05em;">Project Parameters</h2>
              <table width="100%" border="0" cellpadding="6" cellspacing="0" style="font-size: 14px; color: #cbd5e1;">
                <tr>
                  <td width="30%" style="color: #94a3b8; font-weight: 500;">Services:</td>
                  <td style="color: #f8fafc; font-weight: 500;">${safeServices}</td>
                </tr>
                <tr>
                  <td style="color: #94a3b8; font-weight: 500;">Budget Range:</td>
                  <td style="color: #f8fafc; font-weight: 500;">${safeBudget}</td>
                </tr>
                <tr>
                  <td style="color: #94a3b8; font-weight: 500;">Target Timeline:</td>
                  <td style="color: #f8fafc; font-weight: 500;">${safeTimeline}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding-bottom: 24px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 24px;">
              <h2 style="font-size: 16px; font-weight: 600; color: #ffffff; margin: 0 0 12px 0;">Message / Project Brief</h2>
              <div style="background-color: #0b0d0e; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #e2e8f0;">
                ${safeMessage}
              </div>
            </td>
          </tr>

          <!-- Metadata -->
          <tr>
            <td style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 16px; font-size: 12px; color: #64748b;">
              <p style="margin: 0;">Lead Record ID: <code style="color: #94a3b8;">${payload.leadId}</code></p>
              <p style="margin: 4px 0 0 0;">Anonymized IP Hash: <code style="color: #94a3b8;">${payload.ipHash.slice(0, 16)}...</code></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  return { subject, html };
}

export function generateProspectConfirmationEmail(name: string): {
  subject: string;
  html: string;
} {
  const safeName = escapeHtml(name);

  return {
    subject: "We received your inquiry — Solution Studio",
    html: `
<!DOCTYPE html>
<html lang="en">
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; color: #1e293b; padding: 32px 16px; margin: 0;">
  <div style="max-width: 560px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 32px;">
    <h2 style="color: #0f172a; margin-top: 0; font-size: 20px;">Hello ${safeName},</h2>
    <p style="font-size: 15px; line-height: 1.6; color: #475569;">
      Thank you for reaching out to <strong>Solution Studio</strong>. We have received your project inquiry and our engineering team is currently reviewing your requirements.
    </p>
    <div style="background-color: #f1f5f9; border-left: 4px solid #013aff; padding: 16px; border-radius: 6px; margin: 24px 0;">
      <p style="margin: 0; font-size: 14px; color: #334155; font-weight: 500;">
        <strong>What happens next?</strong><br/>
        We will evaluate the technical scope and get back to you within <strong>24 business hours</strong> to schedule an initial discovery call or provide preliminary feedback.
      </p>
    </div>
    <p style="font-size: 14px; line-height: 1.5; color: #64748b;">
      In the meantime, feel free to review our case studies or reply directly to this email if you have additional specifications to share.
    </p>
    <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 13px; color: #94a3b8;">
      <strong>Solution Studio Engineering Team</strong><br/>
      Enterprise Software & Custom ERP Architectures<br/>
      <a href="https://solutionstudio.bd" style="color: #013aff; text-decoration: none;">solutionstudio.bd</a>
    </div>
  </div>
</body>
</html>
`,
  };
}

