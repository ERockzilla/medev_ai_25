'use client';

import StandardPageTemplate from '@/components/StandardPageTemplate';

export default function IEC60601_1_2Page() {
  return (
    <StandardPageTemplate
      standard={{
        number: 'IEC 60601-1-2',
        title: 'Medical electrical equipment — Part 1-2: General requirements for basic safety and essential performance — Collateral Standard: Electromagnetic disturbances — Requirements and tests',
        organization: 'IEC',
        publicationDate: '2014',
        currentVersion: '2014 + Amd.1:2020',
        category: 'medical-electrical',
        purchaseUrl: 'https://webstore.iec.ch/en/publication/23943',
      }}
      overview={{
        scope: 'IEC 60601-1-2 specifies requirements and tests for electromagnetic compatibility (EMC) of medical electrical equipment and medical electrical systems. The standard addresses both emission (equipment disturbing other devices) and immunity (equipment being disturbed by external sources). It ensures medical equipment can operate safely in typical healthcare environments without interfering with other equipment and without being affected by electromagnetic disturbances.',
        whyItMatters: 'Medical devices operate in environments with many electromagnetic sources (other medical equipment, wireless devices, power systems). EMC failures can cause equipment malfunction, incorrect readings, or safety system failures - potentially leading to patient harm. IEC 60601-1-2 compliance is required for CE marking and FDA clearance. The standard ensures devices are "electromagnetically compatible" with their intended environment. EMC issues are a common cause of device malfunctions and recalls.',
        keyConcepts: [
          'Electromagnetic emission - equipment must not emit excessive electromagnetic energy',
          'Electromagnetic immunity - equipment must function correctly when exposed to electromagnetic disturbances',
          'Essential performance - must be maintained during and after electromagnetic disturbances',
          'Intended use environment - EMC requirements depend on where equipment is used',
          'Emission limits - radiated and conducted emissions must be below specified limits',
          'Immunity levels - equipment must withstand specified levels of electromagnetic disturbances',
          'Risk management - EMC risks must be addressed in risk analysis (ISO 14971)',
          'Test setup and methods - standardized test procedures for emission and immunity',
          'EMC test plan - required documentation of EMC testing approach',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'EMC Test Plan (Clause 6)',
            description: 'Manufacturers must create an EMC test plan that identifies essential performance, intended use environment, test methods, pass/fail criteria, and risk analysis. The test plan must be documented and justified.',
          },
          {
            title: 'Emission Requirements (Clause 7)',
            description: 'Equipment must not emit excessive electromagnetic energy. Radiated emissions must be below limits (typically 30-1000 MHz). Conducted emissions must be below limits (typically 150 kHz - 30 MHz). Limits depend on equipment class and intended use environment.',
          },
          {
            title: 'Immunity Requirements (Clause 8)',
            description: 'Equipment must function correctly when exposed to electromagnetic disturbances. Immunity tests include: electrostatic discharge (ESD), radiated RF fields, conducted RF, electrical fast transients, surges, voltage dips, and magnetic fields. Equipment must maintain essential performance during and after disturbances.',
          },
          {
            title: 'Essential Performance During Disturbances (Clause 8.1)',
            description: 'Essential performance must be maintained during electromagnetic disturbances unless risk analysis shows temporary degradation is acceptable. If performance degrades, it must recover automatically. Permanent degradation is not acceptable.',
          },
          {
            title: 'Intended Use Environment (Annexes)',
            description: 'EMC requirements depend on intended use environment: professional healthcare facility (hospitals, clinics) or home healthcare environment. Home use equipment has stricter requirements due to less controlled environment.',
          },
          {
            title: 'Risk Management Integration (Clause 4)',
            description: 'EMC risks must be addressed in risk management (ISO 14971). Identify EMC-related hazards, estimate risks, and implement risk controls. EMC testing verifies risk controls are effective.',
          },
        ],
      }}
      implementationGuide={{
        title: 'EMC Compliance Implementation Guide',
        steps: [
          {
            step: 1,
            title: 'Define Essential Performance for EMC',
            description: 'Identify performance characteristics that must be maintained during electromagnetic disturbances. For laser systems, essential performance includes laser power accuracy, safety interlock function, and user interface accuracy. Document essential performance and how it will be monitored during EMC testing.',
          },
          {
            step: 2,
            title: 'Identify Intended Use Environment',
            description: 'Determine if equipment is used in professional healthcare facility or home healthcare environment. This determines immunity test levels. Most laser systems are used in professional facilities (hospitals, clinics, surgical centers).',
          },
          {
            step: 3,
            title: 'Create EMC Test Plan',
            description: 'Document EMC test approach including test methods, test levels, pass/fail criteria, and risk analysis. Identify which essential performance will be monitored during immunity testing. Justify any deviations from standard test methods.',
          },
          {
            step: 4,
            title: 'Design for EMC - Emission Control',
            description: 'Design equipment to minimize electromagnetic emissions. Use filtering on power lines, shielded enclosures, proper PCB layout (ground planes, trace routing), and clock frequency control. Test emissions early in development.',
          },
          {
            step: 5,
            title: 'Design for EMC - Immunity',
            description: 'Design equipment to withstand electromagnetic disturbances. Use filtering, shielding, isolation, and robust software (watchdog timers, error detection). Consider worst-case scenarios. Test immunity early in development.',
          },
          {
            step: 6,
            title: 'Perform Pre-Compliance Testing',
            description: 'Conduct preliminary EMC testing in-house or at pre-compliance lab before formal testing. Identify and fix issues early. Use EMC test equipment or pre-compliance services. Document pre-compliance test results.',
          },
          {
            step: 7,
            title: 'Conduct Formal EMC Testing',
            description: 'Perform formal EMC testing at accredited test laboratory. Test both emissions and immunity. Monitor essential performance during immunity tests. Document all test results, test setup, and any deviations. Address any failures.',
          },
          {
            step: 8,
            title: 'Address EMC Failures',
            description: 'If equipment fails EMC tests, identify root cause and implement fixes. Common fixes: additional filtering, improved shielding, PCB layout changes, software improvements. Re-test after fixes. Document failure analysis and corrective actions.',
          },
          {
            step: 9,
            title: 'Integrate EMC into Risk Management',
            description: 'Include EMC-related hazards in risk analysis (ISO 14971). Identify hazards from EMC failures (incorrect operation, safety system failure). Estimate risks. Verify risk controls through EMC testing. Document in risk management file.',
          },
          {
            step: 10,
            title: 'Document EMC Compliance',
            description: 'Compile EMC documentation including test plan, test reports, risk analysis, and compliance statement. Include EMC information in technical file or 510(k) submission. Maintain EMC documentation for post-market surveillance.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Emission failures (too much RF noise)',
            solution: 'Add filtering to power lines (ferrite cores, common-mode chokes). Improve PCB layout (ground planes, trace routing). Use shielded enclosures. Control clock frequencies and harmonics. Add filtering to digital signals.',
          },
          {
            challenge: 'Immunity failures (equipment malfunctions)',
            solution: 'Add filtering and shielding. Improve software robustness (watchdog timers, error detection, recovery). Use isolated interfaces. Add transient protection (TVS diodes, surge suppressors). Improve PCB layout for immunity.',
          },
          {
            challenge: 'Essential performance degradation during disturbances',
            solution: 'Design robust control loops. Use redundant monitoring. Implement error detection and correction. Ensure automatic recovery after disturbances. Document acceptable temporary degradation in risk analysis.',
          },
          {
            challenge: 'High-power equipment EMC issues',
            solution: 'High-power laser systems generate significant electromagnetic noise. Use proper filtering and shielding. Separate high-power and control circuits. Use shielded cables. Consider EMC early in power supply design.',
          },
          {
            challenge: 'Cost and time of EMC testing',
            solution: 'Perform pre-compliance testing early to catch issues. Design for EMC from the start. Use EMC design guidelines. Consider EMC consultants. Budget for multiple test iterations. Plan EMC testing in project timeline.',
          },
        ],
      }}
      medicalLaserExample={{
        title: 'EMC for Medical Laser Systems',
        description: 'Medical laser systems present unique EMC challenges due to high-power operation, switching power supplies, and sensitive control electronics. Laser systems must not interfere with other medical equipment (monitors, pacemakers, etc.) and must function correctly in surgical environments with many electromagnetic sources. EMC failures can cause laser malfunction, incorrect power delivery, or safety system failures.',
        applications: [
          {
            application: 'Class 4 Surgical Laser System',
            considerations: [
              'Emission concerns: High-power switching power supplies generate significant RF noise. Laser diode drivers create electromagnetic emissions. Must meet emission limits to avoid interfering with other equipment.',
              'Immunity concerns: Must function correctly in surgical suite with many RF sources (monitors, electrosurgical units, wireless devices). ESD from personnel can affect control electronics.',
              'Essential performance: Laser power accuracy must be maintained during RF disturbances. Safety interlocks must function during ESD events. User interface must remain readable during disturbances.',
              'Design solutions: Filtered power supplies, shielded enclosures, isolated control circuits, robust software with error detection, ESD protection on interfaces.',
              'Testing: Test emissions from power supply and laser driver. Test immunity to RF fields, ESD, and electrical fast transients. Monitor laser power output during immunity tests.',
            ],
          },
          {
            application: 'Network-Connected Laser System',
            considerations: [
              'Additional concerns: Network interfaces (Ethernet, Wi-Fi) can be sources of emissions and paths for conducted disturbances.',
              'Design: Use filtered network interfaces, shielded network cables, proper grounding. Isolate network circuits from safety-critical circuits.',
              'Testing: Test emissions from network interfaces. Test immunity of network interfaces to conducted RF. Verify network functionality during disturbances.',
            ],
          },
        ],
      }}
      relatedStandards={[
        {
          number: 'IEC 60601-1',
          title: 'Medical electrical equipment — General requirements',
          relationship: 'IEC 60601-1-2 is a collateral standard that applies in addition to IEC 60601-1',
          url: '/standards/iec-60601-1',
        },
        {
          number: 'IEC 60601-2-22',
          title: 'Medical electrical equipment — Laser equipment',
          relationship: 'Laser equipment must comply with both IEC 60601-1 and IEC 60601-1-2',
          url: '/standards/iec-60601-2-22',
        },
        {
          number: 'ISO 14971',
          title: 'Application of risk management',
          relationship: 'EMC risks must be addressed in risk analysis per ISO 14971',
          url: '/standards/iso-14971',
        },
      ]}
      hotTake={{
        take: `IEC 60601-1-2 is where many devices fail testing—and fixing EMC issues late is expensive. Design for EMC from day one, not as an afterthought.

The key question: What's your Essential Performance during electromagnetic disturbances? For laser systems, that's power accuracy and safety interlocks. Define it early, test it early.`,
        context: 'EMC failures cause expensive delays. Pre-compliance testing during development saves weeks of schedule and significant cost.',
        realWorldTips: [
          'High-power laser drivers are major emission sources—filter and shield from the start.',
          'Immunity testing often reveals software weaknesses. Use watchdog timers and error recovery.',
          'Pre-compliance testing catches 90% of issues at 10% of the cost. Do it early.',
          'Document your EMC test plan with clear Essential Performance criteria.',
        ],
      }}
    />
  );
}

