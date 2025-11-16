import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

/**
 * GET /api/progress - Get user's progress for all lessons
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
    .from('user_progress')
    .select('*')
    .eq('user_id', user.id)
    .order('lesson_id');

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ progress: data });
}

/**
 * POST /api/progress - Update or create user progress for a lesson
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
  const { lesson_id, completed, code_snippet, attempts, best_score } = body;

  if (!lesson_id) {
    return NextResponse.json({ error: 'lesson_id is required' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('user_progress')
    .upsert({
      user_id: user.id,
      lesson_id,
      completed: completed ?? false,
      completed_at: completed ? new Date().toISOString() : null,
      code_snippet: code_snippet || null,
      attempts: attempts || 0,
      best_score: best_score || null,
      updated_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ progress: data });
}

