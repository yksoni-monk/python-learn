import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

/**
 * GET /api/snippets - Get user's saved code snippets
 */
export async function GET(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const lesson_id = searchParams.get('lesson_id');

  let query = supabase
    .from('code_snippets')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (lesson_id) {
    query = query.eq('lesson_id', lesson_id);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ snippets: data });
}

/**
 * POST /api/snippets - Save a new code snippet
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
  const { title, code, lesson_id } = body;

  if (!title || !code) {
    return NextResponse.json(
      { error: 'title and code are required' },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from('code_snippets')
    .insert({
      user_id: user.id,
      title,
      code,
      lesson_id: lesson_id || null,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ snippet: data });
}

