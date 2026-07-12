## Plan

**Goal:** Wire the existing Contact form to store submissions in Supabase, replacing Web3Forms entirely, with server-side validation, honeypot spam protection, and IP-based rate limiting — no admin panel, no email.

**Scope / files affected:**
- **New:** Supabase `leads` table + RLS policy (SQL)
- **New:** `src/lib/supabase/server.ts` — server-only Supabase client (service role key)
- **New:** `src/app/api/submit-lead/route.ts` — validates, checks honeypot + rate limit, inserts
- **Modified:** `src/components/sections/Contact.tsx` — remove Web3Forms code + hard-coded key, add honeypot field, add error state UI, post to `/api/submit-lead`
- **New/Modified:** `.env.local.example` and README note for `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY`
- **New deps:** `@supabase/supabase-js`, `zod`

**Key design decisions & why:**
- **Service role key, server-side only** — inserts happen through your own API route, not the browser. RLS on `leads` stays fully locked (no anon insert policy needed), so even if someone finds your anon key, they can't touch the table. This is stricter than the direct-client approach.
- **Rate limiting via a Supabase query**, not Redis — at your current volume, a "how many submissions from this IP in the last N minutes" check before insert is sufficient and avoids adding infra (Upstash/Redis) you don't need yet. Easy to swap in later if volume grows.
- **Honeypot**: a hidden field real users never see/fill; bots that auto-fill every field get silently "succeeded" (no error shown, no row inserted) — this avoids tipping bots off that they were caught.
- **Server-side validation (zod)** — mirrors the same 4 fields, adds sane max-lengths, since the current client-only `required` validation is trivially bypassable via `fetch`.

**Edge cases handled:** honeypot filled, missing/invalid email format, oversized message, rapid duplicate submissions, missing IP header (local dev), Supabase insert failure → user-facing error (a real gap, since the current form only `console.error`s and shows nothing).

**Verification after I build this:**
- Submit form normally → row appears in Supabase `leads` table
- Fill honeypot via devtools → looks successful to the "bot" but no row is inserted
- Submit twice quickly → second one blocked with a rate-limit message
- Try invalid email → validation error shown inline
- Confirm service role key never appears in browser devtools/network tab (only `/api/submit-lead` is called client-side)
- Curl the table directly with the anon key → confirm insert is rejected (RLS working)

One open item: max message length — I'll default to 5,000 characters unless you want something different.