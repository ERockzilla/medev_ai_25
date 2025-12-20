import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://medev.ai';
  const currentDate = new Date();

  // Core pages - highest priority
  const corePages = [
    { url: '', priority: 1.0, changeFrequency: 'daily' as const },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/glossary', priority: 0.9, changeFrequency: 'weekly' as const },
  ];

  // Standards pages - high priority for SEO
  const standards = [
    '/standards/iso-13485',
    '/standards/iso-14971',
    '/standards/iec-62304',
    '/standards/iec-62366',
    '/standards/iec-60601-1',
    '/standards/iec-60601-1-2',
    '/standards/iec-60601-2-22',
    '/standards/iec-60601-2-57',
    '/standards/iec-60825-1',
    '/standards/iso-10993',
    '/standards/iso-14155',
    '/standards/iec-81001-5-1',
    '/standards/iso-15223',
    '/standards/iso-20417',
  ];

  // Regulations pages - high priority for SEO
  const regulations = [
    '/regulations/cfr-820',
    '/regulations/cfr-11',
    '/regulations/cfr-803',
    '/regulations/cfr-807',
    '/regulations/cfr-812',
    '/regulations/cfr-830',
    '/regulations/510k-submission',
    '/regulations/pma-submission',
    '/regulations/estar-template',
  ];

  // Tools - medium-high priority
  const tools = [
    '/tools',
    '/tools/fmea',
    '/tools/distributions',
    '/tools/sample-size',
  ];

  // Resource pages
  const resources = [
    '/domains',
    '/regulations',
    '/standards',
    '/regulatory-analysis',
    '/ai-tools',
    '/financial',
    '/global-map',
    '/resources',
    '/professional-development',
  ];

  // Guides and How-to
  const guides = [
    '/guides/integrated-risk-management',
    '/guides/six-sigma',
    '/guides/usability-engineering',
    '/how-to/conduct-fmea-analysis',
    '/how-to/design-development-iso13485',
    '/how-to/develop-medical-laser-system',
  ];

  return [
    // Core pages
    ...corePages.map((page) => ({
      url: `${baseUrl}${page.url}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),

    // Standards - highest content value
    ...standards.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),

    // Regulations - highest content value
    ...regulations.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),

    // Tools
    ...tools.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Resource pages
    ...resources.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),

    // Guides
    ...guides.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
