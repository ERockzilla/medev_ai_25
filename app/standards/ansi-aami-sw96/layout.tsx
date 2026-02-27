import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ANSI/AAMI SW96:2023 — Medical Device Security Risk Management | medev.ai',
    description:
        'FDA-recognized consensus standard for cybersecurity risk management in medical devices. Covers exploitability-based scoring, ISO 14971 relationship, migration from AAMI TIR57, and premarket submission requirements.',
    keywords: [
        'AAMI SW96',
        'ANSI AAMI SW96',
        'medical device cybersecurity',
        'security risk management',
        'FDA recognized standard',
        'exploitability scoring',
        'CVSS medical device',
        'TIR57 replacement',
    ],
};

export default function SW96Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
