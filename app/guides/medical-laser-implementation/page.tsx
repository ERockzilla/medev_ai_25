'use client';

import Header from '@/components/Header';
import MatrixBackground from '@/components/MatrixBackground';
import BookmarkButton from '@/components/BookmarkButton';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// FDA Guidance Documents data
const guidanceDocuments = [
  { area: 'Laser Safety', docId: 'FDA-2017-D-7011', name: 'Laser Notice 56', desc: 'Recognition of IEC 60825-1 and IEC 60601-2-22 as alternatives to 21 CFR 1040.' },
  { area: 'Usability / HFE', docId: 'FDA-2011-D-0469', name: 'HFE Process', desc: 'Human factors engineering process, task analysis, and validation testing.' },
  { area: 'HFE Submission', docId: 'FDA-2015-D-4599', name: 'HFE Content', desc: 'HFE documentation requirements for premarket submissions.' },
  { area: 'Software', docId: 'FDA-2021-D-0775', name: 'SW Documentation', desc: 'Basic vs. Enhanced documentation levels for device software.' },
  { area: 'OTS Software', docId: 'FDA-2019-D-3598', name: 'OTS/COTS', desc: 'Validation for third-party/OTS software integration.' },
  { area: 'Cybersecurity', docId: 'FDA-2021-D-1158', name: 'Premarket', desc: 'Cybersecurity risk management and premarket submission content.' },
  { area: 'Cybersecurity', docId: 'FDA-2016-D-1224', name: 'Postmarket', desc: 'Postmarket surveillance and vulnerability management.' },
  { area: 'EMC', docId: 'FDA-2015-D-3787', name: 'EMC Testing', desc: 'EMC testing expectations per IEC 60601-1-2 Ed. 4.1.' },
  { area: 'Biocompatibility', docId: 'FDA-2013-D-0350', name: 'ISO 10993', desc: 'ISO 10993-1 interpretation and chemical characterization.' },
  { area: 'Sterility', docId: 'FDA-2024-D-0520', name: 'Packaging', desc: 'Sterility validation and packaging for 510(k) submissions.' },
  { area: 'Labeling / UDI', docId: 'FDA-2021-D-0889', name: 'UDI', desc: 'UDI placement and content per 21 CFR 801/830.' },
  { area: '510(k)', docId: 'FDA-2014-D-0090', name: 'SE Framework', desc: 'SE determination framework and decision logic.' },
  { area: '510(k)', docId: 'FDA-2012-D-1002', name: 'RTA Policy', desc: 'Refuse-to-accept checklist criteria.' },
  { area: '510(k)', docId: 'FDA-2023-D-0308', name: 'eSTAR', desc: 'Mandatory eSTAR template for 510(k) submissions.' },
  { area: 'Standards', docId: 'FDA-2018-D-1716', name: 'Consensus Standards', desc: 'Proper citation of consensus standards in submissions.' },
  { area: 'Symbols', docId: '21 CFR 801.15', name: 'Labeling Symbols', desc: 'Use of ISO 15223-1 symbols with glossary.' },
];

