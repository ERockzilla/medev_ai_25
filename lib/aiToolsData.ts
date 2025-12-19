export type PricingTier = 'Free' | '$' | '$$' | '$$$' | '$$$$';

export interface AITool {
  id: string;
  name: string;
  category: string;
  description: string;
  useCases: string[];
  pricing: PricingTier;
  rating: number; // 1-5
  reviewCount: number;
  pros: string[];
  cons: string[];
  bestFor: string[];
  website: string;
  medDeviceExamples: string[];
  regulatoryConsiderations: string;
  lastUpdated: Date;
  tags: string[];
}

export const AI_TOOLS: AITool[] = [
  // Design & CAD
  {
    id: 'autodesk-fusion-360',
    name: 'Autodesk Fusion 360 (Generative Design)',
    category: 'Design & CAD',
    description: 'AI-powered generative design tool that explores thousands of design options based on your constraints and requirements.',
    useCases: [
      'Generative design for medical device components',
      'Lightweight structure optimization',
      'Material efficiency improvements'
    ],
    pricing: '$$$',
    rating: 4.5,
    reviewCount: 127,
    pros: [
      'Powerful generative algorithms',
      'Cloud-based collaboration',
      'Integrated with manufacturing workflows'
    ],
    cons: [
      'Steep learning curve',
      'Requires powerful hardware',
      'Subscription pricing can be expensive'
    ],
    bestFor: ['Large companies', 'Complex designs', 'Advanced users'],
    website: 'https://www.autodesk.com/products/fusion-360',
    medDeviceExamples: ['Surgical instruments', 'Prosthetics', 'Implantable devices'],
    regulatoryConsiderations: 'Design outputs must be validated per ISO 13485 and design controls. Generative designs require verification testing.',
    lastUpdated: new Date('2024-11-01'),
    tags: ['generative-design', 'cad', 'optimization']
  },
  {
    id: 'ntopology',
    name: 'nTopology',
    category: 'Design & CAD',
    description: 'Advanced design software specializing in lattice structures and topology optimization for medical devices.',
    useCases: [
      'Lattice structure design for implants',
      'Topology optimization',
      'Custom medical device geometries'
    ],
    pricing: '$$$',
    rating: 4.6,
    reviewCount: 89,
    pros: [
      'Excellent for lattice structures',
      'Strong medical device focus',
      'Good integration with 3D printing'
    ],
    cons: [
      'Expensive licensing',
      'Limited to specific use cases',
      'Requires expertise'
    ],
    bestFor: ['Implant manufacturers', '3D printing specialists', 'Advanced design teams'],
    website: 'https://ntopology.com',
    medDeviceExamples: ['Orthopedic implants', 'Dental implants', 'Custom prosthetics'],
    regulatoryConsiderations: 'Lattice structures require extensive biocompatibility testing per ISO 10993. Design validation critical.',
    lastUpdated: new Date('2024-10-15'),
    tags: ['lattice', 'topology', '3d-printing']
  },
  {
    id: 'ansys-discovery',
    name: 'ANYSYS Discovery',
    category: 'Design & CAD',
    description: 'AI-powered simulation software for rapid design exploration and optimization.',
    useCases: [
      'Structural analysis',
      'Fluid flow simulation',
      'Thermal analysis'
    ],
    pricing: '$$$',
    rating: 4.2,
    reviewCount: 156,
    pros: [
      'Fast simulation results',
      'AI-assisted optimization',
      'Comprehensive analysis tools'
    ],
    cons: [
      'High cost',
      'Complex setup',
      'Requires simulation expertise'
    ],
    bestFor: ['Engineering teams', 'Simulation specialists', 'Large organizations'],
    website: 'https://www.ansys.com/products/3d-design/ansys-discovery',
    medDeviceExamples: ['Catheters', 'Stents', 'Surgical tools'],
    regulatoryConsiderations: 'Simulation results must be validated with physical testing per design controls.',
    lastUpdated: new Date('2024-11-10'),
    tags: ['simulation', 'analysis', 'optimization']
  },

  // Documentation & Technical Writing
  {
    id: 'chatgpt',
    name: 'ChatGPT (OpenAI)',
    category: 'Documentation & Technical Writing',
    description: 'AI-powered language model for drafting technical documents, SOPs, and regulatory content.',
    useCases: [
      'Draft SOPs and work instructions',
      'Create validation protocols',
      'Generate technical documentation',
      'Regulatory summary writing'
    ],
    pricing: '$',
    rating: 4.7,
    reviewCount: 523,
    pros: [
      'Versatile writing assistance',
      'Fast content generation',
      'Affordable pricing',
      'Continuous improvements'
    ],
    cons: [
      'Requires careful review for accuracy',
      'May generate incorrect information',
      'Not specialized for medical devices',
      'Data privacy considerations'
    ],
    bestFor: ['Startups', 'Small teams', 'Documentation-heavy workflows'],
    website: 'https://chat.openai.com',
    medDeviceExamples: ['Quality manuals', 'Validation reports', 'Design history files'],
    regulatoryConsiderations: 'All AI-generated content must be reviewed and approved by qualified personnel. Cannot replace expert judgment. Ensure HIPAA compliance if handling PHI.',
    lastUpdated: new Date('2024-11-20'),
    tags: ['writing', 'documentation', 'general-purpose']
  },
  {
    id: 'grammarly-business',
    name: 'Grammarly Business',
    category: 'Documentation & Technical Writing',
    description: 'AI-powered writing assistant for quality review, consistency checking, and style improvement.',
    useCases: [
      'Quality review of technical documents',
      'Consistency checking across documents',
      'Style and tone improvement'
    ],
    pricing: '$$',
    rating: 4.4,
    reviewCount: 312,
    pros: [
      'Excellent grammar checking',
      'Consistency detection',
      'Team collaboration features',
      'Integration with common tools'
    ],
    cons: [
      'May flag technical terms incorrectly',
      'Limited medical device terminology',
      'Subscription cost per user'
    ],
    bestFor: ['Quality teams', 'Documentation teams', 'Regulatory writers'],
    website: 'https://www.grammarly.com/business',
    medDeviceExamples: ['SOPs', 'Quality manuals', 'Regulatory submissions'],
    regulatoryConsiderations: 'Use for quality review only. Final content must be approved by subject matter experts.',
    lastUpdated: new Date('2024-10-30'),
    tags: ['grammar', 'quality', 'review']
  },
  {
    id: 'jasper-ai',
    name: 'Jasper AI',
    category: 'Documentation & Technical Writing',
    description: 'AI writing tool specialized for marketing copy and business content generation.',
    useCases: [
      'Marketing copy for medical devices',
      'Regulatory summaries',
      'Product descriptions'
    ],
    pricing: '$$',
    rating: 4.0,
    reviewCount: 198,
    pros: [
      'Good for marketing content',
      'Templates available',
      'Brand voice customization'
    ],
    cons: [
      'Less suitable for technical content',
      'May require significant editing',
      'Pricing can add up'
    ],
    bestFor: ['Marketing teams', 'Product managers', 'Business development'],
    website: 'https://www.jasper.ai',
    medDeviceExamples: ['Product brochures', 'Marketing materials', 'Regulatory summaries'],
    regulatoryConsiderations: 'Marketing content must comply with FDA advertising regulations. All claims must be substantiated.',
    lastUpdated: new Date('2024-11-05'),
    tags: ['marketing', 'copywriting', 'content']
  },

  // Testing & Validation
  {
    id: 'testim-io',
    name: 'Testim.io',
    category: 'Testing & Validation',
    description: 'ML-based test automation platform for software testing and validation.',
    useCases: [
      'Automated test case generation',
      'Software validation testing',
      'Regression testing'
    ],
    pricing: '$$',
    rating: 4.3,
    reviewCount: 145,
    pros: [
      'AI-powered test generation',
      'Self-healing tests',
      'Good for web applications'
    ],
    cons: [
      'Limited medical device software focus',
      'Requires test maintenance',
      'May not cover all edge cases'
    ],
    bestFor: ['Software teams', 'Web-based devices', 'QA automation'],
    website: 'https://www.testim.io',
    medDeviceExamples: ['Mobile health apps', 'Web-based device interfaces', 'Software as Medical Device (SaMD)'],
    regulatoryConsiderations: 'Test coverage must meet IEC 62304 requirements. AI-generated tests require validation.',
    lastUpdated: new Date('2024-10-20'),
    tags: ['testing', 'automation', 'software']
  },
  {
    id: 'applitools-eyes',
    name: 'Applitools Eyes',
    category: 'Testing & Validation',
    description: 'Visual AI testing platform using computer vision for UI validation.',
    useCases: [
      'Visual regression testing',
      'UI validation',
      'Cross-browser testing'
    ],
    pricing: '$$',
    rating: 4.5,
    reviewCount: 234,
    pros: [
      'Excellent visual testing',
      'AI-powered comparison',
      'Good integration options'
    ],
    cons: [
      'Requires baseline maintenance',
      'Can be sensitive to minor changes',
      'Pricing based on test runs'
    ],
    bestFor: ['UI-heavy devices', 'Mobile apps', 'Web interfaces'],
    website: 'https://applitools.com',
    medDeviceExamples: ['Mobile health apps', 'Patient monitoring interfaces', 'Clinical decision support systems'],
    regulatoryConsiderations: 'Visual testing complements but does not replace usability testing per IEC 62366.',
    lastUpdated: new Date('2024-11-12'),
    tags: ['visual-testing', 'ui', 'automation']
  },
  {
    id: 'jmp-pro',
    name: 'JMP Pro (SAS)',
    category: 'Testing & Validation',
    description: 'Statistical analysis software with AI-powered features for data analysis and validation.',
    useCases: [
      'Statistical analysis for validation',
      'Design of experiments (DOE)',
      'Process validation data analysis'
    ],
    pricing: '$$$',
    rating: 4.6,
    reviewCount: 189,
    pros: [
      'Powerful statistical tools',
      'Good for validation studies',
      'Strong medical device support'
    ],
    cons: [
      'Expensive licensing',
      'Steep learning curve',
      'Requires statistical expertise'
    ],
    bestFor: ['Quality engineers', 'Validation specialists', 'Statistical analysis teams'],
    website: 'https://www.jmp.com/en_us/software/jmp-pro.html',
    medDeviceExamples: ['Process validation', 'Design verification', 'Clinical data analysis'],
    regulatoryConsiderations: 'Statistical methods must be justified and documented per ISO 13485 and FDA guidance.',
    lastUpdated: new Date('2024-10-25'),
    tags: ['statistics', 'analysis', 'validation']
  },
  {
    id: 'minitab-ai',
    name: 'Minitab with AI',
    category: 'Testing & Validation',
    description: 'Statistical software with AI-assisted analysis and recommendations.',
    useCases: [
      'Statistical process control',
      'Design of experiments',
      'Capability analysis'
    ],
    pricing: '$$$',
    rating: 4.4,
    reviewCount: 267,
    pros: [
      'User-friendly interface',
      'AI recommendations',
      'Good documentation'
    ],
    cons: [
      'Limited advanced features',
      'AI suggestions need validation',
      'Subscription pricing'
    ],
    bestFor: ['Quality teams', 'Process engineers', 'Six Sigma practitioners'],
    website: 'https://www.minitab.com',
    medDeviceExamples: ['Process validation', 'Quality control', 'Capability studies'],
    regulatoryConsiderations: 'Statistical methods must be appropriate and documented. AI recommendations require expert review.',
    lastUpdated: new Date('2024-11-08'),
    tags: ['statistics', 'quality', 'six-sigma']
  },

  // Regulatory & Compliance
  {
    id: 'compliance-ai',
    name: 'Compliance.ai',
    category: 'Regulatory & Compliance',
    description: 'Regulatory intelligence platform with AI-powered change monitoring and gap analysis.',
    useCases: [
      'Regulatory change monitoring',
      'Gap analysis',
      'Regulatory intelligence'
    ],
    pricing: '$$$',
    rating: 4.1,
    reviewCount: 78,
    pros: [
      'Comprehensive regulatory tracking',
      'AI-powered alerts',
      'Good coverage of regulations'
    ],
    cons: [
      'Expensive',
      'May have information overload',
      'Requires customization'
    ],
    bestFor: ['Regulatory affairs teams', 'Large companies', 'Multi-market devices'],
    website: 'https://www.compliance.ai',
    medDeviceExamples: ['FDA submissions', 'EU MDR compliance', 'Global regulatory tracking'],
    regulatoryConsiderations: 'AI recommendations must be verified against official regulatory sources. Not a substitute for regulatory expertise.',
    lastUpdated: new Date('2024-10-18'),
    tags: ['regulatory', 'compliance', 'monitoring']
  },

  // Quality Management
  {
    id: 'qualio-qms',
    name: 'Qualio QMS with AI',
    category: 'Quality Management',
    description: 'Cloud-based QMS with AI-powered document search and CAPA recommendations.',
    useCases: [
      'Document management',
      'CAPA management',
      'Quality system automation'
    ],
    pricing: '$$$',
    rating: 4.3,
    reviewCount: 156,
    pros: [
      'AI-powered search',
      'CAPA recommendations',
      'Cloud-based',
      'Good for small-medium companies'
    ],
    cons: [
      'AI recommendations need validation',
      'Limited customization',
      'Subscription cost'
    ],
    bestFor: ['Small-medium companies', 'Startups', 'Growing organizations'],
    website: 'https://www.qualio.com',
    medDeviceExamples: ['ISO 13485 compliance', 'CAPA management', 'Document control'],
    regulatoryConsiderations: 'AI recommendations must be reviewed by quality personnel. System must meet 21 CFR Part 11 requirements.',
    lastUpdated: new Date('2024-11-15'),
    tags: ['qms', 'quality', 'document-management']
  },
  {
    id: 'mastercontrol-ai',
    name: 'MasterControl with AI',
    category: 'Quality Management',
    description: 'Enterprise QMS platform with predictive analytics and risk prediction capabilities.',
    useCases: [
      'Enterprise QMS',
      'Predictive analytics',
      'Risk management',
      'Document control'
    ],
    pricing: '$$$$',
    rating: 4.5,
    reviewCount: 203,
    pros: [
      'Comprehensive QMS solution',
      'Predictive analytics',
      'Strong regulatory compliance',
      'Enterprise features'
    ],
    cons: [
      'Very expensive',
      'Complex implementation',
      'Requires training'
    ],
    bestFor: ['Large enterprises', 'Complex quality systems', 'Multi-site operations'],
    website: 'https://www.mastercontrol.com',
    medDeviceExamples: ['Enterprise QMS', 'Design controls', 'Risk management'],
    regulatoryConsiderations: 'System must be validated per 21 CFR Part 11. AI predictions require human oversight.',
    lastUpdated: new Date('2024-11-01'),
    tags: ['qms', 'enterprise', 'analytics']
  },

  // Risk Management
  {
    id: 'reliasoft-xfmea',
    name: 'ReliaSoft XFMEA',
    category: 'Risk Management',
    description: 'AI-enhanced FMEA software for risk analysis and management.',
    useCases: [
      'FMEA analysis',
      'Risk management',
      'Failure mode analysis'
    ],
    pricing: '$$',
    rating: 4.0,
    reviewCount: 112,
    pros: [
      'Comprehensive FMEA tools',
      'AI suggestions for failure modes',
      'Good reporting'
    ],
    cons: [
      'Can be complex',
      'Requires FMEA expertise',
      'Limited to FMEA'
    ],
    bestFor: ['Risk management teams', 'Quality engineers', 'Design teams'],
    website: 'https://www.reliasoft.com/products/xfmea',
    medDeviceExamples: ['Design FMEA', 'Process FMEA', 'Use FMEA'],
    regulatoryConsiderations: 'FMEA must comply with ISO 14971. AI suggestions must be reviewed by risk management experts.',
    lastUpdated: new Date('2024-10-22'),
    tags: ['fmea', 'risk-management', 'analysis']
  },
  {
    id: 'iqs-fmea',
    name: 'IQS FMEA Software',
    category: 'Risk Management',
    description: 'FMEA software with AI-assisted risk analysis capabilities.',
    useCases: [
      'FMEA documentation',
      'Risk analysis',
      'Risk reporting'
    ],
    pricing: '$$',
    rating: 4.2,
    reviewCount: 98,
    pros: [
      'User-friendly',
      'Good templates',
      'Integration options'
    ],
    cons: [
      'Limited AI features',
      'Basic functionality',
      'May need additional tools'
    ],
    bestFor: ['Small teams', 'Basic FMEA needs', 'Documentation'],
    website: 'https://www.iqs.com',
    medDeviceExamples: ['Design FMEA', 'Process FMEA'],
    regulatoryConsiderations: 'Must comply with ISO 14971 requirements. AI assistance requires expert validation.',
    lastUpdated: new Date('2024-11-05'),
    tags: ['fmea', 'risk', 'documentation']
  },

  // Data Analysis
  {
    id: 'scikit-learn',
    name: 'scikit-learn (Python)',
    category: 'Data Analysis',
    description: 'Free, open-source machine learning library for Python with extensive ML algorithms.',
    useCases: [
      'Custom ML models',
      'Data analysis',
      'Predictive modeling'
    ],
    pricing: 'Free',
    rating: 5.0,
    reviewCount: 456,
    pros: [
      'Free and open-source',
      'Extensive documentation',
      'Large community',
      'Flexible'
    ],
    cons: [
      'Requires Python expertise',
      'No built-in medical device focus',
      'Requires development time'
    ],
    bestFor: ['Data scientists', 'Developers', 'Research teams', 'Budget-conscious teams'],
    website: 'https://scikit-learn.org',
    medDeviceExamples: ['Clinical data analysis', 'Sensor data processing', 'Image analysis'],
    regulatoryConsiderations: 'Custom ML models require validation per IEC 62304. Model development must be documented.',
    lastUpdated: new Date('2024-11-18'),
    tags: ['machine-learning', 'python', 'open-source', 'free']
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow/Keras',
    category: 'Data Analysis',
    description: 'Open-source deep learning framework for building and training neural networks.',
    useCases: [
      'Deep learning models',
      'Image analysis',
      'Custom AI models'
    ],
    pricing: 'Free',
    rating: 4.9,
    reviewCount: 389,
    pros: [
      'Free and open-source',
      'Powerful deep learning',
      'Large community',
      'Production-ready'
    ],
    cons: [
      'Steep learning curve',
      'Requires ML expertise',
      'Development time needed'
    ],
    bestFor: ['ML engineers', 'Research teams', 'Advanced AI applications'],
    website: 'https://www.tensorflow.org',
    medDeviceExamples: ['Medical image analysis', 'AI-powered diagnostics', 'Sensor fusion'],
    regulatoryConsiderations: 'AI models must be validated per FDA AI/ML guidance. Requires extensive testing and documentation.',
    lastUpdated: new Date('2024-11-20'),
    tags: ['deep-learning', 'neural-networks', 'open-source', 'free']
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'Data Analysis',
    description: 'Open-source deep learning framework with dynamic computation graphs.',
    useCases: [
      'Research and development',
      'Deep learning models',
      'Prototyping'
    ],
    pricing: 'Free',
    rating: 4.8,
    reviewCount: 312,
    pros: [
      'Free and open-source',
      'Great for research',
      'Pythonic interface',
      'Active development'
    ],
    cons: [
      'Less production-focused than TensorFlow',
      'Requires ML expertise',
      'Development overhead'
    ],
    bestFor: ['Researchers', 'ML engineers', 'Prototyping'],
    website: 'https://pytorch.org',
    medDeviceExamples: ['Research prototypes', 'Medical imaging', 'Signal processing'],
    regulatoryConsiderations: 'Research models require validation before clinical use. Must comply with FDA AI/ML guidance.',
    lastUpdated: new Date('2024-11-15'),
    tags: ['deep-learning', 'research', 'open-source', 'free']
  },
  {
    id: 'matlab-ai',
    name: 'MATLAB with AI Toolbox',
    category: 'Data Analysis',
    description: 'MATLAB with comprehensive AI and machine learning toolboxes for medical imaging and signal processing.',
    useCases: [
      'Medical imaging analysis',
      'Signal processing',
      'ML model development'
    ],
    pricing: '$$$$',
    rating: 4.8,
    reviewCount: 234,
    pros: [
      'Excellent for medical imaging',
      'Comprehensive toolboxes',
      'Good documentation',
      'Industry standard'
    ],
    cons: [
      'Very expensive',
      'Requires MATLAB expertise',
      'Proprietary'
    ],
    bestFor: ['Research institutions', 'Large companies', 'Medical imaging specialists'],
    website: 'https://www.mathworks.com/products/matlab.html',
    medDeviceExamples: ['Medical imaging devices', 'Signal processing', 'Biomedical analysis'],
    regulatoryConsiderations: 'ML models require validation per FDA guidance. MATLAB code must be documented per IEC 62304.',
    lastUpdated: new Date('2024-11-10'),
    tags: ['matlab', 'medical-imaging', 'signal-processing']
  },

  // Image Analysis
  {
    id: 'matlab-dl',
    name: 'MATLAB Deep Learning Toolbox',
    category: 'Image Analysis',
    description: 'Specialized toolbox for medical image segmentation and pattern recognition.',
    useCases: [
      'Medical image segmentation',
      'Pattern recognition',
      'Image classification'
    ],
    pricing: '$$$$',
    rating: 4.7,
    reviewCount: 178,
    pros: [
      'Medical imaging focus',
      'Pre-trained models available',
      'Good integration',
      'Comprehensive tools'
    ],
    cons: [
      'Expensive',
      'MATLAB required',
      'Learning curve'
    ],
    bestFor: ['Medical imaging teams', 'Research labs', 'Image analysis specialists'],
    website: 'https://www.mathworks.com/products/deep-learning.html',
    medDeviceExamples: ['Medical imaging devices', 'Diagnostic imaging', 'Image-guided surgery'],
    regulatoryConsiderations: 'Image analysis algorithms require validation per FDA guidance on AI/ML-based medical devices.',
    lastUpdated: new Date('2024-11-12'),
    tags: ['medical-imaging', 'deep-learning', 'segmentation']
  },

  // Software Development & GUI Tools
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'Software Development & GUI Tools',
    description: 'AI-powered code editor built for pair programming with AI. Combines VS Code with advanced AI capabilities.',
    useCases: [
      'AI-assisted code editing',
      'Code generation and completion',
      'Refactoring and debugging',
      'Medical device software development'
    ],
    pricing: '$',
    rating: 4.8,
    reviewCount: 342,
    pros: [
      'Excellent AI code generation',
      'Familiar VS Code interface',
      'Fast and responsive',
      'Good context understanding',
      'Privacy-focused options'
    ],
    cons: [
      'Requires subscription for advanced features',
      'May generate code that needs review',
      'Learning curve for AI features'
    ],
    bestFor: ['Software developers', 'Small teams', 'Rapid prototyping', 'Medical device software teams'],
    website: 'https://cursor.sh',
    medDeviceExamples: ['IEC 62304 software development', 'Embedded device firmware', 'Mobile health apps', 'Clinical software'],
    regulatoryConsiderations: 'AI-generated code must be reviewed and tested per IEC 62304. All code must go through standard software development lifecycle including verification and validation.',
    lastUpdated: new Date('2024-11-20'),
    tags: ['code-editor', 'ai-assistant', 'development']
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'Software Development & GUI Tools',
    description: 'AI pair programmer that suggests code and entire functions in real-time as you type.',
    useCases: [
      'Code autocompletion',
      'Function generation',
      'Code documentation',
      'Test generation'
    ],
    pricing: '$',
    rating: 4.6,
    reviewCount: 512,
    pros: [
      'Wide IDE support',
      'Fast suggestions',
      'Good code understanding',
      'Popular and well-supported'
    ],
    cons: [
      'Subscription required',
      'May suggest incorrect code',
      'Privacy concerns with code',
      'Requires internet connection'
    ],
    bestFor: ['Individual developers', 'Teams using GitHub', 'General software development'],
    website: 'https://github.com/features/copilot',
    medDeviceExamples: ['Medical device software', 'IEC 62304 compliant code', 'Embedded systems'],
    regulatoryConsiderations: 'All AI-suggested code must be reviewed per IEC 62304. Code ownership and licensing must be verified. Ensure compliance with company code review policies.',
    lastUpdated: new Date('2024-11-18'),
    tags: ['code-completion', 'ai-assistant', 'github']
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'Software Development & GUI Tools',
    description: 'Collaborative design tool for creating user interfaces, prototypes, and design systems.',
    useCases: [
      'UI/UX design for medical devices',
      'Prototyping device interfaces',
      'Design system creation',
      'Collaborative design workflows'
    ],
    pricing: '$$',
    rating: 4.7,
    reviewCount: 892,
    pros: [
      'Excellent collaboration features',
      'Real-time editing',
      'Strong prototyping tools',
      'Good for design systems',
      'Web-based (no installation)'
    ],
    cons: [
      'Requires internet connection',
      'Can be resource-intensive',
      'Learning curve for advanced features',
      'Pricing can add up for teams'
    ],
    bestFor: ['Design teams', 'UI/UX designers', 'Product teams', 'Usability engineering'],
    website: 'https://www.figma.com',
    medDeviceExamples: ['Medical device interfaces', 'Patient monitoring displays', 'Mobile health app UIs', 'IEC 62366 usability studies'],
    regulatoryConsiderations: 'Design outputs must be validated through usability testing per IEC 62366. Prototypes are not substitutes for final device validation.',
    lastUpdated: new Date('2024-11-15'),
    tags: ['design', 'ui-ux', 'prototyping', 'collaboration']
  },
  {
    id: 'builder-io',
    name: 'Builder.io',
    category: 'Software Development & GUI Tools',
    description: 'Visual development platform that allows developers and designers to build and optimize digital experiences.',
    useCases: [
      'Visual page building',
      'Headless CMS integration',
      'A/B testing interfaces',
      'Rapid UI development'
    ],
    pricing: '$$',
    rating: 4.4,
    reviewCount: 156,
    pros: [
      'Visual development',
      'Good CMS integration',
      'A/B testing built-in',
      'Developer-friendly'
    ],
    cons: [
      'Primarily for web',
      'Learning curve',
      'Pricing based on usage',
      'May require developer support'
    ],
    bestFor: ['Web development teams', 'Marketing sites', 'Content-heavy applications'],
    website: 'https://www.builder.io',
    medDeviceExamples: ['Medical device web portals', 'Patient portals', 'Marketing websites', 'Web-based device interfaces'],
    regulatoryConsiderations: 'Web interfaces for medical devices must comply with accessibility standards (WCAG) and usability requirements per IEC 62366.',
    lastUpdated: new Date('2024-11-10'),
    tags: ['visual-development', 'cms', 'web-development']
  },
  {
    id: 'codeium',
    name: 'Codeium',
    category: 'Software Development & GUI Tools',
    description: 'Free AI-powered code completion and chat tool supporting 70+ programming languages.',
    useCases: [
      'Free code autocompletion',
      'Code explanation',
      'Multi-language support',
      'Code refactoring'
    ],
    pricing: 'Free',
    rating: 4.5,
    reviewCount: 234,
    pros: [
      'Completely free',
      'Good code completion',
      'Multi-language support',
      'Privacy-focused',
      'No subscription required'
    ],
    cons: [
      'Less advanced than paid alternatives',
      'May have rate limits',
      'Smaller community than Copilot'
    ],
    bestFor: ['Individual developers', 'Budget-conscious teams', 'Students', 'Open source projects'],
    website: 'https://codeium.com',
    medDeviceExamples: ['Medical device software development', 'IEC 62304 code', 'Embedded systems'],
    regulatoryConsiderations: 'AI-generated code must be reviewed and validated per IEC 62304. Free tools may have different data handling policies - verify compliance with company policies.',
    lastUpdated: new Date('2024-11-19'),
    tags: ['code-completion', 'free', 'ai-assistant', 'open-source']
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    category: 'Software Development & GUI Tools',
    description: 'AI code completion tool that learns from your codebase to provide contextual suggestions.',
    useCases: [
      'Context-aware code completion',
      'Codebase-specific suggestions',
      'Multi-language support',
      'Team code patterns'
    ],
    pricing: '$$',
    rating: 4.3,
    reviewCount: 189,
    pros: [
      'Learns from your codebase',
      'Good privacy options',
      'Works offline',
      'Team collaboration features'
    ],
    cons: [
      'Requires training time',
      'Subscription pricing',
      'Less popular than Copilot',
      'May need configuration'
    ],
    bestFor: ['Teams', 'Enterprise development', 'Codebase-specific needs'],
    website: 'https://www.tabnine.com',
    medDeviceExamples: ['Medical device software', 'IEC 62304 development', 'Team code standards'],
    regulatoryConsiderations: 'Code suggestions must be reviewed per IEC 62304. Ensure codebase learning complies with data privacy policies.',
    lastUpdated: new Date('2024-11-12'),
    tags: ['code-completion', 'team-collaboration', 'context-aware']
  },
  {
    id: 'v0',
    name: 'v0 (Vercel)',
    category: 'Software Development & GUI Tools',
    description: 'AI-powered UI component generator that creates React components from text descriptions.',
    useCases: [
      'Rapid UI component generation',
      'Prototype development',
      'Design to code conversion',
      'Component library building'
    ],
    pricing: 'Free',
    rating: 4.6,
    reviewCount: 267,
    pros: [
      'Free to use',
      'Fast component generation',
      'React/Next.js focused',
      'Good for prototyping',
      'Modern UI patterns'
    ],
    cons: [
      'Limited to React/Next.js',
      'Generated code needs review',
      'May require customization',
      'Requires Vercel account'
    ],
    bestFor: ['React developers', 'Next.js projects', 'Rapid prototyping', 'UI component development'],
    website: 'https://v0.dev',
    medDeviceExamples: ['Medical device web interfaces', 'Patient portal UIs', 'Clinical dashboard components'],
    regulatoryConsiderations: 'Generated components must be reviewed and tested per IEC 62304. UI components require usability validation per IEC 62366.',
    lastUpdated: new Date('2024-11-17'),
    tags: ['ui-generation', 'react', 'prototyping', 'free']
  },
  {
    id: 'framer',
    name: 'Framer',
    category: 'Software Development & GUI Tools',
    description: 'Advanced prototyping and design tool with code components and interactive animations.',
    useCases: [
      'High-fidelity prototyping',
      'Interactive design',
      'Code component integration',
      'Design handoff'
    ],
    pricing: '$$',
    rating: 4.5,
    reviewCount: 312,
    pros: [
      'Excellent prototyping',
      'Code component support',
      'Great animations',
      'Good for complex interactions'
    ],
    cons: [
      'Steeper learning curve',
      'More expensive than Figma',
      'May be overkill for simple designs',
      'Requires design skills'
    ],
    bestFor: ['Advanced designers', 'Complex prototypes', 'Interactive interfaces', 'Animation-heavy designs'],
    website: 'https://www.framer.com',
    medDeviceExamples: ['Medical device interfaces', 'Complex UI interactions', 'Patient monitoring displays'],
    regulatoryConsiderations: 'Prototypes must be validated through usability testing per IEC 62366. Design fidelity does not replace device validation.',
    lastUpdated: new Date('2024-11-14'),
    tags: ['prototyping', 'design', 'interactive', 'animations']
  },
  {
    id: 'claude-code',
    name: 'Claude Code (Anthropic)',
    category: 'Software Development & GUI Tools',
    description: 'AI coding assistant focused on code understanding, explanation, and safe code generation.',
    useCases: [
      'Code explanation and documentation',
      'Code review assistance',
      'Refactoring suggestions',
      'Security-focused coding'
    ],
    pricing: '$$',
    rating: 4.7,
    reviewCount: 198,
    pros: [
      'Excellent code understanding',
      'Strong security focus',
      'Good for code review',
      'Privacy-conscious',
      'Long context windows'
    ],
    cons: [
      'Subscription required',
      'Less integrated than IDE tools',
      'May be slower than Copilot',
      'Requires manual copy-paste'
    ],
    bestFor: ['Code review', 'Security-sensitive projects', 'Documentation', 'Complex refactoring'],
    website: 'https://www.anthropic.com/claude',
    medDeviceExamples: ['Medical device software review', 'IEC 62304 compliance', 'Security-critical code'],
    regulatoryConsiderations: 'AI suggestions must be reviewed per IEC 62304. Code review assistance does not replace formal code review processes.',
    lastUpdated: new Date('2024-11-16'),
    tags: ['code-review', 'security', 'documentation', 'ai-assistant']
  },
  {
    id: 'replit-agent',
    name: 'Replit Agent',
    category: 'Software Development & GUI Tools',
    description: 'AI coding assistant integrated into Replit IDE that can write, debug, and deploy code.',
    useCases: [
      'Rapid prototyping',
      'Code generation',
      'Debugging assistance',
      'Full-stack development'
    ],
    pricing: '$$',
    rating: 4.2,
    reviewCount: 145,
    pros: [
      'Integrated IDE experience',
      'Full-stack support',
      'Good for learning',
      'Cloud-based development'
    ],
    cons: [
      'Tied to Replit platform',
      'Less flexible than local IDEs',
      'Internet required',
      'May have limitations for enterprise'
    ],
    bestFor: ['Learning', 'Rapid prototyping', 'Cloud development', 'Educational projects'],
    website: 'https://replit.com',
    medDeviceExamples: ['Prototype development', 'Learning projects', 'Quick demos'],
    regulatoryConsiderations: 'Not recommended for production medical device software. Code must be reviewed and validated per IEC 62304 before use in regulated devices.',
    lastUpdated: new Date('2024-11-11'),
    tags: ['ide', 'cloud-development', 'prototyping', 'learning']
  }
];

