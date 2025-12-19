'use client';

import Script from 'next/script';

// Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = 'G-B3GWW98R0V';

export default function GoogleAnalytics() {
    return (
        <>
            {/* Google tag (gtag.js) */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
                async
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
            </Script>
        </>
    );
}
