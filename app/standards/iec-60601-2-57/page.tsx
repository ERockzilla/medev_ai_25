'use client';

import StandardPageTemplate from '@/components/StandardPageTemplate';

export default function IEC60601257Page() {
  return (
    <StandardPageTemplate
      standard={{
        number: 'IEC 60601-2-57',
        title: 'Medical electrical equipment — Part 2-57: Particular requirements for basic safety and essential performance of non-laser light source equipment',
        organization: 'IEC',
        publicationDate: '2019',
        currentVersion: '2019',
        category: 'medical-electrical',
        purchaseUrl: 'https://webstore.iec.ch/en/publication/61399',
      }}
      overview={{
        scope: 'IEC 60601-2-57 specifies particular requirements for the basic safety and essential performance of medical electrical equipment that uses non-laser light sources, such as LEDs, for therapeutic, diagnostic, monitoring, or cosmetic purposes. This standard applies to equipment using visible, infrared, or ultraviolet light sources, excluding lasers (which are covered by IEC 60601-2-22).',
        whyItMatters: 'IEC 60601-2-57 addresses the growing use of LED and other non-laser light sources in medical devices. These devices require specific safety considerations different from lasers, including photobiological safety, thermal management, and optical radiation hazards. Compliance with this standard ensures safe use of LED-based medical equipment and is required for regulatory approval in many markets. Understanding this standard is essential for manufacturers of phototherapy devices, diagnostic equipment, and cosmetic light therapy systems.',
        keyConcepts: [
          'Photobiological safety assessment',
          'Optical radiation hazard evaluation',
          'LED and non-laser light source safety',
          'Thermal management requirements',
          'Exposure limits and risk groups',
          'Safety controls and interlocks',
          'Measurement and testing requirements',
          'Labeling and user information',
          'Risk management integration',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'Photobiological Safety',
            description: 'Equipment must be evaluated for photobiological safety per IEC 62471 (Photobiological safety of lamps and lamp systems). Assess hazards including UV radiation, blue light hazard, retinal thermal hazard, and skin thermal hazard. Classify equipment into risk groups.',
          },
          {
            title: 'Optical Radiation Limits',
            description: 'Equipment must comply with exposure limits for optical radiation. Limits depend on wavelength, exposure duration, and tissue type. Consider both intentional exposure (treatment) and unintended exposure (operators, bystanders).',
          },
          {
            title: 'Safety Controls',
            description: 'Implement safety controls to prevent excessive exposure, including exposure timers, power limits, and automatic shutoff. Controls must be reliable and fail-safe. Consider user override capabilities and their safety implications.',
          },
          {
            title: 'Thermal Management',
            description: 'Manage thermal effects of light sources to prevent burns or tissue damage. Consider both direct thermal effects and indirect heating. Implement temperature monitoring and limits where appropriate.',
          },
          {
            title: 'Interlocks and Safety Systems',
            description: 'Implement interlocks and safety systems to prevent unintended exposure. Consider access controls, emergency stops, and safety monitoring. Ensure safety systems are independent and reliable.',
          },
          {
            title: 'Measurement and Testing',
            description: 'Conduct measurements of optical radiation output, spectral distribution, and exposure levels. Test safety controls and interlocks. Document measurement methods and results.',
          },
          {
            title: 'Labeling and Warnings',
            description: 'Provide appropriate warnings and safety information on equipment and in instructions. Include risk group classification, exposure limits, safety precautions, and protective equipment requirements.',
          },
          {
            title: 'Risk Management',
            description: 'Integrate optical radiation risks into overall risk management per ISO 14971. Identify hazards, assess risks, implement risk controls, and verify effectiveness. Document risk management activities.',
          },
        ],
      }}
      implementationGuide={{
        title: 'Implementation Roadmap',
        steps: [
          {
            step: 1,
            title: 'Characterize Light Source',
            description: 'Characterize your light source including wavelength range, spectral distribution, power output, beam characteristics, and temporal characteristics. Document all optical parameters.',
          },
          {
            step: 2,
            title: 'Conduct Photobiological Safety Assessment',
            description: 'Assess photobiological safety per IEC 62471. Evaluate UV radiation, blue light hazard, retinal thermal hazard, and skin thermal hazard. Measure or calculate exposure levels.',
          },
          {
            step: 3,
            title: 'Determine Risk Group',
            description: 'Classify equipment into risk group based on photobiological safety assessment. Risk groups range from Exempt (no hazard) to Risk Group 3 (high hazard). Risk group determines labeling and safety requirements.',
          },
          {
            step: 4,
            title: 'Assess Exposure Scenarios',
            description: 'Evaluate exposure scenarios including intended use, user exposure, operator exposure, and bystander exposure. Consider normal use, misuse, and fault conditions.',
          },
          {
            step: 5,
            title: 'Design Safety Controls',
            description: 'Design safety controls to prevent excessive exposure, including exposure timers, power limits, automatic shutoff, and access controls. Ensure controls are reliable and fail-safe.',
          },
          {
            step: 6,
            title: 'Implement Thermal Management',
            description: 'Design thermal management to prevent burns or tissue damage. Consider heat dissipation, temperature monitoring, and thermal limits. Test thermal performance under various conditions.',
          },
          {
            step: 7,
            title: 'Design Interlocks and Safety Systems',
            description: 'Implement interlocks and safety systems to prevent unintended exposure. Consider access controls, emergency stops, and safety monitoring. Ensure independence and reliability.',
          },
          {
            step: 8,
            title: 'Conduct Safety Testing',
            description: 'Test safety controls, interlocks, and thermal management. Verify compliance with exposure limits. Test under normal and fault conditions. Document test results.',
          },
          {
            step: 9,
            title: 'Develop Labeling and Instructions',
            description: 'Create appropriate warnings and safety information. Include risk group classification, exposure limits, safety precautions, and protective equipment requirements. Ensure information is clear and prominent.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Determining appropriate exposure limits',
            solution: 'Use IEC 62471 for photobiological safety assessment and exposure limit determination. Consider both intended exposure (treatment) and unintended exposure. Consult with optical safety experts if needed.',
          },
          {
            challenge: 'Managing thermal effects',
            solution: 'Design effective thermal management including heat dissipation, temperature monitoring, and limits. Test thermal performance under various use conditions. Consider both direct and indirect thermal effects.',
          },
          {
            challenge: 'Balancing safety with usability',
            solution: 'Design safety controls that are effective but don\'t impede legitimate use. Consider user workflows and provide appropriate safety defaults. Balance safety requirements with usability requirements.',
          },
        ],
      }}
      medicalLaserExample={{
        title: 'IEC 60601-2-57 for Non-Laser Light Source Medical Equipment',
        description: 'While this standard applies to non-laser light sources, understanding it helps differentiate LED and other light source requirements from laser requirements. Many medical devices use LED arrays for phototherapy, wound healing, and cosmetic applications.',
        applications: [
          {
            application: 'LED Phototherapy Devices',
            considerations: [
              'Assess photobiological safety per IEC 62471',
              'Determine risk group classification',
              'Implement exposure controls and timers',
              'Manage thermal effects of LED arrays',
              'Provide appropriate warnings and safety information',
            ],
          },
          {
            application: 'UV Therapy Equipment',
            considerations: [
              'Evaluate UV radiation hazards',
              'Implement UV exposure limits and controls',
              'Provide eye and skin protection requirements',
              'Consider operator and bystander exposure',
              'Include appropriate warnings for UV hazards',
            ],
          },
          {
            application: 'Diagnostic Light Sources',
            considerations: [
              'Assess optical radiation for diagnostic purposes',
              'Ensure safe exposure levels',
              'Implement safety controls for high-intensity sources',
              'Consider operator exposure during use',
              'Provide safety information and training requirements',
            ],
          },
        ],
      }}
      relatedStandards={[
        {
          number: 'IEC 60601-1',
          title: 'Medical electrical equipment general requirements',
          relationship: 'IEC 60601-2-57 is a particular standard that extends IEC 60601-1',
          url: '/standards/iec-60601-1',
        },
        {
          number: 'IEC 60601-2-22',
          title: 'Laser equipment',
          relationship: 'IEC 60601-2-22 covers lasers, IEC 60601-2-57 covers non-laser light sources',
          url: '/standards/iec-60601-2-22',
        },
        {
          number: 'IEC 62471',
          title: 'Photobiological safety of lamps',
          relationship: 'IEC 62471 provides photobiological safety assessment methods used in IEC 60601-2-57',
          url: '/standards',
        },
        {
          number: 'ISO 14971',
          title: 'Risk management',
          relationship: 'Optical radiation risks must be managed per ISO 14971',
          url: '/standards/iso-14971',
        },
      ]}
      hotTake={{
        take: `IEC 60601-2-57 covers non-laser light sources—LEDs, IPL, and other optical technologies that often get overlooked because they're "not lasers." Don't underestimate this standard.

The key difference from 60601-2-22: different hazard profiles, different emission limits, different testing approaches. Many manufacturers try to apply laser thinking to LED devices and create compliance gaps.`,
        context: 'LED and broadband light technologies are growing fast in aesthetics and therapeutics. Getting the optical safety right positions you ahead of the market.',
        realWorldTips: [
          'IPL devices have unique temporal emission characteristics—understand your pulse profiles.',
          'LED arrays require different thermal management considerations than laser sources.',
          'UV and blue light wavelengths have specific biological hazard considerations.',
          'Don\'t confuse this standard\'s requirements with IEC 60601-2-22 laser requirements.',
        ],
      }}
    />
  );
}

