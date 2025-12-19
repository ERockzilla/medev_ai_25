'use client';

import StandardPageTemplate from '@/components/StandardPageTemplate';

export default function IEC60825_1Page() {
  return (
    <StandardPageTemplate
      standard={{
        number: 'IEC 60825-1',
        title: 'Safety of laser products — Part 1: Equipment classification and requirements',
        organization: 'IEC',
        publicationDate: '2014',
        currentVersion: '2014 + Amd.1:2017 + Amd.2:2021',
        category: 'laser-safety',
        purchaseUrl: 'https://webstore.iec.ch/en/publication/3587',
      }}
      overview={{
        scope: 'IEC 60825-1 provides a system for classification of laser products according to their ability to produce biological damage to the eye or skin. The standard defines seven laser classes (1, 1M, 2, 2M, 3R, 3B, 4) based on accessible emission limits (AEL) and provides safety requirements for each class. The standard covers laser products including medical laser equipment, industrial lasers, and consumer laser products. Requirements include labeling, protective equipment, interlock systems, and user instructions.',
        whyItMatters: 'IEC 60825-1 is the fundamental standard for laser safety and is required worldwide for laser products. For medical devices, laser classification determines safety requirements in IEC 60601-2-22. Proper classification ensures appropriate safety measures are implemented. Class 4 lasers (most medical lasers) require the most stringent safety measures including comprehensive interlock systems, protective equipment, and access controls. Incorrect classification can lead to inadequate safety measures and serious injury.',
        keyConcepts: [
          'Laser classification system (1, 1M, 2, 2M, 3R, 3B, 4)',
          'Accessible Emission Limit (AEL) - maximum accessible laser radiation',
          'Maximum Permissible Exposure (MPE) - safe exposure levels for eye and skin',
          'Nominal Ocular Hazard Distance (NOHD) - distance at which MPE is exceeded',
          'Laser warning labels and safety symbols',
          'Protective equipment requirements (eyewear, barriers)',
          'Interlock requirements by class',
          'User instructions and safety information',
          'Integration with IEC 60601-2-22 for medical lasers',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'Laser Classification (Clause 3)',
            description: 'Lasers are classified based on accessible emission limits (AEL) and potential for biological damage. Class 1: Safe under all conditions. Class 1M: Safe for unaided eye, but may be hazardous with optical instruments. Class 2: Visible lasers safe for brief exposure (<0.25s). Class 2M: Visible lasers safe for unaided eye, hazardous with optical instruments. Class 3R: Low-risk, some safety measures required. Class 3B: Moderate risk, safety measures required. Class 4: High risk, comprehensive safety measures required.',
          },
          {
            title: 'Accessible Emission Limits (AEL) (Clause 3)',
            description: 'AEL values are specified for each laser class based on wavelength, exposure duration, and measurement conditions. AEL values are different for different wavelengths (visible, near-infrared, far-infrared). Classification is determined by comparing actual accessible emission to AEL values.',
          },
          {
            title: 'Warning Labels (Clause 5)',
            description: 'Laser products must have appropriate warning labels indicating laser class, wavelength, maximum output power, and safety symbols. Labels must be visible, durable, and properly located. Class 3B and 4 lasers require prominent warning labels. Label format and content are specified in the standard.',
          },
          {
            title: 'Safety Interlocks (Clause 4.3)',
            description: 'Class 3B and 4 lasers must have safety interlocks to prevent access to laser radiation during operation or maintenance. Interlocks must be fail-safe. Requirements are more detailed in IEC 60601-2-22 for medical lasers.',
          },
          {
            title: 'Protective Equipment (Clause 4.4)',
            description: 'Class 3B and 4 lasers require protective equipment including laser protective eyewear appropriate for the wavelength and power. Eyewear must be specified in user instructions. Access barriers and beam stops may be required.',
          },
          {
            title: 'User Instructions (Clause 5.4)',
            description: 'Laser products must include user instructions covering: laser classification, hazards, safety precautions, protective equipment requirements, maintenance procedures, and emergency procedures. Instructions must be clear and comprehensive.',
          },
          {
            title: 'Maintenance and Service (Clause 4.5)',
            description: 'Laser products must be designed to allow safe maintenance and service. Service procedures must be documented. Service personnel must be trained. Service interlocks may be required for Class 3B and 4 lasers.',
          },
          {
            title: 'Measurement and Classification (Annex A)',
            description: 'The standard provides detailed procedures for measuring accessible emission and determining laser classification. Measurements must be performed under worst-case conditions. Classification must be documented.',
          },
        ],
      }}
      implementationGuide={{
        title: 'Laser Classification and Safety Implementation Guide',
        steps: [
          {
            step: 1,
            title: 'Measure Accessible Emission',
            description: 'Measure accessible laser emission under worst-case conditions including all operating modes, wavelengths, and exposure durations. Use appropriate measurement equipment and methods per Annex A. Measure at all accessible locations including service access points.',
          },
          {
            step: 2,
            title: 'Determine Laser Classification',
            description: 'Compare measured accessible emission to AEL values for each class. Classify laser at the highest applicable class. For medical lasers, most are Class 4. Document classification rationale including measurement conditions and results.',
          },
          {
            step: 3,
            title: 'Calculate Nominal Ocular Hazard Distance',
            description: 'Calculate NOHD based on laser power, beam divergence, wavelength, and MPE values. NOHD is the distance at which direct exposure exceeds MPE. Document NOHD for all operating modes. Use NOHD to determine access restrictions.',
          },
          {
            step: 4,
            title: 'Design Warning Labels',
            description: 'Create warning labels per standard requirements including: laser class symbol, wavelength, maximum output power, and safety warnings. Ensure labels are visible, durable, and properly located. Class 3B and 4 require prominent labels.',
          },
          {
            step: 5,
            title: 'Specify Protective Equipment',
            description: 'For Class 3B and 4 lasers, specify appropriate laser protective eyewear. Eyewear must be rated for the specific wavelength and power level. Specify optical density (OD) requirements. Include protective equipment requirements in user instructions.',
          },
          {
            step: 6,
            title: 'Design Safety Interlocks',
            description: 'For Class 3B and 4 lasers, design safety interlock systems per IEC 60601-2-22 (medical lasers) or general requirements. Interlocks must prevent access to laser radiation. Ensure interlocks are fail-safe. Test interlock functionality.',
          },
          {
            step: 7,
            title: 'Create User Instructions',
            description: 'Develop comprehensive user instructions covering: laser classification, hazards, safety precautions, protective equipment, operating procedures, maintenance, and emergency procedures. Ensure instructions are clear and user-friendly. Comply with usability requirements (IEC 62366).',
          },
          {
            step: 8,
            title: 'Design Access Controls',
            description: 'For Class 4 lasers, implement access controls including: controlled access areas, warning signs, beam barriers, and entry/exit procedures. Calculate and post NOHD information. Ensure unauthorized access is prevented.',
          },
          {
            step: 9,
            title: 'Perform Safety Testing',
            description: 'Test laser safety systems including: interlock testing, label visibility, protective equipment effectiveness, and access controls. Verify classification is correct. Test under all operating conditions. Document test results.',
          },
          {
            step: 10,
            title: 'Integrate with Medical Device Requirements',
            description: 'For medical lasers, ensure IEC 60825-1 compliance integrates with IEC 60601-2-22 requirements. Link laser classification to risk analysis (ISO 14971). Document compliance with both standards. Include laser safety in risk management file.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Incorrect laser classification',
            solution: 'Measure accessible emission carefully under worst-case conditions. Consider all operating modes and wavelengths. Use appropriate measurement equipment. Consult laser safety expert if uncertain. Document measurement conditions and rationale.',
          },
          {
            challenge: 'Inadequate warning labels',
            solution: 'Follow standard requirements exactly for label format and content. Ensure labels are visible and durable. Place labels in appropriate locations. Verify label compliance. Update labels if laser parameters change.',
          },
          {
            challenge: 'Insufficient protective equipment',
            solution: 'Specify appropriate laser protective eyewear with correct optical density for wavelength and power. Ensure eyewear is available and used. Include protective equipment requirements in user instructions and training.',
          },
          {
            challenge: 'NOHD calculation errors',
            solution: 'Use correct formulas and MPE values for wavelength. Consider beam divergence and operating modes. Calculate NOHD for worst-case conditions. Document calculation methodology. Review calculations with laser safety expert.',
          },
          {
            challenge: 'Inadequate access controls',
            solution: 'Implement appropriate access controls for Class 4 lasers. Use warning signs, barriers, and controlled access areas. Ensure unauthorized access is prevented. Document access control procedures.',
          },
        ],
      }}
      medicalLaserExample={{
        title: 'IEC 60825-1 for Medical Laser Systems',
        description: 'Medical laser systems are typically Class 4 lasers because accessible emission exceeds Class 3B AEL. Class 4 lasers can cause serious eye injury, skin burns, and fire hazards. Comprehensive safety measures are required including interlock systems, protective equipment, access controls, and clear user instructions. Classification must be integrated with IEC 60601-2-22 requirements for medical electrical equipment.',
        applications: [
          {
            application: 'Class 4 Surgical Laser (Ophthalmic, 532nm, 1W CW)',
            considerations: [
              'Classification: Class 4 (accessible emission > Class 3B AEL). Requires comprehensive safety measures.',
              'AEL: Class 3B AEL for 532nm visible laser is 0.5W. System exceeds this, so Class 4.',
              'NOHD: Calculate NOHD based on 1W power, beam divergence, and MPE for 532nm. NOHD determines access restrictions.',
              'Warning labels: Class 4 laser warning label with wavelength (532nm), maximum power (1W), and safety symbols. Labels on laser housing and control panel.',
              'Protective equipment: Laser protective eyewear with OD 4+ for 532nm required for all personnel in laser area.',
              'Interlocks: Safety interlock system per IEC 60601-2-22 prevents laser operation when safety conditions not met.',
              'Access controls: Controlled access area, warning signs, beam barriers, entry/exit procedures.',
            ],
          },
          {
            application: 'Class 4 Therapeutic Laser (810nm, 5W CW)',
            considerations: [
              'Classification: Class 4 (accessible emission > Class 3B AEL for 810nm near-infrared).',
              'AEL: Class 3B AEL for 810nm is higher than visible, but 5W still exceeds Class 3B, so Class 4.',
              'NOHD: Calculate NOHD for 810nm near-infrared laser. Near-infrared is invisible, so NOHD may be longer.',
              'Warning labels: Class 4 laser warning label with 810nm wavelength, 5W power. Invisible beam warning important.',
              'Protective equipment: Laser protective eyewear with appropriate OD for 810nm. Near-infrared requires different eyewear than visible.',
              'Safety measures: Same interlock and access control requirements as surgical lasers.',
            ],
          },
          {
            application: 'Pulsed Laser System (1064nm, 100mJ per pulse, 10Hz)',
            considerations: [
              'Classification: Calculate average power (100mJ × 10Hz = 1W average) and peak power. Class 4 if exceeds Class 3B AEL.',
              'Pulse considerations: Pulsed lasers have different AEL values than CW lasers. Consider both average and peak power.',
              'NOHD: Calculate NOHD considering pulse characteristics. Pulsed lasers may have different hazard distances.',
              'Warning labels: Include pulse characteristics (pulse energy, repetition rate) in addition to average power.',
              'Protective equipment: Laser protective eyewear rated for pulsed 1064nm lasers with appropriate OD.',
            ],
          },
        ],
      }}
      relatedStandards={[
        {
          number: 'IEC 60601-2-22',
          title: 'Medical electrical equipment — Laser equipment',
          relationship: 'IEC 60601-2-22 requires compliance with IEC 60825-1 for laser classification',
          url: '/standards/iec-60601-2-22',
        },
        {
          number: 'IEC 60601-1',
          title: 'Medical electrical equipment — General requirements',
          relationship: 'Medical laser equipment must comply with both IEC 60825-1 and IEC 60601-1',
          url: '/standards/iec-60601-1',
        },
        {
          number: 'ISO 14971',
          title: 'Application of risk management',
          relationship: 'Laser hazards (optical radiation) must be addressed in risk analysis',
          url: '/standards/iso-14971',
        },
        {
          number: 'IEC 62366',
          title: 'Application of usability engineering',
          relationship: 'User instructions and safety information must comply with usability requirements',
          url: '/standards/iec-62366',
        },
      ]}
      hotTake={{
        take: `IEC 60825-1 is THE classification standard for laser products worldwide. Everything flows from here—your Class 4 designation determines interlock requirements, labeling, NOHD calculations, and protective eyewear specs across every market you enter.

Master this standard's AEL tables and classification logic. When you understand how classification works, 60601-2-22 compliance and FDA laser submissions become straightforward.`,
        context: 'Laser classification is foundational—get it right, and downstream compliance follows naturally.',
        realWorldTips: [
          'Measure accessible emission under worst-case conditions—not just typical operation.',
          'NOHD calculations drive your access control and protective equipment requirements.',
          'Class 4 medical lasers require the full interlock hierarchy—primary, secondary, tertiary.',
          'Warning label requirements are specific and auditors check them carefully.',
        ],
      }}
    />
  );
}

