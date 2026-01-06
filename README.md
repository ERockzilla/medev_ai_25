# medev.ai - Medical Electrical Development Environment Variables for Actionable Intelligence

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](LICENSE)

A free, open-source platform for MedTech professionals featuring comprehensive resources for medical device development, compliance, and professional growth.

---

## Site Contents & Capabilities

### [Dashboard Knowledge Center](https://www.medev.ai/)
The central hub of medev.ai, providing organized access to all site content.

**Features:**
- **Smart Search** – Quickly find articles, tools, and resources
- **Knowledge Categories** – Browse content by topic with expandable sections
- **Medical Device Timeline** – Interactive evolution of medical device technology
- **Bookmarks Sidebar** – Save and organize your favorite resources
- **Footer Navigation** – Quick links to key sections and external resources

### [Standards Database](https://www.medev.ai/standards)
Comprehensive database of medical device standards with implementation guidance.

**Categories:**
- **Foundation** – ISO 13485, Quality Management Systems
- **Risk Management** – ISO 14971, Risk Analysis Processes
- **Software** – IEC 62304, IEC 81001-5-1 (Cybersecurity)
- **Medical Electrical** – IEC 60601-1 series
- **Laser Safety** – IEC 60601-2-22, IEC 60825-1
- **Usability** – IEC 62366
- **Testing** – ISO 10993 (Biocompatibility)
- **Clinical** – ISO 14155
- **Labeling** – ISO 15223, ISO 20417

### [Regulations](https://www.medev.ai/regulations)
FDA regulations and submission guidance including:
- 21 CFR Part 11 (Electronic Records)
- 21 CFR Part 803 (Medical Device Reporting)
- 21 CFR Part 807 (Establishment Registration)
- 21 CFR Part 812 (Investigational Device Exemptions)
- 21 CFR Part 820 (Quality System Regulation)
- 21 CFR Part 830 (Unique Device Identification)
- 510(k) and PMA Submission Guides
- eSTAR Template Guide

### [Tools](https://www.medev.ai/tools)
Interactive calculators and decision-support tools:
- **FMEA Calculator** – Failure Mode and Effects Analysis
- **Device Classification** – FDA device classification lookup
- **Cyber Device Classification** – Determine cyber device status
- **Regulatory Pathway Selector** – 510(k) vs PMA decision tool
- **Sample Size Calculator** – Statistical sample size determination
- **Software Risk Class** – IEC 62304 software classification
- **Laser Safety Calculator** – Laser classification and requirements
- **Design Change Notification** – Change assessment tool
- **Statistical Distributions** – Distribution visualizations

### [Global Map](https://www.medev.ai/global-map)
Interactive 3D globe visualization of worldwide regulatory bodies and medical device markets.

### [News](https://www.medev.ai/news)
Curated industry news via RSS feeds from leading MedTech sources.

### Additional Resources
- [Glossary](https://www.medev.ai/glossary) – Medical device terminology definitions
- [Guides](https://www.medev.ai/guides) – Step-by-step implementation guides
- [How-To Articles](https://www.medev.ai/how-to) – Practical tutorials
- [Professional Development](https://www.medev.ai/professional-development) – Career growth resources
- [Future Generations](https://www.medev.ai/future-generations) – Emerging trends and predictions
- [Financial](https://www.medev.ai/financial) – ROI and business case resources
- [Regulatory Analysis](https://www.medev.ai/regulatory-analysis) – In-depth regulatory insights
- [AI Tools](https://www.medev.ai/ai-tools) – AI-powered assistance features

---

## Technical Features

### Analytics & Tracking
- **Umami Analytics** – Privacy-first, GDPR-compliant analytics
- **Custom Event Tracking** – Tool usage, downloads, bookmarks, searches
- **Vercel Speed Insights** – Real-time performance monitoring

### Performance Optimization
- **Dynamic Imports** – Lazy loading for heavy components (3D Timeline, Globe)
- **Server-Side Rendering** – SEO-optimized pages
- **Skeleton Loading States** – Smooth perceived performance

---

## Software Bill of Materials (SBOM)

### Core Framework
| Package | Version | Purpose |
|---------|---------|---------|
| Next.js | 16.x | React framework with SSR/SSG |
| React | 19.x | UI component library |
| TypeScript | 5.x | Type-safe JavaScript |

### UI & Styling
| Package | Version | Purpose |
|---------|---------|---------|
| Tailwind CSS | 4.x | Utility-first CSS framework |
| Framer Motion | 12.x | Animation library |
| Lucide React | 0.554.x | Icon library |

### Visualization
| Package | Version | Purpose |
|---------|---------|---------|
| Three.js | 0.181.x | 3D graphics library |
| Globe.gl | 2.45.x | 3D globe visualization |
| Recharts | 2.12.x | Chart components |

### Utilities
| Package | Version | Purpose |
|---------|---------|---------|
| RSS Parser | 3.13.x | External RSS feed parsing |
| RSS | 1.2.x | RSS feed generation |
| Nodemailer | 7.x | Email functionality |
| Isomorphic DOMPurify | 2.35.x | HTML sanitization |

---

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ERockzilla/medev_ai_25.git
cd medev_ai_25

# Install dependencies
npm install

# Run development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run start
```

---

## Project History (Nov 2025 - Present)

### Development Statistics

![Project Contribution Stats](https://raw.githubusercontent.com/ERockzilla/medev_ai_25/main/public/images/project-stats.png)

**28 commits** | **51,023++ additions** | **2,432-- deletions**

### Evolution Highlights
- **Nov 2025** – Project inception, core architecture established
- **Dec 2025** – Major content expansion, standards database built out
- **Jan 2026** – Feature refinement, analytics integration, RSS feeds

---

## Related Projects

**DMOS** – Digital MedTech Operations System

---

## License

This project is licensed under the GNU General Public License v3.0 – see the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

---

<p align="center">
  <strong>medev.ai</strong> – Actionable Intelligence for MedTech Professionals
</p>
