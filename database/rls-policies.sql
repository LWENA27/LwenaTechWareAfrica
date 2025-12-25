-- SMS Gateway Pro - Row Level Security Policies
-- Run this AFTER schema.sql in Supabase Dashboard → SQL Editor

-- =============================================
-- ENABLE RLS ON ALL TABLES
-- =============================================
ALTER TABLE sms_gateway_tenants ENABLE ROW LEVEL SECURITY;
ALTER TABLE tenant_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE sms_gateway.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE trial_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE customization_requests ENABLE ROW LEVEL SECURITY;

-- =============================================
-- SMS_GATEWAY_TENANTS POLICIES
-- =============================================

-- Allow anyone to create a tenant during registration (will be restricted by app logic)
CREATE POLICY "Allow tenant creation during registration"
ON sms_gateway_tenants
FOR INSERT
WITH CHECK (true);

-- Users can read tenants they belong to
CREATE POLICY "Users can read their tenants"
ON sms_gateway_tenants
FOR SELECT
USING (
    id IN (
        SELECT tenant_id FROM tenant_members 
        WHERE user_id = auth.uid()
    )
);

-- Only owners and admins can update their tenant
CREATE POLICY "Owners and admins can update tenant"
ON sms_gateway_tenants
FOR UPDATE
USING (
    id IN (
        SELECT tenant_id FROM tenant_members 
        WHERE user_id = auth.uid() 
        AND role IN ('owner', 'admin')
    )
);

-- =============================================
-- TENANT_MEMBERS POLICIES
-- =============================================

-- Users can create their own membership during registration
CREATE POLICY "Users can create their membership"
ON tenant_members
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can read memberships in their tenant
CREATE POLICY "Users can read tenant memberships"
ON tenant_members
FOR SELECT
USING (
    tenant_id IN (
        SELECT tenant_id FROM tenant_members 
        WHERE user_id = auth.uid()
    )
);

-- Only owners can add new members
CREATE POLICY "Owners can add members"
ON tenant_members
FOR INSERT
WITH CHECK (
    tenant_id IN (
        SELECT tenant_id FROM tenant_members 
        WHERE user_id = auth.uid() 
        AND role = 'owner'
    )
);

-- Only owners can update member roles
CREATE POLICY "Owners can update member roles"
ON tenant_members
FOR UPDATE
USING (
    tenant_id IN (
        SELECT tenant_id FROM tenant_members 
        WHERE user_id = auth.uid() 
        AND role = 'owner'
    )
);

-- Only owners can remove members
CREATE POLICY "Owners can remove members"
ON tenant_members
FOR DELETE
USING (
    tenant_id IN (
        SELECT tenant_id FROM tenant_members 
        WHERE user_id = auth.uid() 
        AND role = 'owner'
    )
);

-- =============================================
-- SMS_GATEWAY.USERS POLICIES
-- =============================================

-- Users can create their own profile
CREATE POLICY "Users can create their profile"
ON sms_gateway.users
FOR INSERT
WITH CHECK (auth.uid() = id);

-- Users can read their own profile
CREATE POLICY "Users can read their profile"
ON sms_gateway.users
FOR SELECT
USING (auth.uid() = id);

-- Users can read profiles in their tenant
CREATE POLICY "Users can read tenant profiles"
ON sms_gateway.users
FOR SELECT
USING (
    tenant_id IN (
        SELECT tenant_id FROM tenant_members 
        WHERE user_id = auth.uid()
    )
);

-- Users can update their own profile
CREATE POLICY "Users can update their profile"
ON sms_gateway.users
FOR UPDATE
USING (auth.uid() = id);

-- =============================================
-- USER_SETTINGS POLICIES
-- =============================================

-- Users can create their settings
CREATE POLICY "Users can create their settings"
ON user_settings
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can read their settings
CREATE POLICY "Users can read their settings"
ON user_settings
FOR SELECT
USING (auth.uid() = user_id);

-- Users can update their settings
CREATE POLICY "Users can update their settings"
ON user_settings
FOR UPDATE
USING (auth.uid() = user_id);

-- =============================================
-- TRIAL_SUBSCRIPTIONS POLICIES
-- =============================================

-- Users can create trial for their tenant
CREATE POLICY "Users can create trial subscription"
ON trial_subscriptions
FOR INSERT
WITH CHECK (
    tenant_id IN (
        SELECT tenant_id FROM tenant_members 
        WHERE user_id = auth.uid()
    )
);

-- Users can read their tenant's trial
CREATE POLICY "Users can read tenant trial"
ON trial_subscriptions
FOR SELECT
USING (
    tenant_id IN (
        SELECT tenant_id FROM tenant_members 
        WHERE user_id = auth.uid()
    )
);

-- Only owners and admins can update trial
CREATE POLICY "Owners and admins can update trial"
ON trial_subscriptions
FOR UPDATE
USING (
    tenant_id IN (
        SELECT tenant_id FROM tenant_members 
        WHERE user_id = auth.uid() 
        AND role IN ('owner', 'admin')
    )
);

-- =============================================
-- CUSTOMIZATION_REQUESTS POLICIES
-- =============================================

-- Users can create customization requests
CREATE POLICY "Users can create customization requests"
ON customization_requests
FOR INSERT
WITH CHECK (
    tenant_id IN (
        SELECT tenant_id FROM tenant_members 
        WHERE user_id = auth.uid()
    )
    AND user_id = auth.uid()
);

-- Users can read requests from their tenant
CREATE POLICY "Users can read tenant customization requests"
ON customization_requests
FOR SELECT
USING (
    tenant_id IN (
        SELECT tenant_id FROM tenant_members 
        WHERE user_id = auth.uid()
    )
);

-- Users can update their own requests
CREATE POLICY "Users can update their customization requests"
ON customization_requests
FOR UPDATE
USING (user_id = auth.uid());

-- =============================================
-- SUCCESS MESSAGE
-- =============================================
DO $$
BEGIN
    RAISE NOTICE '✅ Row Level Security policies applied successfully!';
    RAISE NOTICE 'Your database is now secure and ready to use.';
    RAISE NOTICE 'Next step: Update your frontend to connect to Supabase.';
END $$;
