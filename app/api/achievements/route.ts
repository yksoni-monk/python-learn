import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

/**
 * GET /api/achievements - Get user's achievements
 */
export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await supabase
    .from('achievements')
    .select('*')
    .eq('user_id', user.id)
    .order('earned_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ achievements: data });
}

/**
 * POST /api/achievements - Award an achievement to the user
 */
export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { achievement_type, metadata } = body;

  if (!achievement_type) {
    return NextResponse.json(
      { error: 'achievement_type is required' },
      { status: 400 }
    );
  }

  // Check if achievement already exists
  const { data: existing } = await supabase
    .from('achievements')
    .select('id')
    .eq('user_id', user.id)
    .eq('achievement_type', achievement_type)
    .single();

  if (existing) {
    return NextResponse.json(
      { error: 'Achievement already earned' },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from('achievements')
    .insert({
      user_id: user.id,
      achievement_type,
      metadata: metadata || null,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ achievement: data });
}

