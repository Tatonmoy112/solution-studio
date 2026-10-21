import { createClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client initialized with the SERVICE_ROLE_KEY.
 * Bypasses RLS to insert and update leads from trusted Next.js Route Handlers.
 * NEVER expose this to client components or public bundles.
 */
export function createSupabaseAdminClient() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error(
      "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables."
    );
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

