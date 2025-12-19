import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import StructuredData, { generateOrganizationSchema, generateWebSiteSchema } from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: "medev.ai - Med Dev Intelligence",
    template: "%s | medev.ai"
  },
  description: "Actionable intelligence for medical device professionals. Navigate compliance, design, and development with confidence. Free resources for ISO standards, FDA regulations, and regulatory compliance.",
  keywords: [
    "medical device",
    "regulatory compliance",
    "FDA regulations",
    "ISO 13485",
    "ISO 14971",
    "IEC 62304",
    "medical device development",
    "regulatory affairs",
    "quality management system",
    "risk management",
    "medical device standards",
    "EU MDR",
    "21 CFR",
    "device classification",
    "regulatory intelligence"
  ],
  authors: [{ name: "medev.ai" }],
  creator: "medev.ai",
  publisher: "medev.ai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://medev.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medev.ai",
    siteName: "medev.ai",
    title: "medev.ai - Medical Device Intelligence Platform",
    description: "Actionable intelligence for medical device professionals. Navigate compliance, design, and development with confidence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "medev.ai - Medical Device Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "medev.ai - Medical Device Intelligence Platform",
    description: "Actionable intelligence for medical device professionals. Navigate compliance, design, and development with confidence.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GoogleAnalytics />
        <StructuredData data={generateOrganizationSchema()} />
        <StructuredData data={generateWebSiteSchema()} />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
