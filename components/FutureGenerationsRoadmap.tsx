'use client';

import { useState } from 'react';
import {
    Cpu, Zap, Dna, Atom, Brain, Sparkles, Shield,
    AlertTriangle, ChevronDown, ChevronUp, ExternalLink,
    Cog, Microscope, Binary, Fingerprint, Heart, Scale,
    TrendingUp, CheckCircle2, Target, Lightbulb, Users, Clock, Send, Loader2
} from 'lucide-react';
import Link from 'next/link';

// Icon animation CSS classes
const iconAnimations: Record<number, string> = {
    4: 'animate-spin-slow',      // Cog - slow rotation
    5: 'animate-pulse-zap',      // Zap - pulse
    6: 'animate-dna-helix',      // Dna - helix rotation
    7: 'animate-atom-orbit',     // Atom - orbit
    8: 'animate-scale-tip',      // Scale - tip back and forth
    9: 'animate-microscope',     // Microscope - zoom pulse
    10: 'animate-fingerprint',   // Fingerprint - scan effect
};

interface Generation {
    id: number;
    era: string;
    title: string;
    dateRange: string;
    concept: string;
    capability: string;
    positiveImpact: string[];
    realWorldExamples: string[];
    constraint: string;
    constraintType: string;
    criticalTechnology: string;
    engineerRole: string;
    aiRole: string;
    icon: React.ElementType;
    accentColor: string;
    isEthicalPivot?: boolean;
    achievabilityScore: number;
}

