import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'UL 2900 Series — Software Cybersecurity Testing Standard | medev.ai',
    description:
        'Testing-centric cybersecurity standard for network-connectable medical devices. Covers UL 2900-1 general requirements, UL 2900-2-1 healthcare-specific testing, fuzz testing, static analysis, CVE scanning, and FDA recognition.',
    keywords: [
        'UL 2900',
        'UL 2900-2-1',
        'cybersecurity testing',
        'medical device testing',
        'fuzz testing',
        'static analysis',
        'CVE scanning',
        'FDA recognized standard',
        'penetration testing medical device',
    ],
};

export default function UL2900Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
