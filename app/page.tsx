import { createClient } from '@/lib/supabase/server';
import LearningApp from '@/components/LearningApp';

export default async function HomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // For now, allow unauthenticated access
  // Later you can add: if (!user) redirect('/auth/login');

  return <LearningApp user={user} />;
}

