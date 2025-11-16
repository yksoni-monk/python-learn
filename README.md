# 🐍 Learn Python for Kids

A fun, interactive web application designed to teach Python programming to kids through hands-on lessons and code execution. Built with Next.js and Supabase.

## ✨ Features

- 🎓 **Interactive Lessons** - Step-by-step Python tutorials designed for kids
- 💻 **Live Code Execution** - Run Python code directly in the browser using Pyodide
- 📊 **Progress Tracking** - Save your progress and track completion
- 💾 **Code Snippets** - Save and load your favorite code examples
- 🏆 **Achievements** - Earn badges as you learn
- 🔍 **Search & Filter** - Find lessons by difficulty or topic
- 🎨 **Beautiful UI** - Kid-friendly design with colorful, engaging interface

## 🏗️ Architecture

This project uses:
- **Next.js 14** - React framework with App Router
- **Supabase** - Self-hosted PostgreSQL database, authentication, real-time
- **Pyodide** - Python interpreter running in the browser
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Styling

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Self-hosted Supabase running (see setup below)
- Port 3000 available

### Setup

1. **Set up Supabase (one-time setup):**

Follow the [official Supabase self-hosting guide](https://supabase.com/docs/guides/self-hosting/docker):

```bash
# Clone Supabase repo
cd ~/code/misc
git clone --depth 1 https://github.com/supabase/supabase
mkdir supabase-project
cp -rf supabase/docker/* supabase-project/
cp supabase/docker/.env.example supabase-project/.env
cd supabase-project
docker compose pull
docker compose up -d
```

2. **Set up database schema:**

Run the database schema in Supabase Studio:
- Open http://localhost:8000/project/default
- Login with credentials (check `~/code/misc/supabase-project/.env` for `DASHBOARD_USERNAME` and `DASHBOARD_PASSWORD`)
- Go to **SQL Editor**
- Copy and paste the contents of `supabase/schema.sql` from this project
- Click **Run** to create all tables

3. **Configure Next.js app:**

Copy the example environment file and update with your Supabase keys:
```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your Supabase keys. You can find them in `~/code/misc/supabase-project/.env`:
- Copy `ANON_KEY` value → set as `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Copy `SERVICE_ROLE_KEY` value → set as `SUPABASE_SERVICE_ROLE_KEY`

4. **Install dependencies and run:**
```bash
npm install
npm run dev
```

5. **Access the application:**
   - **App**: http://localhost:3000
   - **Supabase Studio**: http://localhost:8000/project/default (Database management UI)
     - Credentials are in `~/code/misc/supabase-project/.env` (look for `DASHBOARD_USERNAME` and `DASHBOARD_PASSWORD`)
   - **Supabase API**: http://localhost:8000/rest/v1/

### Running Supabase

To start/stop Supabase:
```bash
cd ~/code/misc/supabase-project
docker compose up -d    # Start
docker compose down     # Stop
docker compose logs -f  # View logs
```

### Setting Up Google OAuth

**Note:** Self-hosted Supabase doesn't have a UI for configuring OAuth providers. You must configure them via environment variables.

1. **Get Google OAuth Credentials:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable Google+ API
   - Create OAuth 2.0 credentials (Web application)
   - **Important:** Add authorized redirect URI: `http://localhost:8000/auth/v1/callback` (this is Supabase's auth endpoint, not your Next.js app)
   - Copy Client ID and Client Secret

2. **Add Google OAuth variables to `.env` file:**
   
   Edit `~/code/misc/supabase-project/.env` and add:
   ```env
   GOTRUE_EXTERNAL_GOOGLE_ENABLED=true
   GOTRUE_EXTERNAL_GOOGLE_CLIENT_ID=your-google-client-id
   GOTRUE_EXTERNAL_GOOGLE_SECRET=your-google-client-secret
   ```

3. **Add Google OAuth to `docker-compose.yml`:**
   
   Edit `~/code/misc/supabase-project/docker-compose.yml` and find the `auth:` service section. Under `environment:`, add these lines after the other `GOTRUE_EXTERNAL_*` variables:
   ```yaml
   GOTRUE_EXTERNAL_GOOGLE_ENABLED: ${GOTRUE_EXTERNAL_GOOGLE_ENABLED}
   GOTRUE_EXTERNAL_GOOGLE_CLIENT_ID: ${GOTRUE_EXTERNAL_GOOGLE_CLIENT_ID}
   GOTRUE_EXTERNAL_GOOGLE_SECRET: ${GOTRUE_EXTERNAL_GOOGLE_SECRET}
   ```

4. **Update Site URL and Redirect URLs:**
   
   In the `.env` file, ensure these are set:
   ```env
   SITE_URL=http://localhost:3000
   ADDITIONAL_REDIRECT_URLS=http://localhost:3000,http://localhost:3000/auth/callback
   ```

5. **Restart Supabase services:**
   ```bash
   cd ~/code/misc/supabase-project
   docker compose restart auth
   ```

6. **Test:**
   - Go to http://localhost:3000/auth
   - Click "Sign in with Google"
   - Complete OAuth flow
   - You should be redirected back and signed in

### Verifying Connection

**Check if app is connected to Supabase:**
- Database tables should exist: `profiles`, `user_progress`, `code_snippets`, `achievements`, `challenges`, `challenge_submissions`
- REST API should respond: `curl http://localhost:8000/rest/v1/ -H "apikey: $(grep ANON_KEY ~/code/misc/supabase-project/.env | cut -d= -f2)"`
- Auth API should respond: `curl http://localhost:8000/auth/v1/health`

**Progress Tracking:**
- The `user_progress` table stores user progress (requires authentication)
- Users must sign in to save/view their progress
- Progress is automatically saved when users complete lessons

## 📚 Project Structure

```
python-learn/
├── app/                    # Next.js App Router
│   ├── api/               # API routes (progress, snippets, achievements)
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── LearningApp.tsx    # Main app component
│   ├── Header.tsx
│   ├── CodeEditor.tsx
│   └── ...
├── context/               # Documentation
│   ├── DOCKER_SETUP.md
│   ├── ARCHITECTURE.md
│   └── ...
├── lib/
│   ├── supabase/          # Supabase client utilities
│   ├── hooks/             # Custom React hooks
│   ├── services/          # Business logic (code execution)
│   ├── types/             # TypeScript types
│   └── data/              # Static data (lessons)
├── supabase/
│   └── schema.sql         # Database schema (run in Supabase Studio)
├── scripts/               # Setup and utility scripts
```

## 🎯 Key Features

### Progress Tracking
- Automatically saves your progress as you complete lessons
- Track which lessons you've finished
- See your completion percentage

### Code Snippets
- Save your code for later
- Organize snippets by lesson
- Load saved code with one click

### Achievements
- Earn badges for milestones
- Track your learning journey
- Celebrate your progress!

## 🔧 Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking


## 📖 Adding New Lessons

Edit `lib/data/lessons.ts` and add a new lesson object:

```typescript
{
  id: '14',
  title: '14. Your Lesson Title',
  theory: `Your theory content...`,
  code: `print("Your code example")`,
  explanation: 'Your explanation',
  difficulty: 'beginner',
  tags: ['tag1', 'tag2'],
}
```

## 🎨 Customization

### Styling
- Global styles: `app/globals.css`
- Component styles: Tailwind classes in component files
- Theme: `tailwind.config.js`

### Code Execution
- Currently uses Pyodide (browser-based)
- Can be swapped in `lib/services/codeExecutor.ts`

## 📚 Documentation

All documentation is in the `context/` folder:
- [ARCHITECTURE.md](./context/ARCHITECTURE.md) - Architecture overview

## 🚧 Roadmap

- [x] User authentication UI (Google OAuth ready)
- [ ] Progress dashboard
- [ ] Code challenges with test cases
- [ ] Lesson search and filtering
- [ ] Syntax highlighting in code editor
- [ ] Leaderboard
- [ ] Social features (share code, collaborate)

## 📝 License

MIT

## 🙏 Acknowledgments

- [Pyodide](https://pyodide.org/) for bringing Python to the browser
- [Next.js](https://nextjs.org/) for the amazing framework
- [Supabase](https://supabase.com/) for the backend infrastructure
