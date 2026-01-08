export interface FeedItem {
    title: string;
    description: string;
    url: string;
    date: string;
    category: string;
    tags: string[];
    // RSS Feed Status: 'published' = shows in feed, 'draft' = hidden from feed only (site still visible)
    // To publish: Change 'draft' to 'published'
    status: 'published' | 'draft' | 'scheduled';
}

export const FEED_ITEMS: FeedItem[] = [
    // ============================================
    // PUBLISHED - These appear in RSS feed
    // ============================================

    // Future Generations - Tomorrow's featured article
    {
        title: "The Future of Medical Device AI: Gen 4-10 Roadmap",
        description: "Explore the AI-driven evolution of medical device engineering from predictive QMS to autonomous regulatory systems and beyond.",
        url: "https://www.medev.ai/future-generations",
        date: "2026-01-08", // Tomorrow - will be featured
        category: "Innovation",
        tags: ["ai", "future", "samd", "innovation"],
        status: "published"
    },

    // ============================================
    // DRAFT - Hidden from RSS until you change to 'published'
    // Quick Reference: Find item, change status: "draft" → "published"
    // ============================================

    // Main Section Pages
    {
        title: "AI-Powered Regulatory Tools for SaMD Development",
        description: "Leverage cutting-edge AI assistants to streamline your medical device software compliance journey.",
        url: "https://www.medev.ai/ai-tools",
        date: "2025-12-15",
        category: "AI Tools",
        tags: ["ai", "samd", "tools", "compliance"],
        status: "draft"
    },
    {
        title: "Regulatory Intelligence Dashboard",
        description: "Real-time analytics and insights across FDA, ISO, and IEC standards for strategic compliance decisions.",
        url: "https://www.medev.ai/regulatory-analysis",
        date: "2025-12-10",
        category: "Analysis",
        tags: ["analytics", "fda", "regulatory", "dashboard"],
        status: "draft"
    },
    {
        title: "Professional Development for Medical Device Engineers",
        description: "Career resources, certifications, and skill-building paths for regulatory affairs and quality professionals.",
        url: "https://www.medev.ai/professional-development",
        date: "2025-12-05",
        category: "Career",
        tags: ["career", "certifications", "training"],
        status: "draft"
    },

    // Tools
    {
        title: "FMEA Calculator: Risk Analysis Made Compliant",
        description: "Interactive Failure Mode and Effects Analysis tool with automatic RPN calculations per ISO 14971.",
        url: "https://www.medev.ai/tools/fmea",
        date: "2025-11-20",
        category: "Tools",
        tags: ["fmea", "risk-management", "iso-14971", "calculator"],
        status: "draft"
    },
    {
        title: "FDA Device Classification Wizard",
        description: "Determine your device's FDA classification (Class I, II, III) with guided regulatory pathway recommendations.",
        url: "https://www.medev.ai/tools/device-classification",
        date: "2025-11-15",
        category: "Tools",
        tags: ["fda", "classification", "510k", "regulatory"],
        status: "draft"
    },
    {
        title: "Statistical Sample Size Calculator",
        description: "Calculate sample sizes for validation, verification, and clinical studies with confidence interval support.",
        url: "https://www.medev.ai/tools/sample-size",
        date: "2025-11-10",
        category: "Tools",
        tags: ["statistics", "validation", "clinical", "calculator"],
        status: "draft"
    },
    {
        title: "Medical Laser Safety Calculator",
        description: "Assess laser hazard classifications and safety requirements per IEC 60825-1 and ANSI Z136.",
        url: "https://www.medev.ai/tools/laser-safety",
        date: "2025-11-05",
        category: "Tools",
        tags: ["laser", "safety", "iec-60825", "hazard"],
        status: "draft"
    },
    {
        title: "Software Risk Classification Tool",
        description: "Classify your medical device software per IEC 62304 safety class requirements (A, B, or C).",
        url: "https://www.medev.ai/tools/software-risk-class",
        date: "2025-10-30",
        category: "Tools",
        tags: ["software", "iec-62304", "risk", "classification"],
        status: "draft"
    },
    {
        title: "Regulatory Pathway Advisor",
        description: "Navigate FDA submission pathways: 510(k), De Novo, PMA, and breakthrough device designation.",
        url: "https://www.medev.ai/tools/regulatory-pathway",
        date: "2025-10-25",
        category: "Tools",
        tags: ["fda", "510k", "pma", "denovo", "pathway"],
        status: "draft"
    },

    // Standards
    {
        title: "ISO 13485: Your QMS Foundation Explained",
        description: "Master the quality management system requirements that form the backbone of medical device compliance.",
        url: "https://www.medev.ai/standards/iso-13485",
        date: "2025-10-20",
        category: "Standards",
        tags: ["iso-13485", "qms", "quality", "compliance"],
        status: "draft"
    },
    {
        title: "ISO 14971: Risk Management Demystified",
        description: "Complete guide to medical device risk management from hazard identification to residual risk evaluation.",
        url: "https://www.medev.ai/standards/iso-14971",
        date: "2025-10-15",
        category: "Standards",
        tags: ["iso-14971", "risk-management", "hazard", "safety"],
        status: "draft"
    },
    {
        title: "IEC 62304: Software Lifecycle Essentials",
        description: "Navigate medical device software development from requirements to maintenance with lifecycle best practices.",
        url: "https://www.medev.ai/standards/iec-62304",
        date: "2025-10-10",
        category: "Standards",
        tags: ["iec-62304", "software", "lifecycle", "development"],
        status: "draft"
    },
    {
        title: "IEC 62366: Usability Engineering Guide",
        description: "Design for human factors with usability engineering processes that ensure safe device interaction.",
        url: "https://www.medev.ai/standards/iec-62366",
        date: "2025-10-05",
        category: "Standards",
        tags: ["iec-62366", "usability", "human-factors", "ux"],
        status: "draft"
    },
    {
        title: "IEC 60601-1: Electrical Safety Requirements",
        description: "Essential electrical safety and performance requirements for medical electrical equipment.",
        url: "https://www.medev.ai/standards/iec-60601-1",
        date: "2025-09-30",
        category: "Standards",
        tags: ["iec-60601", "electrical", "safety", "performance"],
        status: "draft"
    },

    // Regulations
    {
        title: "510(k) Submission Masterclass",
        description: "Step-by-step guidance for preparing and submitting your FDA 510(k) premarket notification.",
        url: "https://www.medev.ai/regulations/510k-submission",
        date: "2025-09-25",
        category: "Regulations",
        tags: ["fda", "510k", "submission", "clearance"],
        status: "draft"
    },
    {
        title: "21 CFR Part 820: QSR Deep Dive",
        description: "Navigate FDA's Quality System Regulation with practical implementation guidance.",
        url: "https://www.medev.ai/regulations/cfr-820",
        date: "2025-09-20",
        category: "Regulations",
        tags: ["fda", "cfr-820", "qsr", "quality"],
        status: "draft"
    },

    // Guides (existing)
    {
        title: "Integrated Risk Management Guide",
        description: "A comprehensive approach to integrating risk management across the medical device lifecycle.",
        url: "https://www.medev.ai/guides/integrated-risk-management",
        date: "2025-10-15",
        category: "Guides",
        tags: ["risk-management", "iso-14971", "quality"],
        status: "draft"
    },
    {
        title: "Medical Laser Implementation Guide",
        description: "Best practices and regulatory requirements for implementing medical laser systems.",
        url: "https://www.medev.ai/guides/medical-laser-implementation",
        date: "2025-11-01",
        category: "Guides",
        tags: ["medical-laser", "iec-60601", "safety"],
        status: "draft"
    },
    {
        title: "Six Sigma in Medical Device Manufacturing",
        description: "Applying Six Sigma methodologies to improve quality and reduce defects in device manufacturing.",
        url: "https://www.medev.ai/guides/six-sigma",
        date: "2025-09-20",
        category: "Guides",
        tags: ["six-sigma", "manufacturing", "quality"],
        status: "draft"
    },
    {
        title: "Usability Engineering for Medical Devices",
        description: "Understanding IEC 62366 and human factors engineering for safer medical devices.",
        url: "https://www.medev.ai/guides/usability-engineering",
        date: "2025-10-05",
        category: "Guides",
        tags: ["usability", "iec-62366", "human-factors"],
        status: "draft"
    },

    // How-Tos
    {
        title: "How to Conduct FMEA Analysis",
        description: "Step-by-step tutorial on performing Failure Mode and Effects Analysis for medical devices.",
        url: "https://www.medev.ai/how-to/conduct-fmea-analysis",
        date: "2025-11-10",
        category: "How-To",
        tags: ["risk-management", "fmea", "tutorial"],
        status: "draft"
    },
    {
        title: "Design & Development per ISO 13485",
        description: "Practical guide to meeting the design and development requirements of ISO 13485.",
        url: "https://www.medev.ai/how-to/design-development-iso13485",
        date: "2025-10-25",
        category: "How-To",
        tags: ["iso-13485", "design-control", "compliance"],
        status: "draft"
    },
    {
        title: "Developing a Medical Laser System",
        description: "Technical roadmap for developing a compliant and effective medical laser system.",
        url: "https://www.medev.ai/how-to/develop-medical-laser-system",
        date: "2025-11-05",
        category: "How-To",
        tags: ["medical-laser", "development", "engineering"],
        status: "draft"
    },
];
