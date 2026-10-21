-- =========================================================================
-- SOLUTION STUDIO v2: Database Schema & Row-Level-Security (RLS)
-- Target: Supabase PostgreSQL
-- =========================================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Enum for tracking email delivery lifecycle
DO $$ BEGIN
    CREATE TYPE lead_notification_status AS ENUM ('pending', 'sent', 'failed');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Core Leads Table
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    
    -- Prospect Contact Details
    name VARCHAR(120) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company_name VARCHAR(150),
    phone VARCHAR(50),
    
    -- Project Parameters
    services TEXT[] NOT NULL DEFAULT '{}',
    budget_range VARCHAR(50),
    timeline VARCHAR(50),
    message TEXT NOT NULL,
    
    -- Security & Abuse Prevention
    ip_hash VARCHAR(64) NOT NULL,
    idempotency_key VARCHAR(64) NOT NULL UNIQUE,
    turnstile_verified BOOLEAN NOT NULL DEFAULT false,
    
    -- Delivery Lifecycle
    notification_status lead_notification_status NOT NULL DEFAULT 'pending',
    notification_error TEXT,
    notification_sent_at TIMESTAMPTZ,
    resend_message_id VARCHAR(100),
    
    -- Extensible metadata
    metadata JSONB NOT NULL DEFAULT '{}'::jsonb
);

-- Indexing for rapid queries and rate-limiting lookups
CREATE INDEX IF NOT EXISTS idx_leads_ip_hash_created_at ON public.leads(ip_hash, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_notification_status ON public.leads(notification_status) WHERE notification_status = 'failed';
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);

-- Row Level Security (RLS) Configuration
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Deny all public anon operations
DROP POLICY IF EXISTS "Deny anon access" ON public.leads;
CREATE POLICY "Deny anon access" ON public.leads FOR ALL TO anon USING (false);

-- Grant full control only to service_role (used exclusively by Next.js server Route Handlers)
DROP POLICY IF EXISTS "Service role full access" ON public.leads;
CREATE POLICY "Service role full access" ON public.leads FOR ALL TO service_role USING (true) WITH CHECK (true);

