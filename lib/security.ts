/**
 * Security Utilities Library
 * 
 * Advanced security helpers for cutting-edge web application protection.
 * Includes input sanitization, CSRF token generation, and security logging.
 */

/**
 * Sanitize user input to prevent XSS attacks
 * Removes HTML tags and encodes special characters
 */
export function sanitizeInput(input: string): string {
    if (!input || typeof input !== 'string') return '';

    return input
        // Remove script tags and their contents
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        // Remove all HTML tags
        .replace(/<[^>]*>/g, '')
        // Encode special characters
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        // Remove null bytes
        .replace(/\0/g, '')
        .trim();
}

/**
 * Validate email address format
 * Uses RFC 5322 compliant pattern
 */
export function isValidEmail(email: string): boolean {
    if (!email || typeof email !== 'string') return false;

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email) && email.length <= 254;
}

/**
 * Validate URL is safe (not javascript:, data:, etc.)
 */
export function isSafeUrl(url: string): boolean {
    if (!url || typeof url !== 'string') return false;

    try {
        const parsed = new URL(url, 'https://medev.ai');
        // Only allow http(s) protocols
        return ['http:', 'https:'].includes(parsed.protocol);
    } catch {
        return false;
    }
}

/**
 * Generate a cryptographically secure random token
 * Useful for CSRF tokens, session IDs, etc.
 */
export function generateSecureToken(length: number = 32): string {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Hash a string using SHA-256
 * Useful for fingerprinting, cache keys, etc.
 */
export async function hashString(input: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * Security event levels for logging
 */
export type SecurityEventLevel = 'info' | 'warn' | 'critical';

/**
 * Log security events for monitoring and alerting
 * In production, integrate with your logging/SIEM solution
 */
export function logSecurityEvent(
    event: string,
    level: SecurityEventLevel,
    details: Record<string, unknown> = {}
): void {
    const logEntry = {
        timestamp: new Date().toISOString(),
        level,
        event,
        ...details,
    };

    // In development, log to console
    if (level === 'critical') {
        console.error('[SECURITY CRITICAL]', JSON.stringify(logEntry));
    } else if (level === 'warn') {
        console.warn('[SECURITY WARN]', JSON.stringify(logEntry));
    } else {
        console.log('[SECURITY]', JSON.stringify(logEntry));
    }

    // In production, you would send to:
    // - CloudWatch Logs
    // - Datadog
    // - Sentry
    // - Your SIEM solution
}

/**
 * Validate request origin for CORS protection
 */
export function isValidOrigin(origin: string | null, allowedOrigins: string[]): boolean {
    if (!origin) return false;
    return allowedOrigins.some(allowed => {
        if (allowed.startsWith('*.')) {
            // Wildcard subdomain matching
            const domain = allowed.slice(2);
            return origin.endsWith(domain) || origin === `https://${domain}`;
        }
        return origin === allowed;
    });
}

/**
 * Content Security Policy nonce generator
 * For inline script protection
 */
export function generateCSPNonce(): string {
    return generateSecureToken(16);
}

/**
 * Check if IP is in a CIDR range (basic implementation)
 * Useful for IP whitelisting/blacklisting
 */
export function isIPInRange(ip: string, cidr: string): boolean {
    const [range, bits] = cidr.split('/');
    const mask = ~(2 ** (32 - parseInt(bits)) - 1);

    const ipParts = ip.split('.').map(Number);
    const rangeParts = range.split('.').map(Number);

    const ipNum = (ipParts[0] << 24) | (ipParts[1] << 16) | (ipParts[2] << 8) | ipParts[3];
    const rangeNum = (rangeParts[0] << 24) | (rangeParts[1] << 16) | (rangeParts[2] << 8) | rangeParts[3];

    return (ipNum & mask) === (rangeNum & mask);
}

/**
 * Validate password strength
 * Returns score 0-4 (weak to strong)
 */
export function checkPasswordStrength(password: string): {
    score: number;
    feedback: string[];
} {
    const feedback: string[] = [];
    let score = 0;

    if (password.length >= 8) score++;
    else feedback.push('At least 8 characters');

    if (password.length >= 12) score++;

    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    else feedback.push('Mix of upper and lowercase');

    if (/\d/.test(password)) score++;
    else feedback.push('At least one number');

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;
    else feedback.push('At least one special character');

    return { score: Math.min(score, 4), feedback };
}
