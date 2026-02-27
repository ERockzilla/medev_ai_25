import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SOC 2 Type II for Medical Device SaaS Platforms | medev.ai',
    description:
        'Why hospitals demand SOC 2 reports, how to leverage existing HIPAA and FDA controls for audit readiness, Trust Services Criteria mapping, control evidence, and cost/timeline expectations for MedTech companies.',
    keywords: [
        'SOC 2 medical device',
        'SOC 2 Type II',
        'SOC 2 healthcare',
        'Trust Services Criteria',
        'SOC 2 audit',
        'medical device SaaS',
        'SOC 2 HIPAA',
        'SOC 2 cost timeline',
        'MedTech compliance',
    ],
};

export default function SOC2ForMedTechLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
