import RSS from 'rss';
import { FEED_ITEMS } from '@/lib/feedConfig';

export async function GET(
    request: Request,
    props: { params: Promise<{ topic: string }> }
) {
    const params = await props.params;
    const topic = params.topic.toLowerCase();

    // Filter items matching the topic (category or tag)
    const topicItems = FEED_ITEMS.filter(item =>
        item.category.toLowerCase() === topic ||
        item.tags.some(tag => tag.toLowerCase() === topic)
    );

    if (topicItems.length === 0) {
        return new Response('Topic not found', { status: 404 });
    }

    const feed = new RSS({
        title: `medev.ai - ${topic.charAt(0).toUpperCase() + topic.slice(1)} Resources`,
        description: `Latest resources about ${topic} from medev.ai`,
        site_url: `https://www.medev.ai/feed/${topic}`,
        feed_url: `https://www.medev.ai/feed/${topic}`,
        language: 'en',
        pubDate: new Date(),
    });

    // Sort items
    const sortedItems = [...topicItems].sort((a, b) =>
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
