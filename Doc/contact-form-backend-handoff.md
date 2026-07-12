# Contact Form Backend Handoff

## Overview

The contact form was migrated from client-side Web3Forms submission to a server-side Supabase lead capture flow. The form now validates input on the frontend, submits to a Next.js App Router API route, validates again on the server, rate-limits by IP, and stores valid leads in Supabase.

Resend domain verification for `solutionstudio.bd` was also configured externally so future email notifications can be added safely.

## Current Stack

- Framework: Next.js App Router
- Frontend form: native React form with `useState`
- Backend route: `src/app/api/submit-lead/route.ts`
- Database: Supabase Postgres
- Server validation: Zod
- Supabase SDK: `@supabase/supabase-js`
- Hosting: Vercel

## Files Added Or Updated

- `src/components/sections/Contact.tsx`
  - Replaced Web3Forms submission with `/api/submit-lead`.
  - Added frontend validation for `name`, `email`, `subject`, and `message`.
  - Added accessible field errors with `aria-invalid` and `aria-describedby`.
  - Added hidden `company` honeypot field.
  - Displays API error messages when submission fails.

- `src/app/api/submit-lead/route.ts`
  - Accepts contact form submissions as JSON.
  - Validates input with Zod.
  - Silently accepts honeypot submissions without inserting.
  - Rate-limits by IP: 3 submissions per 10 minutes.
  - Inserts valid leads into Supabase.

- `src/lib/supabase/server.ts`
  - Creates a server-only Supabase client.
  - Reads `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.
  - Must never be imported into Client Components.

- `supabase/migrations/0001_create_leads_table.sql`
  - Creates the `public.leads` table.
  - Enables RLS with no anon/authenticated policies.
  - Adds length/email constraints and indexes for recent/IP lookups.

- `package.json` / `package-lock.json`
  - Added `@supabase/supabase-js`.
  - Added `zod`.

- `tsconfig.json`
  - Excludes `files/` so reference drafts are not type-checked as application code.

## Contact Form Fields

The implemented form sends:

| Field | Required | Frontend limit | Backend limit |
|---|---:|---:|---:|
| `name` | Yes | 100 chars | 100 chars |
| `email` | Yes | 200 chars + email pattern | 200 chars + email validation |
| `subject` | Yes | 200 chars | 200 chars |
| `message` | Yes | 5000 chars | 5000 chars |
| `company` | No | Hidden honeypot | Bot trap |

All visible fields are trimmed before being submitted.

## Runtime Flow

1. User submits the contact form.
2. Frontend validates required fields, email shape, and max lengths.
3. Frontend sends JSON to `/api/submit-lead`.
4. API route validates again with Zod.
5. If `company` honeypot is filled, API returns `{ success: true }` and inserts nothing.
6. API checks recent submissions from the same IP.
7. API inserts a valid lead into `public.leads`.
8. Frontend resets the form and shows `Message Sent!`.

## Supabase Security Model

The `leads` table has RLS enabled and intentionally has no anon/authenticated policies. This means public Supabase clients cannot write directly to `leads`.

Only the server-side service role key can insert rows, and it is used only inside the Next.js API route.

After applying the migration, verify security by attempting an insert with the anon key and confirming it is rejected.

## Required Environment Variables

Local `.env.local` and Vercel environment variables must include:

```env
SUPABASE_URL="https://your-project-ref.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
```

Do not prefix the service role key with `NEXT_PUBLIC_`.

Do not commit `.env.local`. It contains real secrets and should remain local only. A committed example file should contain placeholders only.

## Deployment Notes

Vercel Free plan supports this flow:

- Browser submits to Vercel-hosted Next.js route handler.
- Route handler uses server-only env vars.
- Route handler writes to Supabase.

After changing Vercel environment variables, redeploy the project so the new values are available to the deployment.

## Resend DNS Setup

Resend DNS records were added for `solutionstudio.bd` in Vercel DNS. Public DNS checks confirmed:

- DKIM TXT: `resend._domainkey.solutionstudio.bd`
- Sending MX: `send.solutionstudio.bd`
- Sending SPF TXT: `send.solutionstudio.bd`
- Receiving MX: `solutionstudio.bd`
- DMARC TXT: `_dmarc.solutionstudio.bd`

Resend later showed the domain as verified.

## Resend Notification Next Step

Email notification code has not been added to the repo yet. To add it:

1. Install `resend`.
2. Add env vars:

```env
RESEND_API_KEY="re_your_api_key"
LEAD_NOTIFICATION_EMAIL="inbox-that-receives-leads@example.com"
LEAD_NOTIFICATION_FROM="Solution Studio <contact@solutionstudio.bd>"
```

3. In `src/app/api/submit-lead/route.ts`, send the notification only after Supabase insert succeeds.
4. If email sending fails, log the error but still return success because the lead is already stored.
5. Use the lead submitter email as `reply_to` so the recipient can reply directly to the client.

## Verification Commands

Because this Windows environment may not have `npm` on PATH, use:

```powershell
$env:Path = 'C:\Program Files\nodejs;' + $env:Path
& 'C:\Program Files\nodejs\npm.cmd' run lint
& 'C:\Program Files\nodejs\npm.cmd' run build
```

Last known verification:

- `npm run lint`: passed with warnings only.
- `npm run build`: passed.

## Operational Checklist

- Supabase migration has been run in the Supabase SQL Editor.
- `leads` table exists in Supabase.
- Vercel has `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.
- Contact form submission creates a Supabase row.
- Invalid input is blocked on the frontend and backend.
- Honeypot submission returns success but creates no row.
- Fourth submission within 10 minutes from the same IP returns rate limit error.
- Direct anon-key insert into `leads` is rejected.
- Resend domain `solutionstudio.bd` is verified before adding email notifications.
