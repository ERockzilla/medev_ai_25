'use client';

/**
 * Animated Medev.ai Logo - Enhanced 3D Version
 * Features rotating gear internals, pulsing spoke elements, and modern 3D effects
 */

import { useEffect, useState } from 'react';

interface AnimatedLogoProps {
  size?: number;
  showText?: boolean;
}

export default function AnimatedLogo({ size = 280, showText = true }: AnimatedLogoProps) {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePosition({ x: x * 10, y: y * 10 });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const spokeCount = 16; // More spokes for detailed effect
  const spokes = Array.from({ length: spokeCount }, (_, i) => {
    const angle = (360 / spokeCount) * i;
    return angle;
  });

  return (
    <div className="flex flex-col items-center gap-6" style={{ perspective: '1000px' }}>
      {/* Logo Container with 3D transforms */}
      <div
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: mounted
            ? `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(20px)`
            : 'none',
          transition: 'transform 0.3s ease-out',
          transformStyle: 'preserve-3d',
        }}
      >
        <svg
          className="absolute inset-0"
          viewBox="0 0 200 200"
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <defs>
            {/* Enhanced metallic gradient */}
            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="25%" stopColor="#1e40af" />
              <stop offset="50%" stopColor="#0891b2" />
              <stop offset="75%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>

            {/* 3D Bevel gradient for outer edge - light on top-left */}
            <linearGradient id="bevelLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,1)" />
              <stop offset="40%" stopColor="rgba(255,255,255,0.6)" />
              <stop offset="60%" stopColor="rgba(200,210,220,0.3)" />
              <stop offset="100%" stopColor="rgba(100,120,140,0.2)" />
            </linearGradient>

            {/* 3D Shadow gradient for bottom-right edge */}
            <linearGradient id="bevelShadow" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(50,60,80,0.4)" />
              <stop offset="30%" stopColor="rgba(70,80,100,0.25)" />
              <stop offset="60%" stopColor="rgba(100,110,130,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>

            {/* Inner shadow for depth - makes it look recessed */}
            <radialGradient id="innerShadowDeep" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="rgba(255,255,255,0)" />
              <stop offset="85%" stopColor="rgba(100,120,150,0.08)" />
              <stop offset="95%" stopColor="rgba(60,80,120,0.15)" />
              <stop offset="100%" stopColor="rgba(40,60,100,0.25)" />
            </radialGradient>

            {/* Glossy top highlight - glass-like reflection */}
            <radialGradient id="glossy" cx="35%" cy="25%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
              <stop offset="30%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="60%" stopColor="rgba(255,255,255,0.15)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>

            {/* Secondary highlight for extra shine */}
            <radialGradient id="glossySecondary" cx="70%" cy="75%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>

            {/* Inner blue glow for tech feel */}
            <radialGradient id="innerGlow" cx="50%" cy="50%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.15)" />
              <stop offset="50%" stopColor="rgba(59,130,246,0.05)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0)" />
            </radialGradient>

            {/* Rim light gradient - edge highlight */}
            <linearGradient id="rimLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="50%" stopColor="rgba(200,220,255,0.4)" />
              <stop offset="100%" stopColor="rgba(150,180,220,0.2)" />
            </linearGradient>

            {/* Drop shadow filter */}
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
              <feOffset dx="0" dy="4" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.35" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Soft outer glow filter */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* 3D emboss filter for the main circle */}
            <filter id="emboss3d" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
              <feOffset dx="-3" dy="-3" result="offsetLight" />
              <feOffset in="blur" dx="3" dy="3" result="offsetShadow" />
              <feFlood floodColor="rgba(255,255,255,0.5)" result="lightColor" />
              <feFlood floodColor="rgba(0,20,60,0.3)" result="shadowColor" />
              <feComposite in="lightColor" in2="offsetLight" operator="in" result="lightClip" />
              <feComposite in="shadowColor" in2="offsetShadow" operator="in" result="shadowClip" />
              <feMerge>
                <feMergeNode in="shadowClip" />
                <feMergeNode in="lightClip" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ============ ENHANCED 3D WHITE CIRCLE ============ */}

          {/* Layer 1: Deep ambient shadow - creates floating effect */}
          <ellipse
            cx="100"
            cy="108"
            rx="85"
            ry="40"
            fill="rgba(0,30,80,0.15)"
            style={{ filter: 'blur(15px)' }}
          />

          {/* Layer 2: Main drop shadow */}
          <circle
            cx="100"
            cy="103"
            r="89"
            fill="rgba(30,50,80,0.25)"
            style={{ filter: 'blur(8px)' }}
          />

          {/* Layer 3: Outer glow ring - blue/teal accent */}
          <circle
            cx="100"
            cy="100"
            r="92"
            fill="none"
            stroke="url(#starGradient)"
            strokeWidth="2"
            opacity="0.3"
            style={{ filter: 'blur(3px)' }}
          />

          {/* Layer 4: Base white circle with slight gradient */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="white"
            filter="url(#emboss3d)"
          />

          {/* Layer 5: Beveled edge - light side (top-left) */}
          <circle
            cx="100"
            cy="100"
            r="89"
            fill="none"
            stroke="url(#bevelLight)"
            strokeWidth="3"
          />

          {/* Layer 6: Beveled edge - shadow side (bottom-right) */}
          <circle
            cx="100"
            cy="100"
            r="88"
            fill="none"
            stroke="url(#bevelShadow)"
            strokeWidth="2"
          />

          {/* Layer 7: Inner shadow ring for depth */}
          <circle
            cx="100"
            cy="100"
            r="88"
            fill="url(#innerShadowDeep)"
          />

          {/* Layer 8: Inner blue glow for tech aesthetic */}
          <circle
            cx="100"
            cy="100"
            r="85"
            fill="url(#innerGlow)"
          />

          {/* Layer 9: Primary glossy highlight (top-left) */}
          <ellipse
            cx="75"
            cy="70"
            rx="50"
            ry="40"
            fill="url(#glossy)"
            opacity="0.85"
          />

          {/* Layer 10: Secondary glossy highlight (bottom-right subtle) */}
          <ellipse
            cx="125"
            cy="130"
            rx="30"
            ry="20"
            fill="url(#glossySecondary)"
            opacity="0.5"
          />

          {/* Layer 11: Specular rim highlight - top edge */}
          <path
            d="M 30,80 Q 50,20 100,15 Q 150,20 170,80"
            fill="none"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Layer 12: Outer rim accent line */}
          <circle
            cx="100"
            cy="100"
            r="91"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
          />
        </svg>

        {/* Rotating Outer Gear */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            animation: mounted ? 'spin-slow 20s linear infinite' : 'none',
          }}
        >
          <svg
            viewBox="0 0 200 200"
            style={{ width: '100%', height: '100%' }}
          >
            {/* Outer Spokes with Solid Filled Dots - Different Style */}
            {spokes.map((angle, i) => (
              <g key={i} transform={`rotate(${angle} 100 100)`}>
                {/* No spoke line - just dots */}

                {/* Outer ring glow */}
                <circle
                  cx="100"
                  cy="32"
                  r="10"
                  fill="#0891b2"
                  opacity="0.2"
                  filter="url(#glow)"
                />

                {/* Main outer dot - solid filled */}
                <circle
                  cx="100"
                  cy="32"
                  r="7"
                  fill="#0369a1"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  opacity="0.9"
                  filter="url(#glow)"
                  style={{
                    animation: mounted ? `pulse-dot 3s ease-in-out ${i * 0.15}s infinite` : 'none',
                  }}
                />

                {/* Inner white circle for depth */}
                <circle
                  cx="100"
                  cy="32"
                  r="3"
                  fill="white"
                  opacity="0.9"
                />

                {/* Center highlight */}
                <circle
                  cx="100"
                  cy="32"
                  r="1.5"
                  fill="white"
                  opacity="1"
                  filter="url(#glow)"
                  style={{
                    animation: mounted ? `pulse-dot 3s ease-in-out ${i * 0.15}s infinite` : 'none',
                  }}
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Inner Rotating Gear */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            animation: mounted ? 'spin-reverse 15s linear infinite' : 'none',
          }}
        >
          <svg
            viewBox="0 0 200 200"
            style={{ width: '100%', height: '100%' }}
          >
            {/* Inner Spokes with gradient and animated connecting lines */}
            {Array.from({ length: 12 }, (_, i) => {
              const angle = (360 / 12) * i;
              return (
                <g key={i} transform={`rotate(${angle} 100 100)`}>
                  {/* Main spoke from center to green dot */}
                  <line
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="60"
                    stroke="url(#starGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Animated light blue connecting line from center starfish to green dot */}
                  <line
                    x1="100"
                    y1="90"
                    x2="100"
                    y2="65"
                    stroke="#60a5fa"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.8"
                    style={{
                      animation: mounted ? `pulse-line 2.5s ease-in-out ${i * 0.08}s infinite` : 'none',
                    }}
                  />

                  <circle
                    cx="100"
                    cy="65"
                    r="5"
                    fill="#10b981"
                    filter="url(#glow)"
                  />
                  <circle
                    cx="100"
                    cy="65"
                    r="2"
                    fill="white"
                    opacity="0.9"
                  />
                </g>
              );
            })}
          </svg>
        </div>

        {/* Pulsing Expanding/Contracting Lines */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            animation: mounted ? 'pulse-scale 4s ease-in-out infinite' : 'none',
          }}
        >
          <svg
            viewBox="0 0 200 200"
            style={{ width: '100%', height: '100%' }}
          >
            {Array.from({ length: 8 }, (_, i) => {
              const angle = (360 / 8) * i;
              return (
                <g key={i} transform={`rotate(${angle} 100 100)`}>
                  <line
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="55"
                    stroke="url(#starGradient)"
                    strokeWidth="2.5"
                    strokeDasharray="6,3"
                    opacity="0.7"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="100"
                    cy="55"
                    r="6"
                    fill="#10b981"
                    opacity="0.9"
                    filter="url(#glow)"
                  />
                  <circle
                    cx="100"
                    cy="55"
                    r="2.5"
                    fill="white"
                    opacity="0.9"
                  />
                </g>
              );
            })}
          </svg>
        </div>

        {/* Center Icon - Medical Device Symbol */}
        <div
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg
            viewBox="0 0 200 200"
            style={{ width: '100%', height: '100%' }}
          >
            <defs>
              <radialGradient id="centerGlow" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e40af" />
              </radialGradient>
              <radialGradient id="starGlow" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="30%" stopColor="#60a5fa" />
                <stop offset="60%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e40af" />
              </radialGradient>
              <radialGradient id="innerShadow" cx="50%" cy="50%">
                <stop offset="0%" stopColor="rgba(59,130,246,0.3)" />
                <stop offset="50%" stopColor="rgba(59,130,246,0.1)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0)" />
              </radialGradient>
              <linearGradient id="lightRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>

            {/* Outer glow ring - very subtle */}
            <circle
              cx="100"
              cy="100"
              r="42"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="1"
              opacity="0.15"
              filter="url(#glow)"
            />

            {/* Cool Starfish Design in Center */}
            <g transform="translate(100 100)">
              {/* Animated pulsing glow background */}
              <circle
                cx="0"
                cy="0"
                r="12"
                fill="url(#starGlow)"
                opacity="0.8"
                filter="url(#glow)"
                className={mounted ? 'animate-pulse-glow' : ''}
              />

              {/* Starfish arms - 5 pointed */}
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <g key={i} transform={`rotate(${angle})`}>
                  {/* Main arm */}
                  <path
                    d="M 0,0 L 1,-6 L 2,-7 L 2.5,-8 L 2,-9 L 1,-9.5 L 0,-10 L -1,-9.5 L -2,-9 L -2.5,-8 L -2,-7 L -1,-6 Z"
                    fill="white"
                    opacity="0.95"
                    filter="url(#glow)"
                  />
                  {/* Arm highlight */}
                  <path
                    d="M 0,0 L 0.5,-6 L 1,-8 L 0.5,-9 L 0,-9.5"
                    stroke="#60a5fa"
                    strokeWidth="0.5"
                    fill="none"
                    opacity="0.7"
                  />
                </g>
              ))}

              {/* Center hexagon */}
              <path
                d="M 0,-3 L 2.6,-1.5 L 2.6,1.5 L 0,3 L -2.6,1.5 L -2.6,-1.5 Z"
                fill="url(#starGlow)"
                stroke="white"
                strokeWidth="0.8"
                opacity="0.9"
                filter="url(#glow)"
              />

              {/* Center bright core */}
              <circle
                cx="0"
                cy="0"
                r="2"
                fill="white"
                filter="url(#glow)"
                className={mounted ? 'animate-pulse-glow' : ''}
              />

              {/* Tiny sparkle dots */}
              <circle cx="0" cy="-1" r="0.3" fill="#60a5fa" opacity="0.9" />
              <circle cx="0.9" cy="0.5" r="0.3" fill="#60a5fa" opacity="0.9" />
              <circle cx="-0.9" cy="0.5" r="0.3" fill="#60a5fa" opacity="0.9" />
            </g>
          </svg>
        </div>
      </div>

      {/* Text */}
      {showText && (
        <div className="text-center w-full max-w-md">
          <h1
            className="text-5xl font-bold mb-3"
            style={{
              background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 25%, #0891b2 50%, #14b8a6 75%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em',
            }}
          >
            MEDev.AI
          </h1>
          <p
            className="text-xs font-semibold tracking-wide uppercase"
            style={{
              background: 'linear-gradient(90deg, #475569 0%, #1e40af 50%, #475569 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Actionable Intelligence for Medical Device Innovators
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes spin-slow {
          from { 
            transform: rotate(0deg); 
          }
          to { 
            transform: rotate(360deg); 
          }
        }

        @keyframes spin-reverse {
          from { 
            transform: rotate(0deg); 
          }
          to { 
            transform: rotate(-360deg); 
          }
        }

        @keyframes pulse-dot {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
            filter: brightness(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.6);
            filter: brightness(1.5);
          }
        }

        @keyframes pulse-scale {
          0%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        @keyframes pulse-line {
          0%, 100% {
            stroke-dasharray: 2, 4;
            opacity: 0.4;
            stroke-width: 2;
          }
          50% {
            stroke-dasharray: 4, 2;
            opacity: 1;
            stroke-width: 3.5;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

