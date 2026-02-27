import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'HIPAA Compliance Guide for Medical Device Manufacturers | medev.ai',
    description:
        'End-to-end HIPAA compliance for connected medical device manufacturers. Maps ePHI lifecycle from device sensor to cloud storage with administrative, physical, and technical safeguards aligned to FDA requirements.',
    keywords: [
        'HIPAA compliance medical device',
        'ePHI device to cloud',
        'HIPAA technical safeguards',
        'medical device data security',
        'FDA HIPAA dual compliance',
        'connected device HIPAA',
        'ePHI lifecycle',
        'HIPAA for manufacturers',
    ],
};

export default function HIPAAForDeviceManufacturersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
