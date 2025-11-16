# Migration Plan: Vite React → Next.js + Supabase

## Overview
Migrating from a Vite React app to Next.js with Supabase backend to support:
- User authentication
- Progress tracking
- Code snippet saving
- Gamification
- And more...

## Architecture Changes

### Current (Vite React)
```
Frontend only
├── React components
├── Pyodide (browser Python)
└── Static lesson data
```

### New (Next.js + Supabase)
```
Next.js App Router
├── Frontend (React Server/Client Components)
├── API Routes (Next.js backend)
├── Supabase
│   ├── Authentication
│   ├── Database (PostgreSQL)
│   └── Real-time subscriptions
└── Pyodide (still browser-based)
```

## Database Schema

### Tables to Create in Supabase:

1. **profiles** (extends auth.users)
   - user_id (uuid, FK to auth.users)
   - username
   - avatar_url
   - created_at
   - updated_at

2. **user_progress**
   - id (uuid, PK)
   - user_id (uuid, FK)
   - lesson_id (string)
   - completed (boolean)
   - completed_at (timestamp)
   - code_snippet (text)
   - attempts (integer)
   - best_score (integer)

3. **code_snippets**
   - id (uuid, PK)
   - user_id (uuid, FK)
   - lesson_id (string)
   - title (string)
   - code (text)
   - created_at (timestamp)
   - updated_at (timestamp)

4. **achievements**
   - id (uuid, PK)
   - user_id (uuid, FK)
   - achievement_type (string)
   - earned_at (timestamp)
   - metadata (jsonb)

5. **challenges** (future)
   - id (uuid, PK)
   - lesson_id (string)
   - title (string)
   - description (text)
   - test_cases (jsonb)
   - difficulty (string)

## Migration Steps

1. ✅ Set up Next.js project structure
2. ✅ Install Supabase dependencies
3. ✅ Create database schema
4. ✅ Migrate components to Next.js
5. ✅ Set up authentication
6. ✅ Create API routes
7. ✅ Add progress tracking
8. ✅ Add code snippet saving
9. ✅ Add gamification
10. ✅ Add syntax highlighting

