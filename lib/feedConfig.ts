export interface FeedItem {
    title: string;
    description: string;
    url: string;
    date: string;
    category: string;
    tags: string[];
}

export const FEED_ITEMS: FeedItem[] = [
    // Guides
    {
        title: "Integrated Risk Management Guide",
        description: "A comprehensive approach to integrating risk management across the medical device lifecycle.",
        url: "https://www.medev.ai/guides/integrated-risk-management",
        date: "2025-10-15",
        category: "Guides",
        tags: ["risk-management", "iso-14971", "quality"]
    },
    {
        title: "Medical Laser Implementation Guide",
        description: "Best practices and regulatory requirements for implementing medical laser systems.",
        url: "https://www.medev.ai/guides/medical-laser-implementation",
        date: "2025-11-01",
        category: "Guides",
        tags: ["medical-laser", "iec-60601", "safety"]
    },
    {
        title: "Six Sigma in Medical Device Manufacturing",
        description: "Applying Six Sigma methodologies to improve quality and reduce defects in device manufacturing.",
        url: "https://www.medev.ai/guides/six-sigma",
        date: "2025-09-20",
        category: "Guides",
        tags: ["six-sigma", "manufacturing", "quality"]
    },
    {
        title: "Usability Engineering for Medical Devices",
        description: "Understanding IEC 62366 and human factors engineering for safer medical devices.",
        url: "https://www.medev.ai/guides/usability-engineering",
        date: "2025-10-05",
        category: "Guides",
        tags: ["usability", "iec-62366", "human-factors"]
    },

    // How-Tos
    {
        title: "How to Conduct FMEA Analysis",
        description: "Step-by-step tutorial on performing Failure Mode and Effects Analysis for medical devices.",
        url: "https://www.medev.ai/how-to/conduct-fmea-analysis",
        date: "2025-11-10",
        category: "How-To",
        tags: ["risk-management", "fmea", "tutorial"]
    },
    {
        title: "Design & Development per ISO 13485",
        description: "Practical guide to meeting the design and development requirements of ISO 13485.",
        url: "https://www.medev.ai/how-to/design-development-iso13485",
        date: "2025-10-25",
        category: "How-To",
        tags: ["iso-13485", "design-control", "compliance"]
    },
    {
        title: "Developing a Medical Laser System",
        description: "Technical roadmap for developing a compliant and effective medical laser system.",
        url: "https://www.medev.ai/how-to/develop-medical-laser-system",
        date: "2025-11-05",
        category: "How-To",
        tags: ["medical-laser", "development", "engineering"]
    },

    // Regulations & Standards (Selected Updates)
    {
        title: "Understanding IEC 62304 Software Lifecycle",
        description: "Key requirements for medical device software life cycle processes.",
        url: "https://www.medev.ai/standards/iec-62304",
        date: "2025-08-15",
        category: "Standards",
        tags: ["software", "iec-62304", "compliance"]
    },
    {
        title: "FDA 21 CFR Part 820 - Quality System Regulation",
        description: "Navigating the QSR requirements for medical device manufacturers in the US market.",
        url: "https://www.medev.ai/regulations/cfr-820",
        date: "2025-08-01",
        category: "Regulations",
        tags: ["fda", "qsr", "compliance", "us-market"]
    }
];
