import { NextResponse } from 'next/server';
import { blogPages, buildUrlset } from '@/lib/sitemap-urls';

export const dynamic = 'force-static';

export function GET() {
  return new NextResponse(buildUrlset(blogPages), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
