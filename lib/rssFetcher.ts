import Parser from 'rss-parser';
import DOMPurify from 'isomorphic-dompurify';

export interface NewsItem {
    title: string;
    link: string;
    pubDate: string;
    source: string;
    contentSnippet?: string;
}

// Create parser instance
const parser = new Parser({
    customFields: {
        item: [['content:encoded', 'contentEncoded']],
    },
});

/**
 * Fetches and parses an RSS feed from a given URL safely.
 * @param url The RSS feed URL
 * @param sourceName A display name for the source
 * @returns Array of sanitized NewsItems
 */
export async function fetchRSS(url: string, sourceName: string): Promise<NewsItem[]> {
    // SSRF Protection: Ensure protocol is https
    if (!url.startsWith('https://')) {
        console.error(`Blocked non-https feed request: ${url}`);
        return [];
    }

    try {
        // Use native fetch with proper headers and timeout via AbortController
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        const response = await fetch(url, {
            signal: controller.signal,
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; medev.ai/1.0; +https://medev.ai)',
                'Accept': 'application/rss+xml, application/xml, text/xml, */*',
            },
            next: { revalidate: 3600 }, // Cache for 1 hour on server
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            console.error(`Feed fetch failed with status ${response.status} for ${url}`);
            return [];
        }

        const xmlText = await response.text();
        const feed = await parser.parseString(xmlText);

        // XSS Protection: Sanitize content before passing it to the UI
        const items: NewsItem[] = feed.items.slice(0, 10).map(item => ({
            title: DOMPurify.sanitize(item.title || ''),
            link: item.link || '#',
            pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
            source: sourceName,
            contentSnippet: DOMPurify.sanitize(item.contentSnippet || item.content || '').substring(0, 200),
        }));

        return items;
    } catch (error) {
        console.error(`Error fetching feed from ${url}:`, error);
        return []; // Fail gracefully
    }
}
