import { NextResponse } from 'next/server';
import { categoryPages, buildUrlset } from '@/lib/sitemap-urls';

export const dynamic = 'force-static';

export function GET() {
  return new NextResponse(buildUrlset(categoryPages), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
