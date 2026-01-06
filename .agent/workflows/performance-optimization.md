---
description: Performance Optimization Phases - medev.ai
---

# Performance Optimization Implementation Plan

## Phase 1: Build Optimization ✅ COMPLETED
- Preconnect hints for external resources
- Code splitting optimizations
- Bundle analysis

## Phase 2: Lazy Loading & Suspense ✅ COMPLETED
- Dynamic imports for heavy components
- Suspense boundaries with shimmer skeletons
- Route-based code splitting

## Phase 3: Static Generation & Component Optimization ✅ COMPLETED (2026-01-05)
### Completed Tasks:
1. **Route-level Loading States** ✅
   - Added `loading.tsx` for `/tools` route
   - Added `loading.tsx` for `/tools/fmea` route
   - Added `loading.tsx` for `/tools/software-risk-class` route  
   - Added `loading.tsx` for `/tools/distributions` route
   - Added `loading.tsx` for `/tools/sample-size` route
   - Added `loading.tsx` for `/tools/device-classification` route
   - Added `loading.tsx` for `/tools/regulatory-pathway` route
   - Added `loading.tsx` for `/tools/cyber-device-classification` route
   - Added `loading.tsx` for `/tools/laser-safety` route
   - Added `loading.tsx` for `/tools/design-change-notification` route

2. **Image Optimization** ✅
   - Converted `<img>` to Next.js `<Image>` in Footer.tsx (RSS badge, Bwtek logo)
   - Converted `<img>` to Next.js `<Image>` in news/page.tsx (RSS badge)
   - Added proper width/height, lazy loading, and alt text for SEO

3. **React.memo Optimization** ✅
   - Wrapped skeleton components with React.memo (TimelineSkeleton, RoadmapSkeleton, CalculatorSkeleton, ClassificationSkeleton, CardSkeleton)
   - Wrapped FutureGenIcon with React.memo
   - Wrapped Footer internal components (FooterLink, SocialLink, EmailIcon, PersonIcon, LinkedInIcon, GitHubIcon, RSSIcon)

## Phase 4: Analytics Enhancement & Monitoring 🔄 IN PROGRESS

### 4.1 Vercel Speed Insights Integration ✅
- [x] Install @vercel/speed-insights package
- [x] Add SpeedInsights component to layout.tsx
- [ ] Deploy and monitor Core Web Vitals (LCP, FID, CLS)

### 4.2 Umami Analytics - Custom Event Tracking ✅
- [x] Create `lib/tracking.ts` utility with type-safe helpers
- [x] Add tracking to BookmarkButton (guide_bookmarked event)
- [x] Add tracking to SmartSearch (search_performed event)
- [x] Add tracking to FMEA page (tool_opened + template_downloaded)
- [x] Add tracking to Software Risk Class page (tool_opened)
- [ ] Configure Goals/Funnels/Segments/Cohorts in Umami dashboard

Enhanced Features to Implement:
- [ ] **Custom Events Tracking** - Track tool usage, form submissions, downloads
- [ ] **Link Tracking** - Track outbound link clicks (external resources, social)
- [ ] **Button/CTA Tracking** - Track key interactions (Contact Us, Download Template, etc.)
- [ ] **Funnels** - Set up conversion funnels (Tools homepage → Tool page → Tool usage)
- [ ] **Segments** - User segmentation for analysis
- [ ] **Cohorts** - Cohort analysis for returning visitors

### 4.3 Implementation Steps

#### Step 1: Install Vercel Speed Insights
```bash
npm i @vercel/speed-insights
```

#### Step 2: Add SpeedInsights Component
```tsx
// In app/layout.tsx
import { SpeedInsights } from "@vercel/speed-insights/next"

// Add inside <body> tag
<SpeedInsights />
```

#### Step 3: Umami Custom Event Tracking
```tsx
// Custom event helper
export function trackEvent(eventName: string, eventData?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && (window as any).umami) {
    (window as any).umami.track(eventName, eventData);
  }
}

// Usage examples:
trackEvent('tool_used', { tool: 'fmea-calculator' });
trackEvent('template_downloaded', { template: 'FMEA_Template.xlsx' });
trackEvent('external_link_clicked', { url: 'https://fda.gov/...' });
```

#### Step 4: Umami Link/Button Data Attributes
```tsx
// Simple click tracking with data attributes
<a 
  href="/tools/fmea" 
  data-umami-event="tool_card_clicked"
  data-umami-event-tool="fmea"
>
  FMEA Calculator
</a>

<button 
  data-umami-event="download_template"
  data-umami-event-template="fmea"
>
  Download Template
</button>
```

### 4.4 Funnel Configuration (Umami Dashboard)
Define these funnels in Umami dashboard:
1. **Tool Adoption Funnel**: /tools → /tools/[tool] → tool_calculation_started → tool_calculation_completed
2. **Resource Engagement**: /standards → /standards/[standard] → bookmark_added
3. **Contact Funnel**: Any page → /about → contact_clicked

### 4.5 Key Events to Track
| Event Name | Description | Data |
|------------|-------------|------|
| `tool_opened` | User opens a tool | `{tool: string}` |
| `calculation_started` | User begins calculation | `{tool: string}` |
| `template_downloaded` | Template download clicked | `{template: string}` |
| `external_link_clicked` | Outbound link clicked | `{url: string, context: string}` |
| `guide_bookmarked` | User bookmarks a guide | `{guide: string}` |
| `search_performed` | User searches | `{query: string}` |
| `theme_changed` | User changes theme | `{theme: string}` |

## Phase 5: Future Optimizations (Backlog)
- [ ] Service Worker for offline caching (PWA)
- [ ] Prefetch on hover for key navigation links
- [ ] WebP conversion for remaining static assets
- [ ] Font subsetting for custom fonts
- [ ] Critical CSS inline rendering
