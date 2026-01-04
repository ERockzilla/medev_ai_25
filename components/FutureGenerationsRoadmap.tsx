'use client';

import { useState } from 'react';
import {
    Cpu, Zap, Dna, Atom, Brain, Sparkles, Shield,
    AlertTriangle, ChevronDown, ChevronUp, ExternalLink,
    Cog, Microscope, Binary, Fingerprint, Heart, Scale,
    TrendingUp, CheckCircle2, Target, Lightbulb, Users, Clock, Send, Loader2
} from 'lucide-react';

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
        capability: 'You ask for an "outcome" rather than a "device." The AI evaluates requests against a Global Ethical Ontology, ensuring designs benefit humanity equitably.',
        positiveImpact: [
            'Guaranteed equitable access to medical innovations',
            'Elimination of devices that could be weaponized or misused',
            'Automatic consideration of environmental and sustainability impacts',
            'Built-in protection of patient autonomy and dignity'
        ],
        realWorldExamples: [
            'Memory restoration implants (not enhancement) for Alzheimer\'s patients',
            'Prosthetics designed with dignity and psychological well-being in mind',
            'AI refuses designs that would only benefit wealthy populations',
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

const PHASES = [
    {
        id: 1,
        title: 'Phase II: The Era of Autonomous Physics',
        subtitle: 'The "How"',
        description: 'These generations focus on perfecting HOW we build medical devices, enabling unprecedented precision and personalization.',
        generations: [5, 6, 7],
        accentColor: '#0180A5',
        timeframe: '2027 - 2045',
    },
    {
        id: 2,
        title: 'The Ethical Event Horizon',
        subtitle: 'The Pivot Point',
        description: 'When AI can build almost anything physics allows, the question shifts from "Can we?" to "Should we?"',
        generations: [],
        accentColor: '#D97706',
        isPivot: true,
        timeframe: '~2040',
    },
    {
        id: 3,
        title: 'Phase III: The Era of Existential Engineering',
        subtitle: 'The "Why"',
        description: 'These generations focus on WHY we build, ensuring that advanced capabilities serve humanity\'s best interests equitably.',
        generations: [8, 9, 10],
        accentColor: '#64748B',
        timeframe: '2040 - 2075+',
    },
];

// Glassmorphism styles
const glassStyle = {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
};

const glassStyleDark = {
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(200, 200, 200, 0.3)',
};

// Metallic accent style
const metallicStyle = {
    background: 'linear-gradient(135deg, #E8EAED 0%, #C4C7CC 25%, #E8EAED 50%, #A8ADB5 75%, #C4C7CC 100%)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1)',
};

export default function FutureGenerationsRoadmap() {
    const [expandedGen, setExpandedGen] = useState<number | null>(null);

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

    const toggleGeneration = (id: number) => {
        setExpandedGen(expandedGen === id ? null : id);
    };

    const getAchievabilityLabel = (score: number) => {
        if (score >= 8) return { label: 'Near-Term', color: 'text-teal-700 bg-teal-50 border-teal-200' };
        if (score >= 6) return { label: 'Mid-Term', color: 'text-slate-700 bg-slate-50 border-slate-200' };
        if (score >= 4) return { label: 'Long-Term', color: 'text-gray-600 bg-gray-50 border-gray-200' };
        return { label: 'Far Future', color: 'text-gray-500 bg-gray-50 border-gray-200' };
    };

    return (
        <div className="max-w-6xl mx-auto">
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

            {/* Hero Section - Glassmorphic */}
            <div
                className="relative mb-12 p-8 rounded-2xl overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, rgba(1, 89, 163, 0.08) 0%, rgba(0, 170, 134, 0.06) 100%)',
                    border: '1px solid rgba(1, 89, 163, 0.15)',
                    backdropFilter: 'blur(8px)',
                }}
            >
                {/* Subtle metallic accent bar at top */}
                <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={metallicStyle}
                />

                <div className="relative z-10 text-center pt-4">

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        The Future Generations
                    </h1>
                    <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                        A Roadmap of Achievable Breakthroughs in AI-Driven Medical Device Development
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { icon: Clock, text: '2024 - 2075+', color: '#0159A3' },
                            { icon: Brain, text: 'Gen 4-10 (Future)', color: '#0180A5' },
                            { icon: Target, text: 'Focus on Patient Impact', color: '#00AA86' },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg"
                                style={{
                                    ...glassStyle,
                                    border: `1px solid ${item.color}20`,
                                }}
                            >
                                <item.icon className="w-4 h-4" style={{ color: item.color }} />
                                <span className="text-gray-700 text-sm">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ============ GEN 1-3 PRECURSOR - THE FOUNDATION ============ */}
            <div
                className="mb-8 p-6 rounded-2xl relative overflow-hidden"
                style={{
                    ...glassStyleDark,
                    borderColor: 'rgba(100, 116, 139, 0.2)',
                }}
            >
                <div className="flex items-start gap-4">
                    <div
                        className="flex-shrink-0 p-3 rounded-xl"
                        style={{
                            background: 'linear-gradient(135deg, rgba(100, 116, 139, 0.15) 0%, rgba(71, 85, 105, 0.1) 100%)',
                            border: '1px solid rgba(100, 116, 139, 0.2)',
                        }}
                    >
                        <Clock className="w-6 h-6 text-slate-500" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">The Foundation: Generations 1-3 (1990s - 2024)</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Before we look forward, it's important to understand how we got here. The first three generations established the foundation for AI-driven medical device development:
                        </p>
                        <div className="grid md:grid-cols-3 gap-3">
                            <div
                                className="p-3 rounded-lg"
                                style={{
                                    background: 'rgba(100, 116, 139, 0.05)',
                                    border: '1px solid rgba(100, 116, 139, 0.1)',
                                }}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="px-2 py-0.5 rounded text-xs font-bold text-white bg-slate-500">Gen 1</span>
                                    <span className="text-xs text-gray-500">1990s-2000s</span>
                                </div>
                                <h4 className="font-semibold text-gray-700 text-sm">Manual Era</h4>
                                <p className="text-xs text-gray-500">Paper-based QMS, manual calculations, individual expertise-driven design</p>
                            </div>
                            <div
                                className="p-3 rounded-lg"
                                style={{
                                    background: 'rgba(100, 116, 139, 0.05)',
                                    border: '1px solid rgba(100, 116, 139, 0.1)',
                                }}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="px-2 py-0.5 rounded text-xs font-bold text-white bg-slate-500">Gen 2</span>
                                    <span className="text-xs text-gray-500">2000s-2015</span>
                                </div>
                                <h4 className="font-semibold text-gray-700 text-sm">Digital Era</h4>
                                <p className="text-xs text-gray-500">eQMS systems, CAD/CAE tools, basic simulation, electronic records</p>
                            </div>
                            <div
                                className="p-3 rounded-lg"
                                style={{
                                    background: 'rgba(100, 116, 139, 0.05)',
                                    border: '1px solid rgba(100, 116, 139, 0.1)',
                                }}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="px-2 py-0.5 rounded text-xs font-bold text-white bg-slate-500">Gen 3</span>
                                    <span className="text-xs text-gray-500">2015-2024</span>
                                </div>
                                <h4 className="font-semibold text-gray-700 text-sm">Connected Era</h4>
                                <p className="text-xs text-gray-500">Cloud systems, IoT devices, AI-assisted tools, early machine learning</p>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-3 italic">
                            → The roadmap below explores Gen 4-10: the future of AI-driven medical device engineering.
                        </p>
                    </div>
                </div>
            </div>

            {/* ============ ADVANCED TIMELINE GRAPHIC ============ */}
            <div className="mb-12">
                {/* Timeline Container */}
                <div
                    className="relative p-8 rounded-2xl overflow-hidden"
                    style={{
                        ...glassStyleDark,
                    }}
                >
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute top-0 left-0 w-32 h-32 opacity-30"
                            style={{
                                background: 'radial-gradient(circle, rgba(1, 128, 165, 0.2) 0%, transparent 70%)',
                            }}
                        />
                        <div
                            className="absolute bottom-0 right-0 w-40 h-40 opacity-20"
                            style={{
                                background: 'radial-gradient(circle, rgba(0, 170, 134, 0.2) 0%, transparent 70%)',
                            }}
                        />
                    </div>

                    {/* Key Benefits Row */}
                    <div className="relative z-10 mb-10">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Key Benefits</h3>
                        <div className="flex flex-col md:flex-row gap-4">
                            {[
                                { icon: TrendingUp, title: 'Accelerated Innovation', desc: 'From years to months for device development', accent: '#0180A5' },
                                { icon: Users, title: 'Democratized Access', desc: 'Capabilities for companies of all sizes', accent: '#00AA86' },
                                { icon: Heart, title: 'Patient-Centric Design', desc: 'Optimized for individual outcomes', accent: '#0159A3' },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 flex-1 p-3 rounded-xl transition-all hover:bg-white/50"
                                    style={{
                                        background: 'rgba(255,255,255,0.3)',
                                        border: '1px solid rgba(255,255,255,0.5)',
                                    }}
                                >
                                    <div
                                        className="p-2 rounded-lg flex-shrink-0"
                                        style={{
                                            background: `${item.accent}15`,
                                            border: `1px solid ${item.accent}30`,
                                        }}
                                    >
                                        <item.icon className="w-5 h-5" style={{ color: item.accent }} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                                        <p className="text-gray-500 text-xs">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Timeline */}
                    <div className="relative z-10">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Evolution Roadmap</h3>

                        {/* Timeline Track */}
                        <div className="relative">
                            {/* Main Timeline Line */}
                            <div
                                className="absolute top-8 left-0 right-0 h-1 hidden md:block"
                                style={{
                                    background: 'linear-gradient(90deg, #0180A5 0%, #0180A5 30%, #D97706 45%, #D97706 55%, #64748B 70%, #8B5CF6 100%)',
                                    borderRadius: '4px',
                                }}
                            />

                            {/* Metallic shine on timeline */}
                            <div
                                className="absolute top-8 left-0 right-0 h-1 hidden md:block"
                                style={{
                                    background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)',
                                    borderRadius: '4px',
                                }}
                            />

                            {/* Timeline Nodes */}
                            <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-4">
                                {/* Phase II: The "How" */}
                                <div className="flex-1 relative">
                                    {/* Node Marker */}
                                    <div className="flex flex-col items-center md:items-start">
                                        <div
                                            className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-4"
                                            style={{
                                                background: 'linear-gradient(135deg, #0180A5 0%, #0159A3 100%)',
                                                boxShadow: '0 4px 15px rgba(1, 128, 165, 0.4), inset 0 2px 0 rgba(255,255,255,0.3)',
                                            }}
                                        >
                                            <Cog className="w-7 h-7 text-white" />
                                            {/* Pulse ring */}
                                            <div
                                                className="absolute inset-0 rounded-full animate-ping opacity-20"
                                                style={{ background: '#0180A5' }}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="text-center md:text-left">
                                            <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                                                <span
                                                    className="px-2 py-0.5 rounded text-xs font-bold text-white"
                                                    style={{ background: '#0180A5' }}
                                                >
                                                    The "How"
                                                </span>
                                                <span className="text-xs text-gray-500">2027 - 2045</span>
                                            </div>
                                            <h4 className="font-bold text-gray-800 mb-1">Phase II: Autonomous Physics</h4>
                                            <p className="text-xs text-gray-600 mb-3 max-w-xs">
                                                Perfecting HOW we build medical devices with unprecedented precision.
                                            </p>
                                            <div className="flex gap-1.5 justify-center md:justify-start">
                                                {[5, 6, 7].map(gen => (
                                                    <span
                                                        key={gen}
                                                        className="px-2 py-1 rounded text-xs font-medium"
                                                        style={{
                                                            background: 'rgba(1, 128, 165, 0.1)',
                                                            border: '1px solid rgba(1, 128, 165, 0.2)',
                                                            color: '#0180A5',
                                                        }}
                                                    >
                                                        Gen {gen}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Arrow connector - mobile */}
                                <div className="flex justify-center md:hidden">
                                    <ChevronDown className="w-6 h-6 text-gray-300" />
                                </div>

                                {/* The Pivot Point */}
                                <div className="flex-1 relative">
                                    <div className="flex flex-col items-center">
                                        {/* Diamond Node Marker */}
                                        <div
                                            className="relative z-10 w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                                            style={{
                                                background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
                                                boxShadow: '0 4px 15px rgba(217, 119, 6, 0.4), inset 0 2px 0 rgba(255,255,255,0.3)',
                                                transform: 'rotate(0deg)',
                                            }}
                                        >
                                            <Scale className="w-7 h-7 text-white" />
                                        </div>

                                        {/* Content */}
                                        <div className="text-center">
                                            <div className="flex items-center gap-2 justify-center mb-1">
                                                <span
                                                    className="px-2 py-0.5 rounded text-xs font-bold text-white"
                                                    style={{ background: '#D97706' }}
                                                >
                                                    The Pivot Point
                                                </span>
                                                <span className="text-xs text-gray-500">~2040</span>
                                            </div>
                                            <h4 className="font-bold text-gray-800 mb-1">The Ethical Event Horizon</h4>
                                            <p className="text-xs text-gray-600 max-w-xs">
                                                When AI can build almost anything physics allows, the question shifts from "Can we?" to "Should we?"
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Arrow connector - mobile */}
                                <div className="flex justify-center md:hidden">
                                    <ChevronDown className="w-6 h-6 text-gray-300" />
                                </div>

                                {/* Phase III: The "Why" */}
                                <div className="flex-1 relative">
                                    <div className="flex flex-col items-center md:items-end">
                                        {/* Node Marker */}
                                        <div
                                            className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-4"
                                            style={{
                                                background: 'linear-gradient(135deg, #64748B 0%, #475569 100%)',
                                                boxShadow: '0 4px 15px rgba(100, 116, 139, 0.4), inset 0 2px 0 rgba(255,255,255,0.3)',
                                            }}
                                        >
                                            <Fingerprint className="w-7 h-7 text-white" />
                                        </div>

                                        {/* Content */}
                                        <div className="text-center md:text-right">
                                            <div className="flex items-center gap-2 justify-center md:justify-end mb-1">
                                                <span
                                                    className="px-2 py-0.5 rounded text-xs font-bold text-white"
                                                    style={{ background: '#64748B' }}
                                                >
                                                    The "Why"
                                                </span>
                                                <span className="text-xs text-gray-500">2040 - 2075+</span>
                                            </div>
                                            <h4 className="font-bold text-gray-800 mb-1">Phase III: Existential Engineering</h4>
                                            <p className="text-xs text-gray-600 mb-3 max-w-xs ml-auto">
                                                Aligning creation with human values and ensuring equitable benefit.
                                            </p>
                                            <div className="flex gap-1.5 justify-center md:justify-end">
                                                {[8, 9, 10].map(gen => (
                                                    <span
                                                        key={gen}
                                                        className="px-2 py-1 rounded text-xs font-medium"
                                                        style={{
                                                            background: 'rgba(100, 116, 139, 0.1)',
                                                            border: '1px solid rgba(100, 116, 139, 0.2)',
                                                            color: '#64748B',
                                                        }}
                                                    >
                                                        Gen {gen}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Generation Preview Strip */}
                        <div className="mt-8 pt-6 border-t border-gray-200/50">
                            <div className="flex flex-wrap justify-center gap-2">
                                {GENERATIONS.map((gen) => (
                                    <button
                                        key={gen.id}
                                        onClick={() => setExpandedGen(expandedGen === gen.id ? null : gen.id)}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all hover:scale-105"
                                        style={{
                                            background: expandedGen === gen.id ? `${gen.accentColor}20` : 'rgba(255,255,255,0.5)',
                                            border: `1px solid ${expandedGen === gen.id ? gen.accentColor : 'rgba(0,0,0,0.1)'}`,
                                        }}
                                    >
                                        <span
                                            className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                                            style={{ backgroundColor: gen.accentColor }}
                                        >
                                            {gen.id}
                                        </span>
                                        <span className="text-sm text-gray-700 hidden sm:inline">{gen.era}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============ PREDICTION SUBMISSION FORM ============ */}
            <div
                className="mb-12 p-6 rounded-2xl relative overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, rgba(0, 170, 134, 0.1) 0%, rgba(1, 128, 165, 0.08) 100%)',
                    border: '1px solid rgba(0, 170, 134, 0.2)',
                    backdropFilter: 'blur(8px)',
                }}
            >
                {/* Metallic accent corner */}
                <div
                    className="absolute top-0 right-0 w-20 h-20"
                    style={{
                        background: 'linear-gradient(225deg, rgba(200,205,210,0.4) 0%, transparent 70%)',
                    }}
                />
                <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
                    {/* Left side - Icon and description */}
                    <div className="flex items-start gap-4 flex-1">
                        <div
                            className="p-3 rounded-xl flex-shrink-0"
                            style={{
                                background: 'rgba(0, 170, 134, 0.15)',
                                border: '1px solid rgba(0, 170, 134, 0.25)',
                            }}
                        >
                            <Lightbulb className="w-7 h-7 text-[#00AA86]" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Share Your Prediction</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                What do you think the future holds for medical device engineering?
                                Share your predictions about how healthcare and medical technology will transform.
                            </p>
                        </div>
                    </div>

                    {/* Right side - Form */}
                    <div className="w-full md:w-96">
                        {submitStatus === 'success' ? (
                            <div
                                className="p-4 rounded-xl text-center"
                                style={{
                                    background: 'rgba(0, 170, 134, 0.15)',
                                    border: '1px solid rgba(0, 170, 134, 0.3)',
                                }}
                            >
                                <CheckCircle2 className="w-8 h-8 text-[#00AA86] mx-auto mb-2" />
                                <p className="font-semibold text-gray-800">Prediction Submitted!</p>
                                <p className="text-sm text-gray-600">Thank you for sharing your vision of the future.</p>
                                <button
                                    onClick={() => setSubmitStatus('idle')}
                                    className="mt-3 text-sm text-[#0180A5] hover:underline"
                                >
                                    Submit another prediction
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleFormSubmit} className="space-y-3">
                                <div className="grid grid-cols-2 gap-3">
                                    <input
                                        type="text"
                                        placeholder="Name (optional)"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="px-3 py-2 rounded-lg text-sm bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00AA86]/50"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email *"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="px-3 py-2 rounded-lg text-sm bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00AA86]/50"
                                    />
                                </div>
                                <select
                                    value={formData.generation}
                                    onChange={(e) => setFormData({ ...formData, generation: e.target.value })}
                                    className="w-full px-3 py-2 rounded-lg text-sm bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00AA86]/50"
                                >
                                    <option value="Gen 4">Gen 4 - Agentic Era (2024-2027)</option>
                                    <option value="Gen 5">Gen 5 - Artisan Era (2027-2032)</option>
                                    <option value="Gen 6">Gen 6 - Bio-Synthetic Era (2030-2038)</option>
                                    <option value="Gen 7">Gen 7 - Quantum Era (2035-2045)</option>
                                    <option value="Gen 8">Gen 8 - Ethical Era (2040-2050)</option>
                                    <option value="Gen 9">Gen 9 - Atomic Era (2045-2060)</option>
                                    <option value="Gen 10">Gen 10 - Post-Device Era (2055-2075+)</option>
                                    <option value="Beyond">Beyond Gen 10</option>
                                </select>
                                <textarea
                                    placeholder="Your prediction... *"
                                    required
                                    rows={3}
                                    maxLength={2000}
                                    value={formData.prediction}
                                    onChange={(e) => setFormData({ ...formData, prediction: e.target.value })}
                                    className="w-full px-3 py-2 rounded-lg text-sm bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00AA86]/50 resize-none"
                                />
                                {submitStatus === 'error' && errorMessage && (
                                    <p className="text-red-600 text-xs">{errorMessage}</p>
                                )}
                                <button
                                    type="submit"
                                    disabled={submitStatus === 'submitting'}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-white transition-all disabled:opacity-50"
                                    style={{
                                        background: 'linear-gradient(135deg, #00AA86 0%, #0180A5 100%)',
                                        boxShadow: '0 2px 8px rgba(0, 170, 134, 0.3)',
                                    }}
                                >
                                    {submitStatus === 'submitting' ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Submit Prediction
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Generation Cards - Glassmorphic */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <div
                        className="p-2 rounded-lg"
                        style={metallicStyle}
                    >
                        <Binary className="w-6 h-6 text-gray-600" />
                    </div>
                    Generation Roadmap
                </h2>

                {GENERATIONS.map((gen, index) => {
                    const Icon = gen.icon;
                    const isExpanded = expandedGen === gen.id;
                    const achievability = getAchievabilityLabel(gen.achievabilityScore);

                    return (
                        <div key={gen.id} className="relative">
                            {/* Connecting Line - Metallic */}
                            {index < GENERATIONS.length - 1 && (
                                <div
                                    className="absolute left-8 top-full w-0.5 h-6 z-0"
                                    style={{
                                        background: 'linear-gradient(180deg, #C4C7CC 0%, transparent 100%)',
                                    }}
                                />
                            )}

                            <div
                                className="relative rounded-2xl overflow-hidden transition-all duration-300"
                                style={{
                                    ...glassStyleDark,
                                    borderColor: gen.isEthicalPivot ? 'rgba(217, 119, 6, 0.3)' : 'rgba(200, 200, 200, 0.3)',
                                    boxShadow: gen.isEthicalPivot ? '0 4px 20px rgba(217, 119, 6, 0.1)' : '0 2px 10px rgba(0,0,0,0.05)',
                                }}
                            >
                                {/* Metallic accent bar on left */}
                                <div
                                    className="absolute left-0 top-0 bottom-0 w-1"
                                    style={{
                                        background: `linear-gradient(180deg, ${gen.accentColor} 0%, ${gen.accentColor}60 100%)`,
                                    }}
                                />



                                {/* Header */}
                                <button
                                    onClick={() => toggleGeneration(gen.id)}
                                    className="w-full p-6 pl-5 flex items-center gap-4 text-left"
                                >
                                    <div
                                        className="p-4 rounded-xl"
                                        style={{
                                            background: `${gen.accentColor}15`,
                                            border: `1px solid ${gen.accentColor}30`,
                                        }}
                                    >
                                        <Icon
                                            className={`w-7 h-7 ${iconAnimations[gen.id] || ''}`}
                                            style={{ color: gen.accentColor }}
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                                            <span
                                                className="px-3 py-1 rounded-full text-xs font-bold text-white"
                                                style={{ backgroundColor: gen.accentColor }}
                                            >
                                                Gen {gen.id}
                                            </span>
                                            <span
                                                className="px-2 py-0.5 rounded text-xs font-medium"
                                                style={metallicStyle}
                                            >
                                                {gen.era} Era
                                            </span>
                                            <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium text-gray-600 flex items-center gap-1 border border-gray-200">
                                                <Clock className="w-3 h-3" />
                                                {gen.dateRange}
                                            </span>
                                            <span className={`px-2 py-0.5 rounded text-xs font-medium border ${achievability.color}`}>
                                                {achievability.label}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">{gen.title}</h3>
                                        <p className="text-sm text-gray-600 mt-1">{gen.concept}</p>
                                    </div>

                                    <div
                                        className="p-2 rounded-lg transition-colors hover:bg-gray-100"
                                    >
                                        {isExpanded ? (
                                            <ChevronUp className="w-6 h-6 text-gray-400" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-gray-400" />
                                        )}
                                    </div>
                                </button>

                                {/* Expanded Content */}
                                {isExpanded && (
                                    <div className="px-6 pb-6 border-t border-gray-200/50">
                                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                                            {/* Capability */}
                                            <div
                                                className="p-4 rounded-xl"
                                                style={{
                                                    background: 'rgba(255,255,255,0.6)',
                                                    border: '1px solid rgba(0,0,0,0.08)',
                                                }}
                                            >
                                                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                                                    <Sparkles className="w-4 h-4" style={{ color: gen.accentColor }} />
                                                    Core Capability
                                                </h4>
                                                <p className="text-sm text-gray-700 leading-relaxed">{gen.capability}</p>
                                            </div>

                                            {/* Positive Impact */}
                                            <div
                                                className="p-4 rounded-xl"
                                                style={{
                                                    background: 'rgba(0, 170, 134, 0.05)',
                                                    border: '1px solid rgba(0, 170, 134, 0.15)',
                                                }}
                                            >
                                                <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                                                    <TrendingUp className="w-4 h-4 text-[#00AA86]" />
                                                    Positive Impact on Healthcare
                                                </h4>
                                                <ul className="space-y-2">
                                                    {gen.positiveImpact.map((impact, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                            <CheckCircle2 className="w-4 h-4 text-[#00AA86] mt-0.5 flex-shrink-0" />
                                                            {impact}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Real World Examples */}
                                        <div
                                            className="mt-4 p-4 rounded-xl"
                                            style={{
                                                background: 'rgba(1, 128, 165, 0.05)',
                                                border: '1px solid rgba(1, 128, 165, 0.15)',
                                            }}
                                        >
                                            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                                                <Target className="w-4 h-4 text-[#0180A5]" />
                                                Achievable Examples
                                            </h4>
                                            <div className="grid md:grid-cols-2 gap-3">
                                                {gen.realWorldExamples.map((example, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-start gap-2 text-sm text-gray-700 p-2 rounded-lg"
                                                        style={{
                                                            background: 'rgba(255,255,255,0.5)',
                                                        }}
                                                    >
                                                        <Lightbulb className="w-4 h-4 text-[#0180A5] mt-0.5 flex-shrink-0" />
                                                        {example}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Roles & Constraint - with metallic accents */}
                                        <div className="grid md:grid-cols-3 gap-4 mt-4">
                                            <div
                                                className="p-4 rounded-xl relative overflow-hidden"
                                                style={{
                                                    background: 'rgba(1, 128, 165, 0.05)',
                                                    border: '1px solid rgba(1, 128, 165, 0.15)',
                                                }}
                                            >
                                                <h4 className="font-bold text-gray-700 mb-1 text-sm">Engineer's Role</h4>
                                                <p className="text-gray-800 font-medium">{gen.engineerRole}</p>
                                            </div>
                                            <div
                                                className="p-4 rounded-xl relative overflow-hidden"
                                                style={{
                                                    background: 'rgba(99, 102, 241, 0.05)',
                                                    border: '1px solid rgba(99, 102, 241, 0.15)',
                                                }}
                                            >
                                                <h4 className="font-bold text-gray-700 mb-1 text-sm">AI's Role</h4>
                                                <p className="text-gray-800 font-medium">{gen.aiRole}</p>
                                            </div>
                                            <div
                                                className="p-4 rounded-xl relative overflow-hidden"
                                                style={{
                                                    background: 'rgba(217, 119, 6, 0.05)',
                                                    border: '1px solid rgba(217, 119, 6, 0.15)',
                                                }}
                                            >
                                                <h4 className="font-bold text-gray-700 mb-1 text-sm">Key Challenge</h4>
                                                <p className="text-gray-800 font-medium">{gen.constraint}</p>
                                                <p className="text-gray-500 text-xs mt-1">{gen.constraintType}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Summary Table - Glassmorphic */}
            <div
                className="mt-12 rounded-2xl overflow-hidden"
                style={{
                    ...glassStyleDark,
                }}
            >
                <div
                    className="px-6 py-4 relative"
                    style={{
                        background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.95) 100%)',
                    }}
                >
                    {/* Metallic shine effect */}
                    <div
                        className="absolute top-0 left-0 right-0 h-px"
                        style={{
                            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                        }}
                    />
                    <h3 className="text-xl font-bold text-white">Timeline & Achievability Summary</h3>
                    <p className="text-slate-300 text-sm mt-1">Estimated timeframes and focus areas for each generation</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50/80 border-b border-gray-200">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Gen</th>
                                <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Era</th>
                                <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Timeframe</th>
                                <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Critical Technology</th>
                                <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Engineer's Role</th>
                                <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">AI's Role</th>
                                <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Focus</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {GENERATIONS.map((gen) => {
                                const achievability = getAchievabilityLabel(gen.achievabilityScore);
                                return (
                                    <tr
                                        key={gen.id}
                                        className={`hover:bg-gray-50/50 transition-colors ${gen.isEthicalPivot ? 'bg-amber-50/30' : ''}`}
                                    >
                                        <td className="px-4 py-3">
                                            <span
                                                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold"
                                                style={{ backgroundColor: gen.accentColor }}
                                            >
                                                {gen.id}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 font-medium text-gray-800">{gen.era}</td>
                                        <td className="px-4 py-3">
                                            <span className={`px-2 py-1 rounded text-xs font-medium border ${achievability.color}`}>
                                                {gen.dateRange}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span
                                                className="px-2 py-1 rounded text-xs font-semibold border"
                                                style={{
                                                    backgroundColor: `${gen.accentColor}10`,
                                                    borderColor: `${gen.accentColor}30`,
                                                    color: gen.accentColor,
                                                }}
                                            >
                                                {gen.criticalTechnology}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-gray-700 text-sm">{gen.engineerRole}</td>
                                        <td className="px-4 py-3 text-gray-700 text-sm">{gen.aiRole}</td>
                                        <td className="px-4 py-3">
                                            <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600 border border-gray-200">
                                                {gen.constraintType}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Call to Action - Subtle Glassmorphic */}
            <div
                className="mt-12 p-8 rounded-2xl text-center relative overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, rgba(1, 89, 163, 0.08) 0%, rgba(0, 170, 134, 0.06) 100%)',
                    border: '1px solid rgba(1, 89, 163, 0.15)',
                    backdropFilter: 'blur(8px)',
                }}
            >
                {/* Metallic corner accents */}
                <div
                    className="absolute top-0 left-0 w-16 h-16"
                    style={{
                        background: 'linear-gradient(135deg, rgba(200,205,210,0.3) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 w-16 h-16"
                    style={{
                        background: 'linear-gradient(315deg, rgba(200,205,210,0.3) 0%, transparent 70%)',
                    }}
                />

                <div
                    className="inline-flex p-3 rounded-xl mb-4"
                    style={{
                        background: 'rgba(1, 89, 163, 0.1)',
                        border: '1px solid rgba(1, 89, 163, 0.2)',
                    }}
                >
                    <Heart className="w-10 h-10 text-[#0159A3]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Building the Future Together</h3>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Each generation represents not just technological advancement, but tangible improvements in patient outcomes. The journey from Gen 4 to Gen 10 is a path toward a world where <strong className="text-gray-800">medical devices enhance life rather than just sustain it</strong>, where treatment is <strong className="text-gray-800">personalized, accessible, and aligned with human values</strong>.
                </p>
                <p className="text-gray-500 text-sm mt-4">
                    Join us in shaping this future — where engineering excellence meets ethical responsibility.
                </p>
            </div>
        </div>
    );
}
