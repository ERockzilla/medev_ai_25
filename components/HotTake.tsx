'use client';

import { Flame, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export interface HotTakeProps {
    /** The main hot take commentary - confident, mission-focused insight */
    take: string;
    /** Optional context or background for your perspective */
    context?: string;
    /** Optional practical tips that come from real-world experience */
    realWorldTips?: string[];
    /** Variant style - 'standard' for orange, 'regulation' for green */
    variant?: 'standard' | 'regulation';
}

/**
 * HotTake Component
 * 
 * Mission-focused commentary section - confident, collaborative, and genuinely helpful
 * for fellow professionals working to bring safe, effective medical devices to patients faster.
 * 
 * Usage in page.tsx files:
 * hotTake={{
 *   take: "Your main insight here...",
 *   context: "Optional background context...",
 *   realWorldTips: ["Tip 1", "Tip 2", "Tip 3"]
 * }}
 */
export default function HotTake({ take, context, realWorldTips, variant = 'standard' }: HotTakeProps) {
    const [isExpanded, setIsExpanded] = useState(true);

    // Placeholder content when no take is provided
    const placeholderTake = `🔧 Insight coming soon...

Here's what we know: regulatory compliance and international standards conformance aren't obstacles—they're the foundation that lets us build devices people can trust with their health and their lives.

The real opportunity? When we collaborate across disciplines—sharing knowledge about laser and light-based technologies, software validation, risk management, and clinical evidence—we accelerate everyone's ability to bring better solutions to patients who need them.

This section will feature practical insights on implementing this standard effectively. Because faster submissions, better safety protocols, and stronger clinical outcomes aren't competing goals—they reinforce each other when we get the fundamentals right.

Together, we can navigate these requirements and focus on what matters: developing medical devices that make a real difference.`;

    const displayTake = take || placeholderTake;

    const colorScheme = variant === 'regulation'
        ? {
            bg: 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50',
            border: 'border-emerald-300',
            accent: 'bg-gradient-to-r from-emerald-500 to-teal-500',
            icon: 'text-emerald-600',
            title: 'text-emerald-900',
            tipBg: 'bg-emerald-100/60',
            tipBorder: 'border-emerald-200',
            tipIcon: 'text-emerald-600'
        }
        : {
            bg: 'bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50',
            border: 'border-orange-300',
            accent: 'bg-gradient-to-r from-orange-500 to-amber-500',
            icon: 'text-orange-600',
            title: 'text-orange-900',
            tipBg: 'bg-orange-100/60',
            tipBorder: 'border-orange-200',
            tipIcon: 'text-orange-600'
        };

    return (
        <div className={`${colorScheme.bg} border-2 ${colorScheme.border} rounded-xl p-0 mb-8 overflow-hidden shadow-lg`}>
            {/* Header bar with flame accent */}
            <div className={`${colorScheme.accent} h-1`} />

            <div className="p-8">
                {/* Title with collapse toggle */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full flex items-center justify-between mb-6 group"
                >
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${colorScheme.tipBg}`}>
                            <Flame className={`w-6 h-6 ${colorScheme.icon}`} />
                        </div>
                        <h2 className={`text-2xl font-bold ${colorScheme.title}`}>
                            The Focal Point
                        </h2>
                    </div>
                    <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                </button>

                {isExpanded && (
                    <div className="space-y-6">
                        {/* Context if provided */}
                        {context && (
                            <div className="flex items-start gap-3 text-gray-600 italic">
                                <Quote className="w-5 h-5 flex-shrink-0 mt-1 text-gray-400" />
                                <p className="text-sm leading-relaxed">{context}</p>
                            </div>
                        )}

                        {/* Main hot take */}
                        <div className="relative">
                            <div className="prose prose-gray max-w-none">
                                <p className="text-gray-800 leading-relaxed text-lg whitespace-pre-line">
                                    {displayTake}
                                </p>
                            </div>
                        </div>

                        {/* Real-world tips if provided */}
                        {realWorldTips && realWorldTips.length > 0 && (
                            <div className={`mt-6 ${colorScheme.tipBg} border ${colorScheme.tipBorder} rounded-lg p-5`}>
                                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="text-lg">🔑</span> Key Takeaways
                                </h3>
                                <ul className="space-y-2">
                                    {realWorldTips.map((tip, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                                            <span className={`${colorScheme.tipIcon} font-bold`}>→</span>
                                            <span>{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Signature */}
                        <div className="pt-4 border-t border-gray-200/50 flex items-center justify-between">
                            <p className="text-sm text-gray-500 italic">
                                — ER | medev.ai
                            </p>
                            <p className="text-xs text-gray-400">
                                Building better devices, together.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
