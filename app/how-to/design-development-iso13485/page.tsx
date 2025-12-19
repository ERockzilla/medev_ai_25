'use client';

import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import EnhancedStepper, { StepperStep, DesignReview } from '@/components/EnhancedStepper';
import DDFISidebar, { DDFIItem } from '@/components/DDFISidebar';
import ExpandableSection from '@/components/ExpandableSection';
import BookmarkButton from '@/components/BookmarkButton';
import Link from 'next/link';
import { ArrowLeft, BookOpen, CheckCircle, AlertTriangle, FileText } from 'lucide-react';

export default function HowToDesignDevelopmentPage() {
  // Design Reviews - parallel path between steps
  const reviews: DesignReview[] = [
    { id: 'review-1', title: 'Planning Review', afterStep: 'planning' },
    { id: 'review-2', title: 'Inputs Review', afterStep: 'inputs' },
    { id: 'review-3', title: 'Outputs Review', afterStep: 'outputs' },
    { id: 'review-4', title: 'Verification Review', afterStep: 'verification' },
    { id: 'review-5', title: 'Validation Review', afterStep: 'validation' },
    { id: 'review-6', title: 'Transfer Review', afterStep: 'transfer' },
  ];

  // DDFI Items - Design History File tracking
  const ddfiItems: DDFIItem[] = [
    // Planning Phase
    { id: 'ddf-001', documentName: 'Design and Development Plan', documentType: 'Plan', phase: 'planning', required: true, status: 'not-started', description: 'Overall design and development plan' },
    { id: 'ddf-002', documentName: 'Design Team Roster', documentType: 'Record', phase: 'planning', required: true, status: 'not-started', description: 'List of team members and responsibilities' },
    { id: 'ddf-003', documentName: 'Design Review Schedule', documentType: 'Plan', phase: 'planning', required: true, status: 'not-started', description: 'Schedule of planned design reviews' },
    
    // Inputs Phase
    { id: 'ddf-004', documentName: 'User Needs Document', documentType: 'Specification', phase: 'inputs', required: true, status: 'not-started', description: 'High-level user needs statements' },
    { id: 'ddf-005', documentName: 'Design Input Requirements', documentType: 'Specification', phase: 'inputs', required: true, status: 'not-started', description: 'Detailed design input requirements' },
    { id: 'ddf-006', documentName: 'Regulatory Requirements Matrix', documentType: 'Matrix', phase: 'inputs', required: true, status: 'not-started', description: 'Applicable standards and regulations' },
    { id: 'ddf-007', documentName: 'Design Input Review Record', documentType: 'Record', phase: 'inputs', required: true, status: 'not-started', description: 'Review and approval of design inputs' },
    
    // Outputs Phase
    { id: 'ddf-008', documentName: 'Design Outputs List', documentType: 'List', phase: 'outputs', required: true, status: 'not-started', description: 'Complete list of design outputs' },
    { id: 'ddf-009', documentName: 'Design Drawings', documentType: 'Drawing', phase: 'outputs', required: true, status: 'not-started', description: 'Mechanical and electrical drawings' },
    { id: 'ddf-010', documentName: 'Bill of Materials (BOM)', documentType: 'Specification', phase: 'outputs', required: true, status: 'not-started', description: 'Complete component list' },
    { id: 'ddf-011', documentName: 'Software Documentation', documentType: 'Documentation', phase: 'outputs', required: false, status: 'not-started', description: 'Software design and code documentation' },
    { id: 'ddf-012', documentName: 'Labeling and Packaging Specs', documentType: 'Specification', phase: 'outputs', required: true, status: 'not-started', description: 'Labeling and packaging requirements' },
    { id: 'ddf-013', documentName: 'Design Output Review Record', documentType: 'Record', phase: 'outputs', required: true, status: 'not-started', description: 'Review and approval of design outputs' },
    
    // Review Phase
    { id: 'ddf-014', documentName: 'Design Review #1 - Planning', documentType: 'Review Record', phase: 'review', required: true, status: 'not-started', description: 'Review after planning phase' },
    { id: 'ddf-015', documentName: 'Design Review #2 - Inputs', documentType: 'Review Record', phase: 'review', required: true, status: 'not-started', description: 'Review after inputs phase' },
    { id: 'ddf-016', documentName: 'Design Review #3 - Outputs', documentType: 'Review Record', phase: 'review', required: true, status: 'not-started', description: 'Review after outputs phase' },
    
    // Verification Phase
    { id: 'ddf-017', documentName: 'Verification Plan', documentType: 'Plan', phase: 'verification', required: true, status: 'not-started', description: 'Plan for design verification activities' },
    { id: 'ddf-018', documentName: 'Verification Protocols', documentType: 'Protocol', phase: 'verification', required: true, status: 'not-started', description: 'Test protocols for verification' },
    { id: 'ddf-019', documentName: 'Verification Reports', documentType: 'Report', phase: 'verification', required: true, status: 'not-started', description: 'Results of verification testing' },
    { id: 'ddf-020', documentName: 'Design Review #4 - Verification', documentType: 'Review Record', phase: 'verification', required: true, status: 'not-started', description: 'Review after verification' },
    
    // Validation Phase
    { id: 'ddf-021', documentName: 'Validation Plan', documentType: 'Plan', phase: 'validation', required: true, status: 'not-started', description: 'Plan for design validation activities' },
    { id: 'ddf-022', documentName: 'Validation Protocols', documentType: 'Protocol', phase: 'validation', required: true, status: 'not-started', description: 'Test protocols for validation' },
    { id: 'ddf-023', documentName: 'Validation Reports', documentType: 'Report', phase: 'validation', required: true, status: 'not-started', description: 'Results of validation testing' },
    { id: 'ddf-024', documentName: 'Clinical Evaluation Report', documentType: 'Report', phase: 'validation', required: false, status: 'not-started', description: 'Clinical evaluation if applicable' },
    { id: 'ddf-025', documentName: 'Usability Validation Report', documentType: 'Report', phase: 'validation', required: false, status: 'not-started', description: 'Usability validation per IEC 62366' },
    { id: 'ddf-026', documentName: 'Design Review #5 - Validation', documentType: 'Review Record', phase: 'validation', required: true, status: 'not-started', description: 'Review after validation' },
    
    // Transfer Phase
    { id: 'ddf-027', documentName: 'Design Transfer Plan', documentType: 'Plan', phase: 'transfer', required: true, status: 'not-started', description: 'Plan for transferring design to production' },
    { id: 'ddf-028', documentName: 'Manufacturing Procedures', documentType: 'Procedure', phase: 'transfer', required: true, status: 'not-started', description: 'Production work instructions' },
    { id: 'ddf-029', documentName: 'Inspection Procedures', documentType: 'Procedure', phase: 'transfer', required: true, status: 'not-started', description: 'Quality inspection procedures' },
    { id: 'ddf-030', documentName: 'Design Transfer Report', documentType: 'Report', phase: 'transfer', required: true, status: 'not-started', description: 'Documentation of transfer completion' },
    { id: 'ddf-031', documentName: 'Design Review #6 - Transfer', documentType: 'Review Record', phase: 'transfer', required: true, status: 'not-started', description: 'Review after transfer' },
    
    // Changes Phase
    { id: 'ddf-032', documentName: 'Design Change Request Form', documentType: 'Form', phase: 'changes', required: true, status: 'not-started', description: 'Form for requesting design changes' },
    { id: 'ddf-033', documentName: 'Change Impact Assessment', documentType: 'Assessment', phase: 'changes', required: true, status: 'not-started', description: 'Evaluation of change impact' },
    { id: 'ddf-034', documentName: 'Change Implementation Record', documentType: 'Record', phase: 'changes', required: true, status: 'not-started', description: 'Documentation of change implementation' },
    
    // Files Phase (7.3.9)
    { id: 'ddf-035', documentName: 'Design History File Index', documentType: 'Index', phase: 'files', required: true, status: 'not-started', description: 'Complete index of all design documents' },
    { id: 'ddf-036', documentName: 'Traceability Matrix', documentType: 'Matrix', phase: 'files', required: true, status: 'not-started', description: 'Input to output traceability' },
    { id: 'ddf-037', documentName: 'Design File Archive', documentType: 'Archive', phase: 'files', required: true, status: 'not-started', description: 'Organized archive of all design files' },
  ];

  const steps: StepperStep[] = [
    {
      id: 'planning',
      title: 'Design Planning',
      description: 'ISO 13485 Clause 7.3.1 - Establish the foundation for design controls',
      reviewPoint: true,
      templates: [
        { name: 'Design and Development Plan Template', description: 'Word template for design plan' },
        { name: 'Design Team Roster Template', description: 'Excel template for team assignments' },
        { name: 'Design Review Schedule Template', description: 'Excel template for review planning' },
      ],
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Create Design and Development Plan</h4>
            <p className="text-gray-700 mb-3">
              Document your approach to design and development. The plan should include stages, 
              responsibilities, and review points.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900 mb-2"><strong>Plan Must Include:</strong></p>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Design stages (concept, design, development, validation)</li>
                <li>• Review points and criteria</li>
                <li>• Verification and validation activities</li>
                <li>• Responsibilities and authorities</li>
                <li>• Interfaces between different groups</li>
                <li>• Update procedures</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. Define Design Team</h4>
            <p className="text-gray-700 mb-3">
              Assign qualified personnel with appropriate skills and experience. Document roles and responsibilities.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Project manager</li>
              <li>Design engineers (mechanical, electrical, software)</li>
              <li>Quality engineer</li>
              <li>Regulatory affairs specialist</li>
              <li>Clinical specialist</li>
              <li>Manufacturing engineer</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Establish Review Points</h4>
            <p className="text-gray-700 mb-3">
              Define when design reviews will occur and what criteria must be met to proceed to next stage.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-900 mb-2"><strong>Typical Review Points:</strong></p>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• After user needs definition</li>
                <li>• After design inputs are defined</li>
                <li>• After design outputs are complete</li>
                <li>• Before design transfer</li>
                <li>• After design validation</li>
              </ul>
            </div>
          </div>

          <ExpandableSection title="💡 Pro Tip: Link to Risk Management" variant="info">
            <p className="text-sm text-gray-700">
              Your design and development plan should reference your risk management plan (ISO 14971). 
              Design reviews should include risk management review. Ensure risk controls are integrated 
              into design activities.
            </p>
          </ExpandableSection>
        </div>
      ),
    },
    {
      id: 'inputs',
      title: 'Design Inputs',
      description: 'ISO 13485 Clause 7.3.2 - Define what the device must do',
      reviewPoint: true,
      templates: [
        { name: 'User Needs Template', description: 'Word template for user needs documentation' },
        { name: 'Design Input Requirements Template', description: 'Word template for design inputs' },
        { name: 'Regulatory Requirements Matrix', description: 'Excel template for standards tracking' },
      ],
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Identify User Needs</h4>
            <p className="text-gray-700 mb-3">
              Start with what users need. User needs are high-level statements of what the device should 
              accomplish from the user's perspective.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900 mb-2"><strong>Example User Needs:</strong></p>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• "Device must deliver precise laser power for surgical procedures"</li>
                <li>• "Device must be safe for use in operating room environment"</li>
                <li>• "Device must be easy to operate by trained surgeons"</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. Convert to Design Inputs</h4>
            <p className="text-gray-700 mb-3">
              Translate user needs into specific, measurable, verifiable design inputs. Design inputs 
              should be:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Specific:</strong> Clear and unambiguous</li>
              <li><strong>Measurable:</strong> Can be verified through testing or analysis</li>
              <li><strong>Achievable:</strong> Technically feasible</li>
              <li><strong>Traceable:</strong> Linked to user needs</li>
              <li><strong>Complete:</strong> Cover all aspects (functional, performance, safety, regulatory)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Include Regulatory Requirements</h4>
            <p className="text-gray-700 mb-3">
              Design inputs must include applicable regulatory requirements:
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-sm text-purple-900 mb-2"><strong>Regulatory Inputs:</strong></p>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• ISO 13485 quality system requirements</li>
                <li>• ISO 14971 risk management requirements</li>
                <li>• IEC 60601-1 for medical electrical equipment</li>
                <li>• IEC 62304 for software</li>
                <li>• IEC 62366 for usability</li>
                <li>• FDA QMSR requirements (aligned with ISO 13485)</li>
                <li>• EU MDR requirements</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">4. Review and Approve Design Inputs</h4>
            <p className="text-gray-700 mb-3">
              Review design inputs for completeness, clarity, and conflicts. Resolve any issues before 
              proceeding. Obtain approval from authorized personnel.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-900">
                <strong>Review Checklist:</strong> Are inputs specific? Measurable? Complete? 
                Traceable to user needs? Include regulatory requirements? Free of conflicts?
              </p>
            </div>
          </div>

          <ExpandableSection title="⚠️ Common Mistake: Vague Design Inputs" variant="warning">
            <p className="text-sm text-gray-700">
              Avoid vague inputs like "device must work well" or "device must be safe". Instead, 
              use specific, measurable inputs: "Device must deliver laser power within ±5% of setpoint 
              over operating temperature range of 15-35°C" or "Device must comply with IEC 60601-1 
              Class I, Type BF requirements".
            </p>
          </ExpandableSection>
        </div>
      ),
    },
    {
      id: 'outputs',
      title: 'Design Outputs',
      description: 'ISO 13485 Clause 7.3.3 - Document what you designed',
      reviewPoint: true,
      templates: [
        { name: 'Design Outputs List Template', description: 'Excel template for tracking outputs' },
        { name: 'BOM Template', description: 'Excel template for bill of materials' },
        { name: 'Labeling Specification Template', description: 'Word template for labeling' },
      ],
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Create Design Outputs</h4>
            <p className="text-gray-700 mb-3">
              Design outputs are the results of design activities. They must meet design input requirements 
              and provide adequate information for purchasing, production, and service.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900 mb-2"><strong>Design Outputs Include:</strong></p>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Drawings and specifications</li>
                <li>• Bill of materials (BOM)</li>
                <li>• Software code and documentation</li>
                <li>• Manufacturing procedures</li>
                <li>• Labeling and packaging</li>
                <li>• Installation and service procedures</li>
                <li>• Acceptance criteria</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. Ensure Traceability</h4>
            <p className="text-gray-700 mb-3">
              Every design output must be traceable to design inputs. Create a traceability matrix 
              linking inputs to outputs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Define Acceptance Criteria</h4>
            <p className="text-gray-700 mb-3">
              Each design output must have clear acceptance criteria that can be verified. These 
              criteria should be measurable and objective.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-900 mb-2"><strong>Example Acceptance Criteria:</strong></p>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• "Power output: 1.0W ± 0.05W at 25°C"</li>
                <li>• "Leakage current: &lt;100μA"</li>
                <li>• "Software response time: &lt;50ms"</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">4. Review and Approve</h4>
            <p className="text-gray-700 mb-3">
              Review design outputs before release. Verify they meet design inputs and are complete. 
              Obtain approval signatures.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'review',
      title: 'Design Review',
      description: 'ISO 13485 Clause 7.3.4 - Review design at planned stages',
      templates: [
        { name: 'Design Review Form Template', description: 'Word template for review documentation' },
        { name: 'Design Review Checklist', description: 'Excel checklist for review preparation' },
      ],
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Plan Design Reviews</h4>
            <p className="text-gray-700 mb-3">
              Conduct design reviews at planned stages per your design and development plan. Reviews 
              should be formal, documented, and include all relevant functions.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900 mb-2"><strong>Review Participants:</strong></p>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Design team members</li>
                <li>• Quality representative</li>
                <li>• Regulatory representative</li>
                <li>• Manufacturing representative</li>
                <li>• Independent reviewer (if required)</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. Review Against Criteria</h4>
            <p className="text-gray-700 mb-3">
              Evaluate design against:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Design inputs (are they being met?)</li>
              <li>Regulatory requirements</li>
              <li>Risk management (are risks controlled?)</li>
              <li>Manufacturing feasibility</li>
              <li>Cost and schedule</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Document Review Results</h4>
            <p className="text-gray-700 mb-3">
              Document review findings, decisions, and actions. Include:
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Review date and participants</li>
                <li>• Items reviewed</li>
                <li>• Findings and concerns</li>
                <li>• Decisions made</li>
                <li>• Action items (who, what, when)</li>
                <li>• Approval to proceed (or not)</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">4. Follow Up on Actions</h4>
            <p className="text-gray-700 mb-3">
              Ensure all action items from design reviews are completed and verified before proceeding 
              to next stage.
            </p>
          </div>

          <ExpandableSection title="💡 Best Practice: Independent Review" variant="info">
            <p className="text-sm text-gray-700">
              Consider including an independent reviewer who was not directly involved in the design. 
              This provides fresh perspective and helps catch issues the design team might miss.
            </p>
          </ExpandableSection>
        </div>
      ),
    },
    {
      id: 'verification',
      title: 'Design Verification',
      description: 'ISO 13485 Clause 7.3.5 - Verify design outputs meet design inputs',
      reviewPoint: true,
      templates: [
        { name: 'Verification Plan Template', description: 'Word template for verification planning' },
        { name: 'Verification Protocol Template', description: 'Word template for test protocols' },
        { name: 'Verification Report Template', description: 'Word template for test reports' },
      ],
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Plan Verification Activities</h4>
            <p className="text-gray-700 mb-3">
              Design verification confirms that design outputs meet design inputs. Plan verification 
              activities for each design input.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900 mb-2"><strong>Verification Methods:</strong></p>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Testing (prototype, lab, environmental)</li>
                <li>• Analysis (calculations, simulations, FEA)</li>
                <li>• Inspection (visual, dimensional)</li>
                <li>• Review of design documents</li>
                <li>• Comparison to similar devices</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. Create Verification Protocols</h4>
            <p className="text-gray-700 mb-3">
              Document verification methods, acceptance criteria, and procedures. Protocols should be 
              approved before execution.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Execute Verification</h4>
            <p className="text-gray-700 mb-3">
              Perform verification activities per protocols. Document all results, including failures 
              and deviations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">4. Document Results</h4>
            <p className="text-gray-700 mb-3">
              Create verification reports documenting what was verified, methods used, results obtained, 
              comparison to acceptance criteria, and conclusions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">5. Address Non-Conformances</h4>
            <p className="text-gray-700 mb-3">
              If verification fails, investigate root cause, implement corrective actions, and re-verify. 
              Document all actions taken.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'validation',
      title: 'Design Validation',
      description: 'ISO 13485 Clause 7.3.6 - Validate device meets user needs',
      reviewPoint: true,
      templates: [
        { name: 'Validation Plan Template', description: 'Word template for validation planning' },
        { name: 'Validation Protocol Template', description: 'Word template for validation protocols' },
        { name: 'Validation Report Template', description: 'Word template for validation reports' },
      ],
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Understand Validation vs Verification</h4>
            <p className="text-gray-700 mb-3">
              <strong>Verification:</strong> "Did we design it right?" (outputs meet inputs)<br/>
              <strong>Validation:</strong> "Did we design the right thing?" (device meets user needs)
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                Validation must be performed under actual or simulated use conditions with production 
                units or equivalent. This is different from verification which can use prototypes.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. Plan Validation Activities</h4>
            <p className="text-gray-700 mb-3">
              Validation should demonstrate the device meets user needs and intended use. Plan validation 
              activities including clinical evaluation, usability testing, performance testing, and 
              risk management validation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Use Production Units</h4>
            <p className="text-gray-700 mb-3">
              Validation must use production units or equivalent. This ensures validation results 
              represent actual production devices.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">4. Test Under Use Conditions</h4>
            <p className="text-gray-700 mb-3">
              Validation must be performed under actual or simulated use conditions. Consider intended 
              use environment, intended users, use scenarios, and environmental conditions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">5. Document Validation Results</h4>
            <p className="text-gray-700 mb-3">
              Document validation activities and results. Include evidence that device meets user needs 
              and intended use.
            </p>
          </div>

          <ExpandableSection title="💡 Integration with Other Standards" variant="info">
            <p className="text-sm text-gray-700 mb-2">
              Design validation integrates with:
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <Link href="/standards/iso-14971" className="text-blue-600">ISO 14971</Link> - Risk management validation</li>
              <li>• <Link href="/standards/iec-62304" className="text-blue-600">IEC 62304</Link> - Software validation</li>
              <li>• <Link href="/standards/iec-62366" className="text-blue-600">IEC 62366</Link> - Usability validation</li>
            </ul>
          </ExpandableSection>
        </div>
      ),
    },
    {
      id: 'transfer',
      title: 'Design Transfer',
      description: 'ISO 13485 Clause 7.3.7 - Transfer design to production',
      reviewPoint: true,
      templates: [
        { name: 'Design Transfer Plan Template', description: 'Word template for transfer planning' },
        { name: 'Manufacturing Procedure Template', description: 'Word template for work instructions' },
        { name: 'Design Transfer Report Template', description: 'Word template for transfer documentation' },
      ],
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Prepare for Transfer</h4>
            <p className="text-gray-700 mb-3">
              Before transferring design to production, ensure design is complete, verified, validated, 
              reviewed, and all design outputs are released.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. Create Production Documentation</h4>
            <p className="text-gray-700 mb-3">
              Transfer design outputs to production-ready documentation including manufacturing procedures, 
              work instructions, inspection procedures, test procedures, packaging procedures, BOM, and 
              tooling specifications.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Train Manufacturing Personnel</h4>
            <p className="text-gray-700 mb-3">
              Ensure manufacturing personnel are trained on manufacturing procedures, quality requirements, 
              inspection and testing, and documentation requirements.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">4. Validate Manufacturing Process</h4>
            <p className="text-gray-700 mb-3">
              Validate that manufacturing process can consistently produce devices meeting specifications. 
              This may include process validation, equipment qualification, and initial production runs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">5. Document Transfer</h4>
            <p className="text-gray-700 mb-3">
              Document design transfer activities and obtain approval before starting production.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'changes',
      title: 'Design Changes',
      description: 'ISO 13485 Clause 7.3.8 - Control design changes',
      templates: [
        { name: 'Design Change Request Form', description: 'Word template for change requests' },
        { name: 'Change Impact Assessment Template', description: 'Word template for impact evaluation' },
        { name: 'Change Implementation Record', description: 'Word template for change documentation' },
      ],
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Evaluate Impact of Changes</h4>
            <p className="text-gray-700 mb-3">
              Before implementing design changes, evaluate impact on design inputs/outputs, risk management, 
              regulatory compliance, manufacturing processes, and previously completed verification/validation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. Review and Approve Changes</h4>
            <p className="text-gray-700 mb-3">
              Review design changes per your change control procedure. Obtain approval from authorized 
              personnel before implementation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Update Design Documentation</h4>
            <p className="text-gray-700 mb-3">
              Update all affected design documents including design inputs/outputs, drawings, risk 
              management file, verification/validation documentation, and manufacturing procedures.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">4. Re-verify/Re-validate if Needed</h4>
            <p className="text-gray-700 mb-3">
              If change affects previously verified/validated aspects, re-verify or re-validate as 
              appropriate. Document rationale for what needs re-testing.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">5. Maintain Change History</h4>
            <p className="text-gray-700 mb-3">
              Maintain complete history of design changes, including reason for change, approval, and 
              implementation date.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'files',
      title: 'Design Files & Documentation',
      description: 'ISO 13485 Clause 7.3.9 - Maintain design history file',
      templates: [
        { name: 'Design History File Index Template', description: 'Excel template for DDF index' },
        { name: 'Traceability Matrix Template', description: 'Excel template for input-output traceability' },
        { name: 'Design File Archive Structure', description: 'Folder structure guide for file organization' },
      ],
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">1. Create Design History File (DDF)</h4>
            <p className="text-gray-700 mb-3">
              Maintain a complete design history file containing all design and development documentation. 
              The DDF provides evidence that design controls were properly executed.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900 mb-2"><strong>DDF Should Include:</strong></p>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Design and development plan</li>
                <li>• Design inputs and outputs</li>
                <li>• Design review records</li>
                <li>• Verification and validation documentation</li>
                <li>• Design transfer documentation</li>
                <li>• Design change records</li>
                <li>• Risk management file</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">2. Create Design History File Index</h4>
            <p className="text-gray-700 mb-3">
              Maintain an index of all documents in the DDF. The index should be organized by phase and 
              include document name, type, version, date, and location.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-900">
                <strong>Tip:</strong> Use the DDFI sidebar on the right to track all required documents 
                and mark them as complete as you progress through design and development.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">3. Maintain Traceability</h4>
            <p className="text-gray-700 mb-3">
              Ensure traceability from user needs through design inputs to design outputs to verification/validation. 
              Create and maintain traceability matrices.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">4. Organize and Archive</h4>
            <p className="text-gray-700 mb-3">
              Organize DDF documents in a logical structure. Use version control. Ensure documents are 
              accessible to authorized personnel and protected from unauthorized changes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">5. Maintain Throughout Lifecycle</h4>
            <p className="text-gray-700 mb-3">
              The DDF is a living document. Continue to update it as design changes occur and throughout 
              the device lifecycle. Ensure it remains complete and current.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <MatrixBackground intensity="low" />
      <div className="relative z-10">
        <Header />

        <div className="max-w-[1600px] mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center justify-between">
            <Link 
              href="/dashboard"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Knowledge Center
            </Link>
            <BookmarkButton
              title="How to: Design & Development (ISO 13485)"
              url="/how-to/design-development-iso13485"
              type="how-to"
            />
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  How to Implement Design and Development per ISO 13485 7.3
                </h1>
                <p className="text-xl text-gray-700 mb-4">
                  Complete guide to design controls aligned with ISO 13485 and FDA QMSR
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-yellow-900 mb-1">
                        FDA QMSR Update
                      </p>
                      <p className="text-sm text-yellow-800">
                        FDA's Quality Management System Regulation (QMSR) final rule aligns FDA requirements 
                        with ISO 13485. The previous 21 CFR 820.30 design controls are being replaced with 
                        ISO 13485:2016 requirements. This guide reflects current FDA QMSR alignment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Link
                    href="/standards/iso-13485"
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium hover:bg-green-200"
                  >
                    ISO 13485
                  </Link>
                  <Link
                    href="/standards/iso-14971"
                    className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200"
                  >
                    ISO 14971
                  </Link>
                  <Link
                    href="/guides/integrated-risk-management"
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200"
                  >
                    Risk Management Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is Design and Development?</h3>
                <p className="text-gray-700 leading-relaxed">
                  ISO 13485 Clause 7.3 defines the design and development process for medical devices. 
                  It ensures devices are designed to meet user needs, regulatory requirements, and quality 
                  standards. The process includes planning, inputs, outputs, review, verification, validation, 
                  transfer, change control, and file maintenance.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Why is it Important?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ensures devices meet user needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Required by ISO 13485 and FDA QMSR</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Prevents costly design errors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Supports regulatory submissions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">ISO 13485 7.3 Structure</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-semibold text-gray-900">7.3.1</p>
                  <p className="text-xs text-gray-600">Planning</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-semibold text-gray-900">7.3.2</p>
                  <p className="text-xs text-gray-600">Design Inputs</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-semibold text-gray-900">7.3.3</p>
                  <p className="text-xs text-gray-600">Design Outputs</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-semibold text-gray-900">7.3.4</p>
                  <p className="text-xs text-gray-600">Design Review</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-semibold text-gray-900">7.3.5</p>
                  <p className="text-xs text-gray-600">Verification</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-semibold text-gray-900">7.3.6</p>
                  <p className="text-xs text-gray-600">Validation</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-semibold text-gray-900">7.3.7</p>
                  <p className="text-xs text-gray-600">Design Transfer</p>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm font-semibold text-gray-900">7.3.8</p>
                  <p className="text-xs text-gray-600">Design Changes</p>
                </div>
                <div className="bg-gray-50 p-3 rounded border-2 border-blue-300">
                  <p className="text-sm font-semibold text-gray-900">7.3.9</p>
                  <p className="text-xs text-gray-600">Design Files</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Stepper */}
            <div className="lg:col-span-2">
              <EnhancedStepper 
                steps={steps} 
                reviews={reviews}
                showProgress={true} 
                allowNavigation={true} 
              />
            </div>

            {/* Right Column - DDFI Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <DDFISidebar items={ddfiItems} />
              </div>
            </div>
          </div>

          {/* Related Resources */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Standards & Guides</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/standards/iso-13485" className="text-green-600 hover:text-green-700">
                      ISO 13485 - Quality Management Systems
                    </Link>
                  </li>
                  <li>
                    <Link href="/standards/iso-14971" className="text-green-600 hover:text-green-700">
                      ISO 14971 - Risk Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/standards/iec-62304" className="text-green-600 hover:text-green-700">
                      IEC 62304 - Software Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/standards/iec-62366" className="text-green-600 hover:text-green-700">
                      IEC 62366 - Usability Engineering
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Implementation Guides</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/guides/integrated-risk-management" className="text-green-600 hover:text-green-700">
                      Integrated Risk Management Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/usability-engineering" className="text-green-600 hover:text-green-700">
                      Usability Engineering Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to/conduct-fmea-analysis" className="text-green-600 hover:text-green-700">
                      How to Conduct FMEA Analysis
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
