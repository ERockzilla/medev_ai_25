import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Next.js dev indicator
  devIndicators: {
    position: 'bottom-right',
  },
  reactStrictMode: true,

  // ==========================================================================
  // SECURITY NOTE: Malicious paths like /lander are BLOCKED in middleware.ts
  // Middleware returns 410 GONE - no redirects, no chains, just dead end
  // ==========================================================================

  // Security headers for production
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
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
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https://www.google-analytics.com https://analytics.google.com; img-src 'self' data: https://unpkg.com https://*.githubusercontent.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:; object-src 'none'; frame-ancestors 'self';"
          },
        ],
      },
    ];
  },
};

export default nextConfig;
