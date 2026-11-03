import { NextResponse } from 'next/server'
import { createServerClient, type CookieOptions } from '@supabase/ssr'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // Default to dashboard. The dashboard router will check if they need profile setup.
  const next = searchParams.get('next') ?? '/dashboard'

  if (code) {
    // 1. Create the redirect response FIRST
    const response = NextResponse.redirect(`${origin}${next}`)

    // 2. Create the Supabase client
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.headers.get('cookie')?.split('; ').map(c => {
              const [name, ...rest] = c.split('=')
              return { name, value: rest.join('=') }
            }) || []
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              // Set the cookie on the response
              response.cookies.set(name, value, options)
            })
          },
        },
      }
    )

    // 3. Exchange the code for a session
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      return response // Return the response with the session cookies
    }
  }

  // Return to login page on error
  return NextResponse.redirect(`${origin}/login?error=Could not authenticate`)
}