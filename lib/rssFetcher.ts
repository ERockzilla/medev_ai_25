import Parser from 'rss-parser';
import DOMPurify from 'isomorphic-dompurify';

export interface NewsItem {
    title: string;
    link: string;
    pubDate: string;
    source: string;
    contentSnippet?: string;
    thumbnail?: string;
    category?: string;
}

// Create parser instance with custom fields for media
const parser = new Parser({
    customFields: {
        item: [
            ['content:encoded', 'contentEncoded'],
            ['media:thumbnail', 'mediaThumbnail'],
            ['media:content', 'mediaContent'],
            ['enclosure', 'enclosure'],
        ],
    },
});

// In-memory cache for 3-day history
const feedCache = new Map<string, { items: NewsItem[]; timestamp: number }>();
const CACHE_DURATION = 3 * 24 * 60 * 60 * 1000; // 3 days in ms
const FETCH_INTERVAL = 60 * 60 * 1000; // Refetch every hour

/**
 * Extract thumbnail URL from various RSS feed formats
 */
function extractThumbnail(item: Record<string, unknown>): string | undefined {
    // Try media:thumbnail
    if (item.mediaThumbnail) {
        const thumb = item.mediaThumbnail as Record<string, unknown>;
        if (thumb && typeof thumb === 'object' && '$' in thumb) {
            const attrs = thumb['$'] as Record<string, string>;
            if (attrs && attrs.url) return attrs.url;
        }
        if (typeof thumb === 'string') return thumb;
    }

    // Try media:content
    if (item.mediaContent) {
        const media = item.mediaContent as Record<string, unknown>;
        if (media.$ && (media.$ as Record<string, string>).url) {
            return (media.$ as Record<string, string>).url;
        }
    }

    // Try enclosure (common for podcasts/media)
    if (item.enclosure) {
        const enc = item.enclosure as Record<string, string>;
        if (enc.url && enc.type?.startsWith('image')) return enc.url;
    }

    // Try to extract from content (first image)
    const content = (item.contentEncoded || item.content || '') as string;
    const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
    if (imgMatch) return imgMatch[1];

    return undefined;
}

/**
 * Fetches and parses an RSS feed from a given URL safely.
 * Includes caching for 3-day history.
 */
export async function fetchRSS(url: string, sourceName: string, category?: string): Promise<NewsItem[]> {
    // SSRF Protection: Ensure protocol is https
    if (!url.startsWith('https://')) {
        console.error(`Blocked non-https feed request: ${url}`);
        return [];
    }

    const cacheKey = `${url}:${sourceName}`;
    const cached = feedCache.get(cacheKey);
    const now = Date.now();

    // Return cached items if within fetch interval
    if (cached && (now - cached.timestamp) < FETCH_INTERVAL) {
        return cached.items;
    }

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const response = await fetch(url, {
            signal: controller.signal,
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; medev.ai/1.0; +https://medev.ai)',
                'Accept': 'application/rss+xml, application/xml, text/xml, application/json, */*',
            },
            next: { revalidate: 3600 },
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            console.error(`Feed fetch failed with status ${response.status} for ${url}`);
            // Return cached items if available, even if stale
            return cached?.items || [];
        }

        const xmlText = await response.text();
        const feed = await parser.parseString(xmlText);

        // Parse and sanitize items - get up to 25 items per source
        const newItems: NewsItem[] = feed.items.slice(0, 25).map(item => ({
            title: DOMPurify.sanitize(item.title || ''),
            link: item.link || '#',
            pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
            source: sourceName,
            contentSnippet: DOMPurify.sanitize(item.contentSnippet || item.content || '').substring(0, 250),
            thumbnail: extractThumbnail(item as unknown as Record<string, unknown>),
            category: category || item.categories?.[0],
        }));

        // Merge with existing cached items (no date filter)
        let mergedItems = newItems;
        if (cached) {
            const existingLinks = new Set(newItems.map(i => i.link));
            const oldItems = cached.items.filter(i => !existingLinks.has(i.link));
            mergedItems = [...newItems, ...oldItems];
        }

        // Keep reasonable limit to prevent memory issues
        mergedItems = mergedItems.slice(0, 150);

        // Update cache
        feedCache.set(cacheKey, { items: mergedItems, timestamp: now });

        return mergedItems;
    } catch (error) {
        console.error(`Error fetching feed from ${url}:`, error);
        // Return cached items on error
        return cached?.items || [];
    }
}

/**
 * Fetch from ClinicalTrials.gov API for medical device trials
 * Uses the CT.gov API v2 for recently modified trials
 */
export async function fetchClinicalTrials(): Promise<NewsItem[]> {
    const apiUrl = 'https://clinicaltrials.gov/api/v2/studies?query.intr=medical%20device&sort=LastUpdatePostDate:desc&pageSize=10';

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const response = await fetch(apiUrl, {
            signal: controller.signal,
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'medev.ai/1.0',
            },
            next: { revalidate: 3600 },
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            console.error(`ClinicalTrials API failed with status ${response.status}`);
            return [];
        }

        const data = await response.json();
        const studies = data.studies || [];

        return studies.map((study: Record<string, unknown>) => {
            const protocol = study.protocolSection as Record<string, unknown>;
            const id = protocol?.identificationModule as Record<string, unknown>;
            const status = protocol?.statusModule as Record<string, unknown>;
            const description = protocol?.descriptionModule as Record<string, unknown>;

            const nctId = id?.nctId || 'Unknown';
            const title = id?.briefTitle || id?.officialTitle || 'Untitled Study';
            const lastUpdate = status?.lastUpdatePostDateStruct as Record<string, string>;

            return {
                title: DOMPurify.sanitize(title as string),
                link: `https://clinicaltrials.gov/study/${nctId}`,
                pubDate: lastUpdate?.date ? new Date(lastUpdate.date).toISOString() : new Date().toISOString(),
                source: 'ClinicalTrials.gov',
                contentSnippet: DOMPurify.sanitize((description?.briefSummary as string || '').substring(0, 250)),
                category: 'Clinical Trial',
            };
        });
    } catch (error) {
        console.error('Error fetching ClinicalTrials.gov:', error);
        return [];
    }
}

