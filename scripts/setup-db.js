#!/usr/bin/env node

/**
 * Script to set up database schema in Supabase Cloud
 * 
 * Usage:
 *   SUPABASE_DB_PASSWORD=your-password node scripts/setup-db.js
 * 
 * Or set SUPABASE_DB_PASSWORD in .env.local
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Read .env.local manually
function loadEnv() {
  const envPath = path.join(__dirname, '../.env.local');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    content.split('\n').forEach(line => {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim().replace(/^["']|["']$/g, '');
        process.env[key] = value;
      }
    });
  }
}

loadEnv();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const DB_PASSWORD = process.env.SUPABASE_DB_PASSWORD;

if (!SUPABASE_URL) {
  console.error('❌ NEXT_PUBLIC_SUPABASE_URL not found in .env.local');
  process.exit(1);
}

if (!DB_PASSWORD) {
  console.error('❌ SUPABASE_DB_PASSWORD not found in environment');
  console.error('\nPlease set it in .env.local:');
  console.error('  SUPABASE_DB_PASSWORD=your-database-password');
  console.error('\nOr run: SUPABASE_DB_PASSWORD=your-password node scripts/setup-db.js');
  console.error('\nYou can find your database password in:');
  console.error('  Supabase Dashboard > Project Settings > Database > Database password');
  process.exit(1);
}

// Extract project ref from URL
const projectRef = SUPABASE_URL.match(/https:\/\/([^.]+)\.supabase\.co/)?.[1];
if (!projectRef) {
  console.error('❌ Could not extract project reference from SUPABASE_URL');
  process.exit(1);
}

const schemaFile = path.join(__dirname, '../supabase/schema.sql');
if (!fs.existsSync(schemaFile)) {
  console.error(`❌ Schema file not found: ${schemaFile}`);
  process.exit(1);
}

// Try connection pooler first (port 6543), fallback to direct (port 5432)
const poolerConnection = `postgresql://postgres.${projectRef}:${encodeURIComponent(DB_PASSWORD)}@aws-0-us-east-1.pooler.supabase.com:6543/postgres`;
const directConnection = `postgresql://postgres:${encodeURIComponent(DB_PASSWORD)}@db.${projectRef}.supabase.co:5432/postgres`;

console.log('🚀 Setting up database schema...');
console.log(`📁 Project: ${projectRef}`);
console.log('');

try {
  // Read schema file
  const schema = fs.readFileSync(schemaFile, 'utf8');
  
  // Write schema to temp file for psql
  const tempFile = path.join(__dirname, '../.schema-temp.sql');
  fs.writeFileSync(tempFile, schema);
  
  console.log('📝 Executing schema...');
  
  // Try pooler connection first
  let command = `psql "${poolerConnection}" -f "${tempFile}"`;
  let success = false;
  
  try {
    execSync(command, { 
      stdio: 'inherit',
      env: { ...process.env, PGPASSWORD: DB_PASSWORD }
    });
    success = true;
  } catch (poolerError) {
    console.log('⚠️  Pooler connection failed, trying direct connection...');
    command = `psql "${directConnection}" -f "${tempFile}"`;
    execSync(command, { 
      stdio: 'inherit',
      env: { ...process.env, PGPASSWORD: DB_PASSWORD }
    });
    success = true;
  }
  
  // Clean up temp file
  if (fs.existsSync(tempFile)) {
    fs.unlinkSync(tempFile);
  }
  
  console.log('');
  console.log('✅ Database schema created successfully!');
  console.log('');
  console.log('You can now:');
  console.log('  - Sign in with Google');
  console.log('  - Save progress');
  console.log('  - View achievements');
  
} catch (error) {
  console.error('');
  console.error('❌ Error setting up database schema:');
  console.error(error.message);
  console.error('');
  console.error('Troubleshooting:');
  console.error('  1. Verify your database password is correct');
  console.error('  2. Check that psql is installed: which psql');
  console.error('  3. Try running the SQL manually in Supabase SQL Editor');
  process.exit(1);
}

