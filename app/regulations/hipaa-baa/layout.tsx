import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'HIPAA Business Associate Agreements (BAA) for Medical Devices | medev.ai',
    description:
        'When you need a BAA, what it must cover, cloud provider BAA nuances for AWS, Azure, and GCP, subcontractor flow-down requirements, and breach notification obligations for medical device manufacturers.',
    keywords: [
        'HIPAA BAA',
        'business associate agreement',
        'medical device BAA',
        'cloud provider BAA',
        'HIPAA subcontractor',
        'BAA requirements',
        'vendor management HIPAA',
        'AWS BAA',
        'Azure BAA',
    ],
};

export default function HIPAABAALayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
