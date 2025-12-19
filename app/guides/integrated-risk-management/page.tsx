'use client';

import ImplementationGuideTemplate from '@/components/ImplementationGuideTemplate';

export default function IntegratedRiskManagementGuidePage() {
  return (
    <ImplementationGuideTemplate
      title="Integrated Risk Management Implementation Guide"
      subtitle="Comprehensive risk management integrating usability risk, software risk, and device risk with full traceability"
      basedOn={[
        {
          number: 'ISO 14971',
          title: 'Medical devices — Application of risk management to medical devices',
          url: '/standards/iso-14971',
        },
        {
          number: 'IEC 62366',
          title: 'Medical devices — Application of usability engineering',
          url: '/standards/iec-62366',
        },
        {
          number: 'IEC 62304',
          title: 'Medical device software — Software life cycle processes',
          url: '/standards/iec-62304',
        },
      ]}
      overview={{
        purpose: 'This guide provides a comprehensive approach to integrated risk management that coordinates usability risk assessment (IEC 62366), software risk hazard analysis (IEC 62304), and device risk analysis (ISO 14971). It ensures all risk analyses are traceable, consistent, and comprehensive. The guide addresses the common problem of fragmented risk management where different risk analyses are conducted in isolation without proper integration.',
        audience: 'Risk management professionals, quality engineers, software engineers, usability engineers, regulatory affairs professionals, and project managers coordinating risk management activities across disciplines.',
        prerequisites: [
          'Understanding of ISO 14971 risk management principles',
          'Familiarity with IEC 62366 usability engineering',
          'Knowledge of IEC 62304 software development',
          'Understanding of medical device design controls',
        ],
        estimatedTime: '18-24 months (integrated with device development lifecycle)',
      }}
      visualDiagram={
        <div className="w-full overflow-x-auto">
          <svg viewBox="0 0 1400 900" className="w-full h-auto">
            {/* Title */}
            <text x="700" y="30" textAnchor="middle" className="text-lg font-bold fill-gray-900">
              Integrated Risk Management Process with Traceability
            </text>
            
            {/* Central Risk Management File */}
            <rect x="550" y="60" width="300" height="140" rx="8" className="fill-blue-200 stroke-blue-600 stroke-3" />
            <text x="700" y="95" textAnchor="middle" className="text-base font-bold fill-gray-900">Central Risk Management File</text>
            <text x="700" y="115" textAnchor="middle" className="text-xs fill-gray-700">(ISO 14971)</text>
            <text x="700" y="135" textAnchor="middle" className="text-xs fill-gray-700">• Master Hazard List</text>
            <text x="700" y="150" textAnchor="middle" className="text-xs fill-gray-700">• Risk Control Traceability</text>
            <text x="700" y="165" textAnchor="middle" className="text-xs fill-gray-700">• Integrated Risk Analysis</text>
            <text x="700" y="180" textAnchor="middle" className="text-xs fill-gray-700">• Risk Management Review</text>
            
            {/* Device Risk Analysis */}
            <rect x="50" y="250" width="250" height="180" rx="8" className="fill-green-100 stroke-green-500 stroke-2" />
            <text x="175" y="280" textAnchor="middle" className="text-sm font-bold fill-gray-900">Device Risk Analysis</text>
            <text x="175" y="300" textAnchor="middle" className="text-xs fill-gray-700">(ISO 14971)</text>
            <text x="175" y="320" textAnchor="middle" className="text-xs fill-gray-700">• Electrical hazards</text>
            <text x="175" y="335" textAnchor="middle" className="text-xs fill-gray-700">• Mechanical hazards</text>
            <text x="175" y="350" textAnchor="middle" className="text-xs fill-gray-700">• Thermal hazards</text>
            <text x="175" y="365" textAnchor="middle" className="text-xs fill-gray-700">• Optical radiation</text>
            <text x="175" y="380" textAnchor="middle" className="text-xs fill-gray-700">• Environmental hazards</text>
            <text x="175" y="395" textAnchor="middle" className="text-xs fill-gray-700">• Biological hazards</text>
            <text x="175" y="410" textAnchor="middle" className="text-xs fill-gray-700">• FMEA, HAZOP</text>
            
            {/* Usability Risk Analysis */}
            <rect x="575" y="250" width="250" height="180" rx="8" className="fill-purple-100 stroke-purple-500 stroke-2" />
            <text x="700" y="280" textAnchor="middle" className="text-sm font-bold fill-gray-900">Usability Risk Analysis</text>
            <text x="700" y="300" textAnchor="middle" className="text-xs fill-gray-700">(IEC 62366)</text>
            <text x="700" y="320" textAnchor="middle" className="text-xs fill-gray-700">• Use error hazards</text>
            <text x="700" y="335" textAnchor="middle" className="text-xs fill-gray-700">• Wrong settings</text>
            <text x="700" y="350" textAnchor="middle" className="text-xs fill-gray-700">• Incorrect operation</text>
            <text x="700" y="365" textAnchor="middle" className="text-xs fill-gray-700">• Alarm failures</text>
            <text x="700" y="380" textAnchor="middle" className="text-xs fill-gray-700">• Display errors</text>
            <text x="700" y="395" textAnchor="middle" className="text-xs fill-gray-700">• Task analysis</text>
            <text x="700" y="410" textAnchor="middle" className="text-xs fill-gray-700">• Formative/summative</text>
            
            {/* Software Risk Analysis */}
            <rect x="1100" y="250" width="250" height="180" rx="8" className="fill-orange-100 stroke-orange-500 stroke-2" />
            <text x="1225" y="280" textAnchor="middle" className="text-sm font-bold fill-gray-900">Software Risk Analysis</text>
            <text x="1225" y="300" textAnchor="middle" className="text-xs fill-gray-700">(IEC 62304)</text>
            <text x="1225" y="320" textAnchor="middle" className="text-xs fill-gray-700">• Software hazards</text>
            <text x="1225" y="335" textAnchor="middle" className="text-xs fill-gray-700">• Software failures</text>
            <text x="1225" y="350" textAnchor="middle" className="text-xs fill-gray-700">• Data corruption</text>
            <text x="1225" y="365" textAnchor="middle" className="text-xs fill-gray-700">• Timing errors</text>
            <text x="1225" y="380" textAnchor="middle" className="text-xs fill-gray-700">• Interface failures</text>
            <text x="1225" y="395" textAnchor="middle" className="text-xs fill-gray-700">• Software FMEA</text>
            <text x="1225" y="410" textAnchor="middle" className="text-xs fill-gray-700">• Hazard analysis</text>
            
            {/* Arrows from analyses to central file */}
            <path d="M 175 250 L 650 130" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <path d="M 700 250 L 700 200" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <path d="M 1225 250 L 800 130" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
            
            {/* Traceability Matrix */}
            <rect x="50" y="480" width="1300" height="120" rx="8" className="fill-yellow-50 stroke-yellow-400 stroke-2" />
            <text x="700" y="510" textAnchor="middle" className="text-sm font-bold fill-gray-900">Traceability Matrix</text>
            <text x="200" y="535" textAnchor="middle" className="text-xs fill-gray-700">Hazard ID</text>
            <text x="400" y="535" textAnchor="middle" className="text-xs fill-gray-700">Source Analysis</text>
            <text x="600" y="535" textAnchor="middle" className="text-xs fill-gray-700">Risk Control</text>
            <text x="800" y="535" textAnchor="middle" className="text-xs fill-gray-700">Verification</text>
            <text x="1000" y="535" textAnchor="middle" className="text-xs fill-gray-700">Validation</text>
            <text x="1200" y="535" textAnchor="middle" className="text-xs fill-gray-700">Status</text>
            
            {/* Example rows */}
            <line x1="50" y1="550" x2="1350" y2="550" stroke="#e5e7eb" strokeWidth="1" />
            <text x="200" y="570" textAnchor="middle" className="text-xs fill-gray-600">H-001</text>
            <text x="400" y="570" textAnchor="middle" className="text-xs fill-gray-600">Device/Usability</text>
            <text x="600" y="570" textAnchor="middle" className="text-xs fill-gray-600">Power limit</text>
            <text x="800" y="570" textAnchor="middle" className="text-xs fill-gray-600">Test-001</text>
            <text x="1000" y="570" textAnchor="middle" className="text-xs fill-gray-600">Val-001</text>
            <text x="1200" y="570" textAnchor="middle" className="text-xs fill-gray-600">Closed</text>
            
            <line x1="50" y1="580" x2="1350" y2="580" stroke="#e5e7eb" strokeWidth="1" />
            <text x="200" y="590" textAnchor="middle" className="text-xs fill-gray-600">H-002</text>
            <text x="400" y="590" textAnchor="middle" className="text-xs fill-gray-600">Software</text>
            <text x="600" y="590" textAnchor="middle" className="text-xs fill-gray-600">Watchdog</text>
            <text x="800" y="590" textAnchor="middle" className="text-xs fill-gray-600">Test-002</text>
            <text x="1000" y="590" textAnchor="middle" className="text-xs fill-gray-600">Val-002</text>
            <text x="1200" y="590" textAnchor="middle" className="text-xs fill-gray-600">Closed</text>
            
            {/* Risk Controls */}
            <rect x="50" y="650" width="300" height="180" rx="8" className="fill-indigo-100 stroke-indigo-500 stroke-2" />
            <text x="200" y="680" textAnchor="middle" className="text-sm font-bold fill-gray-900">Risk Controls</text>
            <text x="200" y="700" textAnchor="middle" className="text-xs fill-gray-700">1. Inherent Safety</text>
            <text x="200" y="715" textAnchor="middle" className="text-xs fill-gray-700">2. Protective Measures</text>
            <text x="200" y="730" textAnchor="middle" className="text-xs fill-gray-700">3. Information</text>
            <text x="200" y="750" textAnchor="middle" className="text-xs fill-gray-700">• Design changes</text>
            <text x="200" y="765" textAnchor="middle" className="text-xs fill-gray-700">• Safety interlocks</text>
            <text x="200" y="780" textAnchor="middle" className="text-xs fill-gray-700">• Alarms</text>
            <text x="200" y="795" textAnchor="middle" className="text-xs fill-gray-700">• Warnings</text>
            <text x="200" y="810" textAnchor="middle" className="text-xs fill-gray-700">• Training</text>
            
            {/* Verification & Validation */}
            <rect x="550" y="650" width="300" height="180" rx="8" className="fill-red-100 stroke-red-500 stroke-2" />
            <text x="700" y="680" textAnchor="middle" className="text-sm font-bold fill-gray-900">Verification & Validation</text>
            <text x="700" y="700" textAnchor="middle" className="text-xs fill-gray-700">• Design verification</text>
            <text x="700" y="715" textAnchor="middle" className="text-xs fill-gray-700">• Software validation</text>
            <text x="700" y="730" textAnchor="middle" className="text-xs fill-gray-700">• Usability validation</text>
            <text x="700" y="750" textAnchor="middle" className="text-xs fill-gray-700">• Safety testing</text>
            <text x="700" y="765" textAnchor="middle" className="text-xs fill-gray-700">• Integration testing</text>
            <text x="700" y="780" textAnchor="middle" className="text-xs fill-gray-700">• Traceability verified</text>
            <text x="700" y="795" textAnchor="middle" className="text-xs fill-gray-700">• All risks closed</text>
            <text x="700" y="810" textAnchor="middle" className="text-xs fill-gray-700">• Risk review complete</text>
            
            {/* Post-Production */}
            <rect x="1050" y="650" width="300" height="180" rx="8" className="fill-teal-100 stroke-teal-500 stroke-2" />
            <text x="1200" y="680" textAnchor="middle" className="text-sm font-bold fill-gray-900">Post-Production</text>
            <text x="1200" y="700" textAnchor="middle" className="text-xs fill-gray-700">• Complaint monitoring</text>
            <text x="1200" y="715" textAnchor="middle" className="text-xs fill-gray-700">• Adverse events</text>
            <text x="1200" y="730" textAnchor="middle" className="text-xs fill-gray-700">• Use error tracking</text>
            <text x="1200" y="750" textAnchor="middle" className="text-xs fill-gray-700">• Software issues</text>
            <text x="1200" y="765" textAnchor="middle" className="text-xs fill-gray-700">• Risk file updates</text>
            <text x="1200" y="780" textAnchor="middle" className="text-xs fill-gray-700">• Periodic reviews</text>
            <text x="1200" y="795" textAnchor="middle" className="text-xs fill-gray-700">• CAPA integration</text>
            <text x="1200" y="810" textAnchor="middle" className="text-xs fill-gray-700">• Continuous improvement</text>
            
            {/* Arrows from central file to controls/validation */}
            <path d="M 650 200 L 200 650" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead)" />
            <path d="M 700 200 L 700 650" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead)" />
            <path d="M 750 200 L 1200 650" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead)" />
            
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
          title: 'Phase 1: Establish Integrated Risk Management Framework',
          description: 'Set up the organizational structure and processes for integrated risk management. Establish the central risk management file and traceability systems.',
          steps: [
            {
              step: 1,
              title: 'Create Risk Management Plan',
              description: 'Develop comprehensive risk management plan that coordinates device risk (ISO 14971), usability risk (IEC 62366), and software risk (IEC 62304). Define risk acceptability criteria, responsibilities, review activities, and integration points. Establish how different risk analyses will be coordinated and integrated.',
              deliverables: [
                'Integrated risk management plan',
                'Risk acceptability criteria',
                'Responsibility matrix',
                'Review schedule',
              ],
              tips: [
                'Define clear roles and responsibilities for each risk analysis type',
                'Establish regular integration meetings',
                'Define risk acceptability criteria consistently across all analyses',
                'Plan for traceability from the start',
                'Link to design and development plan',
              ],
            },
            {
              step: 2,
              title: 'Establish Central Risk Management File',
              description: 'Create central risk management file structure that will serve as the master repository for all risk information. Include sections for device hazards, usability hazards, software hazards, integrated risk analysis, risk controls, and traceability matrix. Use consistent hazard numbering system.',
              deliverables: [
                'Risk management file structure',
                'Hazard numbering system',
                'File organization template',
                'Document control procedures',
              ],
              tips: [
                'Use consistent hazard ID format (e.g., H-001, H-002)',
                'Create master hazard list in central file',
                'Establish document control procedures',
                'Plan for version control and change management',
                'Ensure file is accessible to all team members',
              ],
            },
            {
              step: 3,
              title: 'Create Traceability Matrix',
              description: 'Develop traceability matrix template that links hazards from all sources (device, usability, software) to risk controls, verification activities, validation activities, and status. This matrix ensures nothing is missed and provides audit trail.',
              deliverables: [
                'Traceability matrix template',
                'Matrix populated with initial hazards',
                'Traceability procedures',
              ],
              tips: [
                'Use spreadsheet or database for traceability matrix',
                'Include columns: Hazard ID, Source, Description, Severity, Occurrence, Risk Control, Verification, Validation, Status',
                'Update matrix as hazards are identified',
                'Review matrix regularly for completeness',
                'Use matrix for risk management reviews',
              ],
            },
            {
              step: 4,
              title: 'Define Integration Points',
              description: 'Identify specific points in development process where risk analyses will be integrated. Define when device risk, usability risk, and software risk analyses will be conducted, reviewed together, and updated. Establish integration meeting schedule.',
              deliverables: [
                'Integration point schedule',
                'Meeting schedule',
                'Integration procedures',
              ],
              tips: [
                'Integrate risk analyses at design reviews',
                'Conduct joint risk reviews regularly',
                'Update all analyses when design changes',
                'Ensure risk analyses inform each other',
                'Document integration activities',
              ],
            },
          ],
        },
        {
          id: 'device-risk',
          title: 'Phase 2: Device Risk Analysis (ISO 14971)',
          description: 'Conduct comprehensive device risk analysis identifying all physical, electrical, mechanical, and environmental hazards. This forms the foundation for integrated risk management.',
          steps: [
            {
              step: 5,
              title: 'Identify Device Hazards',
              description: 'Systematically identify all device hazards using methods like FMEA, HAZOP, or checklists. Consider energy sources (electrical, thermal, mechanical, optical), biological hazards, environmental hazards, and device malfunctions. For laser systems, include optical radiation, electrical hazards, thermal hazards, and mechanical hazards.',
              deliverables: [
                'Device hazard list',
                'FMEA worksheets',
                'HAZOP results',
                'Hazard analysis documentation',
              ],
              tips: [
                'Use systematic methods (FMEA, HAZOP)',
                'Consider all energy sources',
                'Review similar devices and adverse events',
                'Involve cross-functional team',
                'Document all hazards in central file',
              ],
            },
            {
              step: 6,
              title: 'Estimate Device Risks',
              description: 'For each device hazard, estimate risk using severity (1-10), occurrence (1-10), and detection (1-10). Calculate Risk Priority Number (RPN = S × O × D). Use FMEA Calculator tool. Document risk estimates and rationale.',
              deliverables: [
                'Risk estimation worksheets',
                'RPN calculations',
                'Risk rationale documentation',
              ],
              tips: [
                'Use standardized rating scales',
                'Base estimates on data when available',
                'Document rationale for all estimates',
                'Have multiple reviewers validate estimates',
                'Consider worst-case scenarios',
              ],
            },
            {
              step: 7,
              title: 'Link Device Hazards to Central File',
              description: 'Enter all device hazards into central risk management file with consistent hazard IDs. Update traceability matrix. Ensure hazards are properly categorized and linked to device components or functions.',
              deliverables: [
                'Updated central risk file',
                'Updated traceability matrix',
                'Hazard cross-reference',
              ],
              tips: [
                'Use consistent hazard ID format',
                'Link hazards to device components',
                'Update traceability matrix immediately',
                'Ensure no duplicates',
                'Review for completeness',
              ],
            },
          ],
        },
        {
          id: 'usability-risk',
          title: 'Phase 3: Usability Risk Analysis (IEC 62366)',
          description: 'Identify use-related hazards and integrate them with device risk analysis. Usability hazards often overlap with device hazards but require different risk controls.',
          steps: [
            {
              step: 8,
              title: 'Identify Use-Related Hazards',
              description: 'Based on use specification (IEC 62366), identify use errors that could lead to harm. Common use errors include: wrong settings, incorrect operation sequence, failure to notice alarms, misinterpretation of displays, bypassing safety features. Document use errors as hazards.',
              deliverables: [
                'Use-related hazard list',
                'Use error analysis',
                'Task analysis results',
              ],
              tips: [
                'Use task analysis and heuristic evaluation',
                'Consider all use scenarios',
                'Review similar device adverse events',
                'Consider different user groups',
                'Link use errors to potential harm',
              ],
            },
            {
              step: 9,
              title: 'Estimate Usability Risks',
              description: 'For each use-related hazard, estimate risk considering severity of harm and probability of use error. Consider user characteristics, use environment, and task complexity. Document risk estimates.',
              deliverables: [
                'Usability risk estimates',
                'Risk rationale',
                'User group considerations',
              ],
              tips: [
                'Consider user experience levels',
                'Account for use environment factors',
                'Consider task complexity',
                'Use data from formative evaluation',
                'Document assumptions',
              ],
            },
            {
              step: 10,
              title: 'Integrate Usability Hazards with Device Hazards',
              description: 'Compare usability hazards with device hazards. Identify overlaps (same hazard from different perspectives) and unique usability hazards. Consolidate overlapping hazards in central file. Ensure all hazards are in traceability matrix.',
              deliverables: [
                'Integrated hazard list',
                'Hazard consolidation documentation',
                'Updated traceability matrix',
              ],
              tips: [
                'Look for hazards that appear in both analyses',
                'Consolidate but maintain traceability to source',
                'Don\'t lose information in consolidation',
                'Document which hazards came from usability analysis',
                'Update central file with integrated view',
              ],
            },
          ],
        },
        {
          id: 'software-risk',
          title: 'Phase 4: Software Risk Analysis (IEC 62304)',
          description: 'Conduct software hazard analysis per IEC 62304. Software hazards can cause device hazards or usability hazards, so integration is critical.',
          steps: [
            {
              step: 11,
              title: 'Classify Software Safety',
              description: 'Classify software per IEC 62304 (Class A, B, or C) based on potential for harm. Class C software (can cause death or serious injury) requires most rigorous analysis. Classification determines depth of software risk analysis.',
              deliverables: [
                'Software safety classification',
                'Classification rationale',
                'Software architecture overview',
              ],
              tips: [
                'Classify conservatively when uncertain',
                'Consider all software functions',
                'Document classification rationale',
                'Review classification at design reviews',
                'Update if software changes',
              ],
            },
            {
              step: 12,
              title: 'Identify Software Hazards',
              description: 'Identify software hazards including: software failures, data corruption, timing errors, interface failures, security vulnerabilities, and SOUP (Software of Unknown Provenance) risks. Consider how software failures could cause device hazards or usability hazards.',
              deliverables: [
                'Software hazard list',
                'Software FMEA',
                'Software architecture risk analysis',
              ],
              tips: [
                'Consider all software functions',
                'Analyze software architecture',
                'Consider SOUP risks',
                'Think about failure modes',
                'Consider timing and sequencing',
              ],
            },
            {
              step: 13,
              title: 'Estimate Software Risks',
              description: 'For each software hazard, estimate risk considering severity of harm, probability of software failure, and detectability. For Class C software, use more rigorous methods. Document risk estimates.',
              deliverables: [
                'Software risk estimates',
                'Software FMEA results',
                'Risk rationale',
              ],
              tips: [
                'Use software-specific risk methods',
                'Consider software complexity',
                'Account for software testing',
                'Consider SOUP reliability',
                'Document assumptions',
              ],
            },
            {
              step: 14,
              title: 'Integrate Software Hazards with Device and Usability Hazards',
              description: 'Compare software hazards with device and usability hazards. Identify how software failures could cause device hazards or usability hazards. Consolidate overlapping hazards. Ensure all software hazards are in central file and traceability matrix.',
              deliverables: [
                'Fully integrated hazard list',
                'Software-device-usability hazard mapping',
                'Updated traceability matrix',
              ],
              tips: [
                'Map software failures to device hazards',
                'Map software UI failures to usability hazards',
                'Maintain traceability to software components',
                'Document relationships between hazards',
                'Ensure comprehensive coverage',
              ],
            },
          ],
        },
        {
          id: 'risk-controls',
          title: 'Phase 5: Integrated Risk Control',
          description: 'Implement risk controls that address hazards from all sources. Ensure risk controls are traceable to hazards and verified.',
          steps: [
            {
              step: 15,
              title: 'Prioritize Risks for Control',
              description: 'Review all hazards from integrated analysis. Prioritize based on risk level (RPN or risk matrix). Focus on high-risk hazards first. Consider hazards that affect multiple areas (device, usability, software).',
              deliverables: [
                'Risk prioritization list',
                'Priority rationale',
                'Risk control plan',
              ],
              tips: [
                'Use consistent prioritization method',
                'Consider severity regardless of probability',
                'Prioritize hazards affecting multiple areas',
                'Review priorities with team',
                'Update priorities as risks change',
              ],
            },
            {
              step: 16,
              title: 'Design Risk Controls',
              description: 'For each unacceptable risk, design risk controls in priority order: (1) Inherent safety by design, (2) Protective measures, (3) Information for safety. Consider controls that address multiple hazards. Document all risk controls.',
              deliverables: [
                'Risk control designs',
                'Risk control specifications',
                'Design rationale',
              ],
              tips: [
                'Prefer design changes over warnings',
                'Design controls that address multiple hazards',
                'Consider software, hardware, and usability controls',
                'Ensure controls don\'t introduce new hazards',
                'Document design rationale',
              ],
            },
            {
              step: 17,
              title: 'Update Traceability Matrix',
              description: 'For each risk control, update traceability matrix linking control to hazards, verification activities, and validation activities. Ensure every hazard has at least one risk control. Verify traceability is complete.',
              deliverables: [
                'Updated traceability matrix',
                'Traceability verification',
                'Gap analysis',
              ],
              tips: [
                'Update matrix as controls are designed',
                'Link controls to specific hazards',
                'Plan verification and validation activities',
                'Verify no gaps in traceability',
                'Review matrix regularly',
              ],
            },
            {
              step: 18,
              title: 'Verify Risk Controls',
              description: 'Verify all risk controls through testing, analysis, or inspection. Link verification activities to hazards in traceability matrix. Document verification results. Ensure controls are implemented in design.',
              deliverables: [
                'Verification plans',
                'Verification results',
                'Updated traceability matrix',
              ],
              tips: [
                'Verify controls address hazards',
                'Test under realistic conditions',
                'Document all verification results',
                'Update traceability matrix with results',
                'Address verification failures',
              ],
            },
          ],
        },
        {
          id: 'validation',
          title: 'Phase 6: Integrated Validation',
          description: 'Validate that risk controls are effective through software validation, usability validation, and device validation. Ensure validation activities are coordinated.',
          steps: [
            {
              step: 19,
              title: 'Plan Integrated Validation',
              description: 'Develop validation plans for software (IEC 62304), usability (IEC 62366), and device (ISO 14971). Coordinate validation activities to avoid duplication and ensure comprehensive coverage. Link validation activities to hazards in traceability matrix.',
              deliverables: [
                'Software validation plan',
                'Usability validation plan',
                'Device validation plan',
                'Integrated validation schedule',
              ],
              tips: [
                'Coordinate validation activities',
                'Avoid duplicating tests',
                'Ensure all hazards are validated',
                'Plan for integration testing',
                'Link to traceability matrix',
              ],
            },
            {
              step: 20,
              title: 'Conduct Software Validation',
              description: 'Perform software validation per IEC 62304. Validate that software functions correctly and software-related hazards are controlled. Include usability aspects of software UI. Document validation results.',
              deliverables: [
                'Software validation results',
                'Software test reports',
                'Updated traceability matrix',
              ],
              tips: [
                'Validate all software functions',
                'Test software under realistic conditions',
                'Include software UI usability testing',
                'Document all test results',
                'Update traceability matrix',
              ],
            },
            {
              step: 21,
              title: 'Conduct Usability Validation',
              description: 'Perform usability validation per IEC 62366. Validate that use-related hazards are controlled. Test with representative users. Verify no use errors leading to harm. Document validation results.',
              deliverables: [
                'Usability validation results',
                'Validation test reports',
                'Updated traceability matrix',
              ],
              tips: [
                'Test with representative users',
                'Test all critical tasks',
                'Verify use errors are controlled',
                'Document all use errors observed',
                'Update traceability matrix',
              ],
            },
            {
              step: 22,
              title: 'Conduct Device Validation',
              description: 'Perform device validation per ISO 14971. Validate that device hazards are controlled. Include integration testing of software, hardware, and usability. Document validation results.',
              deliverables: [
                'Device validation results',
                'Integration test reports',
                'Updated traceability matrix',
              ],
              tips: [
                'Test device under realistic conditions',
                'Include integration testing',
                'Verify all hazards are controlled',
                'Document all test results',
                'Update traceability matrix',
              ],
            },
            {
              step: 23,
              title: 'Verify Traceability Completeness',
              description: 'Review traceability matrix to ensure all hazards have risk controls, all controls are verified, and all hazards are validated. Identify any gaps. Address gaps before proceeding.',
              deliverables: [
                'Traceability completeness review',
                'Gap analysis',
                'Gap closure plan',
              ],
              tips: [
                'Review matrix systematically',
                'Verify every hazard has controls',
                'Verify every control is verified',
                'Verify every hazard is validated',
                'Address all gaps',
              ],
            },
          ],
        },
        {
          id: 'review',
          title: 'Phase 7: Risk Management Review and Post-Production',
          description: 'Conduct comprehensive risk management review and establish post-production monitoring.',
          steps: [
            {
              step: 24,
              title: 'Conduct Risk Management Review',
              description: 'Before commercial release, conduct comprehensive risk management review. Verify all hazards are identified, all risks are evaluated, all controls are implemented and verified, all validations are complete, and traceability is complete. Obtain management approval.',
              deliverables: [
                'Risk management review report',
                'Management approval',
                'Release authorization',
              ],
              tips: [
                'Review all risk analyses',
                'Verify traceability completeness',
                'Verify all validations complete',
                'Document review findings',
                'Obtain management approval',
              ],
            },
            {
              step: 25,
              title: 'Establish Post-Production Monitoring',
              description: 'Establish processes to monitor post-production information including complaints, adverse events, use errors, software issues, and post-market surveillance. Plan for periodic risk management reviews and risk file updates.',
              deliverables: [
                'Post-production monitoring plan',
                'Monitoring procedures',
                'Review schedule',
              ],
              tips: [
                'Monitor multiple sources',
                'Establish review frequency',
                'Define triggers for updates',
                'Link to quality management system',
                'Plan for continuous improvement',
              ],
            },
            {
              step: 26,
              title: 'Maintain Integrated Risk Management',
              description: 'Continuously maintain integrated risk management. Update risk analyses when design changes, new hazards are identified, or new information is available. Conduct periodic reviews. Ensure traceability is maintained.',
              deliverables: [
                'Updated risk management file',
                'Periodic review reports',
                'Change documentation',
              ],
              tips: [
                'Update all analyses when design changes',
                'Review post-production data regularly',
                'Update traceability matrix',
                'Conduct periodic reviews',
                'Maintain integration',
              ],
            },
          ],
        },
      ]}
      integrationPoints={[
        {
          title: 'Device Risk ↔ Usability Risk Integration',
          description: 'Many device hazards can be caused by use errors, and use errors can lead to device hazards. These analyses must be integrated. For example, wrong power setting (usability hazard) can cause tissue damage (device hazard). Risk controls may address both.',
          relatedStandards: [
            {
              number: 'ISO 14971',
              title: 'Application of risk management',
              url: '/standards/iso-14971',
              relationship: 'Device hazards and usability hazards are both hazards in risk analysis',
            },
            {
              number: 'IEC 62366',
              title: 'Application of usability engineering',
              url: '/standards/iec-62366',
              relationship: 'Use errors are hazards that must be addressed in risk analysis',
            },
          ],
        },
        {
          title: 'Software Risk ↔ Device Risk Integration',
          description: 'Software failures can cause device hazards. Software risk analysis must identify how software failures could cause device hazards. Risk controls may include software design changes, hardware interlocks, or both.',
          relatedStandards: [
            {
              number: 'ISO 14971',
              title: 'Application of risk management',
              url: '/standards/iso-14971',
              relationship: 'Software failures are hazards in risk analysis',
            },
            {
              number: 'IEC 62304',
              title: 'Medical device software',
              url: '/standards/iec-62304',
              relationship: 'Software hazards must be addressed in risk analysis per ISO 14971',
            },
          ],
        },
        {
          title: 'Software Risk ↔ Usability Risk Integration',
          description: 'Software user interface failures are usability hazards. Software UI design must comply with IEC 62366. Software validation should include usability testing. Usability validation should test software UI.',
          relatedStandards: [
            {
              number: 'IEC 62304',
              title: 'Medical device software',
              url: '/standards/iec-62304',
              relationship: 'Software UI must comply with IEC 62366 usability requirements',
            },
            {
              number: 'IEC 62366',
              title: 'Application of usability engineering',
              url: '/standards/iec-62366',
              relationship: 'Software UI is part of user interface subject to usability engineering',
            },
          ],
        },
      ]}
      checklists={[
        {
          title: 'Framework Establishment Checklist',
          items: [
            'Risk management plan created and approved',
            'Central risk management file established',
            'Traceability matrix template created',
            'Hazard numbering system defined',
            'Integration points identified',
            'Responsibilities assigned',
            'Review schedule established',
          ],
        },
        {
          title: 'Device Risk Analysis Checklist',
          items: [
            'All device hazards identified',
            'Risks estimated for all hazards',
            'Hazards entered in central file',
            'Traceability matrix updated',
            'FMEA or HAZOP completed',
            'Risk estimates documented',
          ],
        },
        {
          title: 'Usability Risk Analysis Checklist',
          items: [
            'Use specification completed',
            'All use-related hazards identified',
            'Risks estimated for use hazards',
            'Hazards integrated with device hazards',
            'Traceability matrix updated',
            'Task analysis completed',
          ],
        },
        {
          title: 'Software Risk Analysis Checklist',
          items: [
            'Software safety classification completed',
            'All software hazards identified',
            'Risks estimated for software hazards',
            'Hazards integrated with device and usability hazards',
            'Traceability matrix updated',
            'Software FMEA completed',
          ],
        },
        {
          title: 'Risk Control Checklist',
          items: [
            'All unacceptable risks have controls',
            'Risk controls designed and documented',
            'Traceability matrix updated with controls',
            'All controls verified',
            'Verification results documented',
            'Controls implemented in design',
          ],
        },
        {
          title: 'Validation Checklist',
          items: [
            'Software validation completed',
            'Usability validation completed',
            'Device validation completed',
            'All validations documented',
            'Traceability matrix updated',
            'All hazards validated',
          ],
        },
        {
          title: 'Traceability Completeness Checklist',
          items: [
            'Every hazard has at least one risk control',
            'Every risk control is verified',
            'Every hazard is validated',
            'Traceability matrix is complete',
            'No gaps identified',
            'All links verified',
          ],
        },
        {
          title: 'Risk Management Review Checklist',
          items: [
            'All risk analyses reviewed',
            'Traceability verified',
            'All validations complete',
            'Risk management file complete',
            'Management approval obtained',
            'Post-production monitoring established',
          ],
        },
      ]}
      commonPitfalls={[
        {
          pitfall: 'Fragmented risk analyses without integration',
          solution: 'Establish central risk management file from the start. Conduct regular integration meetings. Use traceability matrix to link all analyses. Review analyses together, not in isolation.',
        },
        {
          pitfall: 'Missing hazards that span multiple areas',
          solution: 'Compare hazards from all analyses. Look for hazards that appear in multiple analyses. Consider how software failures could cause device or usability hazards. Consider how use errors could cause device hazards.',
        },
        {
          pitfall: 'Incomplete traceability',
          solution: 'Maintain traceability matrix from the start. Update matrix as hazards and controls are identified. Review matrix regularly for completeness. Verify every hazard has controls and validation.',
        },
        {
          pitfall: 'Inconsistent risk estimation methods',
          solution: 'Use consistent risk estimation methods across all analyses. Define risk acceptability criteria consistently. Train all team members on risk estimation methods. Review estimates together.',
        },
        {
          pitfall: 'Risk controls not addressing all hazards',
          solution: 'Review traceability matrix systematically. Verify every hazard has at least one risk control. Verify controls address hazards effectively. Test controls under realistic conditions.',
        },
        {
          pitfall: 'Validation gaps',
          solution: 'Plan validation activities to cover all hazards. Coordinate software, usability, and device validation. Verify all hazards are validated. Document all validation results. Update traceability matrix.',
        },
      ]}
      medicalLaserExample={{
        title: 'Integrated Risk Management for Class 4 Medical Laser Systems',
        description: 'Medical laser systems require integrated risk management addressing device hazards (optical radiation, electrical, thermal), usability hazards (wrong settings, incorrect operation), and software hazards (control failures, data corruption). These hazards are interconnected and must be managed together.',
        scenarios: [
          {
            scenario: 'Wrong Power Setting Hazard',
            approach: [
              'Device hazard: Excessive laser power can cause unintended tissue damage (Severity: 9, Occurrence: 4).',
              'Usability hazard: User sets wrong power due to unclear interface or use error (Severity: 9, Occurrence: 5).',
              'Software hazard: Software fails to limit power or validate settings (Severity: 9, Occurrence: 2).',
              'Integrated view: Same hazard from three perspectives. Risk controls must address all three: hardware power limits (device), clear UI with confirmation prompts (usability), software validation and limits (software).',
              'Traceability: Hazard H-001 in central file, linked to device FMEA, usability task analysis, and software FMEA. Controls: hardware limit, UI confirmation, software validation. Verified through testing. Validated through usability testing.',
            ],
          },
          {
            scenario: 'Safety Interlock Failure',
            approach: [
              'Device hazard: Laser emission when safety conditions not met (Severity: 10, Occurrence: 2).',
              'Usability hazard: User bypasses interlock or misinterprets status (Severity: 10, Occurrence: 3).',
              'Software hazard: Software fails to monitor interlock or allows bypass (Severity: 10, Occurrence: 2).',
              'Integrated view: Critical safety function requiring multiple layers of protection. Controls: hardware interlocks (device), clear status indicators (usability), software monitoring (software).',
              'Traceability: Hazard H-002 in central file. Multiple risk controls verified and validated. Integration testing confirms all controls work together.',
            ],
          },
          {
            scenario: 'Software Control Failure',
            approach: [
              'Software hazard: Control software fails, causing uncontrolled laser emission (Severity: 10, Occurrence: 2).',
              'Device hazard: Uncontrolled laser emission causes injury (Severity: 10, Occurrence: 2).',
              'Usability hazard: User cannot detect or respond to software failure (Severity: 9, Occurrence: 3).',
              'Integrated view: Software failure causes device hazard, usability affects ability to detect. Controls: software validation and redundancy (software), hardware safety systems (device), clear failure indicators (usability).',
              'Traceability: Hazard H-003 in central file. Software validation, hardware testing, and usability validation all verify controls. Integration testing confirms system works together.',
            ],
          },
        ],
      }}
    />
  );
}

