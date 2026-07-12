-- Leads table: stores contact form submissions.
-- No RLS policies are created intentionally — RLS is enabled with zero policies,
-- which means anon/authenticated roles get NO access at all (default-deny).
-- Only the service role (used server-side in /api/submit-lead) bypasses RLS.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  source text not null default 'contact_form',
  ip_address text,
  created_at timestamptz not null default now(),

  constraint leads_name_length check (char_length(name) between 1 and 100),
  constraint leads_email_length check (char_length(email) between 3 and 200),
  constraint leads_subject_length check (char_length(subject) between 1 and 200),
  constraint leads_message_length check (char_length(message) between 1 and 5000),
  -- basic defense-in-depth email shape check (real validation happens in the API route)
  constraint leads_email_format check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$')
);

-- Used by the rate-limit check in /api/submit-lead (lookup by ip + recent time window)
create index if not exists leads_ip_created_at_idx on public.leads (ip_address, created_at desc);

-- Used if you ever want to query/sort by recency in a future admin panel
create index if not exists leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;

-- No policies added on purpose: with RLS enabled and no policies, every request
-- using the anon or authenticated key is denied. Only the service role key
-- (server-side only, used in src/lib/supabase/server.ts) can read/write this table.
