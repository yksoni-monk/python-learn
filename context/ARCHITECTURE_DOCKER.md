# Docker Architecture Overview

## 🏗️ What is Supabase?

**Supabase = PostgreSQL + Additional Services**

Supabase is not a separate database - it's a complete backend platform built on top of PostgreSQL. When you run Supabase, you get:

1. **PostgreSQL Database** - The actual database (what we call `supabase-db`)
2. **PostgREST** - Auto-generated REST API
3. **GoTrue** - Authentication service
4. **Storage** - File storage service
5. **Kong** - API Gateway
6. **Studio** - Database management UI

## 📊 Our Docker Services

### Core Services

```
supabase-db (PostgreSQL)
  ↓
  ├─→ supabase-rest (PostgREST) - REST API
  ├─→ supabase-auth (GoTrue) - Authentication
  ├─→ supabase-storage - File storage
  ├─→ supabase-meta - Database introspection
  └─→ supabase-kong (API Gateway) - Routes all requests
       ↓
       └─→ nextjs-app - Your Next.js application
```

### Service Breakdown

1. **`supabase-db`** 
   - **This IS PostgreSQL!** 
   - Port 54322 is exposed for direct database access (optional)
   - Contains all your data (profiles, progress, snippets, etc.)

2. **`supabase-kong`**
   - API Gateway on port 8000
   - Routes requests to appropriate services
   - Handles authentication

3. **`supabase-rest`**
   - Auto-generated REST API from your database schema
   - Your Next.js app uses this (via Kong on port 8000)

4. **`supabase-auth`**
   - Handles user authentication
   - Creates JWT tokens

5. **`supabase-studio`**
   - Web UI for managing your database
   - Accessible on port 3001

6. **`nextjs-app`**
   - Your Next.js application
   - Connects to Supabase via the API Gateway (port 8000)
   - Does NOT connect directly to PostgreSQL

## 🔌 Connection Flow

### How Your App Connects:

```
Next.js App
  ↓ (HTTP requests)
Supabase API Gateway (port 8000)
  ↓ (routes to)
PostgREST / Auth / Storage
  ↓ (SQL queries)
PostgreSQL Database (port 54322, internal)
```

### Direct Database Access (Optional):

```
External Tool (pgAdmin, DBeaver, psql)
  ↓ (PostgreSQL protocol)
PostgreSQL Database (port 54322)
```

## ❓ Do You Need Port 54322?

**No, you don't need it for the app to work!**

Port 54322 is exposed for:
- **Development/Debugging** - Connect with database tools
- **Backups** - Direct database dumps
- **Migrations** - Running SQL scripts directly
- **Troubleshooting** - Inspecting data directly

Your Next.js app connects through the Supabase API (port 8000), not directly to PostgreSQL.

## 🎯 Summary

- ✅ **One database** - `supabase-db` IS PostgreSQL
- ✅ **No separate PostgreSQL needed** - It's included in Supabase
- ✅ **Port 54322 is optional** - Only for direct database access
- ✅ **App uses port 8000** - Through Supabase's API Gateway

## 🔒 Security Note

In production, you might want to:
- Remove port 54322 exposure (only expose internally)
- Use Supabase's API exclusively
- Rely on Row Level Security (RLS) policies

For development, having port 54322 exposed is convenient for debugging.

