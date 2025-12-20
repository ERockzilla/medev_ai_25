'use client';

import Script from 'next/script';

// Updated: logic to prioritize the Environment Variable, fallback to hardcoded (optional)
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID; 

export default function GoogleAnalytics() {
    // Safety check: Don't render anything if the ID is missing
    if (!GA_MEASUREMENT_ID) {
        return null;
    }

    return (
        <>
            {/* Google tag (gtag.js) */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
          });
        `}
            </Script>
        </>
    );
}