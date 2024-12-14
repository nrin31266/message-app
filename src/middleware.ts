
import { NextRequest, NextResponse } from 'next/server';

const publicPaths = ['/auth/login', '/auth/register',];

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const token = req.cookies.get('token');  

  
  if (!token && !publicPaths.includes(path)) {
    return NextResponse.redirect(new URL('/auth/login', req.url));  
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: ['/', '/about'],  
};
