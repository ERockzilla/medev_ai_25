import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AAMI TIR57 — Medical Device Security Risk Management Principles | medev.ai',
    description:
        'Foundational technical information report for cybersecurity risk management in medical devices. Covers security threat identification, control selection, residual risk acceptance, and migration path to ANSI/AAMI SW96.',
    keywords: [
        'AAMI TIR57',
        'medical device security',
        'cybersecurity risk management',
        'TIR57 to SW96',
        'security threat analysis',
        'medical device cybersecurity',
        'risk management TIR',
    ],
};

export default function TIR57Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
