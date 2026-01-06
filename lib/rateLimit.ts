/**
 * API Rate Limiting Utility
 * 
 * Provides in-memory rate limiting for serverless API routes.
 * Stores request counts per IP with sliding window expiry.
 * 
 * For production with multiple instances, consider:
 * - Vercel Edge Config
 * - Redis (Upstash)
 * - Cloudflare Rate Limiting
 */

// In-memory store for rate limiting (suitable for single-instance or edge functions)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

interface RateLimitConfig {
    /** Maximum requests allowed in the window */
    limit: number;
    /** Time window in seconds */
    windowSeconds: number;
}

interface RateLimitResult {
    /** Whether the request is allowed */
    allowed: boolean;
    /** Remaining requests in current window */
    remaining: number;
    /** Seconds until rate limit resets */
    resetIn: number;
    /** Total limit for the window */
    limit: number;
}

// Default configurations for different route types
export const RATE_LIMITS = {
    // Standard API routes - generous limits
    standard: { limit: 100, windowSeconds: 60 } as RateLimitConfig,

    // Sensitive routes (auth, submit, etc.) - stricter
    sensitive: { limit: 10, windowSeconds: 60 } as RateLimitConfig,

    // Search/query routes - moderate
    search: { limit: 30, windowSeconds: 60 } as RateLimitConfig,

    // Analytics/tracking - very generous
    analytics: { limit: 200, windowSeconds: 60 } as RateLimitConfig,
} as const;

/**
 * Check and update rate limit for a given identifier
 * @param identifier - Unique identifier (usually IP address)
 * @param config - Rate limit configuration
 * @returns Rate limit result with allowed status and metadata
 */
export function checkRateLimit(
    identifier: string,
    config: RateLimitConfig = RATE_LIMITS.standard
): RateLimitResult {
    const now = Date.now();
    const windowMs = config.windowSeconds * 1000;

    // Clean up expired entries periodically (every ~100 requests)
    if (Math.random() < 0.01) {
        cleanupExpiredEntries(now);
    }

    const existing = rateLimitStore.get(identifier);

    // If no existing record or window expired, start fresh
    if (!existing || now > existing.resetTime) {
        rateLimitStore.set(identifier, {
            count: 1,
            resetTime: now + windowMs,
        });

        return {
            allowed: true,
            remaining: config.limit - 1,
            resetIn: config.windowSeconds,
            limit: config.limit,
        };
    }

    // Increment count
    existing.count += 1;

    const allowed = existing.count <= config.limit;
    const remaining = Math.max(0, config.limit - existing.count);
    const resetIn = Math.ceil((existing.resetTime - now) / 1000);

    return {
        allowed,
        remaining,
        resetIn,
        limit: config.limit,
    };
}

/**
 * Get IP address from request headers
 * Handles various proxy configurations (Cloudflare, Vercel, AWS)
 */
export function getClientIP(request: Request): string {
    // Check various headers in order of specificity
    const headers = request.headers;

    // Cloudflare
    const cfConnectingIP = headers.get('cf-connecting-ip');
    if (cfConnectingIP) return cfConnectingIP;

    // Vercel / Standard proxy
    const xForwardedFor = headers.get('x-forwarded-for');
    if (xForwardedFor) {
        // Take the first IP (original client)
        return xForwardedFor.split(',')[0].trim();
    }

    // Vercel specific
    const xRealIP = headers.get('x-real-ip');
    if (xRealIP) return xRealIP;

    // Fallback
    return 'unknown';
}

/**
 * Create rate limit headers for response
 */
export function rateLimitHeaders(result: RateLimitResult): Record<string, string> {
    return {
        'X-RateLimit-Limit': result.limit.toString(),
        'X-RateLimit-Remaining': result.remaining.toString(),
        'X-RateLimit-Reset': result.resetIn.toString(),
    };
}

/**
 * Clean up expired entries to prevent memory leaks
 */
function cleanupExpiredEntries(now: number): void {
    for (const [key, value] of rateLimitStore.entries()) {
        if (now > value.resetTime) {
            rateLimitStore.delete(key);
        }
    }
}

/**
 * Helper to apply rate limiting to an API route handler
 * 
 * Usage:
 * ```typescript
 * export async function POST(request: Request) {
 *   const rateLimitResult = applyRateLimit(request, RATE_LIMITS.sensitive);
 *   if (!rateLimitResult.allowed) {
 *     return new Response('Too many requests', { 
 *       status: 429,
 *       headers: rateLimitHeaders(rateLimitResult)
 *     });
 *   }
 *   // ... handle request
 * }
 * ```
 */
export function applyRateLimit(
    request: Request,
    config: RateLimitConfig = RATE_LIMITS.standard
): RateLimitResult {
    const ip = getClientIP(request);
    return checkRateLimit(ip, config);
}
