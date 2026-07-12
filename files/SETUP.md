# Setup Steps

## 1. Run the SQL migration
In Supabase Dashboard → SQL Editor, run the contents of
`supabase/migrations/0001_create_leads_table.sql`.

This creates the `leads` table with RLS enabled and **no policies** — meaning
the anon/public key has zero access. Only the service role key (server-side)
can read or write.

## 2. Install dependencies
```
npm install @supabase/supabase-js zod
```

## 3. Add environment variables
Copy `.env.local.example` values into your real `.env.local` (get the URL and
service role key from Supabase Dashboard → Project Settings → API).

In Vercel: Project Settings → Environment Variables → add the same two vars
(Production + Preview + Development). Do **not** prefix them with
`NEXT_PUBLIC_` — they must stay server-only.

## 4. Add the new files to your project
- `src/lib/supabase/server.ts`
- `src/app/api/submit-lead/route.ts`

## 5. Update Contact.tsx
Merge the logic from the provided `Contact.tsx` reconstruction into your real
component — specifically:
- Remove the Web3Forms `fetch(...)` call and the hard-coded fallback API key
- Add the hidden honeypot `company` field
- Point the submit handler at `/api/submit-lead` instead
- Add the `errorMessage` state + display, since failures were previously silent

## 6. Clean up
- Remove `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` from `.env.local` and Vercel env vars
  (unless you're keeping Web3Forms for something else — you said it's not needed)
- Delete the hard-coded fallback key from the old Contact.tsx code

## 7. Verify
- [ ] Submit the form normally → a row appears in the `leads` table in Supabase
- [ ] Open devtools, manually set the hidden `company` input's value, submit →
      button shows "Message Sent!" but **no row is inserted**
- [ ] Submit 4 times quickly from the same browser → the 4th attempt shows the
      rate-limit error message
- [ ] Submit with an invalid email (e.g. `test`) → validation error returned
- [ ] Network tab: confirm only `/api/submit-lead` is called — no Supabase
      keys visible in any client-side request
- [ ] Try inserting into `leads` directly with the anon key (e.g. via `curl`
      or the Supabase client in browser console) → confirm it's rejected
