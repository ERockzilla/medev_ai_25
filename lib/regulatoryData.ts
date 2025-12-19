// Regulatory complexity data by country
export interface RegulatoryData {
    country: string;
    code: string;
    lat: number;
    lng: number;
    agency: string;
    complexity: number; // 1-10 scale
    avgCost: number; // USD
    avgTimeline: number; // months
    color: string;
}

export const REGULATORY_DATA: RegulatoryData[] = [
    {
        country: 'United States',
        code: 'US',
        lat: 37.0902,
        lng: -95.7129,
        agency: 'FDA',
        complexity: 8,
        avgCost: 150000,
        avgTimeline: 12,
        color: '#ef4444'
    },
    {
        country: 'European Union',
        code: 'EU',
        lat: 50.8503,
        lng: 4.3517,
        agency: 'Notified Bodies',
        complexity: 9,
        avgCost: 200000,
        avgTimeline: 18,
        color: '#f59e0b'
    },
    {
        country: 'Japan',
        code: 'JP',
        lat: 36.2048,
        lng: 138.2529,
        agency: 'PMDA',
        complexity: 9,
        avgCost: 180000,
        avgTimeline: 20,
        color: '#f59e0b'
    },
    {
        country: 'China',
        code: 'CN',
        lat: 35.8617,
        lng: 104.1954,
        agency: 'NMPA',
        complexity: 10,
        avgCost: 250000,
        avgTimeline: 24,
        color: '#dc2626'
    },
    {
        country: 'Canada',
        code: 'CA',
        lat: 56.1304,
        lng: -106.3468,
        agency: 'Health Canada',
        complexity: 6,
        avgCost: 80000,
        avgTimeline: 9,
        color: '#10b981'
    },
    {
        country: 'Australia',
        code: 'AU',
        lat: -25.2744,
        lng: 133.7751,
        agency: 'TGA',
        complexity: 5,
        avgCost: 60000,
        avgTimeline: 8,
        color: '#10b981'
    },
    {
        country: 'Brazil',
        code: 'BR',
        lat: -14.2350,
        lng: -51.9253,
        agency: 'ANVISA',
        complexity: 7,
        avgCost: 100000,
        avgTimeline: 15,
        color: '#f59e0b'
    },
    {
        country: 'South Korea',
        code: 'KR',
        lat: 35.9078,
        lng: 127.7669,
        agency: 'MFDS',
        complexity: 7,
        avgCost: 90000,
        avgTimeline: 12,
        color: '#f59e0b'
    },
    {
        country: 'United Kingdom',
        code: 'GB',
        lat: 55.3781,
        lng: -3.4360,
        agency: 'MHRA',
        complexity: 6,
        avgCost: 75000,
        avgTimeline: 10,
        color: '#10b981'
    },
    {
        country: 'India',
        code: 'IN',
        lat: 20.5937,
        lng: 78.9629,
        agency: 'CDSCO',
        complexity: 6,
        avgCost: 50000,
        avgTimeline: 12,
        color: '#10b981'
    },
    {
        country: 'Singapore',
        code: 'SG',
        lat: 1.3521,
        lng: 103.8198,
        agency: 'HSA',
        complexity: 5,
        avgCost: 45000,
        avgTimeline: 6,
        color: '#22c55e'
    },
    {
        country: 'Switzerland',
        code: 'CH',
        lat: 46.8182,
        lng: 8.2275,
        agency: 'Swissmedic',
        complexity: 7,
        avgCost: 120000,
        avgTimeline: 14,
        color: '#f59e0b'
    }
];
