
import { NextRequest, NextResponse } from 'next/server';

// Cấu hình danh sách các trang công khai không cần xác thực
const publicPaths = ['/auth/login', '/auth/register', '/about'];

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const authData = req.cookies.get('token');  

  
  if (!authData && !publicPaths.includes(path)) {
    return NextResponse.redirect(new URL('/auth/login', req.url));  
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: ['/'],  
};
