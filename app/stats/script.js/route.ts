import { NextRequest, NextResponse } from 'next/server';

// Self-hosted Umami on Vercel - production domain
const UMAMI_URL = 'https://umami-ten-ruby.vercel.app';

export async function GET() {
    try {
        const response = await fetch(`${UMAMI_URL}/script.js`, {
            headers: {
                'User-Agent': 'medev.ai-proxy',
            },
        });

        if (!response.ok) {
            return new NextResponse('Script not available', { status: response.status });
        }

        const script = await response.text();

        return new NextResponse(script, {
            status: 200,
            headers: {
                'Content-Type': 'application/javascript',
                'Cache-Control': 'public, max-age=86400', // Cache for 1 day
            },
        });
    } catch (error) {
        console.error('Failed to fetch Umami script:', error);
        return new NextResponse('// Analytics unavailable', {
            status: 200,
            headers: { 'Content-Type': 'application/javascript' },
        });
    }
}