const GENERATIONS: Generation[] = [
    {
        id: 4,
        era: 'Agentic',
        title: 'The Orchestrator',
        dateRange: '2024 - 2027',
        concept: 'AI as a tireless teammate that handles the grunt work, freeing engineers to focus on innovation.',
        capability: 'Multi-agent systems handle document generation, regulatory cross-referencing, and design optimization. Engineers review AI-generated options rather than creating from scratch.',
        positiveImpact: [
            'Reduce regulatory submission prep time by 60-80%',
            'Enable small companies to achieve same compliance quality as large corporations',
            'Accelerate time-to-market for life-saving devices by months',
            'Free engineers to focus on patient outcomes rather than paperwork'
        ],
        realWorldExamples: [
            'AI drafts 510(k) submissions with 95% first-pass accuracy',
            'Automated DHF generation from design inputs',
            'Real-time regulatory guidance during product development',
            'Intelligent CAPA root cause analysis and corrective action suggestions'
        ],
        constraint: 'Data Silos',
        constraintType: 'Integration across legacy systems',
        criticalTechnology: 'Multi-Agent LLM Orchestration',
        engineerRole: 'Reviewer / Orchestrator',
        aiRole: 'Generates Options',
        icon: Cog,
        accentColor: '#0180A5',
        achievabilityScore: 9,
    },
    {
        id: 5,
        era: 'Artisan',
        title: 'The Autonomous Artisan',
        dateRange: '2027 - 2032',
        concept: 'Closed-loop manufacturing where design and production merge seamlessly.',
        capability: 'The system monitors the melt pool of a 3D printer in real-time (microsecond scale). If it detects a pore forming, it adjusts the laser power instantly to heal the defect before the layer is finished.',
        positiveImpact: [
            'Zero-defect manufacturing becomes standard, not aspirational',
            'Patient-specific implants manufactured on-demand in hours',
            'Dramatic reduction in product recalls due to manufacturing defects',
            'Enable precision medicine at scale with custom devices for each patient'
        ],
        realWorldExamples: [
            'Self-correcting 3D metal printers for titanium implants',
            'AI-controlled laser sintering that guarantees material properties',
            'Same-day custom spinal cages matched to patient CT scans',
            'Bioprinted tissue scaffolds with controlled porosity for optimal cell growth'
        ],
        constraint: 'Sensor Latency',
        constraintType: 'Real-time data processing speeds',
        criticalTechnology: 'Microsecond Closed-Loop Control',
        engineerRole: 'Process Overseer',
        aiRole: 'Controls Manufacturing',
        icon: Zap,
        accentColor: '#00AA86',
        achievabilityScore: 8,
    },
    {
        id: 6,
        era: 'Bio-Syn',
        title: 'Bio-Synthetic Convergence',
        dateRange: '2030 - 2038',
        concept: 'Designing devices that work WITH the body, not just IN the body.',
        capability: 'AI generates genetic code for "Living Devices." Instead of a titanium stent, the AI designs a synthetic protein scaffold that prompts the patient\'s own endothelial cells to grow a new vessel wall, then dissolves harmlessly.',
        positiveImpact: [
            'Eliminate rejection risk - devices become part of the patient',
            'Self-healing implants that repair themselves over time',
            'End of revision surgeries for device replacement',
            'Pediatric patients receive devices that grow with them'
        ],
        realWorldExamples: [
            'Biodegradable stents that become natural artery tissue',
            'Gene-therapy heart valves that regenerate like native tissue',
            'Bone implants that are gradually replaced by real bone',
            'Neural interfaces that integrate seamlessly with brain tissue'
        ],
        constraint: 'Biological Complexity',
        constraintType: 'Predicting immune responses',
        criticalTechnology: 'Synthetic Biology & Gene Editing',
        engineerRole: 'Biologist / Geneticist',
        aiRole: 'Codes Biology',
        icon: Dna,
        accentColor: '#10B981',
        achievabilityScore: 7,
    },
    {
        id: 7,
        era: 'Quantum',
        title: 'Hyper-Dimensional Solver',
        dateRange: '2035 - 2045',
        concept: 'Reality simulation that makes clinical trials confirmatory rather than exploratory.',
        capability: 'Using Quantum Computing to solve multi-physics problems. The AI can simulate Mechanical Stress + Fluid Dynamics + Chemical Degradation + Cellular Biology simultaneously for 10 years of patient life in seconds.',
        positiveImpact: [
            'Clinical trials shortened from years to months',
            'Virtual patient populations eliminate trial recruitment delays',
            'Rare disease treatments become economically viable',
            'Failure modes predicted and designed out before first prototype'
        ],
        realWorldExamples: [
            'Complete fatigue-life prediction for cardiac leads before manufacturing',
            'Virtual clinical trials with millions of simulated patients',
            'Real-time prediction of drug-device interaction effects',
            'Personalized treatment outcome predictions with 99% accuracy'
        ],
        constraint: 'Quantum Error Correction',
        constraintType: 'Stable quantum computing at scale',
        criticalTechnology: 'Fault-Tolerant Quantum Computers',
        engineerRole: 'Problem Definer',
        aiRole: 'Simulates Reality',
        icon: Atom,
        accentColor: '#6366F1',
        achievabilityScore: 6,
    },
    {
        id: 8,
        era: 'Ethical',
        title: 'The Ethical Governor',
        dateRange: '2040 - 2050',
        concept: 'AI that designs for outcomes, not specifications, with built-in ethical safeguards.',
        capability: 'You ask for an "outcome" rather than a "device." The AI evaluates requests against a Global Ethical Ontology, ensuring designs benefit all patients worldwide.',
        positiveImpact: [
            'Broad access to medical innovations worldwide',
            'Elimination of devices that could be weaponized or misused',
            'Automatic consideration of environmental and sustainability impacts',
            'Built-in protection of patient autonomy and dignity'
        ],
        realWorldExamples: [
            'Memory restoration implants (not enhancement) for Alzheimer\'s patients',
            'Prosthetics designed with dignity and psychological well-being in mind',
            'AI ensures designs are accessible and affordable for all patient populations globally',
            'Sustainable materials and end-of-life considerations built into every design'
        ],
        constraint: 'Consensus on Human Values',
        constraintType: 'Global ethical frameworks',
        criticalTechnology: 'Global AI Governance Standards',
        engineerRole: 'Ethicist / Governor',
        aiRole: 'Judges Intent',
        icon: Scale,
        accentColor: '#D97706',
        isEthicalPivot: true,
        achievabilityScore: 5,
    },
    {
        id: 9,
        era: 'Atomic',
        title: 'The Matter Compiler',
        dateRange: '2045 - 2060',
        concept: 'Manufacturing disappears. Design becomes Manifestation.',
        capability: 'Nanotechnology allows AI-controlled "Assemblers" to build devices atom-by-atom. A surgical tool materializes from raw feedstock in the sterile field. No supply chain, just code and materials.',
        positiveImpact: [
            'Medical devices available anywhere, anytime - even in remote areas',
            'No more supply chain disruptions affecting patient care',
            'Perfectly optimized atomic structures impossible to manufacture today',
            'Instant prototyping accelerates innovation exponentially'
        ],
        realWorldExamples: [
            'Surgical instruments manufactured in the OR moments before use',
            'Emergency prosthetics created in disaster zones within hours',
            'Perfectly crystalline drug-eluting coatings for optimal release profiles',
            'Living cells integrated with sensors at the molecular level'
        ],
        constraint: 'Thermodynamics',
        constraintType: 'Heat management in atomic assembly',
        criticalTechnology: 'Programmable Molecular Assemblers',
        engineerRole: 'Artist / Creator',
        aiRole: 'Compiles Matter',
        icon: Microscope,
        accentColor: '#64748B',
        achievabilityScore: 4,
    },
    {
        id: 10,
        era: 'Post-Device',
        title: 'The Post-Device Era',
        dateRange: '2055 - 2075+',
        concept: 'The evolution of "treatment" - from external devices to biological upgrades.',
        capability: 'The AI recognizes that "Hardware" is sometimes inefficient. Instead of a dialysis machine, it designs a gene therapy that enhances kidney filtration efficiency. The "Device" becomes informational—code that upgrades biology.',
        positiveImpact: [
            'Chronic conditions treated permanently, not managed indefinitely',
            'Elimination of device maintenance, battery replacements, and revisions',
            'Treatments that work with evolution, not against it',
            'Healthcare costs drop dramatically as interventions become one-time events'
        ],
        realWorldExamples: [
            'Kidney efficiency upgrades replacing lifelong dialysis',
            'Genetic modifications for insulin production in diabetics',
            'Enhanced immune systems that prevent cancer development',
            'Cognitive resilience upgrades for neurodegenerative disease prevention'
        ],
        constraint: 'Definition of "Human"',
        constraintType: 'Philosophical and societal boundaries',
        criticalTechnology: 'Safe Germline Gene Therapy',
        engineerRole: 'Architect of Evolution',
        aiRole: 'Upgrades Life',
        icon: Fingerprint,
        accentColor: '#8B5CF6',
        achievabilityScore: 3,
    },
];

