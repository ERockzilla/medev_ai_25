import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cybersecurity Framework Mapper — FDA, HIPAA, SOC 2, IEC 81001-5-1 | medev.ai',
    description:
        'Interactive tool mapping 33 security controls across 7 domains against FDA cybersecurity guidance, HIPAA Security Rule, SOC 2 Trust Services Criteria, and IEC 81001-5-1. Identify overlaps, find gaps, and export traceability matrix for your Design History File.',
    keywords: [
        'cybersecurity framework mapper',
        'FDA HIPAA mapping',
        'SOC 2 control matrix',
        'IEC 81001-5-1 mapping',
        'security control overlap',
        'compliance traceability',
        'medical device compliance',
        'framework crosswalk',
    ],
};

export default function FrameworkMapperLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
