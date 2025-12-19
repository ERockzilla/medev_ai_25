'use client';

import StandardPageTemplate from '@/components/StandardPageTemplate';

export default function ISO14971Page() {
  return (
    <StandardPageTemplate
      standard={{
        number: 'ISO 14971',
        title: 'Medical devices — Application of risk management to medical devices',
        organization: 'ISO',
        publicationDate: '2019',
        currentVersion: '2019',
        category: 'risk-management',
        purchaseUrl: 'https://www.iso.org/standard/72704.html',
      }}
      overview={{
        scope: 'ISO 14971 specifies terminology, principles, and a process for risk management of medical devices, including software as a medical device and in vitro diagnostic medical devices. The process includes risk analysis, risk evaluation, risk control, evaluation of overall residual risk, risk management review, and production and post-production activities. This standard helps manufacturers identify hazards, estimate and evaluate risks, control these risks, and monitor the effectiveness of controls.',
        whyItMatters: 'ISO 14971 is the international standard for risk management in medical devices and is required by regulatory bodies worldwide, including FDA (QMSR aligned with ISO 13485), EU MDR, Health Canada, and TGA. Proper risk management is essential for patient safety, regulatory compliance, and market access. Risk management must be integrated throughout the device lifecycle, from initial concept through design, production, and post-market surveillance. Failure to properly implement risk management can result in regulatory delays, product recalls, and patient harm.',
        keyConcepts: [
          'Risk management process throughout device lifecycle',
          'Hazard identification and risk analysis',
          'Risk evaluation using risk acceptability criteria',
          'Risk control measures (inherent safety, protective measures, information for safety)',
          'Residual risk evaluation',
          'Risk-benefit analysis',
          'Risk management file documentation',
          'Production and post-production monitoring',
          'Integration with design controls and quality management',
        ],
      }}
      keyRequirements={{
        title: 'Key Requirements Overview',
        sections: [
          {
            title: 'Risk Management Process (Clause 4)',
            description: 'Manufacturers must establish and document a risk management process. This includes defining risk management policy, assigning responsibilities, establishing risk acceptability criteria, and maintaining a risk management plan. The process must be applied throughout the device lifecycle.',
          },
          {
            title: 'Risk Analysis (Clause 5)',
            description: 'Risk analysis involves identifying hazards and hazardous situations, estimating risks for each hazardous situation, and documenting the analysis. Common methods include FMEA (Failure Mode and Effects Analysis), FTA (Fault Tree Analysis), and HAZOP (Hazard and Operability Study).',
          },
          {
            title: 'Risk Evaluation (Clause 6)',
            description: 'Each identified risk must be evaluated against risk acceptability criteria. Risks are compared to predefined criteria to determine if they are acceptable, or if risk control measures are needed. Risk acceptability criteria should be defined in the risk management plan.',
          },
          {
            title: 'Risk Control (Clause 7)',
            description: 'When risks are not acceptable, risk control measures must be implemented. The standard prioritizes: (1) inherent safety by design, (2) protective measures in the device or manufacturing process, and (3) information for safety (labeling, instructions). Residual risk must be evaluated after implementing controls.',
          },
          {
            title: 'Risk Management Review (Clause 8)',
            description: 'Before release for commercial distribution, a risk management review must be conducted to ensure all identified risks have been addressed and the risk management file is complete. The review must be documented and approved.',
          },
          {
            title: 'Production and Post-Production Activities (Clause 9)',
            description: 'Manufacturers must collect and review information from production and post-production activities. This includes monitoring for new hazards, changes in risk estimates, and effectiveness of risk control measures. Adverse events must be investigated and risk management file updated as needed.',
          },
        ],
      }}
      implementationGuide={{
        title: 'Risk Management Implementation Guide',
        steps: [
          {
            step: 1,
            title: 'Establish Risk Management Policy and Plan',
            description: 'Define your organization\'s risk management policy and create a risk management plan for each device or device family. The plan should specify risk acceptability criteria, methods for risk analysis, responsibilities, and review activities. Link the plan to your design and development plan.',
          },
          {
            step: 2,
            title: 'Identify Hazards and Hazardous Situations',
            description: 'Systematically identify all potential hazards associated with your device. Consider energy sources (electrical, thermal, mechanical, optical), biological hazards, environmental hazards, and use errors. For each hazard, identify sequences of events that could lead to hazardous situations.',
          },
          {
            step: 3,
            title: 'Estimate Risks Using FMEA or Other Methods',
            description: 'For each hazardous situation, estimate the risk by considering severity of harm and probability of occurrence. Use FMEA methodology with severity (1-10), occurrence (1-10), and detection (1-10) ratings. Calculate Risk Priority Number (RPN = S × O × D). Use our FMEA Calculator tool to streamline this process.',
          },
          {
            step: 4,
            title: 'Evaluate Risks Against Acceptability Criteria',
            description: 'Compare estimated risks to your predefined risk acceptability criteria. Typically, risks with RPN > 100 require mitigation, while RPN < 50 may be acceptable. However, criteria should be risk-based and consider the severity of harm regardless of RPN.',
          },
          {
            step: 5,
            title: 'Implement Risk Control Measures',
            description: 'For unacceptable risks, implement risk control measures in priority order: (1) Design for inherent safety (eliminate or reduce hazard), (2) Add protective measures (safety interlocks, alarms), (3) Provide information for safety (warnings, instructions, training). Document all risk control measures.',
          },
          {
            step: 6,
            title: 'Evaluate Residual Risk',
            description: 'After implementing risk controls, re-evaluate the residual risk. If residual risk is still unacceptable, implement additional controls. If residual risk is acceptable but still significant, conduct a risk-benefit analysis to justify the device.',
          },
          {
            step: 7,
            title: 'Conduct Risk-Benefit Analysis',
            description: 'For residual risks that are not negligible, evaluate whether the medical benefit outweighs the risk. Consider the intended use, patient population, alternative treatments, and clinical evidence. Document the risk-benefit analysis.',
          },
          {
            step: 8,
            title: 'Complete Risk Management File',
            description: 'Compile all risk management documentation including risk management plan, risk analysis, risk evaluation, risk control measures, residual risk evaluation, and risk-benefit analysis. Ensure traceability from hazards through risk controls to verification activities.',
          },
          {
            step: 9,
            title: 'Conduct Risk Management Review',
            description: 'Before commercial release, conduct a comprehensive review of the risk management file. Verify all identified risks have been addressed, risk controls are implemented and verified, and documentation is complete. Obtain management approval.',
          },
          {
            step: 10,
            title: 'Monitor Production and Post-Production',
            description: 'Establish processes to collect and review information from production, complaints, adverse events, and post-market surveillance. Investigate new hazards or changes in risk estimates. Update risk management file as needed and conduct periodic reviews.',
          },
        ],
        commonChallenges: [
          {
            challenge: 'Incomplete hazard identification',
            solution: 'Use systematic methods like FMEA, HAZOP, or checklists. Consider all energy sources, use errors, and environmental conditions. Involve cross-functional team including engineering, clinical, and regulatory experts. Review similar devices and adverse event databases.',
          },
          {
            challenge: 'Subjective risk estimation',
            solution: 'Use standardized rating scales (severity 1-10, occurrence 1-10, detection 1-10). Base estimates on data when available (historical data, testing, literature). Document rationale for all estimates. Have multiple reviewers validate estimates.',
          },
          {
            challenge: 'Inadequate risk control verification',
            solution: 'Verify all risk control measures through testing, analysis, or inspection. Link risk controls to design verification activities. Document verification results in risk management file. Ensure controls are implemented in production.',
          },
          {
            challenge: 'Poor integration with design controls',
            solution: 'Link risk management plan to design and development plan. Include risk analysis in design reviews. Ensure design changes trigger risk management review. Maintain traceability between risk controls and design outputs.',
          },
          {
            challenge: 'Insufficient post-market monitoring',
            solution: 'Establish complaint handling and adverse event reporting processes. Regularly review post-market data for new hazards or changes in risk estimates. Update risk management file based on new information. Conduct periodic risk management reviews.',
          },
        ],
      }}
      medicalLaserExample={{
        title: 'Risk Management for Medical Laser Systems',
        description: 'Class 4 laser systems present significant risks including optical radiation hazards (eye injury, skin burns), electrical hazards (shock, fire), thermal hazards (tissue damage, fire), and use errors (wrong power settings, incorrect targeting). Risk management must address all these hazards through design controls, safety interlocks, protective equipment, and comprehensive user training.',
        applications: [
          {
            application: 'Surgical Laser Systems (Class 4, Class II/III Medical Device)',
            considerations: [
              'Optical radiation hazard: Risk of eye injury from direct or reflected laser beam (Severity: 9-10, Occurrence: 3-4). Controls: Safety interlocks, beam shutters, protective eyewear, controlled access areas.',
              'Electrical hazard: High-voltage power supplies pose shock risk (Severity: 8-9, Occurrence: 2-3). Controls: Insulation, grounding, interlock systems, proper maintenance procedures.',
              'Thermal hazard: Excessive laser power can cause unintended tissue damage (Severity: 7-9, Occurrence: 4-5). Controls: Power monitoring, automatic shutoff, calibrated power meters, user training.',
              'Use error: Wrong power settings or incorrect targeting (Severity: 6-9, Occurrence: 5-6). Controls: Clear user interface, confirmation prompts, training, procedure checklists.',
              'Software failure: Control system malfunction leading to uncontrolled laser emission (Severity: 9-10, Occurrence: 2-3). Controls: Software validation (IEC 62304), redundant safety systems, watchdog timers.',
            ],
          },
          {
            application: 'Therapeutic Laser Systems',
            considerations: [
              'Overexposure risk: Excessive treatment duration or power (Severity: 5-7, Occurrence: 4-5). Controls: Treatment timers, power limits, patient positioning aids, treatment protocols.',
              'Contraindication: Treatment of inappropriate conditions (Severity: 6-8, Occurrence: 3-4). Controls: Clear labeling, contraindication warnings, user training, patient screening procedures.',
              'Device malfunction: Laser output degradation or failure (Severity: 4-6, Occurrence: 3-4). Controls: Regular calibration, preventive maintenance, output monitoring, service procedures.',
              'Environmental: Use in inappropriate environments (Severity: 5-7, Occurrence: 2-3). Controls: Environmental specifications, storage requirements, operating instructions.',
            ],
          },
        ],
      }}
      relatedStandards={[
        {
          number: 'ISO 13485',
          title: 'Quality management systems',
          relationship: 'Risk management is integrated throughout ISO 13485, particularly in design controls and CAPA',
          url: '/standards/iso-13485',
        },
        {
          number: 'IEC 60601-1',
          title: 'Medical electrical equipment — General requirements',
          relationship: 'IEC 60601-1 requires risk management per ISO 14971 for essential performance and safety',
          url: '/standards/iec-60601-1',
        },
        {
          number: 'IEC 62304',
          title: 'Medical device software — Software life cycle processes',
          relationship: 'IEC 62304 requires software risk management per ISO 14971',
          url: '/standards/iec-62304',
        },
        {
          number: 'IEC 60601-2-22',
          title: 'Medical electrical equipment — Laser equipment',
          relationship: 'IEC 60601-2-22 specifies laser-specific risk control requirements',
          url: '/standards/iec-60601-2-22',
        },
      ]}
      hotTake={{
        take: `ISO 14971 is the cornerstone of everything we do in medical device development—and when you truly understand it, it becomes your most powerful tool for bringing safe, effective devices to patients faster.

Here's the key insight: the 2019 revision elevated risk management from a documentation exercise to a strategic framework. It's not about filling out forms—it's about systematically thinking through how your device interacts with patients, users, and environments so you can design better solutions from the start.

When you integrate risk analysis early in concept development, you avoid costly redesigns later. When you involve cross-functional teams (engineering, clinical, regulatory, manufacturing), you catch hazards that no single perspective would identify alone. And when you maintain clear traceability from hazard identification through controls to verification, your regulatory submissions become stronger and faster to prepare.

The benefit-risk analysis framework isn't just for compliance—it's a conversation with regulators and clinicians about why your device matters and how you've ensured it will help more than it could ever harm. That's a conversation worth having well.`,
        context: 'Risk management done right accelerates development. Risk management done as an afterthought creates delays, rework, and missed opportunities to build something better.',
        realWorldTips: [
          'Start risk analysis during concept phase—early identification means design decisions that prevent hazards rather than control them.',
          'Build a cross-functional hazard identification team. Engineers, clinicians, human factors experts, and manufacturing all see different risks.',
          'Maintain bidirectional traceability: hazard → control → verification. This makes audits smoother and helps your team stay aligned.',
          'Treat your risk file as a living document. Post-market feedback improves your understanding and makes your next device even better.',
        ],
      }}
    />
  );
}

