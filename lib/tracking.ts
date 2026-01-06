/**
 * Umami Analytics Event Tracking Utility
 * 
 * Provides type-safe event tracking via Umami analytics.
 * Events auto-appear in Umami dashboard once sent.
 * 
 * Usage:
 * - trackEvent('tool_opened', { tool: 'fmea' })
 * - Or use data attributes: data-umami-event="download" data-umami-event-file="template.xlsx"
 */

// Extend Window interface for TypeScript
declare global {
    interface Window {
        umami?: {
            track: (event: string, data?: Record<string, string | number | boolean>) => void;
        };
    }
}

// Event name constants for consistency
export const EVENTS = {
    TOOL_OPENED: 'tool_opened',
    TEMPLATE_DOWNLOADED: 'template_downloaded',
    GUIDE_BOOKMARKED: 'guide_bookmarked',
    EXTERNAL_LINK_CLICKED: 'external_link_clicked',
    SEARCH_PERFORMED: 'search_performed',
    THEME_CHANGED: 'theme_changed',
} as const;

export type EventName = typeof EVENTS[keyof typeof EVENTS];

/**
 * Track a custom event in Umami
 * @param event - Event name (use EVENTS constants)
 * @param data - Optional event data object
 */
export function trackEvent(
    event: EventName | string,
    data?: Record<string, string | number | boolean>
): void {
    if (typeof window !== 'undefined' && window.umami) {
        window.umami.track(event, data);
    }
}

/**
 * Track when a tool is opened/used
 * @param toolName - Name of the tool (e.g., 'fmea', 'sample-size')
 */
export function trackToolOpened(toolName: string): void {
    trackEvent(EVENTS.TOOL_OPENED, { tool: toolName });
}

/**
 * Track when a template is downloaded
 * @param templateName - Name of the template file
 */
export function trackTemplateDownload(templateName: string): void {
    trackEvent(EVENTS.TEMPLATE_DOWNLOADED, { template: templateName });
}

/**
 * Track when content is bookmarked
 * @param title - Title of the bookmarked content
 * @param url - URL of the bookmarked page
 */
export function trackBookmark(title: string, url: string): void {
    trackEvent(EVENTS.GUIDE_BOOKMARKED, { guide: title, url });
}

/**
 * Track external link clicks
 * @param url - The external URL clicked
 */
export function trackExternalLink(url: string): void {
    trackEvent(EVENTS.EXTERNAL_LINK_CLICKED, { url });
}

/**
 * Track search queries
 * @param query - The search query string
 */
export function trackSearch(query: string): void {
    trackEvent(EVENTS.SEARCH_PERFORMED, { query });
}
