import { NextResponse } from 'next/server';
import { buildSitemapIndex } from '@/lib/sitemap-urls';

export const dynamic = 'force-static';

export function GET() {
  return new NextResponse(buildSitemapIndex(), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
