import { NextResponse } from 'next/server';
import { staticPages, buildUrlset } from '@/lib/sitemap-urls';

export const dynamic = 'force-static';

export function GET() {
  return new NextResponse(buildUrlset(staticPages), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
