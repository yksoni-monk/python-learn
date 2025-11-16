import { createBrowserClient, type CookieOptions } from '@supabase/ssr';

/**
 * Creates a Supabase client for use in client components
 * This should only be used in client-side code (use 'use client' directive)
 */
export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  
  // Only create client in browser environment
  if (typeof window === 'undefined') {
    throw new Error('createClient() should only be called in browser environment');
  }
  
  return createBrowserClient(
    supabaseUrl,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
            const [key, ...valueParts] = cookie.split('=');
            acc[key] = decodeURIComponent(valueParts.join('='));
            return acc;
          }, {} as Record<string, string>);
          return cookies[name];
        },
        set(name: string, value: string, options?: CookieOptions) {
          let cookieString = `${name}=${encodeURIComponent(value)}`;
          if (options?.path) cookieString += `; path=${options.path}`;
          else cookieString += '; path=/';
          if (options?.maxAge) cookieString += `; max-age=${options.maxAge}`;
          if (options?.domain) cookieString += `; domain=${options.domain}`;
          if (options?.sameSite) cookieString += `; samesite=${options.sameSite}`;
          if (options?.secure) cookieString += '; secure';
          document.cookie = cookieString;
        },
        remove(name: string, options?: CookieOptions) {
          let cookieString = `${name}=; max-age=0`;
          if (options?.path) cookieString += `; path=${options.path}`;
          else cookieString += '; path=/';
          if (options?.domain) cookieString += `; domain=${options.domain}`;
          if (options?.sameSite) cookieString += `; samesite=${options.sameSite}`;
          if (options?.secure) cookieString += '; secure';
          document.cookie = cookieString;
        },
      },
    }
  );
}

