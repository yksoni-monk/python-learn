# 🚀 How to Run the Application

## Option 1: Docker (Recommended - Easiest)

This runs everything (Next.js + Supabase) in Docker containers.

### Quick Start

```bash
# 1. Set up environment file
cp .env.docker.example .env.docker

# 2. Run the setup script (starts everything)
./scripts/setup-docker.sh
```

That's it! The app will be available at:
- **App**: http://localhost:3000
- **Supabase Studio**: http://localhost:3001

### Manual Docker Commands

If you prefer to run commands manually:

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Development Mode (with hot reload)

```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

---

## Option 2: Hybrid (Next.js Local + Docker Supabase)

If you want to run Next.js locally (for faster development) but still use Docker for Supabase:

**Note**: `npm run dev` does NOT start Docker. You need to start Supabase separately.

### Step 1: Start Supabase Only

```bash
# Start only Supabase services (not Next.js)
docker-compose up -d supabase-db supabase-kong supabase-auth supabase-rest supabase-studio
```

### Step 2: Set Up Environment

Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=http://localhost:8000
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0
```

### Step 3: Install Dependencies & Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The app will be at http://localhost:3000

---

## Option 3: Fully Local (No Docker at All)

If you have your own Supabase instance (cloud or local) and want to run Next.js locally:

**Note**: `npm run dev` only runs Next.js. You need Supabase running separately (cloud or local).

### Step 1: Set Up Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings → API
3. Run `supabase/schema.sql` in the SQL Editor

### Step 2: Set Up Environment

Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### Step 3: Install & Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

---

## Troubleshooting

### Port Already in Use

If you get "port already in use" errors:

```bash
# Check what's using the port
lsof -i :3000
lsof -i :8000

# Kill the process or change ports in docker-compose.yml
```

### Docker Not Running

```bash
# Check Docker status
docker info

# Start Docker Desktop if needed
```

### Database Not Ready

```bash
# Check database logs
docker-compose logs supabase-db

# Wait a bit and try again (database takes ~10 seconds to start)
```

### Services Not Starting

```bash
# View all logs
docker-compose logs

# Restart everything
docker-compose down
docker-compose up -d
```

---

## Common Commands

### Docker

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f nextjs-app
docker-compose logs -f supabase-db

# Restart a service
docker-compose restart nextjs-app

# Rebuild containers
docker-compose build --no-cache
docker-compose up -d
```

### Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Type check
npm run type-check

# Lint
npm run lint
```

---

## What to Expect

Once running, you should see:

1. **Terminal output** showing services starting
2. **App running** at http://localhost:3000
3. **Supabase Studio** at http://localhost:3001 (if using Docker)

The app will load with:
- Lesson viewer on the left
- Code editor on the right
- Navigation at the bottom

Try running some Python code to test Pyodide!

