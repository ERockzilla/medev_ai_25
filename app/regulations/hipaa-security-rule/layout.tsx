import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'HIPAA Security Rule for Medical Device Manufacturers | medev.ai',
    description:
        'Complete guide to the HIPAA Security Rule for connected medical device companies. Covers administrative, physical, and technical safeguards, business associate obligations, ePHI handling, and enforcement penalties.',
    keywords: [
        'HIPAA security rule',
        'medical device HIPAA',
        'ePHI safeguards',
        'HIPAA compliance',
        'administrative safeguards',
        'technical safeguards',
        'HIPAA enforcement',
        'connected medical device',
    ],
};

export default function HIPAASecurityRuleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
