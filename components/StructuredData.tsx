import Script from 'next/script';

interface StructuredDataProps {
  data: object;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Helper function to generate Organization schema (enhanced for medical industry trust)
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "MedicalBusiness"],
    "@id": "https://medev.ai/#organization",
    "name": "medev.ai",
    "alternateName": "Medev AI",
    "url": "https://medev.ai",
    "logo": {
      "@type": "ImageObject",
      "url": "https://medev.ai/icon.svg",
      "width": 512,
      "height": 512
    },
    "description": "AI-powered medical device intelligence platform providing actionable guidance on FDA regulations, ISO standards, and regulatory compliance for medical device professionals.",
    "foundingDate": "2024",
    "areaServed": "Worldwide",
    "serviceType": [
      "Medical Device Regulatory Consulting",
      "FDA Compliance Guidance",
      "ISO Standards Implementation",
      "Quality Management Systems"
    ],
    "knowsAbout": [
      "Medical Device Regulations",
      "FDA 21 CFR Part 820",
      "ISO 13485",
      "ISO 14971",
      "IEC 62304",
      "IEC 60601",
      "Medical Device Software",
      "Risk Management",
      "Quality Management Systems",
      "510(k) Submissions",
      "EU MDR Compliance"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/bwtek-medical/",
      "https://www.linkedin.com/in/ericdrock/",
      "https://github.com/ERockzilla"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@bwtekmed.com",
      "availableLanguage": "English"
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "Bwtek Medical",
      "url": "https://bwtekmed.com"
    }
  };
}

// Helper function to generate WebSite schema
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "medev.ai",
    "url": "https://medev.ai",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://medev.ai/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
}

// Helper function to generate Article schema for standards/regulations pages
export function generateArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author = "medev.ai",
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": dateModified || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "medev.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://medev.ai/icon.svg"
      }
    }
  };
}

// Helper function to generate FAQPage schema
export function generateFAQPageSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Helper function to generate BreadcrumbList schema
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// Helper function to generate TechArticle schema for technical content
export function generateTechArticleSchema({
  title,
  description,
  url,
  about,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  url: string;
  about: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": title,
    "description": description,
    "url": url,
    "about": {
      "@type": "Thing",
      "name": about,
    },
    "proficiencyLevel": "Expert",
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": dateModified || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "medev.ai"
    },
    "publisher": {
      "@type": "Organization",
      "name": "medev.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://medev.ai/icon.svg"
      }
    }
  };
}

// Helper function to generate HowTo schema for guides
export function generateHowToSchema({
  title,
  description,
  steps,
}: {
  title: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  };
}

// Helper function to generate DefinedTermSet schema for glossary
export function generateGlossarySchema(terms: Array<{ term: string; definition: string; url?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "Medical Device Regulatory Glossary",
    "description": "Definitions of key terms in medical device development, FDA regulations, and ISO standards",
    "hasDefinedTerm": terms.map(item => ({
      "@type": "DefinedTerm",
      "name": item.term,
      "description": item.definition,
      "url": item.url || `https://medev.ai/glossary#${item.term.toLowerCase().replace(/\s+/g, '-')}`,
      "inDefinedTermSet": "https://medev.ai/glossary"
    }))
  };
}

// Helper function to generate MedicalWebPage schema for health-related content
export function generateMedicalWebPageSchema({
  title,
  description,
  url,
  specialty,
}: {
  title: string;
  description: string;
  url: string;
  specialty?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": title,
    "description": description,
    "url": url,
    "specialty": specialty || "Medical Device Regulatory Affairs",
    "audience": {
      "@type": "MedicalAudience",
      "audienceType": "Medical Device Professionals"
    },
    "reviewedBy": {
      "@type": "Organization",
      "name": "medev.ai"
    },
    "lastReviewed": new Date().toISOString().split('T')[0]
  };
}

// Helper function to generate author/person schema with credentials
export function generateAuthorSchema({
  name,
  jobTitle,
  organization,
  linkedIn,
}: {
  name: string;
  jobTitle: string;
  organization?: string;
  linkedIn?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "worksFor": {
      "@type": "Organization",
      "name": organization || "medev.ai",
      "url": "https://medev.ai"
    },
    "sameAs": linkedIn ? [linkedIn] : []
  };
}
