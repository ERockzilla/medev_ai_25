'use client';

import StandardPageTemplate from '@/components/StandardPageTemplate';

export default function IEC62366Page() {
  return (
    <StandardPageTemplate
      standard={{
        number: 'IEC 62366',
        title: 'Medical devices — Application of usability engineering to medical devices',
        organization: 'IEC',
        publicationDate: '2015',
        currentVersion: '2015 + Amd.1:2020',
        category: 'usability',
        purchaseUrl: 'https://webstore.iec.ch/en/publication/24664',
      }}
      overview={{
        scope: 'IEC 62366 specifies a process for a manufacturer to analyze, specify, develop, and evaluate the usability of a medical device as it relates to safety. The standard addresses use errors that could result in harm. It applies to all medical devices except in vitro diagnostic medical devices (covered by IEC 62366-1). The usability engineering process includes use specification, user interface design, usability validation, and post-production monitoring.',
        whyItMatters: 'Use errors are a leading cause of medical device incidents and recalls. IEC 62366 helps manufacturers design devices that are intuitive, safe, and minimize use errors. The standard is required by FDA, EU MDR, and other regulatory bodies. Proper usability engineering can prevent patient harm, reduce training requirements, improve user satisfaction, and reduce support costs. FDA has increased focus on usability, requiring human factors validation for many devices.',
        keyConcepts: [
          'Usability engineering process - systematic approach to designing for users',
          'Use specification - description of intended users, use environments, and use scenarios',
          'Use error - user action or lack of action that leads to different results than intended',
          'User interface - all means by which user and device exchange information',
          'Usability validation - testing with representative users to verify usability',
          'Usability engineering file - documentation of usability engineering activities',
          'Risk management integration - use errors addressed in risk analysis (ISO 14971)',
          'Minimum sample sizes - typically 15 users per user group for validation',
          'Formative evaluation - iterative testing during design',
          'Summative evaluation - final validation testing',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'Usability Engineering Process (Clause 5)',
            description: 'Manufacturers must establish and maintain a usability engineering process. The process includes use specification, user interface design, usability validation, and post-production monitoring. The process must be documented in a usability engineering file.',
          },
          {
            title: 'Use Specification (Clause 5.1)',
            description: 'Manufacturers must specify intended users (user groups), use environments, and use scenarios. User groups should be defined by characteristics affecting device use (training, experience, physical capabilities). Use scenarios describe normal use, abnormal use, and reasonably foreseeable misuse.',
          },
          {
            title: 'User Interface Design (Clause 5.2)',
            description: 'User interface must be designed based on use specification and usability principles. Design must address identified use errors through design changes (preferred) or protective measures and information for safety. Design iterations should be tested through formative evaluation.',
          },
          {
            title: 'Usability Validation (Clause 5.3)',
            description: 'Usability must be validated through testing with representative users. Validation must demonstrate that use errors leading to harm are eliminated or reduced to acceptable levels. Minimum sample sizes: typically 15 users per user group, more if use errors are observed.',
          },
          {
            title: 'Usability Engineering File (Clause 6)',
            description: 'Manufacturers must maintain a usability engineering file documenting all usability engineering activities. The file must include use specification, user interface specification, usability validation plan and results, and post-production monitoring activities.',
          },
          {
            title: 'Risk Management Integration (Clause 4)',
            description: 'Use errors must be addressed in risk management (ISO 14971). Use errors that could lead to harm are hazards. Risk controls include design changes (preferred), protective measures, and information for safety. Usability validation verifies risk controls are effective.',
          },
          {
            title: 'Post-Production Monitoring (Clause 7)',
            description: 'Manufacturers must monitor post-production information for use errors. If new use errors are identified, risk analysis must be updated and additional risk controls implemented if needed. Usability engineering file must be updated.',
          },
        ],
      }}
      implementationGuide={{
        title: 'Usability Engineering Implementation Guide',
        steps: [
          {
            step: 1,
            title: 'Define Use Specification',
            description: 'Identify and document intended user groups (surgeons, nurses, technicians, patients). Define user characteristics (training, experience, physical capabilities, cognitive abilities). Specify use environments (operating room, clinic, home). Document use scenarios including normal use, abnormal use, and reasonably foreseeable misuse.',
          },
          {
            step: 2,
            title: 'Identify Use-Related Hazards',
            description: 'Based on use specification and risk analysis (ISO 14971), identify use errors that could lead to harm. Consider all use scenarios. Common use errors include: wrong settings, incorrect operation sequence, failure to notice alarms, misinterpretation of displays. Document use-related hazards in risk analysis.',
          },
          {
            step: 3,
            title: 'Design User Interface',
            description: 'Design user interface to prevent or minimize use errors. Apply usability principles: clear labeling, intuitive controls, appropriate feedback, error prevention, error recovery. Use design standards (ANSI/AAMI HE75, ISO 9241). Conduct formative evaluation (iterative testing) during design.',
          },
          {
            step: 4,
            title: 'Implement Risk Controls',
            description: 'For use-related hazards, implement risk controls in priority order: (1) Design changes to prevent use errors, (2) Protective measures (alarms, interlocks), (3) Information for safety (warnings, instructions, training). Document risk controls in risk management file.',
          },
          {
            step: 5,
            title: 'Create Usability Validation Plan',
            description: 'Develop validation plan specifying test methods, user groups, sample sizes, test scenarios, pass/fail criteria, and data collection methods. Include scenarios for normal use, abnormal use, and critical tasks. Plan for at least 15 users per user group.',
          },
          {
            step: 6,
            title: 'Recruit Representative Users',
            description: 'Recruit users representative of intended user groups. Users should have appropriate training and experience levels. Avoid using internal employees or overly experienced users. Consider demographics, experience levels, and physical capabilities.',
          },
          {
            step: 7,
            title: 'Conduct Formative Evaluation',
            description: 'Perform iterative usability testing during design phase. Test with small groups (5-8 users) to identify issues early. Fix issues and re-test. Use various methods: think-aloud protocols, task analysis, heuristic evaluation. Document findings and design changes.',
          },
          {
            step: 8,
            title: 'Conduct Summative Validation',
            description: 'Perform final validation testing with representative users (minimum 15 per group). Test critical tasks and use scenarios. Observe users without assistance. Document all use errors, near-misses, and task completion rates. Verify use errors leading to harm are eliminated or acceptable.',
          },
          {
            step: 9,
            title: 'Analyze Validation Results',
            description: 'Analyze validation data to identify use errors, task completion rates, and user satisfaction. Determine if use errors are acceptable or require additional risk controls. Document analysis and conclusions. Update risk management file with validation results.',
          },
          {
            step: 10,
            title: 'Complete Usability Engineering File',
            description: 'Compile usability engineering file including use specification, user interface specification, validation plan, validation results, risk analysis updates, and post-production monitoring plan. Ensure file is complete and ready for regulatory submission.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Insufficient user representation',
            solution: 'Ensure users represent actual intended users, not just internal staff. Consider demographics, experience levels, and physical capabilities. Recruit from actual user population when possible. Document user characteristics.',
          },
          {
            challenge: 'Inadequate sample sizes',
            solution: 'Use minimum 15 users per user group. Increase sample size if use errors are observed. Consider statistical analysis for critical tasks. Document sample size rationale.',
          },
          {
            challenge: 'Use errors discovered late',
            solution: 'Conduct formative evaluation early and iteratively. Test prototypes and early designs. Fix issues before final validation. Don\'t wait until design is complete to test usability.',
          },
          {
            challenge: 'Over-reliance on training',
            solution: 'Design should prevent use errors, not rely on training. Training is a last resort risk control. Prefer design changes over warnings and instructions. Document why training is necessary.',
          },
          {
            challenge: 'Incomplete use scenarios',
            solution: 'Consider all use scenarios including normal use, abnormal use, misuse, and emergency situations. Include scenarios for different user groups and use environments. Review similar devices and adverse events.',
          },
        ],
      }}
      medicalLaserExample={{
        title: 'Usability Engineering for Medical Laser Systems',
        description: 'Laser systems present significant usability challenges due to complexity, safety-critical nature, and potential for serious harm from use errors. Common use errors include wrong power settings, incorrect targeting, failure to use safety equipment, and misinterpretation of displays. Usability engineering must address these through intuitive design, clear feedback, and appropriate safeguards.',
        applications: [
          {
            application: 'Surgical Laser Control Interface',
            considerations: [
              'Use errors: Wrong power setting (too high causes tissue damage, too low ineffective), incorrect pulse duration, wrong wavelength selection, failure to confirm settings before firing.',
              'User groups: Surgeons (primary users), surgical technicians (setup), nurses (monitoring). Different experience levels and training.',
              'Use environment: Operating room with distractions, time pressure, sterile conditions, limited visibility of controls.',
              'Design solutions: Clear power display with units, confirmation prompts for high-power settings, preset modes for common procedures, audible feedback, large readable displays, color coding for safety levels.',
              'Validation: Test with 15+ surgeons of varying experience. Test critical tasks: power setting, targeting, emergency stop. Verify no use errors leading to harm.',
            ],
          },
          {
            application: 'Therapeutic Laser User Interface',
            considerations: [
              'Use errors: Overexposure (excessive treatment time), wrong treatment area, failure to check contraindications, incorrect patient positioning.',
              'User groups: Therapists, technicians, sometimes patients (home use). Varying technical expertise.',
              'Use environment: Clinic or home environment. Less controlled than surgical setting.',
              'Design solutions: Treatment timers with automatic shutoff, clear treatment area indicators, contraindication warnings, patient positioning guides, simple controls for home use.',
              'Validation: Test with intended users (therapists, patients). Verify treatment protocols are followed correctly. Test error recovery.',
            ],
          },
          {
            application: 'Safety Interlock User Interface',
            considerations: [
              'Use errors: Bypassing safety interlocks, ignoring safety warnings, failure to use protective eyewear, incorrect interlock status interpretation.',
              'Critical: Safety interlock failures can lead to serious eye injury. Usability is critical for safety.',
              'Design solutions: Clear interlock status indicators (visual and audible), impossible-to-bypass interlocks, prominent safety warnings, mandatory confirmations.',
              'Validation: Test interlock-related tasks. Verify users cannot easily bypass safety systems. Test emergency procedures.',
            ],
          },
        ],
      }}
      relatedStandards={[
        {
          number: 'ISO 14971',
          title: 'Application of risk management',
          relationship: 'Use errors are hazards addressed in risk analysis. Usability validation verifies risk controls.',
          url: '/standards/iso-14971',
        },
        {
          number: 'IEC 62304',
          title: 'Medical device software',
          relationship: 'Software user interfaces must comply with IEC 62366 usability requirements',
          url: '/standards/iec-62304',
        },
        {
          number: 'IEC 60601-1',
          title: 'Medical electrical equipment — General requirements',
          relationship: 'Usability applies to MEE user interfaces',
          url: '/standards/iec-60601-1',
        },
        {
          number: 'IEC 60601-2-22',
          title: 'Medical electrical equipment — Laser equipment',
          relationship: 'Laser equipment user interfaces must comply with IEC 62366',
          url: '/standards/iec-60601-2-22',
        },
      ]}
      hotTake={{
        take: `IEC 62366 addresses use errors—the leading cause of medical device incidents. This isn't about making devices "easy to use." It's about preventing harm from foreseeable misuse.

FDA has increased focus on human factors. For laser systems, wrong power settings, bypassed interlocks, and misinterpreted displays are the use errors that matter most.`,
        context: 'Use errors cause real patient harm. Investing in usability engineering prevents incidents, recalls, and regulatory scrutiny.',
        realWorldTips: [
          'Test with real users, not internal engineers. Your team is too familiar with the device.',
          'Formative testing (during design) catches issues early. Don\'t wait for summative validation.',
          'Minimum 15 users per user group for validation. Plan for this in your budget and timeline.',
          'Design should prevent errors—don\'t rely on training as your primary risk control.',
        ],
      }}
    />
  );
}

