-- SMS Gateway Pro - Database Schema
-- Run this in Supabase Dashboard → SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- 1. SMS GATEWAY TENANTS (Organizations)
-- =============================================
CREATE TABLE IF NOT EXISTS sms_gateway_tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'inactive')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_tenants_slug ON sms_gateway_tenants(slug);
CREATE INDEX IF NOT EXISTS idx_tenants_status ON sms_gateway_tenants(status);
CREATE INDEX IF NOT EXISTS idx_tenants_created ON sms_gateway_tenants(created_at DESC);

-- Trigger to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_tenants_updated_at BEFORE UPDATE ON sms_gateway_tenants
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- 2. TENANT MEMBERS (User-Organization Link)
-- =============================================
CREATE TABLE IF NOT EXISTS tenant_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES sms_gateway_tenants(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    role VARCHAR(50) DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'member', 'viewer')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(tenant_id, user_id)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_tenant_members_tenant ON tenant_members(tenant_id);
CREATE INDEX IF NOT EXISTS idx_tenant_members_user ON tenant_members(user_id);
CREATE INDEX IF NOT EXISTS idx_tenant_members_role ON tenant_members(role);

-- =============================================
-- 3. USER PROFILES (Extended user data)
-- =============================================
-- Create schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS sms_gateway;

CREATE TABLE IF NOT EXISTS sms_gateway.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    role VARCHAR(50) DEFAULT 'user',
    tenant_id UUID NOT NULL REFERENCES sms_gateway_tenants(id) ON DELETE CASCADE,
    avatar_url TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_users_tenant ON sms_gateway.users(tenant_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON sms_gateway.users(email);
CREATE INDEX IF NOT EXISTS idx_users_phone ON sms_gateway.users(phone_number);

-- Trigger
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON sms_gateway.users
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- 4. USER SETTINGS (Preferences)
-- =============================================
CREATE TABLE IF NOT EXISTS user_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
    sms_channel VARCHAR(50) DEFAULT 'native' CHECK (sms_channel IN ('native', 'gateway', 'custom')),
    theme VARCHAR(20) DEFAULT 'light' CHECK (theme IN ('light', 'dark', 'auto')),
    language VARCHAR(10) DEFAULT 'en',
    notifications_enabled BOOLEAN DEFAULT true,
    email_notifications BOOLEAN DEFAULT true,
    sms_notifications BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_user_settings_user ON user_settings(user_id);

-- Trigger
CREATE TRIGGER update_user_settings_updated_at BEFORE UPDATE ON user_settings
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- 5. TRIAL SUBSCRIPTIONS (Track free trials)
-- =============================================
CREATE TABLE IF NOT EXISTS trial_subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES sms_gateway_tenants(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    end_date TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'expired', 'converted', 'cancelled')),
    offer_year INTEGER NOT NULL,
    customization_requests TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(tenant_id)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_trial_subscriptions_tenant ON trial_subscriptions(tenant_id);
CREATE INDEX IF NOT EXISTS idx_trial_subscriptions_user ON trial_subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_trial_subscriptions_status ON trial_subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_trial_subscriptions_end_date ON trial_subscriptions(end_date);

-- Trigger
CREATE TRIGGER update_trial_subscriptions_updated_at BEFORE UPDATE ON trial_subscriptions
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- 6. CUSTOMIZATION REQUESTS
-- =============================================
CREATE TABLE IF NOT EXISTS customization_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID NOT NULL REFERENCES sms_gateway_tenants(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    priority VARCHAR(50) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', high', 'urgent')),
    status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'rejected')),
    estimated_hours INTEGER,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_customization_tenant ON customization_requests(tenant_id);
CREATE INDEX IF NOT EXISTS idx_customization_user ON customization_requests(user_id);
CREATE INDEX IF NOT EXISTS idx_customization_status ON customization_requests(status);
CREATE INDEX IF NOT EXISTS idx_customization_priority ON customization_requests(priority);

-- Trigger
CREATE TRIGGER update_customization_requests_updated_at BEFORE UPDATE ON customization_requests
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- SUCCESS MESSAGE
-- =============================================
DO $$
BEGIN
    RAISE NOTICE '✅ Database schema created successfully!';
    RAISE NOTICE 'Next step: Apply Row Level Security policies (run rls-policies.sql)';
END $$;
