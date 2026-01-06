
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// =============================================================================
// SECURITY PROXY (Next.js 16+)
// Blocks known malicious paths BEFORE they hit any page
// Returns immediate 410 GONE response - NO redirect chain
// =============================================================================

// List of paths that should be completely blocked
const BLOCKED_PATHS = [
    '/lander',
    '/redirect',
    '/go',
    '/out',
    '/track',
    '/click',
    '/r/',
    '/l/',
    '/aff/',
    '/affiliate',
    '/promo',
    '/offer',
];

// Check if a path starts with any blocked prefix
function isBlockedPath(pathname: string): boolean {
    const lowerPath = pathname.toLowerCase();
    return BLOCKED_PATHS.some(blocked =>
        lowerPath === blocked || lowerPath.startsWith(blocked + '/')
    );
}

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // ==========================================================================
    // BLOCK MALICIOUS PATHS
    // Returns 410 GONE - This path is permanently removed/blocked
    // No redirect, no chain, just dead end for attackers
    // ==========================================================================
    if (isBlockedPath(pathname)) {
        // Log the attempt (will show in Amplify logs)
        console.warn(`[SECURITY] Blocked malicious path attempt: ${pathname} from ${request.headers.get('user-agent')}`);

        // Return 410 Gone with a friendly, informative page
        return new NextResponse(
            `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>Security Notice | medev.ai</title>
  <link rel="icon" href="/favicon.ico">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { 
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      min-height: 100vh; 
      background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
      color: #e2e8f0;
      padding: 1rem;
    }
    .container { 
      text-align: center; 
      max-width: 540px;
      padding: 2.5rem;
      background: rgba(15, 23, 42, 0.8);
      border: 1px solid rgba(99, 102, 241, 0.3);
      border-radius: 1rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }
    .icon { 
      font-size: 4rem; 
      margin-bottom: 1rem;
      animation: pulse 2s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    h1 { 
      font-size: 1.75rem; 
      font-weight: 700;
      margin-bottom: 1rem; 
      color: #f59e0b;
    }
    .message {
      color: #94a3b8; 
      line-height: 1.7;
      margin-bottom: 1.5rem;
      font-size: 0.95rem;
    }
    .highlight {
      color: #f87171;
      font-weight: 600;
    }
    .reassurance {
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      border-radius: 0.5rem;
      padding: 1rem;
      margin-bottom: 1.5rem;
      color: #10b981;
      font-size: 0.9rem;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.875rem 2rem;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      color: white;
      text-decoration: none;
      border-radius: 0.5rem;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.2s ease;
      box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
    }
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
    }
    .footer {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(148, 163, 184, 0.2);
      font-size: 0.8rem;
      color: #64748b;
    }
    .footer a {
      color: #6366f1;
      text-decoration: none;
    }
    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon">🛡️</div>
    <h1>Security Redirect Blocked</h1>
    <p class="message">
      You were redirected here by a <span class="highlight">malicious third party</span>, 
      not by medev.ai. This can happen due to compromised ads, browser extensions, 
      or network-level attacks.
    </p>
    <div class="reassurance">
      ✅ Don't worry! Your device is likely fine.<br>
      This page blocked the redirect to protect you.
    </div>
    <a href="https://medev.ai" class="btn">
      <span>→</span> Go to Real Homepage
    </a>
    <div class="footer">
      <p>If this keeps happening, try:</p>
      <p>• Using a different network (switch off WiFi)</p>
      <p>• Disabling browser extensions</p>
      <p>• Clearing your browser cache</p>
      <p style="margin-top: 0.75rem;">Questions? <a href="mailto:eric@medev.ai">Contact us</a></p>
    </div>
  </div>
</body>
</html>`,
            {
                status: 410, // GONE - Permanently removed
                headers: {
                    'Content-Type': 'text/html; charset=utf-8',
                    'X-Robots-Tag': 'noindex, nofollow',
                    'Cache-Control': 'no-store, no-cache, must-revalidate',
                },
            }
        );
    }

    // Allow all other requests to continue normally
    return NextResponse.next();
}

// =============================================================================
// MATCHER CONFIG
// Only run proxy on specific paths to avoid performance hit on every request
// =============================================================================
export const config = {
    matcher: [
        // Match all paths that might be attack vectors
        '/lander/:path*',
        '/lander',
        '/redirect/:path*',
        '/redirect',
        '/go/:path*',
        '/go',
        '/out/:path*',
        '/out',
        '/track/:path*',
        '/track',
        '/click/:path*',
        '/click',
        '/r/:path*',
        '/l/:path*',
        '/aff/:path*',
        '/affiliate/:path*',
        '/promo/:path*',
        '/offer/:path*',
    ],
};
