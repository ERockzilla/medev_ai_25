import { NextRequest, NextResponse } from 'next/server';
import { applyRateLimit, rateLimitHeaders, RATE_LIMITS } from '@/lib/rateLimit';

// Self-hosted Umami on Vercel - production domain
const UMAMI_URL = 'https://umami-ten-ruby.vercel.app';

// Validate IP address format to prevent header injection attacks
function isValidIP(ip: string): boolean {
    // IPv4 pattern
    const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
    // IPv6 pattern (simplified - covers most common formats)
    const ipv6Pattern = /^([0-9a-fA-F]{0,4}:){2,7}[0-9a-fA-F]{0,4}$/;

    if (ipv4Pattern.test(ip)) {
        // Validate each octet is 0-255
        const octets = ip.split('.').map(Number);
        return octets.every(octet => octet >= 0 && octet <= 255);
    }

    return ipv6Pattern.test(ip);
}

// Extract and validate client IP from request headers
function getClientIP(request: NextRequest): string {
    // Get the first IP from x-forwarded-for (client's original IP)
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor?.split(',')[0]?.trim() || '';

    // Validate to prevent header injection attacks
    if (ip && isValidIP(ip)) {
        return ip;
    }

    // Fallback - don't send a potentially malicious value
    return '127.0.0.1';
}

export async function POST(request: NextRequest) {
    try {
        // Apply rate limiting (generous limits for analytics)
        const rateLimitResult = applyRateLimit(request, RATE_LIMITS.analytics);
        if (!rateLimitResult.allowed) {
            return new NextResponse(JSON.stringify({ error: 'Rate limit exceeded' }), {
                status: 429,
                headers: {
                    'Content-Type': 'application/json',
                    ...rateLimitHeaders(rateLimitResult),
                },
            });
        }

        const body = await request.text();

        // Extract real client IP for accurate geo-location in Umami
        const clientIP = getClientIP(request);

        const response = await fetch(`${UMAMI_URL}/api/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': request.headers.get('user-agent') || 'medev.ai-proxy',
                // Forward real client IP via custom header (Vercel won't overwrite this)
                'X-Client-IP': clientIP,
            },
            body,
        });

        const data = await response.text();

        return new NextResponse(data, {
            status: response.status,
            headers: {
                'Content-Type': 'application/json',
                ...rateLimitHeaders(rateLimitResult),
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

