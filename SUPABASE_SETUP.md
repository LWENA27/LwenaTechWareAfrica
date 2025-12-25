# Supabase Configuration

## Environment Variables

Create a `.env.local` file in the root of your project:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://kzjgdeqfmxkmpmadtbpb.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

# Optional: Service role key (server-side only - keep secret!)
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## Get Your Keys

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to **Project Settings** → **API**
4. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY` (optional, server-side only)

## Installation

Install the Supabase JavaScript client:

```bash
npm install @supabase/supabase-js
```

## Usage

The Supabase client is configured in `lib/supabaseClient.ts` and can be imported anywhere:

```typescript
import { supabase } from '@/lib/supabaseClient'

// Example: Sign up a user
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'secure-password'
})
```

## Database Setup

Run the SQL scripts in `database/` to create the required tables:

1. `schema.sql` - Create tables
2. `rls-policies.sql` - Set up Row Level Security
3. `seed.sql` - (Optional) Add sample data

## Security Notes

⚠️ **NEVER commit `.env.local` to version control!**

Add to `.gitignore`:
```
.env.local
.env*.local
```
