'use client';

/**
 * Audio Visualizer Component
 * Animated waveform logo that updates in real-time
 */

import React, { useEffect, useRef, useState } from 'react';

interface AudioVisualizerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ size = 'md', className = '' }) => {
  const [dataPoints, setDataPoints] = useState<number[]>(Array(40).fill(50));
  const animationFrameRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const sizeConfig = {
    sm: { width: 32, height: 32 },
    md: { width: 36, height: 36 },
    lg: { width: 48, height: 48 }
  };

  const config = sizeConfig[size];

  const animate = () => {
    setDataPoints(prevPoints => {
      const newPoints = [...prevPoints];
      
      // Shift all points left
      newPoints.shift();
      
      // Generate new data point with organic variation
      const lastPoint = newPoints[newPoints.length - 1];
      const trend = (Math.random() - 0.5) * 15; // Random walk
      const noise = (Math.random() - 0.5) * 10; // Additional noise
      const wave = Math.sin(Date.now() / 1000) * 5; // Slow wave
      
      let newValue = lastPoint + trend + noise + wave;
      
      // Keep within bounds with soft limits
      if (newValue < 20) newValue = 20 + Math.random() * 10;
      if (newValue > 80) newValue = 80 - Math.random() * 10;
      
      newPoints.push(newValue);
      
      return newPoints;
    });
    
    // Continue animation
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const drawChart = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw line
    ctx.beginPath();
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    const xStep = canvas.width / (dataPoints.length - 1);
    
    dataPoints.forEach((point, index) => {
      const x = index * xStep;
      const y = canvas.height - (point / 100) * canvas.height;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    ctx.stroke();
    
    // Draw gradient fill
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.05)');
    
    ctx.fillStyle = gradient;
    ctx.fill();
  };

  useEffect(() => {
    // Start animation
    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Draw chart whenever data changes
    drawChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataPoints]);

  return (
    <canvas
      ref={canvasRef}
      width={config.width}
      height={config.height}
      className={`${className}`}
      style={{
        width: `${config.width}px`,
        height: `${config.height}px`,
        filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.4))'
      }}
    />
  );
};

export default AudioVisualizer;

