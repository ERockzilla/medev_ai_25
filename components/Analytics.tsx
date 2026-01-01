'use client';

import Script from 'next/script';

// Umami Analytics - Privacy-focused, cookie-free analytics
// Dashboard: https://umami-git-main-erics-projects-cc3a2b1c.vercel.app

const UMAMI_WEBSITE_ID = '9e842b59-6a02-4f59-a74b-aca897eb8f75';
const UMAMI_URL = 'https://umami-git-main-erics-projects-cc3a2b1c.vercel.app';

export default function Analytics() {

    return (
        <Script
            defer
            src={`${UMAMI_URL}/script.js`}
            data-website-id={UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
        />
    );
}
