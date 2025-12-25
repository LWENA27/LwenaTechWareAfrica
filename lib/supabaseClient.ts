import { createClient } from '@supabase/supabase-js'

// Supabase configuration
// Get these from: Supabase Dashboard → Project Settings → API
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kzjgdeqfmxkmpmadtbpb.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseAnonKey) {
  console.warn('⚠️ NEXT_PUBLIC_SUPABASE_ANON_KEY is not set. Supabase features will not work.')
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Types for database tables
export type UserProfile = {
  id: string
  email: string
  name: string
  phone_number?: string
  role: string
  tenant_id: string
  created_at: string
  updated_at: string
}

export type Tenant = {
  id: string
  name: string
  slug: string
  status: string
  created_at: string
  updated_at: string
}

export type TenantMember = {
  id: string
  tenant_id: string
  user_id: string
  role: string
  created_at: string
}

export type UserSettings = {
  id: string
  user_id: string
  sms_channel: string
  theme: string
  language: string
  notifications_enabled: boolean
  created_at: string
  updated_at: string
}