export const CATEGORIES = [
  'All Categories',
  'Design & CAD',
  'Documentation & Technical Writing',
  'Testing & Validation',
  'Regulatory & Compliance',
  'Quality Management',
  'Risk Management',
  'Data Analysis',
  'Image Analysis',
  'Software Development & GUI Tools'
];

export const PRICING_OPTIONS: PricingTier[] = ['Free', '$', '$$', '$$$', '$$$$'];

export function getToolsByCategory(category: string): AITool[] {
  if (category === 'All Categories') {
    return AI_TOOLS;
  }
  return AI_TOOLS.filter(tool => tool.category === category);
}

export function getToolsByPricing(pricing: PricingTier | 'All'): AITool[] {
  if (pricing === 'All') {
    return AI_TOOLS;
  }
  return AI_TOOLS.filter(tool => tool.pricing === pricing);
}

export function getToolsByRating(minRating: number): AITool[] {
  return AI_TOOLS.filter(tool => tool.rating >= minRating);
}

export function searchTools(query: string): AITool[] {
  const lowerQuery = query.toLowerCase();
  return AI_TOOLS.filter(tool =>
    tool.name.toLowerCase().includes(lowerQuery) ||
    tool.description.toLowerCase().includes(lowerQuery) ||
    tool.category.toLowerCase().includes(lowerQuery) ||
    tool.useCases.some(uc => uc.toLowerCase().includes(lowerQuery)) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getRecommendedTools(type: 'startups' | 'large-companies' | 'free' | 'popular'): AITool[] {
  switch (type) {
    case 'startups':
      return AI_TOOLS.filter(tool => 
        tool.pricing === 'Free' || tool.pricing === '$' || 
        tool.bestFor.includes('Startups') || tool.bestFor.includes('Small teams')
      ).slice(0, 5);
    case 'large-companies':
      return AI_TOOLS.filter(tool => 
        tool.bestFor.includes('Large companies') || tool.bestFor.includes('Large enterprises') || tool.bestFor.includes('Enterprise')
      ).slice(0, 5);
    case 'free':
      return AI_TOOLS.filter(tool => tool.pricing === 'Free').slice(0, 5);
    case 'popular':
      return [...AI_TOOLS].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 5);
    default:
      return [];
  }
}

