'use client';

import Script from 'next/script';

// Umami Analytics - Privacy-focused, cookie-free analytics
// Dashboard: https://umami-git-main-erics-projects-cc3a2b1c.vercel.app

const UMAMI_WEBSITE_ID = '9e842b59-6a02-4f59-a74b-aca897eb8f75';
// Use local proxy path to bypass ad blockers
// Source: /stats/script.js -> https://umami.../script.js
// API:    /stats/api       -> https://umami.../api
const PROXY_PATH = '/stats';

export default function Analytics() {

    return (
        <Script
            defer
            src={`${PROXY_PATH}/script.js`}
            data-host-url={`${PROXY_PATH}`}
            data-website-id={UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
        />
    );
}
