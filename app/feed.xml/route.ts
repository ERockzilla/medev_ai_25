import RSS from 'rss';
import { FEED_ITEMS } from '@/lib/feedConfig';

export async function GET() {
    const feed = new RSS({
        title: 'medev.ai - Medical Device Development Resources',
        description: 'Latest guides, tutorials, and regulatory updates for medical device professionals.',
        site_url: 'https://www.medev.ai',
        feed_url: 'https://www.medev.ai/feed.xml',
        language: 'en',
        pubDate: new Date(),
        copyright: `To allow for free use of content use a Creative Commons license.`,
    });

    // Sort items by date (newest first)
    const sortedItems = [...FEED_ITEMS].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    sortedItems.forEach((item) => {
        feed.item({
            title: item.title,
            description: item.description,
            url: item.url,
            date: item.date,
            categories: [item.category, ...item.tags],
            author: 'medev.ai',
        });
    });

    return new Response(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 's-maxage=3600, stale-while-revalidate',
        },
    });
}
