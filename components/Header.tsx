'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import type { User as SupabaseUser } from '@supabase/supabase-js';

interface HeaderProps {
  user: SupabaseUser | null;
}

/**
 * Header component for the application
 * Displays the main title and user info
 */
export function Header({ user: initialUser }: HeaderProps) {
  const router = useRouter();
  const supabase = createClient();
  const [user, setUser] = useState<SupabaseUser | null>(initialUser);

  useEffect(() => {
    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    // Also check current user on mount
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push('/auth');
    router.refresh();
  };

  const handleSignIn = () => {
    router.push('/auth');
  };

  // Get user display name
  const getUserDisplayName = () => {
    if (!user) return null;
    return (
      user.user_metadata?.full_name ||
      user.user_metadata?.name ||
      user.email?.split('@')[0] ||
      'User'
    );
  };

  // Get user avatar
  const getUserAvatar = () => {
    if (!user) return null;
    return user.user_metadata?.avatar_url || user.user_metadata?.picture;
  };

  return (
    <div className="bg-white shadow-md p-4 border-b-4 border-purple-400 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-purple-600">
        🐍 Learn Python for Kids
      </h1>
      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-3">
            {getUserAvatar() && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={getUserAvatar()!}
                alt={getUserDisplayName() || 'User'}
                className="w-8 h-8 rounded-full"
              />
            )}
            <div className="flex flex-col">
              <span className="text-sm font-medium text-purple-600">
                {getUserDisplayName()}
              </span>
              {user.email && (
                <span className="text-xs text-gray-500">{user.email}</span>
              )}
            </div>
            <button
              onClick={handleSignOut}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={handleSignIn}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}