export default function FutureGenerationsRoadmap() {
    // Prediction form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        generation: 'Gen 4',
        prediction: '',
    });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.email || !formData.prediction) {
            setErrorMessage('Email and prediction are required.');
            setSubmitStatus('error');
            return;
        }

        setSubmitStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('/api/submit-prediction', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', generation: 'Gen 4', prediction: '' });
            } else {
                setErrorMessage(data.error || 'Failed to submit');
                setSubmitStatus('error');
            }
        } catch {
            setErrorMessage('Network error. Please try again.');
            setSubmitStatus('error');
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
            {/* CSS Animations for Generation Icons */}
            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes pulse-zap {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.1); }
                }
                @keyframes dna-helix {
                    0% { transform: rotateY(0deg); }
                    100% { transform: rotateY(360deg); }
                }
                @keyframes atom-orbit {
                    0% { transform: rotate(0deg) scale(1); }
                    50% { transform: rotate(180deg) scale(1.05); }
                    100% { transform: rotate(360deg) scale(1); }
                }
                @keyframes scale-tip {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(-3deg); }
                    75% { transform: rotate(3deg); }
                }
                @keyframes microscope-zoom {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
                @keyframes fingerprint-scan {
                    0% { opacity: 0.7; transform: translateY(-2px); }
                    50% { opacity: 1; transform: translateY(2px); }
                    100% { opacity: 0.7; transform: translateY(-2px); }
                }
                .animate-spin-slow { animation: spin-slow 8s linear infinite; }
                .animate-pulse-zap { animation: pulse-zap 2s ease-in-out infinite; }
                .animate-dna-helix { animation: dna-helix 6s linear infinite; }
                .animate-atom-orbit { animation: atom-orbit 4s ease-in-out infinite; }
                .animate-scale-tip { animation: scale-tip 3s ease-in-out infinite; }
                .animate-microscope { animation: microscope-zoom 2.5s ease-in-out infinite; }
                .animate-fingerprint { animation: fingerprint-scan 2s ease-in-out infinite; }
            `}</style>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                {/* === LEFT COLUMN: MAIN EDITORIAL CONTENT === */}
                <article className="lg:w-2/3 space-y-16">

                    {/* Header Article Style */}
                    <div className="border-b border-gray-200 pb-8">
                        <div className="flex items-center gap-3 mb-4 text-sm font-medium text-slate-500">
                            <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">Deep Dive</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 10 min read</span>
                            <span>•</span>
                            <span>Updated Jan 2025</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            The Future Generations: A Roadmap of Achievable Breakthroughs
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed font-light">
                            From agentic AI teammates to atomic-level manufacturing, here is how medical device engineering will evolve over the next 50 years.
                        </p>
                    </div>

                    {/* Precursor Section - Article Format */}
                    <section className="bg-slate-50 p-8 rounded-xl border-l-4 border-slate-400">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-slate-500" />
                            How We Got Here (1976 - 2024)
                        </h3>
                        <p className="text-gray-700 mb-6 font-serif leading-relaxed">
                            Before we look forward, it is critical to understand the foundation. The first three generations established the regulatory frameworks, digital infrastructure, and early AI capabilities that make future advancements possible.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-6 text-sm">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Gen 1: Regulation (1976-2000)</h4>
                                <p className="text-gray-600">The dawn of FDA oversight. Paper-based QMS, manual checks, and the birth of 510(k) and PMA pathways.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Gen 2: Digitization (2000-2015)</h4>
                                <p className="text-gray-600">eQMS replaced paper. CAD tools arrived. Electronic records (Part 11) became standard.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Gen 3: Connectivity (2015-2024)</h4>
                                <p className="text-gray-600">Cloud adoption, IoT devices, and the first 1,000+ FDA-cleared AI/ML algorithms.</p>
                            </div>
                        </div>
                    </section>

                    {/* Generations 4-10 Detailed Stream */}
                    <div className="space-y-20">
                        {GENERATIONS.map((gen, idx) => {
                            const Icon = gen.icon;

                            return (
                                <section key={gen.id} id={`gen-${gen.id}`} className="scroll-mt-24 group">
                                    {/* Section Header */}
                                    <div className="flex items-start gap-5 mb-6">
                                        <div className="flex-shrink-0 relative">
                                            <div
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                                                style={{ background: gen.accentColor }}
                                            >
                                                <Icon className={`w-8 h-8 text-white ${iconAnimations[gen.id] || ''}`} />
                                            </div>
                                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-white border-2 rounded-full flex items-center justify-center text-xs font-bold shadow-sm z-10" style={{ borderColor: gen.accentColor, color: gen.accentColor }}>
                                                {gen.id}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className="text-sm font-bold uppercase tracking-wider" style={{ color: gen.accentColor }}>{gen.era} Era</span>
                                                <span className="text-sm text-gray-400 font-medium">• {gen.dateRange}</span>
                                            </div>
                                            <h2 className="text-3xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                                                {gen.title}
                                            </h2>
                                        </div>
                                    </div>

                                    {/* Main Content - Readable Prose */}
                                    <div className="prose prose-lg prose-slate max-w-none">
                                        <p className="text-xl font-medium text-gray-800 leading-relaxed italic mb-6 border-l-2 pl-4" style={{ borderColor: gen.accentColor }}>
                                            "{gen.concept}"
                                        </p>

                                        {/* Capability Description */}
                                        <div className="mb-8">
                                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-3">Core Capability</h4>
                                            <p className="text-gray-700 leading-relaxed font-serif">
                                                {gen.capability}
                                            </p>
                                        </div>

                                        {/* Impacts & Examples Grid */}
                                        <div className="grid md:grid-cols-2 gap-8 mb-8 not-prose">
                                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                                <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-4 border-b pb-2">
                                                    <Sparkles className="w-4 h-4 text-amber-500" />
                                                    Positive Impact
                                                </h4>
                                                <ul className="space-y-3">
                                                    {gen.positiveImpact.map((impact, i) => (
                                                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                                            {impact}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                                <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-4 border-b pb-2 border-gray-200">
                                                    <Target className="w-4 h-4 text-blue-500" />
                                                    Real-World Application
                                                </h4>
                                                <ul className="space-y-3">
                                                    {gen.realWorldExamples.map((ex, i) => (
                                                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                                                            {ex}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Compacter Tech Specs Table */}
                                        <div className="border border-gray-200 rounded-lg overflow-hidden not-prose bg-white">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-gray-200">

                                                {/* Tech */}
                                                <div className="p-3 sm:border-r border-gray-200">
                                                    <div className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-1">Critical Tech</div>
                                                    <div className="text-sm font-semibold text-gray-900 leading-tight">{gen.criticalTechnology}</div>
                                                </div>

                                                {/* Constraint */}
                                                <div className="p-3 sm:border-r border-gray-200">
                                                    <div className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-1">Constraint</div>
                                                    <div className="text-sm font-medium text-gray-700 leading-tight">{gen.constraint}</div>
                                                </div>

                                                {/* Role */}
                                                <div className="p-3 sm:border-r border-gray-200">
                                                    <div className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-1">Engineer Role</div>
                                                    <div className="text-sm font-medium text-gray-700 leading-tight">{gen.engineerRole}</div>
                                                </div>

                                                {/* AI Role */}
                                                <div className="p-3 bg-slate-50/50">
                                                    <div className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-1">AI Role</div>
                                                    <div className="text-sm font-bold leading-tight" style={{ color: gen.accentColor }}>{gen.aiRole}</div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </article>

                {/* === RIGHT COLUMN: STICKY SIDEBAR === */}
                <aside className="lg:w-1/3 mt-12 lg:mt-0">
                    <div className="sticky top-24 space-y-8">

                        {/* Interactive Prediction Widget */}
                        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500" />

                            <form onSubmit={handleFormSubmit} className="space-y-4 pt-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-500 mb-1">Your Prediction For</label>
                                    <select
                                        value={formData.generation}
                                        onChange={(e) => setFormData({ ...formData, generation: e.target.value })}
                                        className="w-full px-3 py-2 rounded-lg text-sm bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium text-gray-700"
                                    >
                                        <option value="Gen 4">Gen 4 - Agentic Era</option>
                                        <option value="Gen 5">Gen 5 - Artisan Era</option>
                                        <option value="Gen 6">Gen 6 - Bio-Synthetic</option>
                                        <option value="Gen 7">Gen 7 - Quantum Era</option>
                                        <option value="Gen 8">Gen 8 - Ethical Era</option>
                                        <option value="Gen 9">Gen 9 - Atomic Era</option>
                                        <option value="Gen 10">Gen 10 - Post-Device</option>
                                    </select>
                                </div>
                                <textarea
                                    placeholder="I believe that by 2035..."
                                    required
                                    rows={3}
                                    maxLength={2000}
                                    value={formData.prediction}
                                    onChange={(e) => setFormData({ ...formData, prediction: e.target.value })}
                                    className="w-full px-3 py-2 rounded-lg text-sm bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none transition-all"
                                />
                                <div className="grid grid-cols-2 gap-3">
                                    <input
                                        type="text"
                                        placeholder="Name (opt)"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="px-3 py-2 rounded-lg text-sm bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email *"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="px-3 py-2 rounded-lg text-sm bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                                    />
                                </div>

                                {submitStatus === 'error' && errorMessage && (
                                    <p className="text-red-600 text-xs bg-red-50 p-2 rounded">{errorMessage}</p>
                                )}
                                {submitStatus === 'success' && (
                                    <p className="text-green-600 text-xs bg-green-50 p-2 rounded flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> Prediction submitted successfully!
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={submitStatus === 'submitting'}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-bold text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all disabled:opacity-50 transform hover:-translate-y-0.5 active:translate-y-0"
                                    style={{
                                        background: 'linear-gradient(135deg, #0159A3 0%, #00AA86 100%)',
                                    }}
                                >
                                    {submitStatus === 'submitting' ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Submit Prediction
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Quick Navigation */}
                        <nav className="bg-slate-50 p-6 rounded-xl border border-slate-200 hidden lg:block">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Table of Contents</h4>
                            <div className="space-y-1 relative">
                                <div className="absolute left-[9px] top-2 bottom-2 w-px bg-slate-200 z-0" />
                                {GENERATIONS.map((gen) => (
                                    <a
                                        key={gen.id}
                                        href={`#gen-${gen.id}`}
                                        className="relative z-10 block pl-6 py-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all"
                                    >
                                        <span className="absolute left-[5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border-2 border-slate-300" />
                                        <span className="text-xs font-bold text-slate-400 mr-2">Gen {gen.id}</span>
                                        {gen.title}
                                    </a>
                                ))}
                            </div>
                        </nav>

                    </div>
                </aside>
            </div>
        </div>
    );
}
