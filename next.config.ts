import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Next.js dev indicator
  devIndicators: {
    position: 'bottom-right',
  },
  reactStrictMode: true,

  // ==========================================================================
  // SECURITY NOTE: Malicious paths like /lander are BLOCKED in proxy.ts
  // Proxy returns 410 GONE - no redirects, no chains, just dead end
  // ==========================================================================

  // Analytics proxy now handled via API routes in /app/stats/ (more reliable on Amplify)

  // Comprehensive Security Headers for production
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // =================================================================
          // STANDARD SECURITY HEADERS
          // =================================================================
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },

          // =================================================================
          // HTTP STRICT TRANSPORT SECURITY (HSTS)
          // Force HTTPS for 1 year, include subdomains, allow preload list
          // =================================================================
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },

          // =================================================================
          // PERMISSIONS POLICY (formerly Feature-Policy)
          // Restrict browser features to prevent abuse
          // =================================================================
          {
            key: 'Permissions-Policy',
            value: [
              'accelerometer=()',           // Disable accelerometer access
              'camera=()',                  // Disable camera access
              'geolocation=()',             // Disable geolocation
              'gyroscope=()',               // Disable gyroscope
              'magnetometer=()',            // Disable magnetometer
              'microphone=()',              // Disable microphone
              'payment=()',                 // Disable Payment Request API
              'usb=()',                     // Disable USB access
              'interest-cohort=()',         // Opt out of FLoC/Topics
              'browsing-topics=()',         // Opt out of Topics API
              'fullscreen=(self)',          // Allow fullscreen only for self
              'picture-in-picture=(self)',  // Allow PiP only for self
            ].join(', ')
          },

          // =================================================================
          // CROSS-ORIGIN POLICIES
          // Enhanced isolation for better security
          // =================================================================
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin'
          },

          // =================================================================
          // CONTENT SECURITY POLICY (CSP)
          // Defense in depth against XSS and injection attacks
          // =================================================================
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Required for Next.js
              "connect-src 'self' https://vitals.vercel-insights.com", // Speed Insights
              "img-src 'self' data: https://unpkg.com https://*.githubusercontent.com",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' data:",
              "object-src 'none'",
              "frame-src 'none'",              // No iframes allowed
              "frame-ancestors 'self'",        // Prevent clickjacking
              "form-action 'self'",            // Forms only submit to self
              "base-uri 'self'",               // Prevent base tag hijacking
              "upgrade-insecure-requests",     // Auto-upgrade HTTP to HTTPS
            ].join('; ')
          },
        ],
      },
    ];
  },
};

export default nextConfig;
