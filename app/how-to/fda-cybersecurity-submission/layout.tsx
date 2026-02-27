import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How to Prepare FDA Cybersecurity Premarket Submission | medev.ai',
    description:
        'Step-by-step checklist for preparing the cybersecurity section of 510(k), De Novo, and PMA submissions. Covers SPDF evidence, threat models, SBOMs, post-market plans, and common RTA triggers.',
    keywords: [
        'FDA cybersecurity submission',
        'premarket cybersecurity',
        '510k cybersecurity',
        'PMA cybersecurity',
        'eSTAR cybersecurity',
        'Section 524B submission',
        'SBOM FDA',
        'SPDF evidence',
    ],
};

export default function FDACybersecuritySubmissionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
