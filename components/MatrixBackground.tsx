'use client';

/**
 * Matrix-Style Falling Medical Device Standards Background
 * Light background with subtle emerald regulatory standards
 */

import { useEffect, useRef } from 'react';

interface MatrixBackgroundProps {
  intensity?: 'high' | 'low'; // high for login, low for authenticated pages
}

export default function MatrixBackground({ intensity = 'low' }: MatrixBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check for reduced motion preference or mobile device
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // Skip animation entirely if user prefers reduced motion
    if (prefersReducedMotion) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Reinitialize drops when canvas resizes
      const newColumns = Math.floor(canvas.width / 100);
      if (drops.length !== newColumns) {
        drops.length = 0;
        for (let i = 0; i < newColumns; i++) {
          drops[i] = {
            y: Math.random() * -100,
            xOffset: 0,
          };
        }
      }

      // Update obstacles when canvas resizes
      updateObstacles();
    };

    // Function to update obstacle positions based on current canvas size
    const updateObstacles = () => {
      obstacles.length = 0;

      if (intensity === 'high') {
        // Center logo obstacle (larger radius for the morphing effect)
        obstacles.push({
          x: canvas.width / 2,
          y: canvas.height * 0.25, // Logo position (25% from top)
          radius: 200,
          strength: 150, // How much to deflect
        });

        // Login card obstacle
        obstacles.push({
          x: canvas.width / 2,
          y: canvas.height * 0.6, // Card position
          radius: 250,
          strength: 180,
        });
      }
    };

    // Medical device standards and regulatory terms
    const standards = [
      'ISO 13485', 'FDA QMSR', 'ISO 14971', 'IEC 62304', 'IEC 62366-1', 'ISO 10993', 'ISO 15223', 'ISO 20417', 'EN 1041', 'IEC 60601-1',
      'IEC 60601-1-2', 'IEC 60601-2-22', 'ANSI AAMI ES60601-1', 'CAN CSA C22.2 60601-1', 'IEC 60825-1',
      'ANSI Z136.3', 'ISO 11135', 'ISO 11137', 'ISO 11607', 'ISO 17665', 'ISO 11737', 'ASTM D4169', 'ASTM F2052',
      'EN 556', 'ISO 14155', 'AAMI TIR45', 'EU MDR', 'IVDR', 'UKCA', 'Health Canada', 'TGA', 'PMDA', 'NMPA',
      'ISO IEC 27001', 'ISO IEC 27002', 'ISO IEC 27005', 'ISO IEC 27017', 'ISO IEC 27018', 'ISO IEC 27701'
    ];

    const fontSize = 14;

    // Initialize obstacles and drops arrays
    const obstacles: Array<{ x: number; y: number; radius: number; strength: number }> = [];
    const drops: Array<{ y: number; xOffset: number }> = [];

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let frameCount = 0;

    // Function to calculate deflection based on obstacles
    const getDeflection = (x: number, y: number): number => {
      let totalDeflection = 0;

      for (const obstacle of obstacles) {
        const dx = x - obstacle.x;
        const dy = y - obstacle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < obstacle.radius) {
          // Calculate deflection strength (stronger closer to center)
          const deflectionStrength = (1 - distance / obstacle.radius) * obstacle.strength;
          // Deflect horizontally based on which side of obstacle
          totalDeflection += (dx / distance) * deflectionStrength;
        }
      }

      return totalDeflection;
    };

    // Intensity multipliers
    const isHighIntensity = intensity === 'high';
    const baseOpacity = isHighIntensity ? 0.7 : 0.2; // Much darker for login, subtle for logged in
    const highlightOpacity = isHighIntensity ? 0.5 : 0.15;
    const flashOpacity = isHighIntensity ? 0.6 : 0.2;

    const draw = () => {
      // Light background with slight transparency for trail effect
      ctx.fillStyle = 'rgba(249, 250, 251, 0.08)'; // gray-50 with low opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text style
      ctx.font = `${fontSize}px "SF Mono", Monaco, "Cascadia Code", monospace`;

      // Draw characters with morphing effect
      const currentColumns = Math.floor(canvas.width / 100);
      for (let i = 0; i < Math.min(drops.length, currentColumns); i++) {
        // Random standard
        const text = standards[Math.floor(Math.random() * standards.length)];

        // Calculate base positions
        const baseXPos = i * 100;
        const yPos = drops[i].y * 24;

        // Apply deflection based on obstacles
        const deflection = getDeflection(baseXPos, yPos);
        drops[i].xOffset = deflection;

        // Final position with morphing
        const xPos = baseXPos + drops[i].xOffset;

        // Calculate opacity based on position and intensity
        let opacity = Math.min(baseOpacity, (canvas.height - yPos) / canvas.height * baseOpacity);

        // For low intensity (logged in), add vignette effect - darker on edges
        if (!isHighIntensity) {
          const distanceFromCenter = Math.abs(xPos - canvas.width / 2) / (canvas.width / 2);
          const edgeMultiplier = 1 + (distanceFromCenter * 2); // Up to 3x darker at edges
          opacity = Math.min(0.4, opacity * edgeMultiplier);
        }

        // Fade out text that's too deflected (near obstacles)
        if (Math.abs(deflection) > 50) {
          opacity *= Math.max(0.3, 1 - Math.abs(deflection) / 150);
        }

        // Leading text
        if (yPos > 0) {
          ctx.fillStyle = `rgba(6, 95, 70, ${opacity})`; // Darker emerald green
          ctx.fillText(text, xPos, yPos);
        }

        // Occasionally add a darker highlight
        if (Math.random() > 0.98) {
          ctx.fillStyle = `rgba(4, 60, 45, ${highlightOpacity})`; // Much darker emerald
          ctx.fillText(text, xPos, yPos - 24);
        }

        // Move the drop down
        drops[i].y++;

        // Reset drop to top when it reaches bottom
        if (yPos > canvas.height && Math.random() > 0.975) {
          drops[i] = {
            y: 0,
            xOffset: 0,
          };
        }
      }

      // Draw some random flashes occasionally
      frameCount++;
      if (frameCount % 3 === 0 && Math.random() > 0.95) {
        const currentColumns = Math.floor(canvas.width / 100);
        const flashX = Math.floor(Math.random() * currentColumns) * 100;
        const flashY = Math.floor(Math.random() * (canvas.height / 24)) * 24;
        ctx.fillStyle = `rgba(6, 95, 70, ${flashOpacity})`;
        ctx.fillText(standards[Math.floor(Math.random() * standards.length)], flashX, flashY);
      }
    };

    // Animation loop - slower on mobile for better battery life
    const frameRate = isMobile ? 160 : 80; // ~6 FPS on mobile, ~12.5 FPS on desktop
    const interval = setInterval(draw, frameRate);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
      backgroundColor: '#f9fafb', // gray-50
    }}>
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />

      {/* Center fade overlay for login page */}
      {intensity === 'high' && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(249, 250, 251, 0.85) 0%, rgba(249, 250, 251, 0.5) 30%, rgba(249, 250, 251, 0) 60%)',
          pointerEvents: 'none',
        }} />
      )}
    </div>
  );
}
