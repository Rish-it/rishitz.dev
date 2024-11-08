/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = (req: NextRequest) => {
  const isFunPath = !!req.nextUrl.href.includes('why-i');

  // Remove the redirect for 'why-i' path
  if (isFunPath) {
    return NextResponse.next();
  }

  if (!req.nextUrl.pathname.startsWith('/s/')) {
    return NextResponse.next();
  }

  const slug = req.nextUrl.pathname.split('/')[2];

  if (!slug) {
    return NextResponse.rewrite(`${req.nextUrl.origin}/404`);
  }

  return NextResponse.redirect(`${req.nextUrl.origin}/s/${slug}`);
};

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|manifest.json|robots.txt).*)',
    '/why-i:path*',  // Path for 'why-i' removed from redirect
    '/s/:path*',
  ],
};
