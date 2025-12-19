import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Medical Device Glossary - Regulatory Terms & Definitions',
    description: 'Comprehensive glossary of medical device regulatory terms. Clear definitions of SaMD, 510(k), CAPA, FMEA, QMS, and more. Your quick reference for FDA regulations and ISO standards.',
    keywords: [
        'medical device glossary',
        'SaMD definition',
        'what is 510k',
        'CAPA medical device',
        'FMEA definition',
        'QMS medical device',
        'medical device terms',
        'FDA terminology',
        'ISO 13485 terms',
        'regulatory definitions',
    ],
    openGraph: {
        title: 'Medical Device Glossary - Regulatory Terms & Definitions',
        description: 'Clear definitions of key terms in medical device development, FDA regulations, and ISO standards.',
        url: 'https://medev.ai/glossary',
        type: 'website',
    },
};

export default function GlossaryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
