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
            
            {/* Glossy overlay gradient */}
            <radialGradient id="glossy" cx="35%" cy="35%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            
            {/* Inner glow */}
            <radialGradient id="innerGlow" cx="50%" cy="50%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.4)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0)" />
            </radialGradient>
            
            <filter id="shadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
              <feOffset dx="0" dy="2" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* White Circle Background - Main container with glow border */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="white"
            style={{
              filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1)) drop-shadow(0 0 20px rgba(59,130,246,0.3)) drop-shadow(0 0 40px rgba(16,185,129,0.2))',
            }}
          />
          
          {/* Inner shadow for depth */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="url(#innerGlow)"
          />
          
          {/* Glossy highlight overlay */}
          <ellipse
            cx="80"
            cy="80"
            rx="55"
            ry="45"
            fill="url(#glossy)"
            opacity="0.6"
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

