import { NextRequest, NextResponse } from 'next/server';

const UMAMI_URL = 'https://umami-git-main-erics-projects-cc3a2b1c.vercel.app';

export async function POST(request: NextRequest) {
    try {
        const body = await request.text();

        const response = await fetch(`${UMAMI_URL}/api/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': request.headers.get('user-agent') || 'medev.ai-proxy',
            },
            body,
        });

        const data = await response.text();

        return new NextResponse(data, {
            status: response.status,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Failed to send analytics:', error);
        return new NextResponse('{}', {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
