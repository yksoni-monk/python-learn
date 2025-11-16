# 🐳 Docker Setup Guide

This guide explains how to run the entire application (Next.js + Supabase) using Docker Compose.

## 📋 Prerequisites

- Docker Desktop (or Docker Engine + Docker Compose)
- At least 4GB of available RAM
- Ports 3000, 3001, 54322, and 8000 available

## 🚀 Quick Start

### 1. Set Up Environment Variables

```bash
cp .env.docker.example .env.docker
```

Edit `.env.docker` and update the values if needed (defaults work for development).

### 2. Run Setup Script

```bash
./scripts/setup-docker.sh
```

Or manually:

```bash
# Start all services
docker-compose up -d

# Wait for services to be ready
docker-compose ps

# Run database migrations
docker-compose exec supabase-db psql -U postgres -d postgres -f /docker-entrypoint-initdb.d/init.sql
docker-compose exec -T supabase-db psql -U postgres -d postgres < supabase/schema.sql
```

### 3. Access the Application

- **Next.js App**: http://localhost:3000
- **Supabase Studio**: http://localhost:3001 (Database management UI)
- **Supabase API**: http://localhost:8000 (API Gateway - your app connects here)
- **PostgreSQL**: localhost:54322 (Direct database access - optional, for debugging)

## 🛠️ Development Mode

For development with hot reload:

```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

This mounts your source code and enables hot reload.

## 📊 Services

The docker-compose setup includes:

1. **supabase-db** - PostgreSQL database (this IS the database - no separate PostgreSQL needed!)
2. **supabase-studio** - Database management UI
3. **supabase-kong** - API gateway (routes all API requests)
4. **supabase-auth** - Authentication service (GoTrue)
5. **supabase-rest** - PostgREST API (auto-generated REST API from your database)
6. **supabase-storage** - File storage service
7. **supabase-imgproxy** - Image processing
8. **supabase-meta** - Database introspection
9. **nextjs-app** - Next.js application (connects via Supabase API, not directly to PostgreSQL)

**Note**: Supabase includes PostgreSQL - the `supabase-db` service IS your PostgreSQL database. Port 54322 is exposed for optional direct database access (debugging, backups, etc.), but your app connects through the Supabase API on port 8000.

## 🔧 Common Commands

### Start services
```bash
docker-compose up -d
```

### Stop services
```bash
docker-compose down
```

### View logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f nextjs-app
docker-compose logs -f supabase-db
```

### Restart a service
```bash
docker-compose restart nextjs-app
```

### Access database
```bash
docker-compose exec supabase-db psql -U postgres -d postgres
```

### Run database migrations
```bash
docker-compose exec -T supabase-db psql -U postgres -d postgres < supabase/schema.sql
```

### Rebuild containers
```bash
docker-compose build --no-cache
docker-compose up -d
```

## 🗄️ Database Management

### Access Supabase Studio

1. Go to http://localhost:3001
2. Use the default credentials (or check your `.env.docker`)
3. You can manage tables, run SQL, and view data

### Run SQL Scripts

```bash
# From a file
docker-compose exec -T supabase-db psql -U postgres -d postgres < your-script.sql

# Interactive
docker-compose exec supabase-db psql -U postgres -d postgres
```

### Backup Database

```bash
docker-compose exec supabase-db pg_dump -U postgres postgres > backup.sql
```

### Restore Database

```bash
docker-compose exec -T supabase-db psql -U postgres -d postgres < backup.sql
```

## 🔐 Environment Variables

Key environment variables in `.env.docker`:

- `POSTGRES_PASSWORD` - Database password
- `JWT_SECRET` - JWT signing secret
- `ANON_KEY` - Public API key (for client-side)
- `SERVICE_ROLE_KEY` - Service role key (for server-side)

## 📦 Volumes

Data is persisted in Docker volumes:

- `supabase-db-data` - PostgreSQL data
- `supabase-storage-data` - File storage

To remove all data:

```bash
docker-compose down -v
```

⚠️ **Warning**: This will delete all your data!

## 🐛 Troubleshooting

### Port already in use

If a port is already in use, either:
1. Stop the conflicting service
2. Change the port in `docker-compose.yml`

### Database connection errors

```bash
# Check if database is running
docker-compose ps supabase-db

# Check database logs
docker-compose logs supabase-db

# Restart database
docker-compose restart supabase-db
```

### Next.js app not connecting to Supabase

1. Check that `NEXT_PUBLIC_SUPABASE_URL` in the container matches the Kong gateway URL
2. Verify Supabase services are running: `docker-compose ps`
3. Check Next.js logs: `docker-compose logs nextjs-app`

### Reset everything

```bash
# Stop and remove all containers and volumes
docker-compose down -v

# Remove images (optional)
docker-compose rm -f

# Start fresh
docker-compose up -d
```

## 🔄 Updating

### Update application code

```bash
# Rebuild and restart
docker-compose build nextjs-app
docker-compose up -d nextjs-app
```

### Update Supabase services

Edit the image versions in `docker-compose.yml` and restart:

```bash
docker-compose pull
docker-compose up -d
```

## 📚 Additional Resources

- [Supabase Docker Documentation](https://supabase.com/docs/guides/self-hosting/docker)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Next.js Docker Documentation](https://nextjs.org/docs/deployment#docker-image)

