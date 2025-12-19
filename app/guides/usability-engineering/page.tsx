'use client';

import ImplementationGuideTemplate from '@/components/ImplementationGuideTemplate';

export default function UsabilityEngineeringGuidePage() {
  return (
    <ImplementationGuideTemplate
      title="Usability Engineering Implementation Guide"
      subtitle="Complete process for implementing IEC 62366 usability engineering for medical devices"
      basedOn={[
        {
          number: 'IEC 62366',
          title: 'Medical devices — Application of usability engineering to medical devices',
          url: '/standards/iec-62366',
        },
        {
          number: 'IEC 60601-1',
          title: 'Medical electrical equipment — General requirements',
          url: '/standards/iec-60601-1',
        },
      ]}
      overview={{
        purpose: 'This guide provides a step-by-step process for implementing usability engineering per IEC 62366. It covers the complete usability engineering lifecycle from use specification through validation and post-production monitoring. The guide integrates with ISO 14971 risk management and IEC 62304 software development processes.',
        audience: 'Usability engineers, human factors specialists, design engineers, regulatory affairs professionals, and quality engineers involved in medical device development. Also useful for project managers coordinating usability activities.',
        prerequisites: [
          'Understanding of ISO 14971 risk management principles',
          'Familiarity with medical device design controls (ISO 13485)',
          'Basic knowledge of user-centered design principles',
          'Access to representative users for validation testing',
        ],
        estimatedTime: '12-18 months (integrated with device development lifecycle)',
      }}
      visualDiagram={
        <div className="w-full overflow-x-auto">
          <svg viewBox="0 0 1200 800" className="w-full h-auto">
            {/* Title */}
            <text x="600" y="30" textAnchor="middle" className="text-lg font-bold fill-gray-900">
              IEC 62366 Usability Engineering Process Flow
            </text>
            
            {/* Phase 1: Planning & Specification */}
            <rect x="50" y="60" width="200" height="120" rx="8" className="fill-blue-100 stroke-blue-500 stroke-2" />
            <text x="150" y="95" textAnchor="middle" className="text-sm font-bold fill-gray-900">Phase 1</text>
            <text x="150" y="115" textAnchor="middle" className="text-xs fill-gray-700">Use Specification</text>
            <text x="150" y="135" textAnchor="middle" className="text-xs fill-gray-700">• User Groups</text>
            <text x="150" y="150" textAnchor="middle" className="text-xs fill-gray-700">• Use Environments</text>
            <text x="150" y="165" textAnchor="middle" className="text-xs fill-gray-700">• Use Scenarios</text>
            
            {/* Arrow to Risk Analysis */}
            <path d="M 250 120 L 350 120" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
            
            {/* Risk Analysis Integration */}
            <rect x="350" y="60" width="200" height="120" rx="8" className="fill-purple-100 stroke-purple-500 stroke-2" />
            <text x="450" y="95" textAnchor="middle" className="text-sm font-bold fill-gray-900">Risk Analysis</text>
            <text x="450" y="115" textAnchor="middle" className="text-xs fill-gray-700">(ISO 14971)</text>
            <text x="450" y="135" textAnchor="middle" className="text-xs fill-gray-700">• Use Error Hazards</text>
            <text x="450" y="150" textAnchor="middle" className="text-xs fill-gray-700">• Risk Estimation</text>
            <text x="450" y="165" textAnchor="middle" className="text-xs fill-gray-700">• Risk Controls</text>
            
            {/* Arrow to Design */}
            <path d="M 550 120 L 650 120" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
            
            {/* Phase 2: Design */}
            <rect x="650" y="60" width="200" height="120" rx="8" className="fill-green-100 stroke-green-500 stroke-2" />
            <text x="750" y="95" textAnchor="middle" className="text-sm font-bold fill-gray-900">Phase 2</text>
            <text x="750" y="115" textAnchor="middle" className="text-xs fill-gray-700">UI Design</text>
            <text x="750" y="135" textAnchor="middle" className="text-xs fill-gray-700">• Design Principles</text>
            <text x="750" y="150" textAnchor="middle" className="text-xs fill-gray-700">• Risk Controls</text>
            <text x="750" y="165" textAnchor="middle" className="text-xs fill-gray-700">• Prototypes</text>
            
            {/* Arrow down to Formative */}
            <path d="M 750 180 L 750 250" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
            
            {/* Formative Evaluation Loop */}
            <rect x="600" y="250" width="300" height="100" rx="8" className="fill-yellow-100 stroke-yellow-500 stroke-2" />
            <text x="750" y="280" textAnchor="middle" className="text-sm font-bold fill-gray-900">Formative Evaluation</text>
            <text x="750" y="300" textAnchor="middle" className="text-xs fill-gray-700">• Iterative Testing (5-8 users)</text>
            <text x="750" y="315" textAnchor="middle" className="text-xs fill-gray-700">• Design Refinement</text>
            <text x="750" y="330" textAnchor="middle" className="text-xs fill-gray-700">• Repeat until acceptable</text>
            
            {/* Loop back arrow */}
            <path d="M 600 300 L 550 300 L 550 120 L 650 120" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,5" />
            
            {/* Arrow to Summative */}
            <path d="M 750 350 L 750 420" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
            
            {/* Phase 3: Validation */}
            <rect x="600" y="420" width="300" height="120" rx="8" className="fill-orange-100 stroke-orange-500 stroke-2" />
            <text x="750" y="455" textAnchor="middle" className="text-sm font-bold fill-gray-900">Phase 3</text>
            <text x="750" y="475" textAnchor="middle" className="text-xs fill-gray-700">Summative Validation</text>
            <text x="750" y="495" textAnchor="middle" className="text-xs fill-gray-700">• 15+ users per group</text>
            <text x="750" y="510" textAnchor="middle" className="text-xs fill-gray-700">• Critical tasks</text>
            <text x="750" y="525" textAnchor="middle" className="text-xs fill-gray-700">• Use error verification</text>
            
            {/* Arrow to Documentation */}
            <path d="M 750 540 L 750 610" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
            
            {/* Phase 4: Documentation */}
            <rect x="600" y="610" width="300" height="100" rx="8" className="fill-indigo-100 stroke-indigo-500 stroke-2" />
            <text x="750" y="640" textAnchor="middle" className="text-sm font-bold fill-gray-900">Phase 4</text>
            <text x="750" y="660" textAnchor="middle" className="text-xs fill-gray-700">Usability Engineering File</text>
            <text x="750" y="675" textAnchor="middle" className="text-xs fill-gray-700">• Complete documentation</text>
            <text x="750" y="690" textAnchor="middle" className="text-xs fill-gray-700">• Regulatory submission</text>
            
            {/* Post-Production Monitoring */}
            <rect x="50" y="610" width="200" height="100" rx="8" className="fill-red-100 stroke-red-500 stroke-2" />
            <text x="150" y="640" textAnchor="middle" className="text-sm font-bold fill-gray-900">Ongoing</text>
            <text x="150" y="660" textAnchor="middle" className="text-xs fill-gray-700">Post-Production</text>
            <text x="150" y="675" textAnchor="middle" className="text-xs fill-gray-700">Monitoring</text>
            <text x="150" y="690" textAnchor="middle" className="text-xs fill-gray-700">• Use error tracking</text>
            
            {/* Arrow from Documentation to Post-Production */}
            <path d="M 600 660 L 250 660" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3,3" />
            
            {/* Software Integration Note */}
            <rect x="950" y="250" width="200" height="80" rx="8" className="fill-gray-100 stroke-gray-400 stroke-2" />
            <text x="1050" y="275" textAnchor="middle" className="text-xs font-bold fill-gray-900">Software UI</text>
            <text x="1050" y="290" textAnchor="middle" className="text-xs fill-gray-700">(IEC 62304)</text>
            <text x="1050" y="310" textAnchor="middle" className="text-xs fill-gray-700">• Software validation</text>
            <text x="1050" y="325" textAnchor="middle" className="text-xs fill-gray-700">• Usability integration</text>
            
            {/* Arrow from Software to Design */}
            <path d="M 950 290 L 850 120" stroke="#6b7280" strokeWidth="2" strokeDasharray="3,3" />
            
            {/* Arrowhead marker definition */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
              </marker>
            </defs>
          </svg>
        </div>
      }
      sections={[
        {
          id: 'planning',
          title: 'Phase 1: Planning and Use Specification',
          description: 'Establish the foundation for usability engineering by defining users, environments, and use scenarios. This phase integrates with risk management to identify use-related hazards early.',
          steps: [
            {
              step: 1,
              title: 'Define User Groups',
              description: 'Identify all intended user groups for your device. Consider characteristics that affect device use: training level, experience, physical capabilities, cognitive abilities, language, and technical expertise. For medical laser systems, user groups typically include surgeons (primary users), surgical technicians (setup and maintenance), nurses (monitoring), and potentially patients (for home-use therapeutic devices).',
              deliverables: [
                'User group definitions document',
                'User characteristics matrix',
                'User group profiles with demographics',
              ],
              tips: [
                'Avoid defining user groups too broadly - "healthcare professionals" is too vague',
                'Consider different experience levels within the same role',
                'Document assumptions about user capabilities',
                'Review similar devices and their user groups',
              ],
            },
            {
              step: 2,
              title: 'Specify Use Environments',
              description: 'Document all intended use environments including physical environment (operating room, clinic, home), ambient conditions (lighting, noise, distractions), and environmental constraints (sterile field, space limitations, time pressure). For laser systems, consider OR environments with multiple devices, sterile conditions, and time-critical procedures.',
              deliverables: [
                'Use environment specifications',
                'Environmental constraints analysis',
                'Environmental risk factors',
              ],
              tips: [
                'Consider worst-case environments, not just ideal conditions',
                'Document environmental factors that could affect usability',
                'Include emergency use scenarios',
                'Consider international variations in use environments',
              ],
            },
            {
              step: 3,
              title: 'Develop Use Scenarios',
              description: 'Create detailed use scenarios covering normal use, abnormal use (device malfunctions), and reasonably foreseeable misuse. Scenarios should describe user goals, tasks, sequences of actions, and expected outcomes. For laser systems, include scenarios for power setting, targeting, emergency stop, maintenance, and error recovery.',
              deliverables: [
                'Use scenario document',
                'Task analysis for critical tasks',
                'Use case diagrams or flowcharts',
              ],
              tips: [
                'Include scenarios for all user groups',
                'Consider edge cases and error conditions',
                'Document scenarios in user language, not technical terms',
                'Review adverse events from similar devices',
                'Include scenarios for different experience levels',
              ],
            },
            {
              step: 4,
              title: 'Identify Use-Related Hazards',
              description: 'Based on use specification and risk analysis (ISO 14971), identify use errors that could lead to harm. Common use errors include: wrong settings, incorrect operation sequence, failure to notice alarms, misinterpretation of displays, and bypassing safety features. Document these as hazards in your risk management file.',
              deliverables: [
                'Use-related hazard list',
                'Use error analysis',
                'Risk analysis updates (ISO 14971)',
              ],
              tips: [
                'Use systematic methods: task analysis, heuristic evaluation, expert review',
                'Consider all use scenarios, not just normal use',
                'Link use errors to potential harm',
                'Prioritize hazards by severity and probability',
                'Review similar device adverse events',
              ],
            },
          ],
        },
        {
          id: 'design',
          title: 'Phase 2: User Interface Design',
          description: 'Design user interfaces that prevent use errors and support safe, effective device use. Apply usability principles and iterate through formative evaluation.',
          steps: [
            {
              step: 5,
              title: 'Apply Usability Design Principles',
              description: 'Design user interface following established usability principles: clear labeling, intuitive controls, appropriate feedback, error prevention, error recovery, consistency, and simplicity. Use design standards (ANSI/AAMI HE75, ISO 9241) and human factors guidelines. For laser systems, ensure power displays are clear, controls are intuitive, and safety-critical functions are prominent.',
              deliverables: [
                'UI design specifications',
                'Design rationale document',
                'Design standards compliance matrix',
              ],
              tips: [
                'Prioritize safety-critical functions in design',
                'Use familiar patterns and conventions',
                'Minimize cognitive load',
                'Design for error recovery, not just error prevention',
                'Consider users with varying abilities',
              ],
            },
            {
              step: 6,
              title: 'Implement Risk Controls',
              description: 'For each use-related hazard, implement risk controls in priority order: (1) Design changes to prevent use errors (preferred), (2) Protective measures (alarms, interlocks, confirmations), (3) Information for safety (warnings, instructions, training). Document all risk controls and link them to hazards in risk management file.',
              deliverables: [
                'Risk control implementation plan',
                'Risk management file updates',
                'Design change documentation',
              ],
              tips: [
                'Prefer design changes over warnings',
                'Make safety-critical functions difficult to misuse',
                'Provide clear feedback for all actions',
                'Use multiple layers of protection for high-risk functions',
                'Document why each risk control was chosen',
              ],
            },
            {
              step: 7,
              title: 'Create Prototypes',
              description: 'Develop prototypes for formative evaluation. Start with low-fidelity prototypes (paper, wireframes) and progress to high-fidelity prototypes (interactive mockups, functional prototypes). Prototypes should represent key user interface elements and allow testing of critical tasks.',
              deliverables: [
                'Low-fidelity prototypes',
                'High-fidelity prototypes',
                'Prototype specifications',
              ],
              tips: [
                'Prototype early and often',
                'Focus on critical tasks and high-risk scenarios',
                'Use prototypes to test design concepts before full development',
                'Involve users in prototype evaluation',
                'Iterate based on feedback',
              ],
            },
          ],
        },
        {
          id: 'formative',
          title: 'Phase 3: Formative Evaluation',
          description: 'Iteratively test prototypes with users to identify and fix usability issues before final design. Formative evaluation is an iterative process that continues until design is acceptable.',
          steps: [
            {
              step: 8,
              title: 'Plan Formative Evaluation',
              description: 'Develop formative evaluation plan specifying test methods (think-aloud, task analysis, heuristic evaluation), user groups, sample sizes (typically 5-8 users per iteration), test scenarios, and data collection methods. Focus on critical tasks and high-risk use scenarios.',
              deliverables: [
                'Formative evaluation plan',
                'Test scenarios',
                'Data collection forms',
              ],
              tips: [
                'Test early in design process',
                'Use multiple evaluation methods',
                'Focus on critical tasks',
                'Test with representative users, not internal staff',
                'Plan for multiple iterations',
              ],
            },
            {
              step: 9,
              title: 'Conduct Formative Testing',
              description: 'Perform usability testing with small groups of representative users (5-8 users per iteration). Observe users performing tasks, document use errors, difficulties, and user feedback. Use think-aloud protocols to understand user thinking. Test critical tasks and high-risk scenarios.',
              deliverables: [
                'Formative evaluation reports',
                'Use error documentation',
                'Design issue list',
              ],
              tips: [
                'Create realistic test scenarios',
                'Minimize observer influence',
                'Document all use errors, even minor ones',
                'Capture user comments and feedback',
                'Test error recovery scenarios',
              ],
            },
            {
              step: 10,
              title: 'Analyze Results and Refine Design',
              description: 'Analyze formative evaluation results to identify usability issues and design problems. Prioritize issues by severity and frequency. Update design to address issues. Re-test with new prototype. Repeat until design is acceptable (no critical use errors, acceptable task completion rates).',
              deliverables: [
                'Formative evaluation analysis',
                'Design change documentation',
                'Updated prototypes',
              ],
              tips: [
                'Fix critical issues before proceeding',
                'Prioritize fixes by risk and frequency',
                'Test fixes to verify they work',
                'Don\'t skip re-testing after design changes',
                'Document all design changes and rationale',
              ],
            },
          ],
        },
        {
          id: 'validation',
          title: 'Phase 4: Summative Validation',
          description: 'Conduct final validation testing to demonstrate that use errors leading to harm are eliminated or reduced to acceptable levels. This is the final proof of usability before commercial release.',
          steps: [
            {
              step: 11,
              title: 'Create Validation Plan',
              description: 'Develop comprehensive validation plan specifying test methods, user groups, sample sizes (minimum 15 users per group, more if use errors observed), test scenarios (normal use, abnormal use, critical tasks), pass/fail criteria, and data collection methods. Validation must demonstrate safety, not just satisfaction.',
              deliverables: [
                'Usability validation plan',
                'Validation protocol',
                'Pass/fail criteria',
              ],
              tips: [
                'Plan for sufficient sample size (15+ per group)',
                'Include all critical tasks',
                'Define clear pass/fail criteria',
                'Plan for data analysis',
                'Consider statistical analysis for critical tasks',
              ],
            },
            {
              step: 12,
              title: 'Recruit Representative Users',
              description: 'Recruit users representative of intended user groups. Users should have appropriate training and experience levels. Avoid using internal employees or overly experienced users. Consider demographics, experience levels, and physical capabilities. Document user characteristics.',
              deliverables: [
                'User recruitment plan',
                'User demographics documentation',
                'User screening criteria',
              ],
              tips: [
                'Recruit from actual user population when possible',
                'Avoid internal employees',
                'Match user characteristics to intended users',
                'Document user demographics',
                'Consider multiple user groups',
              ],
            },
            {
              step: 13,
              title: 'Conduct Validation Testing',
              description: 'Perform validation testing with representative users under realistic conditions. Test all critical tasks and use scenarios. Observe users without assistance. Document all use errors, near-misses, task completion rates, and user feedback. Test normal use, abnormal use, and error recovery.',
              deliverables: [
                'Validation test results',
                'Use error documentation',
                'Task completion data',
                'User feedback',
              ],
              tips: [
                'Create realistic test conditions',
                'Minimize observer influence',
                'Document all observations',
                'Test error recovery',
                'Capture both quantitative and qualitative data',
              ],
            },
            {
              step: 14,
              title: 'Analyze Validation Results',
              description: 'Analyze validation data to determine if use errors leading to harm are eliminated or acceptable. Calculate task completion rates, use error rates, and severity of use errors. Compare results to pass/fail criteria. Determine if additional risk controls are needed.',
              deliverables: [
                'Validation analysis report',
                'Use error analysis',
                'Risk assessment updates',
                'Conclusions and recommendations',
              ],
              tips: [
                'Analyze both quantitative and qualitative data',
                'Consider severity of use errors, not just frequency',
                'Compare to pass/fail criteria',
                'Update risk management file with results',
                'Document all conclusions',
              ],
            },
          ],
        },
        {
          id: 'documentation',
          title: 'Phase 5: Documentation and Post-Production',
          description: 'Complete usability engineering file and establish post-production monitoring processes.',
          steps: [
            {
              step: 15,
              title: 'Complete Usability Engineering File',
              description: 'Compile complete usability engineering file including use specification, user interface specification, validation plan, validation results, risk analysis updates, design rationale, and post-production monitoring plan. Ensure file is complete, traceable, and ready for regulatory submission.',
              deliverables: [
                'Usability engineering file',
                'File index and traceability matrix',
                'Regulatory submission package',
              ],
              tips: [
                'Ensure all sections are complete',
                'Maintain traceability throughout',
                'Link to risk management file',
                'Include all supporting documentation',
                'Review for completeness before submission',
              ],
            },
            {
              step: 16,
              title: 'Establish Post-Production Monitoring',
              description: 'Establish processes to monitor post-production information for use errors. Include complaint handling, adverse event reporting, post-market surveillance, and user feedback mechanisms. Plan for periodic review and risk management file updates.',
              deliverables: [
                'Post-production monitoring plan',
                'Monitoring procedures',
                'Review schedule',
              ],
              tips: [
                'Monitor multiple sources: complaints, adverse events, user feedback',
                'Establish review frequency',
                'Define triggers for risk management file updates',
                'Link to quality management system',
                'Document all monitoring activities',
              ],
            },
          ],
        },
      ]}
      integrationPoints={[
        {
          title: 'Integration with ISO 14971 Risk Management',
          description: 'Use errors identified in usability engineering are hazards that must be addressed in risk analysis. Usability validation verifies that risk controls for use-related hazards are effective. Risk management file and usability engineering file must be linked and consistent.',
          relatedStandards: [
            {
              number: 'ISO 14971',
              title: 'Application of risk management',
              url: '/standards/iso-14971',
              relationship: 'Use errors are hazards in risk analysis. Usability validation verifies risk controls.',
            },
          ],
        },
        {
          title: 'Integration with IEC 62304 Software Development',
          description: 'Software user interfaces must comply with IEC 62366. Software validation (IEC 62304) should include usability testing. Software development process should incorporate usability requirements and formative evaluation.',
          relatedStandards: [
            {
              number: 'IEC 62304',
              title: 'Medical device software',
              url: '/standards/iec-62304',
              relationship: 'Software UI must comply with IEC 62366. Software validation includes usability.',
            },
          ],
        },
        {
          title: 'Integration with IEC 60601-1 Medical Electrical Equipment',
          description: 'MEE user interfaces must comply with IEC 62366. Essential performance requirements (IEC 60601-1) may include usability aspects. User interface is part of device safety.',
          relatedStandards: [
            {
              number: 'IEC 60601-1',
              title: 'Medical electrical equipment — General requirements',
              url: '/standards/iec-60601-1',
              relationship: 'MEE UI must comply with IEC 62366. Essential performance includes usability.',
            },
          ],
        },
      ]}
      checklists={[
        {
          title: 'Use Specification Checklist',
          items: [
            'All user groups identified and documented',
            'User characteristics defined (training, experience, capabilities)',
            'All use environments specified',
            'Use scenarios developed for normal, abnormal, and misuse',
            'Critical tasks identified',
            'Use-related hazards identified and documented in risk analysis',
          ],
        },
        {
          title: 'Design Checklist',
          items: [
            'Usability design principles applied',
            'Risk controls implemented for all use-related hazards',
            'Design changes preferred over warnings',
            'Prototypes created for formative evaluation',
            'Design rationale documented',
            'Design standards compliance verified',
          ],
        },
        {
          title: 'Formative Evaluation Checklist',
          items: [
            'Formative evaluation plan created',
            'Test scenarios developed',
            'Representative users recruited',
            'Testing conducted with 5-8 users per iteration',
            'Use errors documented',
            'Design refined based on results',
            'Multiple iterations completed',
            'Design acceptable before proceeding to validation',
          ],
        },
        {
          title: 'Validation Checklist',
          items: [
            'Validation plan created with clear pass/fail criteria',
            'Minimum 15 users per user group recruited',
            'Representative users (not internal employees)',
            'All critical tasks tested',
            'Normal use, abnormal use, and error recovery tested',
            'All use errors documented',
            'Results analyzed against pass/fail criteria',
            'Risk management file updated with validation results',
            'Validation demonstrates safety',
          ],
        },
        {
          title: 'Documentation Checklist',
          items: [
            'Usability engineering file complete',
            'All sections documented',
            'Traceability maintained',
            'Linked to risk management file',
            'Post-production monitoring plan established',
            'File ready for regulatory submission',
          ],
        },
      ]}
      commonPitfalls={[
        {
          pitfall: 'Insufficient user representation in testing',
          solution: 'Ensure users represent actual intended users, not just internal staff. Consider demographics, experience levels, and physical capabilities. Recruit from actual user population when possible. Document user characteristics.',
        },
        {
          pitfall: 'Inadequate sample sizes for validation',
          solution: 'Use minimum 15 users per user group. Increase sample size if use errors are observed. Consider statistical analysis for critical tasks. Document sample size rationale.',
        },
        {
          pitfall: 'Use errors discovered late in development',
          solution: 'Conduct formative evaluation early and iteratively. Test prototypes and early designs. Fix issues before final validation. Don\'t wait until design is complete to test usability.',
        },
        {
          pitfall: 'Over-reliance on training as risk control',
          solution: 'Design should prevent use errors, not rely on training. Training is a last resort risk control. Prefer design changes over warnings and instructions. Document why training is necessary.',
        },
        {
          pitfall: 'Incomplete use scenarios',
          solution: 'Consider all use scenarios including normal use, abnormal use, misuse, and emergency situations. Include scenarios for different user groups and use environments. Review similar devices and adverse events.',
        },
        {
          pitfall: 'Poor integration with risk management',
          solution: 'Link use errors to hazards in risk analysis. Update risk management file with usability findings. Ensure risk controls are verified through usability validation. Maintain traceability between files.',
        },
      ]}
      medicalLaserExample={{
        title: 'Usability Engineering for Class 4 Medical Laser Systems',
        description: 'Medical laser systems present significant usability challenges due to complexity, safety-critical nature, and potential for serious harm from use errors. Common use errors include wrong power settings, incorrect targeting, failure to use safety equipment, and misinterpretation of displays. Usability engineering must address these through intuitive design, clear feedback, and appropriate safeguards.',
        scenarios: [
          {
            scenario: 'Surgical Laser Control Interface',
            approach: [
              'User groups: Surgeons (primary), surgical technicians (setup), nurses (monitoring). Different experience levels.',
              'Use environment: Operating room with distractions, time pressure, sterile conditions, limited visibility.',
              'Critical use errors: Wrong power setting (too high/too low), incorrect pulse duration, wrong wavelength, failure to confirm settings.',
              'Design solutions: Clear power display with units, confirmation prompts for high-power, preset modes, audible feedback, large readable displays.',
              'Validation: Test with 15+ surgeons of varying experience. Test critical tasks: power setting, targeting, emergency stop. Verify no use errors leading to harm.',
            ],
          },
          {
            scenario: 'Safety Interlock User Interface',
            approach: [
              'Critical: Safety interlock failures can lead to serious eye injury. Usability is critical for safety.',
              'Use errors: Bypassing interlocks, ignoring warnings, failure to use protective eyewear, incorrect status interpretation.',
              'Design solutions: Clear interlock status indicators (visual and audible), impossible-to-bypass interlocks, prominent warnings, mandatory confirmations.',
              'Validation: Test interlock-related tasks. Verify users cannot easily bypass safety systems. Test emergency procedures.',
            ],
          },
          {
            scenario: 'Therapeutic Laser User Interface',
            approach: [
              'User groups: Therapists, technicians, sometimes patients (home use). Varying technical expertise.',
              'Use environment: Clinic or home. Less controlled than surgical setting.',
              'Use errors: Overexposure, wrong treatment area, failure to check contraindications, incorrect positioning.',
              'Design solutions: Treatment timers with auto-shutoff, clear area indicators, contraindication warnings, positioning guides, simple controls.',
              'Validation: Test with intended users. Verify protocols followed correctly. Test error recovery.',
            ],
          },
        ],
      }}
    />
  );
}

