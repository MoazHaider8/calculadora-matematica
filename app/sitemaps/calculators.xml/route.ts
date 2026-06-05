import { NextResponse } from 'next/server';
import { calculatorPages, buildUrlset } from '@/lib/sitemap-urls';

export const dynamic = 'force-static';

export function GET() {
  return new NextResponse(buildUrlset(calculatorPages), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
