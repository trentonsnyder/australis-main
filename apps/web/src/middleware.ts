import type { NextRequest } from 'next/server';
import { funfunction } from 'ui';
 
export function middleware(request: NextRequest) {
  // Check logged environment variables
  funfunction('middleware')
}
 
export const config = {
  matcher: [
    '/',
  ],
};