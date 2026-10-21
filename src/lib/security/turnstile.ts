/**
 * Cloudflare Turnstile Server-Side Verification Helper
 * Verifies tokens against https://challenges.cloudflare.com/turnstile/v0/siteverify
 * Enforces strict fail-closed security, hostname whitelisting, and timeout resilience.
 */

export interface TurnstileVerificationResult {
  success: boolean;
  status: number;
  error?: string;
  hostname?: string;
  action?: string;
  challengeTs?: string;
}

export interface VerifyTurnstileOptions {
  token: string | undefined | null;
  remoteIp?: string;
  idempotencyKey?: string;
  expectedAction?: string;
}

const ALLOWED_STATIC_HOSTNAMES = new Set([
  "solutionstudio.bd",
  "www.solutionstudio.bd",
  "localhost",
  "127.0.0.1",
  "example.com", // Cloudflare test credentials default hostname
]);

function isAllowedHostname(hostname: string | undefined): boolean {
  if (!hostname) return false;
  const lower = hostname.toLowerCase();

  if (ALLOWED_STATIC_HOSTNAMES.has(lower)) {
    return true;
  }

  // Allow Vercel preview deployments (e.g. solution-studio-*.vercel.app)
  if (lower.endsWith(".vercel.app")) {
    return true;
  }

  return false;
}

export async function verifyTurnstileToken(
  options: VerifyTurnstileOptions
): Promise<TurnstileVerificationResult> {
  const { token, remoteIp, idempotencyKey, expectedAction } = options;

  // 1. Enforce Token Presence
  if (!token || typeof token !== "string" || token.trim().length === 0) {
    return {
      success: false,
      status: 400,
      error: "Security verification token is missing. Please complete the verification challenge.",
    };
  }

  // 2. Enforce Secret Key Configuration (Fail-Closed)
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey || secretKey.trim().length === 0) {
    console.error(
      "SECURITY ALERT: TURNSTILE_SECRET_KEY environment variable is not configured."
    );
    return {
      success: false,
      status: 500,
      error: "Server security service is misconfigured. Please contact site administration.",
    };
  }

  // 3. Dispatch to Cloudflare Siteverify with Timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

  try {
    const siteverifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: secretKey.trim(),
          response: token.trim(),
          remoteip: remoteIp || undefined,
          idempotency_key: idempotencyKey || undefined,
        }),
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);

    if (!siteverifyRes.ok) {
      console.error(
        `Cloudflare Siteverify HTTP error: ${siteverifyRes.status} ${siteverifyRes.statusText}`
      );
      return {
        success: false,
        status: 503,
        error: "Verification service temporarily unavailable. Please retry shortly.",
      };
    }

    const data = await siteverifyRes.json();

    // 4. Verify Success Status
    if (!data.success) {
      const errorCodes: string[] = data["error-codes"] || [];
      console.warn("Cloudflare Turnstile token validation rejected with codes:", errorCodes);
      return {
        success: false,
        status: 403,
        error: "Security challenge verification failed or token expired. Please try again.",
      };
    }

    // 5. Verify Action
    if (expectedAction && data.action && data.action !== expectedAction) {
      console.warn(
        `Cloudflare Turnstile action mismatch: expected "${expectedAction}", got "${data.action}"`
      );
      return {
        success: false,
        status: 403,
        error: "Security verification action mismatch.",
      };
    }

    // 6. Verify Hostname Whitelist
    if (data.hostname && !isAllowedHostname(data.hostname)) {
      console.warn(
        `Cloudflare Turnstile unauthorized hostname rejected: ${data.hostname}`
      );
      return {
        success: false,
        status: 403,
        error: "Security verification token issued for an unauthorized origin.",
      };
    }

    return {
      success: true,
      status: 200,
      hostname: data.hostname,
      action: data.action,
      challengeTs: data.challenge_ts,
    };
  } catch (err: unknown) {
    clearTimeout(timeoutId);
    const isTimeout = err instanceof Error && err.name === "AbortError";
    console.error(
      isTimeout
        ? "Cloudflare Siteverify request timed out after 8 seconds."
        : "Cloudflare Siteverify network error:",
      err instanceof Error ? err.message : err
    );

    return {
      success: false,
      status: 503,
      error: "Verification request timed out. Please retry.",
    };
  }
}

