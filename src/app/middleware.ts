import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const authToken = req.cookies.get('auth-token')

  // Allow access to login, forgot-password, otp pages
  if (pathname.startsWith('/login') || pathname.startsWith('/forgot-password') || pathname.startsWith('/otp')) {
    return NextResponse.next()
  }

  // Protect all other routes
  if (!authToken) {
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

// Apply middleware to all routes
export const config = {
  matcher: ['/dashboard', '/any-protected-route'],
}
