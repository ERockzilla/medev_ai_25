export type DomainType = 'QMS' | 'ERP' | 'CRM' | 'Design' | 'Development' | 'Testing' | 'Compliance';

export interface DomainData {
  id: DomainType;
  name: string;
  description: string;
  color: string;
  icon: string;
  lat: number;
  lng: number;
  features: string[];
  dataVolume: number; // Data volume in TB (Terabytes)
}

export const DOMAINS: DomainData[] = [
  {
    id: 'ERP',
    name: 'Enterprise Resource Planning',
    description: 'Inventory, manufacturing, and supply chain management',
    color: '#10b981',
    icon: '🏭',
    lat: 50,
    lng: 10, // Europe quadrant
    features: ['BOM Management', 'Inventory Tracking', 'Manufacturing Orders', 'Supplier Management'],
    dataVolume: 500 // Highest - massive amounts of inventory, manufacturing, and supply chain data
  },
  {
    id: 'QMS',
    name: 'Quality Management System',
    description: 'ISO 13485 compliant QMS with document control, CAPA, and audit trails',
    color: '#3b82f6',
    icon: '📋',
    lat: 45,
    lng: -90, // North America quadrant
    features: ['Document Control', 'CAPA Management', 'Audit Trails', '21 CFR Part 11 Compliance'],
    dataVolume: 300 // Very high - extensive document control, audit trails, and compliance records
  },
  {
    id: 'Development',
    name: 'Software Development',
    description: 'IEC 62304 compliant software lifecycle management',
    color: '#ec4899',
    icon: '💻',
    lat: 0,
    lng: 20, // Africa quadrant
    features: ['Software Lifecycle', 'Version Control', 'Code Reviews', 'IEC 62304 Compliance'],
    dataVolume: 250 // High - large codebases, version history, and development artifacts
  },
  {
    id: 'Testing',
    name: 'Testing & Validation',
    description: 'V&V protocols, test data management, and statistical analysis',
    color: '#06b6d4',
    icon: '🧪',
    lat: -30,
    lng: 150, // Australia/Pacific quadrant
    features: ['Test Protocols', 'V&V Management', 'Statistical Analysis', 'Test Data Tracking'],
    dataVolume: 200 // High - extensive test protocols, results, and validation data
  },
  {
    id: 'CRM',
    name: 'Customer Relationship Management',
    description: 'Complaint handling, service records, and post-market surveillance',
    color: '#f59e0b',
    icon: '👥',
    lat: 35,
    lng: 135, // East Asia quadrant
    features: ['Complaint Management', 'MDR Reporting', 'Service Records', 'Customer Tracking'],
    dataVolume: 150 // Medium-high - customer records, complaints, and service history
  },
  {
    id: 'Compliance',
    name: 'Regulatory Compliance',
    description: 'FDA, ISO, and EU MDR compliance tracking and submissions',
    color: '#ef4444',
    icon: '✅',
    lat: 40,
    lng: -150, // Pacific/North America quadrant
    features: ['FDA 510(k)', 'CE Mark', 'ISO 13485', 'Regulatory Submissions'],
    dataVolume: 100 // Medium - regulatory submissions and compliance tracking
  },
  {
    id: 'Design',
    name: 'Design & Development',
    description: 'Requirements management, design controls, and traceability',
    color: '#8b5cf6',
    icon: '🎨',
    lat: -25,
    lng: -60, // South America quadrant
    features: ['Requirements Management', 'Design Controls', 'Risk Analysis', 'Design Reviews'],
    dataVolume: 80 // Medium - design documents, requirements, and review records
  }
];

