'use client';

import StandardPageTemplate from '@/components/StandardPageTemplate';

export default function IEC60601_2_22Page() {
  return (
    <StandardPageTemplate
      standard={{
        number: 'IEC 60601-2-22',
        title: 'Medical electrical equipment — Part 2-22: Particular requirements for basic safety and essential performance of surgical, cosmetic, therapeutic and diagnostic laser equipment',
        organization: 'IEC',
        publicationDate: '2019',
        currentVersion: '2019',
        category: 'laser-safety',
        purchaseUrl: 'https://webstore.iec.ch/en/publication/59671',
      }}
      overview={{
        scope: 'IEC 60601-2-22 specifies particular requirements for the basic safety and essential performance of laser equipment used for surgical, cosmetic, therapeutic, and diagnostic applications. This standard applies in addition to IEC 60601-1 (general requirements) and addresses laser-specific hazards including optical radiation, electrical hazards from high-voltage power supplies, thermal hazards, and mechanical hazards from beam delivery systems. The standard covers laser sources, control systems, safety interlocks, beam delivery systems, and user interfaces.',
        whyItMatters: 'IEC 60601-2-22 is the primary standard for medical laser equipment safety and is required for CE marking and FDA clearance of laser devices. The standard addresses unique hazards of laser systems that are not covered by general MEE requirements. Compliance ensures laser systems are safe for use with patients and operators. Laser-specific requirements include safety interlock systems, beam delivery safety, laser classification integration (IEC 60825-1), and protection against optical radiation hazards. Non-compliance can result in serious patient injury, product recalls, and regulatory action.',
        keyConcepts: [
          'Laser equipment classification and integration with IEC 60825-1',
          'Safety interlock systems (primary, secondary, tertiary)',
          'Beam delivery system safety (fiber optics, articulated arms, handpieces)',
          'Laser power monitoring and control',
          'Emergency stop and beam shutter requirements',
          'Protection against optical radiation hazards',
          'Laser warning labels and indicators',
          'User interface requirements for laser control',
          'Maintenance and service safety',
          'Integration with IEC 60601-1 general requirements',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'Laser Classification (Clause 201.3)',
            description: 'Laser equipment must comply with IEC 60825-1 for laser product classification. Medical laser systems are typically Class 4 lasers (accessible emission exceeds AEL for Class 3B). Classification determines safety requirements including interlock systems, warning labels, and protective equipment requirements.',
          },
          {
            title: 'Safety Interlock Systems (Clause 201.11)',
            description: 'Laser equipment must have safety interlock systems to prevent laser emission when safety conditions are not met. Requirements include: primary interlock (prevents laser operation when enclosure is open), secondary interlock (redundant protection), and tertiary interlock (additional protection for high-risk applications). Interlocks must be fail-safe and tested regularly.',
          },
          {
            title: 'Beam Delivery System (Clause 201.12)',
            description: 'Beam delivery systems (fiber optics, articulated arms, handpieces) must be designed for safe operation. Requirements include: beam containment, protection against fiber breakage, handpiece safety (temperature limits, ergonomics), and beam termination. Delivery systems must be tested for optical power transmission and safety.',
          },
          {
            title: 'Laser Power Control (Clause 201.13)',
            description: 'Laser power must be accurately controlled and monitored. Requirements include: power accuracy (±5% or better), power monitoring during operation, automatic shutoff on error, and power calibration procedures. Power control software must comply with IEC 62304.',
          },
          {
            title: 'Emergency Stop and Beam Shutter (Clause 201.14)',
            description: 'Laser equipment must have emergency stop function that immediately terminates laser emission. Beam shutter must be provided to block laser beam when not in use. Emergency stop must be easily accessible and clearly marked. Shutter must be fail-safe.',
          },
          {
            title: 'Warning Labels and Indicators (Clause 201.15)',
            description: 'Laser equipment must have appropriate warning labels per IEC 60825-1 including laser classification, wavelength, maximum output power, and safety symbols. Visual and audible indicators must show laser emission status. Warning labels must be visible and durable.',
          },
          {
            title: 'User Interface (Clause 201.16)',
            description: 'User interface must clearly display laser parameters (power, pulse duration, mode), safety status (interlock status, emission status), and provide clear controls. Interface must comply with usability requirements (IEC 62366). Controls must prevent accidental activation.',
          },
          {
            title: 'Protection Against Optical Radiation (Clause 201.17)',
            description: 'Equipment must provide protection against optical radiation hazards. Requirements include: beam containment, protective housings, interlock systems, and information for safety (protective eyewear requirements, access restrictions). Nominal Ocular Hazard Distance (NOHD) must be calculated and documented.',
          },
        ],
      }}
      implementationGuide={{
        title: 'Laser Equipment Compliance Implementation Guide',
        steps: [
          {
            step: 1,
            title: 'Determine Laser Classification',
            description: 'Classify laser product per IEC 60825-1 based on accessible emission limits (AEL). Most medical laser systems are Class 4. Document classification and rationale. Classification determines safety requirements including interlock systems and warning labels.',
          },
          {
            step: 2,
            title: 'Design Safety Interlock System',
            description: 'Design primary, secondary, and tertiary interlock systems. Primary interlock prevents laser operation when enclosure is open. Secondary interlock provides redundant protection. Tertiary interlock adds protection for high-risk applications. Ensure interlocks are fail-safe (fail to safe state). Test interlock functionality.',
          },
          {
            step: 3,
            title: 'Design Beam Delivery System',
            description: 'Design beam delivery system (fiber optics, articulated arms, handpieces) for safe operation. Ensure beam containment, protect against fiber breakage, design handpieces for safe handling and temperature limits. Test optical power transmission and safety. Verify beam termination when disconnected.',
          },
          {
            step: 4,
            title: 'Implement Laser Power Control',
            description: 'Design accurate power control system (±5% accuracy). Implement power monitoring during operation. Add automatic shutoff on error conditions. Establish power calibration procedures. Verify power control software per IEC 62304. Test power accuracy across operating range.',
          },
          {
            step: 5,
            title: 'Design Emergency Stop and Beam Shutter',
            description: 'Implement emergency stop function that immediately terminates laser emission. Design beam shutter to block laser beam when not in use. Ensure emergency stop is easily accessible and clearly marked. Verify shutter is fail-safe. Test emergency stop and shutter functionality.',
          },
          {
            step: 6,
            title: 'Create Warning Labels and Indicators',
            description: 'Design warning labels per IEC 60825-1 including laser classification, wavelength, maximum output power, and safety symbols. Implement visual and audible indicators for laser emission status. Ensure labels are visible, durable, and properly located. Verify label compliance.',
          },
          {
            step: 7,
            title: 'Design User Interface',
            description: 'Design user interface to clearly display laser parameters and safety status. Ensure controls prevent accidental activation. Comply with usability requirements (IEC 62366). Test user interface with representative users. Verify interface supports safe operation.',
          },
          {
            step: 8,
            title: 'Calculate Nominal Ocular Hazard Distance',
            description: 'Calculate NOHD based on laser power, beam divergence, and wavelength. Document NOHD for all operating modes. Use NOHD to determine access restrictions and protective equipment requirements. Include NOHD in user instructions.',
          },
          {
            step: 9,
            title: 'Perform Safety Testing',
            description: 'Conduct comprehensive safety testing including: interlock testing (all interlock types), power accuracy testing, beam delivery safety testing, emergency stop testing, shutter testing, and optical radiation measurements. Test under normal and single fault conditions. Document all test results.',
          },
          {
            step: 10,
            title: 'Integrate with Risk Management',
            description: 'Link IEC 60601-2-22 requirements to risk analysis (ISO 14971). Identify laser-specific hazards (optical radiation, electrical, thermal). Verify risk controls through testing. Update risk management file with test results and compliance evidence.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Inadequate interlock systems',
            solution: 'Design redundant interlock systems (primary, secondary, tertiary). Ensure interlocks are fail-safe. Test all interlock types regularly. Use hardware interlocks in addition to software interlocks. Document interlock design and testing.',
          },
          {
            challenge: 'Beam delivery system failures',
            solution: 'Design robust beam delivery systems. Protect against fiber breakage. Ensure beam termination when disconnected. Test optical power transmission. Monitor beam delivery during operation. Design handpieces for safe handling.',
          },
          {
            challenge: 'Power control accuracy issues',
            solution: 'Calibrate power control system regularly. Monitor power during operation. Implement automatic shutoff on error. Use redundant power monitoring. Test power accuracy across full operating range. Document calibration procedures.',
          },
          {
            challenge: 'Insufficient warning labels',
            solution: 'Follow IEC 60825-1 labeling requirements exactly. Include all required information (classification, wavelength, power, symbols). Ensure labels are visible and durable. Place labels in appropriate locations. Verify label compliance.',
          },
          {
            challenge: 'User interface use errors',
            solution: 'Design intuitive user interface per IEC 62366. Prevent accidental activation. Provide clear feedback. Test with representative users. Implement confirmation prompts for high-power operations. Document usability validation.',
          },
        ],
      }}
      medicalLaserExample={{
        title: 'IEC 60601-2-22 for Class 4 Medical Laser Systems',
        description: 'Class 4 laser systems (surgical and therapeutic) present significant safety challenges requiring comprehensive interlock systems, accurate power control, safe beam delivery, and clear user interfaces. The standard addresses unique hazards of high-power lasers including optical radiation (eye injury, skin burns), electrical hazards from high-voltage power supplies, thermal hazards from laser sources and delivery systems, and use errors.',
        applications: [
          {
            application: 'Class 4 Surgical Laser System (Ophthalmic, Dermatological)',
            considerations: [
              'Laser classification: Class 4 (accessible emission > Class 3B AEL). Requires comprehensive safety systems.',
              'Safety interlocks: Primary interlock (enclosure access), secondary interlock (redundant monitoring), tertiary interlock (beam delivery connection). All must be fail-safe.',
              'Beam delivery: Fiber optic or articulated arm delivery system. Must contain beam, protect against breakage, terminate when disconnected. Handpiece must be safe for surgical use.',
              'Power control: Power accuracy ±5%, real-time power monitoring, automatic shutoff on error, calibration procedures. Power control software is Class C (IEC 62304).',
              'Emergency stop: Easily accessible emergency stop immediately terminates laser emission. Beam shutter blocks beam when not in use.',
              'Warning labels: Class 4 laser warning labels, wavelength, maximum power, safety symbols. Visual and audible emission indicators.',
              'NOHD: Calculate and document Nominal Ocular Hazard Distance. Use to determine access restrictions and protective eyewear requirements.',
            ],
          },
          {
            application: 'Class 4 Therapeutic Laser System',
            considerations: [
              'Lower power than surgical but still Class 4. Same safety requirements apply.',
              'Safety interlocks: Required but may be simpler than surgical systems. Still need primary and secondary interlocks.',
              'Beam delivery: Treatment head design, patient positioning aids, beam termination.',
              'Power control: Lower accuracy requirements (±10% acceptable), but still need monitoring and calibration.',
              'User interface: Simpler than surgical systems, but must prevent use errors (overexposure, wrong settings).',
              'Protective equipment: Protective eyewear requirements, access restrictions, treatment area controls.',
            ],
          },
        ],
      }}
      relatedStandards={[
        {
          number: 'IEC 60825-1',
          title: 'Safety of laser products — Equipment classification',
          relationship: 'IEC 60601-2-22 requires compliance with IEC 60825-1 for laser classification',
          url: '/standards/iec-60825-1',
        },
        {
          number: 'IEC 60601-1',
          title: 'Medical electrical equipment — General requirements',
          relationship: 'IEC 60601-2-22 applies in addition to IEC 60601-1 general requirements',
          url: '/standards/iec-60601-1',
        },
        {
          number: 'IEC 60601-1-2',
          title: 'Medical electrical equipment — Electromagnetic disturbances',
          relationship: 'Laser equipment must also comply with EMC requirements',
          url: '/standards/iec-60601-1-2',
        },
        {
          number: 'IEC 62304',
          title: 'Medical device software',
          relationship: 'Laser control software must comply with IEC 62304',
          url: '/standards/iec-62304',
        },
        {
          number: 'ISO 14971',
          title: 'Application of risk management',
          relationship: 'Laser-specific hazards must be addressed in risk analysis',
          url: '/standards/iso-14971',
        },
      ]}
      hotTake={{
        take: `IEC 60601-2-22 provides the fundamentals for laser safety and performance in medical devices. It covers what matters most: laser indicators, fault state recognition timing, and basic performance requirements that keep patients and operators safe.

Here's the key insight: this standard is your roadmap to FDA Laser Notice 56 compliance. When you nail 60601-2-22, you're simultaneously building your laser safety case for FDA.`,
        context: 'Getting laser fundamentals right from the start makes regulatory submissions smoother across all markets.',
        realWorldTips: [
          'Focus on laser indicators and warning systems—auditors check these first.',
          'Fault state recognition timing requirements are often underspecified. Define yours early.',
          'Use this standard as your foundation for FDA Laser Notice 56 compliance.',
          'Coordinate with IEC 60825-1 for classification requirements.',
        ],
      }}
    />
  );
}