export default function MedicalLaserImplementationGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <MatrixBackground intensity="low" />
      <div className="relative z-10">
        <Header />

        <div className="max-w-6xl mx-auto px-6 py-8">
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
              title="Medical Laser System Implementation Guide"
              url="/guides/medical-laser-implementation"
              type="guide"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Medical Laser System Development</h1>
            <p className="text-lg text-gray-600">Implementation Guide for FDA-Compliant Medical Laser Systems</p>
            <Link
              href="/how-to/develop-medical-laser-system"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm mt-2"
            >
              View Detailed Step-by-Step How-To Guide <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>

          {/* LIFECYCLE DIAGRAM */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 mb-10 text-white overflow-x-auto">
            <h2 className="text-center text-xl font-bold mb-5">Integrated Development Lifecycle</h2>
            
            {/* Phase Timeline Header */}
            <div className="grid grid-cols-[130px_repeat(6,1fr)] gap-0.5 mb-1 min-w-[750px]">
              <div className="text-right pr-3 text-slate-400 text-xs flex items-center justify-end">WORKSTREAM</div>
              <div className="bg-gradient-to-b from-blue-500 to-blue-700 p-2 text-center font-bold text-xs rounded-t tracking-wide">
                PLANNING<span className="block text-[10px] font-normal opacity-80 mt-0.5">Mo 1-2</span>
              </div>
              <div className="bg-gradient-to-b from-blue-500 to-blue-700 p-2 text-center font-bold text-xs rounded-t tracking-wide">
                FEASIBILITY<span className="block text-[10px] font-normal opacity-80 mt-0.5">Mo 2-4</span>
              </div>
              <div className="bg-gradient-to-b from-blue-500 to-blue-700 p-2 text-center font-bold text-xs rounded-t tracking-wide">
                DEVELOPMENT<span className="block text-[10px] font-normal opacity-80 mt-0.5">Mo 4-12</span>
              </div>
              <div className="bg-gradient-to-b from-blue-500 to-blue-700 p-2 text-center font-bold text-xs rounded-t tracking-wide">
                VERIFICATION<span className="block text-[10px] font-normal opacity-80 mt-0.5">Mo 10-16</span>
              </div>
              <div className="bg-gradient-to-b from-blue-500 to-blue-700 p-2 text-center font-bold text-xs rounded-t tracking-wide">
                VALIDATION<span className="block text-[10px] font-normal opacity-80 mt-0.5">Mo 14-20</span>
              </div>
              <div className="bg-gradient-to-b from-blue-500 to-blue-700 p-2 text-center font-bold text-xs rounded-t tracking-wide">
                TRANSFER<span className="block text-[10px] font-normal opacity-80 mt-0.5">Mo 18-24</span>
              </div>
            </div>

            {/* Swim Lanes */}
            <div className="flex flex-col gap-0.5 min-w-[750px]">
              {/* Design Controls */}
              <div className="grid grid-cols-[130px_repeat(6,1fr)] gap-0.5">
                <div className="bg-white/10 px-3 py-2 font-semibold text-xs flex items-center rounded-l">Design Controls</div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-violet-500 to-violet-700 text-center font-medium">D&amp;D Plan</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-violet-500 to-violet-700 text-center font-medium">Design Inputs</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-amber-600 text-center font-medium">Feasibility Analysis</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-center font-medium">Concept Design</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-center font-medium">Detail Design</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-center font-medium">Design Outputs</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-pink-500 to-pink-600 text-center font-medium">Design Reviews</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center relative">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-emerald-500 to-emerald-600 text-center font-medium">Design Verification</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-slate-500 to-slate-600 text-center font-medium">Trace Matrix</span>
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full border-2 border-slate-900 z-10"></div>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-cyan-500 to-cyan-600 text-center font-medium">Design Validation</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-slate-500 to-slate-600 text-center font-medium">DHF Compilation</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center rounded-r">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-lime-500 to-lime-600 text-center font-medium">Design Transfer</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-slate-500 to-slate-600 text-center font-medium">DMR Release</span>
                </div>
              </div>

              {/* Risk Management */}
              <div className="grid grid-cols-[130px_repeat(6,1fr)] gap-0.5">
                <div className="bg-white/10 px-3 py-2 font-semibold text-xs flex items-center rounded-l">Risk Management</div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-violet-500 to-violet-700 text-center font-medium">RM Plan</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-violet-500 to-violet-700 text-center font-medium">Acceptability Criteria</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-amber-600 text-center font-medium">Prelim Hazard Analysis</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-amber-600 text-center font-medium">Initial FMEA</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-amber-600 text-center font-medium">dFMEA Updates</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-center font-medium">Risk Controls</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-amber-600 text-center font-medium">FTA / HAZOP</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-emerald-500 to-emerald-600 text-center font-medium">RC Verification</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-amber-600 text-center font-medium">pFMEA</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-cyan-500 to-cyan-600 text-center font-medium">RC Effectiveness</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-amber-600 text-center font-medium">Residual Risk</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center rounded-r">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-slate-500 to-slate-600 text-center font-medium">RM Report</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-slate-500 to-slate-600 text-center font-medium">Benefit-Risk</span>
                </div>
              </div>

              {/* Software */}
              <div className="grid grid-cols-[130px_repeat(6,1fr)] gap-0.5">
                <div className="bg-white/10 px-3 py-2 font-semibold text-xs flex items-center rounded-l">Software (62304)</div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-violet-500 to-violet-700 text-center font-medium">SW Dev Plan</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-violet-500 to-violet-700 text-center font-medium">Safety Class</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-amber-600 text-center font-medium">SW Requirements</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-center font-medium">Architecture</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-center font-medium">Detailed Design</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-center font-medium">Implementation</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-center font-medium">SOUP Mgmt</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-emerald-500 to-emerald-600 text-center font-medium">Unit Testing</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-emerald-500 to-emerald-600 text-center font-medium">Integration Test</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-emerald-500 to-emerald-600 text-center font-medium">System Test</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-cyan-500 to-cyan-600 text-center font-medium">SW Validation</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-red-500 to-red-600 text-center font-medium">Cybersecurity Test</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center rounded-r">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-slate-500 to-slate-600 text-center font-medium">SW Release</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-slate-500 to-slate-600 text-center font-medium">SBOM</span>
                </div>
              </div>

              {/* Usability */}
              <div className="grid grid-cols-[130px_repeat(6,1fr)] gap-0.5">
                <div className="bg-white/10 px-3 py-2 font-semibold text-xs flex items-center rounded-l">Usability (62366)</div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-violet-500 to-violet-700 text-center font-medium">UE Plan</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-violet-500 to-violet-700 text-center font-medium">User Profiles</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-amber-600 text-center font-medium">Use Scenarios</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-amber-600 text-center font-medium">Task Analysis</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-center font-medium">UI Design</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-red-500 to-red-600 text-center font-medium">Formative Test 1</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-red-500 to-red-600 text-center font-medium">Formative Test 2</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-red-500 to-red-600 text-center font-medium">Formative Test 3</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-amber-600 text-center font-medium">Use-Risk Analysis</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center relative">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-cyan-500 to-cyan-600 text-center font-medium">Summative Test</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-slate-500 to-slate-600 text-center font-medium">HFE Report</span>
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full border-2 border-slate-900 z-10"></div>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center rounded-r">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-slate-500 to-slate-600 text-center font-medium">UE File</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-slate-500 to-slate-600 text-center font-medium">Training Dev</span>
                </div>
              </div>

              {/* Hardware / Electrical */}
              <div className="grid grid-cols-[130px_repeat(6,1fr)] gap-0.5">
                <div className="bg-white/10 px-3 py-2 font-semibold text-xs flex items-center rounded-l">Hardware / Electrical</div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-violet-500 to-violet-700 text-center font-medium">HW Dev Plan</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-center font-medium">Schematic Design</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-center font-medium">Prototype A</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-center font-medium">PCB Layout</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-center font-medium">Prototype B/C</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-center font-medium">EVT / DVT</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center relative">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-red-500 to-red-600 text-center font-medium">60601-1 Testing</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-red-500 to-red-600 text-center font-medium">EMC Testing</span>
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full border-2 border-slate-900 z-10"></div>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-red-500 to-red-600 text-center font-medium">Laser Safety Test</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-emerald-500 to-emerald-600 text-center font-medium">Reliability Test</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center rounded-r">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-lime-500 to-lime-600 text-center font-medium">PVT</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-slate-500 to-slate-600 text-center font-medium">BOM Release</span>
                </div>
              </div>

              {/* Regulatory / Labeling */}
              <div className="grid grid-cols-[130px_repeat(6,1fr)] gap-0.5">
                <div className="bg-white/10 px-3 py-2 font-semibold text-xs flex items-center rounded-l">Regulatory / Labeling</div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-violet-500 to-violet-700 text-center font-medium">Reg Strategy</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-violet-500 to-violet-700 text-center font-medium">Predicate ID</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-amber-600 text-center font-medium">Standards Gap</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-violet-500 to-violet-700 text-center font-medium">Pre-Sub Prep</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-pink-500 to-pink-600 text-center font-medium">Pre-Sub Meeting</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-center font-medium">IFU Draft</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-center font-medium">Label Design</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-emerald-500 to-emerald-600 text-center font-medium">Labeling Review</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-slate-500 to-slate-600 text-center font-medium">UDI Registration</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-slate-500 to-slate-600 text-center font-medium">510(k) Draft</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-cyan-500 to-cyan-600 text-center font-medium">Labeling Validation</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center rounded-r relative">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-slate-500 to-slate-600 text-center font-medium">510(k) Submit</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-slate-500 to-slate-600 text-center font-medium">Listing</span>
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full border-2 border-slate-900 z-10"></div>
                </div>
              </div>

              {/* Manufacturing / QA */}
              <div className="grid grid-cols-[130px_repeat(6,1fr)] gap-0.5">
                <div className="bg-white/10 px-3 py-2 font-semibold text-xs flex items-center rounded-l">Manufacturing / QA</div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-violet-500 to-violet-700 text-center font-medium">Mfg Strategy</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-amber-600 text-center font-medium">Supplier Qual</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-violet-500 to-violet-700 text-center font-medium">Process Design</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-center font-medium">Process Dev</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-blue-500 to-blue-600 text-center font-medium">Tooling</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-amber-600 text-center font-medium">pFMEA Draft</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-emerald-500 to-emerald-600 text-center font-medium">IQ / OQ</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-emerald-500 to-emerald-600 text-center font-medium">Process Validation</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-cyan-500 to-cyan-600 text-center font-medium">PQ</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-red-500 to-red-600 text-center font-medium">Sterilization Val</span>
                </div>
                <div className="bg-white/5 p-1.5 flex flex-col gap-0.5 justify-center rounded-r">
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-lime-500 to-lime-600 text-center font-medium">Pilot Production</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-slate-500 to-slate-600 text-center font-medium">DHR Template</span>
                </div>
              </div>
            </div>

            {/* Gate Row */}
            <div className="grid grid-cols-[130px_repeat(6,1fr)] gap-0.5 mt-2 min-w-[750px]">
              <div className="text-right pr-3 text-slate-400 text-xs flex items-center justify-end">Design Reviews</div>
              <div className="flex justify-center items-center p-1"></div>
              <div className="flex justify-center items-center p-1">
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full">DR1</span>
              </div>
              <div className="flex justify-center items-center p-1">
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full">DR2</span>
              </div>
              <div className="flex justify-center items-center p-1">
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full">DR3</span>
              </div>
              <div className="flex justify-center items-center p-1">
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full">DR4</span>
              </div>
              <div className="flex justify-center items-center p-1">
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full">DR5</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-3 mt-5 pt-4 border-t border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <div className="w-2.5 h-2.5 rounded-sm bg-violet-500"></div> Planning
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <div className="w-2.5 h-2.5 rounded-sm bg-amber-500"></div> Analysis
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <div className="w-2.5 h-2.5 rounded-sm bg-blue-500"></div> Development
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500"></div> Verification
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <div className="w-2.5 h-2.5 rounded-sm bg-cyan-500"></div> Validation
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <div className="w-2.5 h-2.5 rounded-sm bg-red-500"></div> Testing
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <div className="w-2.5 h-2.5 rounded-sm bg-pink-500"></div> Review
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div> Milestone
              </div>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5 p-3 bg-white/5 rounded-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">12-24 mo</div>
                <div className="text-xs text-slate-400">Typical Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">5+ DRs</div>
                <div className="text-xs text-slate-400">Design Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">7 Workstreams</div>
                <div className="text-xs text-slate-400">Parallel Activities</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">510(k)/PMA</div>
                <div className="text-xs text-slate-400">FDA Pathway</div>
              </div>
            </div>

            {/* Deliverables Section */}
            <div className="mt-5 p-4 bg-white/5 rounded-lg border border-white/10">
              <h4 className="text-slate-400 text-xs uppercase tracking-wide font-semibold mb-3">Key Deliverables by Phase</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                <div className="bg-white/5 p-2.5 rounded border-l-2 border-blue-500">
                  <span className="text-[10px] text-slate-500 uppercase block mb-0.5">Planning</span>
                  <span className="text-xs">D&amp;D Plan, RM Plan, UE Plan, SW Plan</span>
                </div>
                <div className="bg-white/5 p-2.5 rounded border-l-2 border-blue-500">
                  <span className="text-[10px] text-slate-500 uppercase block mb-0.5">Feasibility</span>
                  <span className="text-xs">Design Inputs, Prelim Hazard Analysis</span>
                </div>
                <div className="bg-white/5 p-2.5 rounded border-l-2 border-blue-500">
                  <span className="text-[10px] text-slate-500 uppercase block mb-0.5">Development</span>
                  <span className="text-xs">Design Outputs, SW Architecture, Risk Controls</span>
                </div>
                <div className="bg-white/5 p-2.5 rounded border-l-2 border-blue-500">
                  <span className="text-[10px] text-slate-500 uppercase block mb-0.5">Verification</span>
                  <span className="text-xs">Test Reports, Trace Matrix, 60601 Cert</span>
                </div>
                <div className="bg-white/5 p-2.5 rounded border-l-2 border-blue-500">
                  <span className="text-[10px] text-slate-500 uppercase block mb-0.5">Validation</span>
                  <span className="text-xs">Summative Test, Clinical Data, SW Val</span>
                </div>
                <div className="bg-white/5 p-2.5 rounded border-l-2 border-blue-500">
                  <span className="text-[10px] text-slate-500 uppercase block mb-0.5">Transfer</span>
                  <span className="text-xs">DHF, DMR, 510(k), RM Report</span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 1: Planning & Regulatory Strategy */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-gray-200">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Planning &amp; Regulatory Strategy</h2>
                <p className="text-gray-500 text-sm">Establish regulatory pathway and project foundation</p>
              </div>
            </div>

            <h3 className="text-base font-semibold text-gray-800 mt-5 mb-3">Regulatory Pathway Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">510(k) Premarket Notification</h4>
                <p className="text-sm text-gray-600 mb-2">For devices substantially equivalent to a legally marketed predicate. Most Class II laser systems.</p>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  <li>90-day review typical</li>
                  <li>Use eSTAR template</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">PMA (Premarket Approval)</h4>
                <p className="text-sm text-gray-600 mb-2">For Class III devices or novel devices without predicates.</p>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  <li>Clinical data required</li>
                  <li>180+ day review</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">IDE (Investigational Device Exemption)</h4>
                <p className="text-sm text-gray-600 mb-2">For clinical investigations of unapproved devices.</p>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  <li>IRB approval required</li>
                  <li>Informed consent required</li>
                </ul>
              </div>
            </div>

            <h3 className="text-base font-semibold text-gray-800 mt-5 mb-3">Applicable Regulations &amp; Standards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">FDA Regulations</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>21 CFR 820</strong> – Quality System Regulation</li>
                  <li><strong>21 CFR 801</strong> – Labeling</li>
                  <li><strong>21 CFR 830</strong> – Unique Device Identification</li>
                  <li><strong>21 CFR 803</strong> – Medical Device Reporting</li>
                  <li><strong>21 CFR 1002</strong> – Radiation product reports</li>
                  <li><strong>21 CFR 1040</strong> – Laser products</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Standards</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>IEC 60601-1</strong> – General electrical safety</li>
                  <li><strong>IEC 60601-2-22</strong> – Laser equipment</li>
                  <li><strong>IEC 60825-1</strong> – Laser safety</li>
                  <li><strong>IEC 62304</strong> – Software lifecycle</li>
                  <li><strong>IEC 62366</strong> – Usability engineering</li>
                  <li><strong>ISO 15223 / ISO 20417</strong> – Labeling symbols</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="font-semibold text-gray-900 mb-1">Pro Tip: Early FDA Engagement</p>
              <p className="text-sm text-gray-700">Request a Pre-Submission meeting with FDA early to discuss regulatory pathway and testing strategies.</p>
            </div>
          </section>

          {/* SECTION 2: Design Controls */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-gray-200">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Design Controls &amp; Requirements</h2>
                <p className="text-gray-500 text-sm">Establish design inputs and DHF per 21 CFR 820.30 and ISO 13485</p>
              </div>
            </div>

            <h3 className="text-base font-semibold text-gray-800 mt-5 mb-3">Design Inputs</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">User Needs</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside">
                  <li>Clinical indication</li>
                  <li>User profile</li>
                  <li>Use environment</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Regulatory</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside">
                  <li>21 CFR 801, 830</li>
                  <li>21 CFR 1002, 1040</li>
                  <li>FDA pathway</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Standards</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside">
                  <li>IEC 60601 series</li>
                  <li>IEC 62304, 62366</li>
                  <li>ISO 15223, 20417</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Technical</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside">
                  <li>Laser parameters</li>
                  <li>Safety interlocks</li>
                  <li>Environmental specs</li>
                </ul>
              </div>
            </div>

            <h3 className="text-base font-semibold text-gray-800 mt-5 mb-3">Design Outputs</h3>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside mb-4">
              <li><strong>Design Specifications:</strong> Technical specifications</li>
              <li><strong>Drawings:</strong> Mechanical, electrical, optical</li>
              <li><strong>Software:</strong> Requirements, architecture, code</li>
              <li><strong>Labeling:</strong> Labels, IFU, user manual</li>
              <li><strong>Test Procedures:</strong> V&amp;V protocols</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="font-semibold text-gray-900 mb-1">DHF Contents</p>
              <p className="text-sm text-gray-700">Design Plan, Inputs/Outputs, Reviews, V&amp;V Records, Risk Management File, Software Records, Usability File, Change Records</p>
            </div>
          </section>

          {/* SECTION 3: Risk Management */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-gray-200">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Risk Management</h2>
                <p className="text-gray-500 text-sm">Comprehensive risk analysis per ISO 14971</p>
              </div>
            </div>

            <h3 className="text-base font-semibold text-gray-800 mt-5 mb-3">Hazard Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Laser Hazards</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside">
                  <li>Eye/skin exposure</li>
                  <li>Fire hazard</li>
                  <li>Incorrect power</li>
                  <li>Beam misalignment</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Electrical</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside">
                  <li>Electric shock</li>
                  <li>Electrical fire</li>
                  <li>EMC interference</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Software</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside">
                  <li>Software errors</li>
                  <li>Cybersecurity</li>
                  <li>Data corruption</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Usability</h4>
                <ul className="text-xs text-gray-600 list-disc list-inside">
                  <li>User errors</li>
                  <li>Misinterpretation</li>
                  <li>Training gaps</li>
                </ul>
              </div>
            </div>

            <h3 className="text-base font-semibold text-gray-800 mt-5 mb-3">Risk Control Hierarchy</h3>
            <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
              <li><strong>Inherent Safety:</strong> Eliminate hazards by design</li>
              <li><strong>Protective Measures:</strong> Interlocks, shutters, housings</li>
              <li><strong>Information:</strong> Warnings, labels, training</li>
            </ol>
          </section>

          {/* SECTION 4: Software Development */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-gray-200">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Software Development</h2>
                <p className="text-gray-500 text-sm">IEC 62304 software lifecycle processes</p>
              </div>
            </div>

            <h3 className="text-base font-semibold text-gray-800 mt-5 mb-3">Software Safety Classification</h3>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <p className="font-semibold text-gray-900">Class A</p>
                <p className="text-sm text-gray-600">Cannot contribute to hazard</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <p className="font-semibold text-gray-900">Class B</p>
                <p className="text-sm text-gray-600">Non-serious injury hazard</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <p className="font-semibold text-gray-900">Class C</p>
                <p className="text-sm text-gray-600">Serious injury hazard</p>
              </div>
            </div>

            <h3 className="text-base font-semibold text-gray-800 mt-5 mb-3">Key Activities</h3>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Software architecture and design</li>
              <li>Configuration management</li>
              <li>SOUP management</li>
              <li>Unit, integration, system testing</li>
              <li>Cybersecurity per IEC 81001-5-1</li>
            </ul>
          </section>

          {/* SECTION 5: Usability Engineering */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-gray-200">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">5</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Usability Engineering</h2>
                <p className="text-gray-500 text-sm">IEC 62366 usability engineering process</p>
              </div>
            </div>

            <h3 className="text-base font-semibold text-gray-800 mt-5 mb-3">Key Activities</h3>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Define user groups and use environments</li>
              <li>Identify use scenarios and critical tasks</li>
              <li>Conduct formative usability testing</li>
              <li>Conduct summative usability validation</li>
              <li>Document in Usability Engineering File</li>
            </ul>
          </section>

          {/* SECTION 6: Testing & Validation */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-gray-200">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">6</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Testing &amp; Validation</h2>
                <p className="text-gray-500 text-sm">Electrical safety, EMC, laser safety, and performance testing</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Electrical Safety Testing (NRTL)</h4>
                <p className="text-sm text-gray-600 mb-2">Per IEC 60601-1:</p>
                <ul className="text-sm text-gray-600 list-disc list-inside mb-2">
                  <li>Dielectric strength</li>
                  <li>Leakage current</li>
                  <li>Earth resistance</li>
                  <li>Temperature rise</li>
                </ul>
                <p className="text-sm text-gray-700"><strong>NRTLs:</strong> UL, CSA, TÜV, Intertek, SGS</p>
                <p className="text-sm text-gray-700"><strong>Timeline:</strong> 4-8 weeks</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">EMC Testing (NRTL)</h4>
                <p className="text-sm text-gray-600 mb-2">Per IEC 60601-1-2:</p>
                <p className="text-sm text-gray-600 mb-1"><strong>Emissions:</strong> Radiated, conducted, harmonics</p>
                <p className="text-sm text-gray-600"><strong>Immunity:</strong> ESD, RF, magnetic fields, voltage dips</p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
              <p className="font-semibold text-gray-900 mb-1">ASCA Summary Reports</p>
              <p className="text-sm text-gray-700">Use ASCA-participating test labs for streamlined FDA review. ASCA summary reports provide pre-reviewed test data, potentially reducing review times.</p>
            </div>

            <h3 className="text-base font-semibold text-gray-800 mt-5 mb-3">Laser Safety Testing</h3>
            <p className="text-sm text-gray-600 mb-2">Per IEC 60825-1 and IEC 60601-2-22:</p>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside mb-4">
              <li>Laser classification (1, 1M, 2, 2M, 3R, 3B, 4)</li>
              <li>Accessible emission limits</li>
              <li>Protective housing, interlocks</li>
              <li>Labeling compliance</li>
            </ul>

            <h3 className="text-base font-semibold text-gray-800 mt-5 mb-3">Packaging &amp; Shelf Life Testing</h3>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li><strong>ISO 11607-1, -2:</strong> Sterile barrier packaging</li>
              <li><strong>ISO 11135:</strong> EO sterilization validation</li>
              <li><strong>ASTM D4169:</strong> Distribution simulation</li>
              <li><strong>ASTM F1980:</strong> Accelerated aging</li>
            </ul>
          </section>

          {/* SECTION 7: FDA Submission */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b-2 border-gray-200">
              <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">7</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">FDA Submission</h2>
                <p className="text-gray-500 text-sm">Prepare and submit to FDA</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-800 mb-3 text-sm">Pre-Submission Checklist</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {['DHF complete', 'Risk Management File', 'Software File', 'Usability File', 'All test reports', 'Labeling finalized'].map((item, i) => (
                  <div key={i} className="text-sm text-gray-600 pl-5 relative">
                    <span className="absolute left-0 text-blue-500">☐</span> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-800 mb-3 text-sm">510(k) Submission Contents</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {['Administrative info', 'Indications for use', 'Device description', 'Substantial equivalence', 'Performance data', 'Software documentation', 'Biocompatibility', 'Sterilization data', 'Labeling'].map((item, i) => (
                  <div key={i} className="text-sm text-gray-600 pl-5 relative">
                    <span className="absolute left-0 text-blue-500">☐</span> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <p className="font-semibold text-gray-900 mb-1">Common Issues</p>
              <p className="text-sm text-gray-700">Incomplete test reports, insufficient SE justification, missing software docs, incomplete risk management, non-compliant labeling</p>
            </div>
          </section>

          {/* FDA Guidance Documents */}
          <section className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Key FDA Guidance Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {guidanceDocuments.map((doc, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{doc.area}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">{doc.name}</h4>
                  <p className="text-xs text-gray-500 font-mono mb-1">{doc.docId}</p>
                  <p className="text-xs text-gray-600">{doc.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Resources Footer */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 text-white">
            <h3 className="font-bold text-lg mb-4">Related Resources</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h4 className="text-blue-400 font-semibold text-sm mb-2">Key Standards</h4>
                <ul className="text-sm text-slate-300 space-y-0.5">
                  <li><Link href="/standards/iec-60601-1" className="hover:text-white">IEC 60601-1</Link></li>
                  <li><Link href="/standards/iec-60601-2-22" className="hover:text-white">IEC 60601-2-22</Link></li>
                  <li><Link href="/standards/iec-60825-1" className="hover:text-white">IEC 60825-1</Link></li>
                  <li><Link href="/standards/iec-62304" className="hover:text-white">IEC 62304</Link></li>
                  <li><Link href="/standards/iec-62366" className="hover:text-white">IEC 62366</Link></li>
                  <li><Link href="/standards/iec-81001-5-1" className="hover:text-white">IEC 81001-5-1</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold text-sm mb-2">Labeling/Packaging</h4>
                <ul className="text-sm text-slate-300 space-y-0.5">
                  <li><Link href="/standards/iso-15223" className="hover:text-white">ISO 15223</Link></li>
                  <li><Link href="/standards/iso-20417" className="hover:text-white">ISO 20417</Link></li>
                  <li>ISO 11135</li>
                  <li>ISO 11607-1, -2</li>
                  <li>ASTM D4169</li>
                  <li>ASTM F1980</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold text-sm mb-2">FDA Regulations</h4>
                <ul className="text-sm text-slate-300 space-y-0.5">
                  <li><Link href="/regulations/cfr-820" className="hover:text-white">21 CFR 820</Link></li>
                  <li>21 CFR 801</li>
                  <li>21 CFR 830</li>
                  <li>21 CFR 1002</li>
                  <li>21 CFR 1040</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-400 font-semibold text-sm mb-2">Related Guides</h4>
                <ul className="text-sm text-slate-300 space-y-0.5">
                  <li><Link href="/how-to/develop-medical-laser-system" className="hover:text-white">Full How-To Guide</Link></li>
                  <li><Link href="/guides/integrated-risk-management" className="hover:text-white">Risk Management</Link></li>
                  <li><Link href="/guides/usability-engineering" className="hover:text-white">Usability Engineering</Link></li>
                  <li><Link href="/tools/laser-safety" className="hover:text-white">Laser Safety Calculator</Link></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

