import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    // Define the paths you want to hide from EVERYONE
    const sharedDisallow = ['/api/', '/settings', '/admin', '/private'];

    return {
        rules: [
            // 1. General Rules (Applies to Googlebot and standard crawlers)
            {
                userAgent: '*',
                allow: '/',
                disallow: sharedDisallow, 
                // REMOVED '/_next/' - Never block this in Next.js!
            },
            // 2. Explicitly Allow AI Crawlers (But keep them out of API/Settings)
            {
                userAgent: [
                    'GPTBot',
                    'ChatGPT-User',
                    'CCBot',
                    'anthropic-ai',
                    'Claude-Web',
                    'Google-Extended', // Controls Gemini training data
                    'PerplexityBot',
                    'Applebot-Extended',
                ],
                allow: '/',
                disallow: sharedDisallow, // Ensure they also respect your private paths
            },
        ],
        sitemap: 'https://medev.ai/sitemap.xml',
    };
}