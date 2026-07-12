import { createClient } from "@supabase/supabase-js";

// SERVER-ONLY. Never import this file from a Client Component or expose
// these env vars with a NEXT_PUBLIC_ prefix — the service role key bypasses
// RLS entirely and must only ever run on the server (API routes).

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error("Missing SUPABASE_URL environment variable");
}
if (!supabaseServiceRoleKey) {
  throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY environment variable");
}

export const supabaseServer = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});
