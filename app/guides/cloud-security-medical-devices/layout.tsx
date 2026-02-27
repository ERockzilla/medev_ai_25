import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cloud Security for Connected Medical Device Backends | medev.ai',
    description:
        'Reference architecture for medical device cloud backends. Covers shared responsibility, HIPAA-eligible services, VPC design, IAM, encryption at rest and in transit, SIEM/monitoring, and disaster recovery across AWS, Azure, and GCP.',
    keywords: [
        'cloud security medical device',
        'medical device cloud architecture',
        'HIPAA cloud security',
        'AWS medical device',
        'Azure HIPAA',
        'GCP healthcare',
        'medical device encryption',
        'cloud IAM healthcare',
        'disaster recovery medical',
    ],
};

export default function CloudSecurityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
