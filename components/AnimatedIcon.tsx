'use client';

import React from 'react';
import { motion } from 'framer-motion';

type IconVariant =
    | 'growth'
    | 'target'
    | 'award'
    | 'network'
    | 'database'
    | 'shield'
    | 'compare'
    | 'briefcase'
    | 'sparkles'
    | 'search'
    | 'filter'
    | 'book'
    | 'dollar'
    | 'star'
    | 'building'
    | 'calculator'
    | 'wrench'
    | 'globe'
    | 'future-gen'
    | 'file';

interface AnimatedIconProps {
    variant: IconVariant;
    className?: string;
    size?: number;
}

const AnimatedIcon = ({ variant, className = "", size = 24 }: AnimatedIconProps) => {
    // Shared defs for gradients - only rendered once ideally, but unique ID here prevents collision if multiple exist
    const uniqueId = React.useId();

    // Use currentColor for primary to adapt to text color (white in header, dark in pages)
    // We use opacity variations for depth
    const primaryColor = "currentColor";

    const renderIconContent = () => {
        switch (variant) {
            case 'shield': // Regulations: Holographic Shield
                return (
                    <g className="filter drop-shadow-[0_0_8px_currentColor]">
                        {/* Back Layer - Wireframe */}
                        <motion.path
                            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                            fill={`url(#grad-shield-${uniqueId})`}
                            stroke={primaryColor}
                            strokeWidth="1.5"
                            strokeOpacity="0.3"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.3 }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        />
                        {/* Front Layer - Glowing Edges */}
                        <motion.path
                            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                            fill="none"
                            stroke={primaryColor}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        {/* Core Pulse */}
                        <motion.circle
                            cx="12" cy="12" r="3"
                            fill={primaryColor}
                            fillOpacity="0.5"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: [0, 0.8, 0], scale: [0, 1.2, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        />
                    </g>
                );
            case 'book': // Knowledge Center: Isometric Book/Data
                return (
                    <g>
                        {/* Isometric Data Stack */}
                        <motion.path
                            d="M4 6L12 2L20 6V18L12 22L4 18V6Z" // Simple Hex/Cube base
                            stroke={primaryColor}
                            strokeWidth="2"
                            fill={`url(#grad-blue-${uniqueId})`}
                            fillOpacity="0.1"
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.path
                            d="M12 22V12M12 2V12M20 6L12 12L4 6" // Internal edges
                            stroke={primaryColor}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 0.5 }}
                        />
                        {/* Floating particles */}
                        <motion.circle cx="16" cy="8" r="1.5" fill={primaryColor} animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                    </g>
                );
            case 'calculator': // Tools: Futuristic Interface
                return (
                    <g>
                        <motion.rect
                            x="4" y="2" width="16" height="20" rx="3"
                            stroke={primaryColor}
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5 }}
                        />
                        <motion.path
                            d="M8 8H16M8 12H16M8 16H12"
                            stroke={primaryColor}
                            strokeWidth="2"
                            strokeLinecap="round"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, staggerChildren: 0.2 }}
                        />
                        <motion.circle cx="15" cy="16" r="1.5" fill={primaryColor} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity }} />
                    </g>
                );
            case 'globe': // Regulatory Analysis: Wireframe Globe
                return (
                    <g>
                        <motion.circle
                            cx="12" cy="12" r="10"
                            stroke={primaryColor}
                            strokeWidth="2"
                            fill={`url(#grad-blue-${uniqueId})`}
                            fillOpacity="0.05"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                        />
                        <motion.path
                            d="M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                            stroke={primaryColor}
                            strokeWidth="1.5"
                            fill="none"
                            strokeOpacity="0.7"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            style={{ originX: "12px", originY: "12px" }} // Ensure rotation fits
                        />
                    </g>
                );
            case 'briefcase': // Professional Development: Tech Case
                return (
                    <g>
                        <motion.rect
                            x="2" y="7" width="20" height="14" rx="2"
                            stroke={primaryColor}
                            strokeWidth="2"
                            fill={`url(#grad-purple-${uniqueId})`}
                            fillOpacity="0.1"
                            initial={{ y: 5, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        />
                        <motion.path
                            d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                            stroke={primaryColor}
                            strokeWidth="2"
                            fill="none"
                        />
                        {/* Scan line effect */}
                        <motion.line
                            x1="4" y1="10" x2="20" y2="10"
                            stroke={primaryColor}
                            strokeWidth="1"
                            animate={{ y: [0, 8, 0], opacity: [0, 1, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                    </g>
                );
            case 'sparkles': // AI Tools: Neural Nodes
                return (
                    <g>
                        <motion.path
                            d="M12 4L12 12M12 12L4 16M12 12L20 16" // Connections
                            stroke={primaryColor}
                            strokeWidth="1.5"
                            opacity="0.5"
                        />
                        <motion.circle cx="12" cy="12" r="3" fill={`url(#grad-blue-${uniqueId})`} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                        <motion.circle cx="12" cy="4" r="2" fill={primaryColor} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
                        <motion.circle cx="4" cy="16" r="2" fill={primaryColor} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1.0 }} />
                        <motion.circle cx="20" cy="16" r="2" fill={primaryColor} animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }} />
                    </g>
                );
            case 'future-gen': // Future Generations: DNA / Helix
                return (
                    <g>
                        <motion.path
                            d="M7 4C7 4 10 12 17 20 M17 4C17 4 14 12 7 20"
                            stroke={primaryColor}
                            strokeWidth="2"
                            strokeLinecap="round"
                            initial={{ skewX: -10 }}
                            animate={{ skewX: 10 }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                        />
                        <motion.circle cx="7" cy="4" r="1.5" fill={primaryColor} animate={{ r: [1.5, 2.5, 1.5] }} transition={{ duration: 2, repeat: Infinity }} />
                        <motion.circle cx="17" cy="20" r="1.5" fill={primaryColor} animate={{ r: [1.5, 2.5, 1.5] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                    </g>
                );
            case 'database': // Knowledge Center: Isometric Data Cube
                return (
                    <g>
                        <motion.path
                            d="M12 21C16.9706 21 21 19.2091 21 17V7C21 4.79086 16.9706 3 12 3C7.02944 3 3 4.79086 3 7V17C3 19.2091 7.02944 21 12 21Z"
                            stroke={primaryColor}
                            strokeWidth="2"
                            fill={`url(#grad-shield-${uniqueId})`}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2 }}
                        />
                        <motion.ellipse cx="12" cy="7" rx="9" ry="4" stroke={primaryColor} strokeWidth="2" />
                        <motion.path d="M21 12C21 14.2091 16.9706 16 12 16C7.02944 16 3 14.2091 3 12" stroke={primaryColor} strokeWidth="2" />
                        <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                            <circle cx="12" cy="7" r="2" fill={primaryColor} opacity="0.8" />
                        </motion.g>
                    </g>
                );
            case 'file': // Standards: Stacked Holographic Sheets
                return (
                    <g>
                        <motion.path
                            d="M6 4h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" // Base
                            stroke={primaryColor}
                            strokeWidth="2"
                            fillOpacity="0.1"
                            fill={`url(#grad-blue-${uniqueId})`}
                        />
                        <motion.path
                            d="M14 2L14 8L20 8" // Fold
                            stroke={primaryColor}
                            strokeWidth="2"
                            fill="none"
                        />
                        <motion.path d="M8 12H16" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />
                        <motion.path d="M8 16H14" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />
                    </g>
                );
            // Default Fallback to existing simple paths (updated with glow) if no 3D variant defined yet
            default: // star, building, wrench, etc. fallback
                // Map legacy paths if needed or keep existing logic as fallback
                return (
                    <g>
                        {/* Simple fallback animation for other icons for now */}
                        <motion.path
                            d={getLegacyPath(variant)}
                            stroke={primaryColor}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </g>
                );
        }
    };

    return (
        <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
            >
                <defs>
                    <linearGradient id={`grad-shield-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id={`grad-stroke-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="currentColor" />
                        <stop offset="100%" stopColor="currentColor" />
                    </linearGradient>
                    <radialGradient id={`grad-blue-${uniqueId}`} cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id={`grad-purple-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="currentColor" />
                    </linearGradient>
                </defs>
                {renderIconContent()}
            </svg>
        </div>
    );
};

// Helper for legacy paths
function getLegacyPath(variant: string): string {
    const paths: Record<string, string> = {
        growth: "M23 6L13.5 15.5L8.5 10.5L1 18 M23 6H17 M23 6V12",
        target: "M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2ZM12 6A6 6 0 1 1 6 12A6 6 0 0 1 12 6ZM12 10A2 2 0 1 1 10 12A2 2 0 0 1 12 10Z",
        award: "M12 15C15.866 15 19 11.866 19 8C19 4.134 15.866 1 12 1C8.13401 1 5 4.134 5 8C5 11.866 8.13401 15 12 15Z M8.21 13.89L7 23L12 20L17 23L15.79 13.88",
        network: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
        database: "M1 12C1 14.2091 5.92487 16 12 16C18.0751 16 23 14.2091 23 12M1 12V20C1 22.2091 5.92487 24 12 24C18.0751 24 23 22.2091 23 20V12M1 12C1 9.79086 5.92487 8 12 8C18.0751 8 23 9.79086 23 12M23 4C23 6.20914 18.0751 8 12 8C5.92487 8 1 6.20914 1 4C1 1.79086 5.92487 0 12 0C18.0751 0 23 1.79086 23 4Z",
        compare: "M18 4h3a1 1 0 0 1 1 1v2.717a1 1 0 0 1-1 1h-3M6 20h-3a1 1 0 0 1-1-1v-2.717a1 1 0 0 1 1-1h3M18 20h1a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-1M6 4h-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1M13 8l4-4-4-4M11 16l-4 4 4 4",
        search: "M21 21l-4.35-4.35M19 11a8 8 0 11-16 0 8 8 0 0116 0z",
        filter: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z",
        dollar: "M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
        star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
        building: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2 M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2 M10 6h4 M10 10h4 M10 14h4 M10 18h4",
        wrench: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
    };
    return paths[variant] || "M12 2L2 22h20L12 2z"; // Triangle fallback
}

export default AnimatedIcon;
