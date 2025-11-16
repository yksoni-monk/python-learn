# Next.js + Supabase Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to Project Settings → API
4. Copy your:
   - Project URL
   - `anon` public key

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### 4. Set Up Database

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `supabase/schema.sql`
4. Run the SQL script

This will create:
- `profiles` table
- `user_progress` table
- `code_snippets` table
- `achievements` table
- `challenges` table (for future use)
- Row Level Security (RLS) policies
- Triggers for automatic profile creation

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
python-learn/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── progress/      # Progress tracking endpoints
│   │   ├── snippets/      # Code snippet endpoints
│   │   └── achievements/  # Achievement endpoints
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── LearningApp.tsx    # Main app component
│   ├── Header.tsx
│   ├── CodeEditor.tsx     # With syntax highlighting
│   └── ...
├── lib/
│   ├── supabase/          # Supabase client utilities
│   ├── hooks/             # Custom React hooks
│   ├── services/          # Business logic (code execution)
│   ├── types/             # TypeScript types
│   └── data/              # Static data (lessons)
├── supabase/
│   └── schema.sql         # Database schema
└── middleware.ts          # Next.js middleware for auth
```

## 🔐 Authentication

Currently, the app allows unauthenticated access. To enable authentication:

1. Update `app/page.tsx` to redirect unauthenticated users
2. Create login/signup pages in `app/auth/`
3. Use Supabase Auth helpers in components

## 🎯 Features Implemented

- ✅ Next.js App Router
- ✅ Supabase integration
- ✅ Database schema with RLS
- ✅ Progress tracking API
- ✅ Code snippet saving API
- ✅ Achievements API
- ✅ Syntax highlighting
- ✅ User authentication ready

## 🚧 Next Steps

1. **Add Authentication UI**
   - Login page
   - Signup page
   - Profile page

2. **Implement Progress Tracking**
   - Auto-save progress when completing lessons
   - Show progress indicators
   - Progress dashboard

3. **Code Snippet Management**
   - Save button in code editor
   - Load saved snippets
   - Snippet library view

4. **Gamification**
   - Award achievements on milestones
   - Badge display
   - Leaderboard (optional)

5. **Search & Filter**
   - Search lessons by title/tags
   - Filter by difficulty
   - Lesson categories

6. **Challenges**
   - Create coding challenges
   - Test case validation
   - Challenge submissions

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Helpers](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)

