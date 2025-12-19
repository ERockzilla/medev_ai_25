'use client';

import StandardPageTemplate from '@/components/StandardPageTemplate';

export default function IEC60601_1Page() {
  return (
    <StandardPageTemplate
      standard={{
        number: 'IEC 60601-1',
        title: 'Medical electrical equipment — Part 1: General requirements for basic safety and essential performance',
        organization: 'IEC',
        publicationDate: '2005',
        currentVersion: '2005 + Amd.1:2012 + Amd.2:2020',
        category: 'medical-electrical',
        purchaseUrl: 'https://webstore.iec.ch/en/publication/67497',
      }}
      overview={{
        scope: 'IEC 60601-1 applies to the basic safety and essential performance of medical electrical equipment and medical electrical systems. The standard specifies general requirements for protection against electric shock, fire, mechanical hazards, excessive temperatures, and radiation. It also addresses electromagnetic compatibility (EMC) through collateral standard IEC 60601-1-2. The standard requires risk management per ISO 14971 and defines "essential performance" as performance necessary to achieve freedom from unacceptable risk.',
        whyItMatters: 'IEC 60601-1 is the fundamental standard for medical electrical equipment safety and is required for CE marking (EU), FDA clearance (US), Health Canada approval, and most international markets. Compliance demonstrates that equipment is safe for use with patients and operators. The standard addresses electrical safety, mechanical safety, and essential performance - ensuring devices function correctly even under fault conditions. Non-compliance can result in market access denial, product recalls, and patient harm.',
        keyConcepts: [
          'Basic safety - freedom from unacceptable risk directly caused by physical hazards',
          'Essential performance - performance necessary to achieve freedom from unacceptable risk',
          'Means of operator protection (MOP) and means of patient protection (MOPP)',
          'Applied parts - parts that can come into contact with the patient',
          'Risk management integration (ISO 14971)',
          'Type B, BF, and CF applied parts (based on patient contact and electrical isolation)',
          'Leakage current limits (earth leakage, enclosure leakage, patient leakage)',
          'Dielectric strength testing',
          'Protection against electric shock (single fault conditions)',
          'EMC requirements (through IEC 60601-1-2)',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'General Requirements (Clause 4)',
            description: 'Equipment must be designed and manufactured to ensure basic safety and essential performance. Risk management per ISO 14971 must be applied. Equipment must be tested under normal conditions and single fault conditions. Essential performance must be defined and maintained even under fault conditions.',
          },
          {
            title: 'Protection Against Electric Shock (Clause 8)',
            description: 'Equipment must provide protection against electric shock through insulation, grounding, and isolation. Means of operator protection (MOOP) and means of patient protection (MOPP) must be adequate. Leakage currents must be within limits: earth leakage (<0.5mA), enclosure leakage (<0.1mA), patient leakage (<0.1mA for Type B, <0.1mA for Type BF, <0.01mA for Type CF).',
          },
          {
            title: 'Applied Parts (Clause 8.5)',
            description: 'Applied parts are classified as Type B (not conductive contact with heart), Type BF (body floating, not cardiac), or Type CF (cardiac floating). Type CF has the strictest requirements. Applied parts must be isolated from mains voltage with appropriate creepage and clearance distances.',
          },
          {
            title: 'Dielectric Strength (Clause 8.8)',
            description: 'Insulation must withstand high voltage testing without breakdown. Test voltages depend on working voltage and insulation type. Tests are performed between live parts and accessible parts, and between applied parts and other parts.',
          },
          {
            title: 'Protection Against Mechanical Hazards (Clause 9)',
            description: 'Equipment must be protected against mechanical hazards including moving parts, sharp edges, instability, and excessive forces. Enclosures must be robust. Moving parts must be guarded or interlocked.',
          },
          {
            title: 'Protection Against Excessive Temperatures (Clause 11)',
            description: 'Equipment must not exceed temperature limits under normal and single fault conditions. Temperature limits depend on material type and location. Applied parts must not exceed 41°C during normal use.',
          },
          {
            title: 'Protection Against Fire (Clause 13)',
            description: 'Equipment must be protected against fire hazards. Enclosure materials must meet flammability requirements (V-1 or better per UL 94). Power supplies and high-power components must be designed to prevent overheating and fire.',
          },
          {
            title: 'Essential Performance (Clause 4.3)',
            description: 'Essential performance must be defined based on risk analysis. Essential performance must be maintained under normal conditions and single fault conditions (unless risk is acceptable). Testing must verify essential performance.',
          },
        ],
      }}
      implementationGuide={{
        title: 'MEE Compliance Implementation Guide',
        steps: [
          {
            step: 1,
            title: 'Define Essential Performance',
            description: 'Based on risk analysis (ISO 14971), identify performance characteristics necessary to achieve freedom from unacceptable risk. For laser systems, essential performance includes laser power accuracy, beam characteristics, safety interlock function, and user interface accuracy. Document essential performance specifications.',
          },
          {
            step: 2,
            title: 'Classify Applied Parts',
            description: 'Determine if equipment has applied parts (parts contacting patient). Classify as Type B, BF, or CF based on patient contact type and electrical isolation requirements. Most laser systems have Type B applied parts (handpiece, delivery fiber). Document classification.',
          },
          {
            step: 3,
            title: 'Design Electrical Safety',
            description: 'Design insulation, grounding, and isolation to meet MOOP and MOPP requirements. Ensure adequate creepage and clearance distances. Design power supply with appropriate isolation. Select components rated for medical use. Consider single fault conditions.',
          },
          {
            step: 4,
            title: 'Design Mechanical Safety',
            description: 'Design enclosures to prevent access to live parts. Guard or interlock moving parts. Ensure stability. Eliminate sharp edges. Design handpieces and delivery systems for safe handling. Consider mechanical hazards in risk analysis.',
          },
          {
            step: 5,
            title: 'Design Thermal Safety',
            description: 'Ensure equipment temperatures remain within limits. Design cooling systems for high-power components. Test temperature rise under normal and fault conditions. Ensure applied parts do not exceed 41°C. Document thermal analysis.',
          },
          {
            step: 6,
            title: 'Select Materials',
            description: 'Select enclosure materials meeting flammability requirements (V-1 or better). Ensure materials are compatible with cleaning and disinfection procedures. Consider biocompatibility for applied parts (ISO 10993). Document material selection.',
          },
          {
            step: 7,
            title: 'Perform Safety Testing',
            description: 'Conduct electrical safety testing including leakage current measurements, dielectric strength testing, and insulation resistance testing. Test under normal and single fault conditions. Verify essential performance under fault conditions. Document all test results.',
          },
          {
            step: 8,
            title: 'Integrate Risk Management',
            description: 'Link IEC 60601-1 requirements to risk analysis (ISO 14971). Identify hazards addressed by each requirement. Verify risk controls through testing. Update risk management file with test results and compliance evidence.',
          },
          {
            step: 9,
            title: 'Prepare Technical Documentation',
            description: 'Compile technical documentation including design specifications, test reports, risk management file, and compliance matrix. Ensure documentation demonstrates compliance with all applicable clauses. Prepare for regulatory submission or certification.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Unclear essential performance definition',
            solution: 'Base essential performance on risk analysis. Consider what performance is necessary to prevent unacceptable risk. Document rationale. Test essential performance under normal and fault conditions. Review with clinical experts.',
          },
          {
            challenge: 'Leakage current failures',
            solution: 'Design with adequate isolation and insulation. Use medical-grade power supplies. Ensure proper grounding. Test leakage currents early in development. Consider Y-capacitors and filtering. Document test setup and conditions.',
          },
          {
            challenge: 'Temperature rise issues',
            solution: 'Design adequate cooling for high-power components. Use thermal analysis tools. Test temperature rise early. Consider forced air cooling or heat sinks. Ensure ventilation paths are not blocked.',
          },
          {
            challenge: 'Material flammability',
            solution: 'Select materials meeting V-1 or better rating. Test materials if uncertain. Consider UL 94 testing. Document material certifications. Ensure suppliers provide flammability ratings.',
          },
          {
            challenge: 'Single fault condition testing',
            solution: 'Identify all single fault conditions (open circuits, short circuits, component failures). Test each fault condition. Verify essential performance is maintained or risk is acceptable. Document fault condition analysis and test results.',
          },
        ],
      }}
      medicalLaserExample={{
        title: 'IEC 60601-1 for Medical Laser Systems',
        description: 'Medical laser systems are medical electrical equipment and must comply with IEC 60601-1. Key considerations include electrical safety of high-voltage laser power supplies, thermal safety of laser sources and delivery systems, mechanical safety of moving parts (beam delivery, handpieces), and essential performance (laser power accuracy, beam characteristics). Laser handpieces are typically Type B applied parts.',
        applications: [
          {
            application: 'Class 4 Surgical Laser System',
            considerations: [
              'Essential performance: Laser power accuracy (±5%), beam spot size, pulse duration, safety interlock function.',
              'Electrical safety: High-voltage power supply (500V-15kV) requires adequate insulation and isolation. Leakage currents must be <0.5mA earth leakage, <0.1mA enclosure leakage.',
              'Applied parts: Laser handpiece and delivery fiber are Type B applied parts. Must be isolated from mains voltage.',
              'Thermal safety: Laser source generates significant heat. Cooling system must prevent excessive temperatures. Handpiece must not exceed 41°C during use.',
              'Mechanical safety: Moving parts (beam delivery arm, handpiece positioning) must be guarded or interlocked. Handpiece must be designed for safe handling.',
              'Single fault conditions: Test with power supply faults, cooling system failures, interlock failures. Essential performance must be maintained or device must fail safely.',
            ],
          },
          {
            application: 'Therapeutic Laser System',
            considerations: [
              'Essential performance: Lower power accuracy requirements (±10% acceptable), treatment timer accuracy, power density calculation.',
              'Electrical safety: Lower voltage power supplies, but same leakage current requirements. Type B applied parts (treatment head).',
              'Thermal safety: Lower power reduces thermal concerns, but continuous operation requires thermal management.',
              'Mechanical safety: Treatment head design, patient positioning aids, stability of equipment.',
              'EMC: Must comply with IEC 60601-1-2 for electromagnetic compatibility in clinical environments.',
            ],
          },
        ],
      }}
      relatedStandards={[
        {
          number: 'IEC 60601-1-2',
          title: 'Medical electrical equipment — Electromagnetic disturbances',
          relationship: 'Collateral standard addressing EMC requirements for MEE',
          url: '/standards/iec-60601-1-2',
        },
        {
          number: 'IEC 60601-2-22',
          title: 'Medical electrical equipment — Laser equipment',
          relationship: 'Particular standard with laser-specific requirements in addition to IEC 60601-1',
          url: '/standards/iec-60601-2-22',
        },
        {
          number: 'ISO 14971',
          title: 'Application of risk management',
          relationship: 'Risk management required throughout IEC 60601-1. Essential performance based on risk analysis.',
          url: '/standards/iso-14971',
        },
        {
          number: 'IEC 62304',
          title: 'Medical device software',
          relationship: 'Software in MEE must comply with IEC 62304',
          url: '/standards/iec-62304',
        },
      ]}
      hotTake={{
        take: `IEC 60601-1 is THE general standard for medical electrical equipment. Master this, and you understand the foundation that all particular standards (like 60601-2-22 for lasers) build upon.

The critical concept: Essential Performance. Define what your device MUST do correctly even under fault conditions. For laser systems, that's power accuracy, beam delivery, and safety interlocks.`,
        context: 'Understanding the general standard makes navigating particular standards and collateral standards straightforward.',
        realWorldTips: [
          'Define Essential Performance early—it drives your design and testing strategy.',
          'Leakage current limits vary by applied part type: B, BF, or CF. Know your classification.',
          'Single fault condition testing catches most design issues. Test early and often.',
          'High-voltage laser power supplies need special attention for insulation and creepage.',
        ],
      }}
    />
  );
}

