import React, { useEffect, useRef, useState } from 'react';

interface SilkProps {
  speed?: number; // Animation speed multiplier
  scale?: number; // Size/amplitude scale
  color?: string; // Primary silk color (e.g. hex #17100f)
  noiseIntensity?: number; // Wave turbulence/complexity
  rotation?: number; // Overall canvas rotation angle in degrees
  className?: string; // Additional Tailwind styling classes
}

export const Silk: React.FC<SilkProps> = ({
  speed = 9.9,
  scale = 1,
  color = '#17100f',
  noiseIntensity = 0.7,
  rotation = 0,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  // Use ResizeObserver to measure the parent container dynamically
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const { width, height } = entries[0].contentRect;
      setDimensions({
        width: Math.max(width, 100),
        height: Math.max(height, 100),
      });
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Update canvas resolution when dimensions or devicePixelRatio change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    canvas.style.width = `${dimensions.width}px`;
    canvas.style.height = `${dimensions.height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
  }, [dimensions]);

  // Main animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Helper to generate a multi-frequency organic wave
    const getWaveY = (
      x: number,
      t: number,
      baseY: number,
      amplitude: number,
      frequency: number,
      phaseOffset: number
    ) => {
      // Combination of three sine waves for organic fluid motion (multi-harmonic noise)
      const wave1 = Math.sin(x * 0.0015 * frequency * scale + t + phaseOffset);
      const wave2 = Math.cos(x * 0.003 * frequency * scale - t * 0.7 + phaseOffset * 1.5) * 0.5;
      const wave3 = Math.sin(x * 0.0008 * frequency * scale + t * 1.3 + phaseOffset * 2.2) * 0.35;
      
      const totalNoise = (wave1 + wave2 + wave3) / 1.85;
      return baseY + totalNoise * amplitude * scale * noiseIntensity;
    };

    // Helper to generate ribbon width variance
    const getRibbonWidth = (x: number, t: number, baseWidth: number, phaseOffset: number) => {
      return (
        baseWidth +
        Math.sin(x * 0.001 * scale - t * 0.5 + phaseOffset) * baseWidth * 0.4
      );
    };

    const render = () => {
      // Adjust time accumulation based on the speed prop
      time += (speed * 0.0015);

      const w = dimensions.width;
      const h = dimensions.height;

      // Clear the canvas with a very soft alpha clear to leave subtle elegant motion trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.07)';
      ctx.clearRect(0, 0, w, h);

      ctx.save();
      
      // Center and rotate the viewport if a rotation angle is specified
      if (rotation !== 0) {
        ctx.translate(w / 2, h / 2);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.translate(-w / 2, -h / 2);
      }

      // Define 4 distinct luxury silk ribbons with varying coordinates & depths
      const ribbons = [
        {
          baseY: h * 0.35,
          amplitude: h * 0.18,
          frequency: 1.0,
          phaseOffset: 0,
          baseWidth: 32 * scale,
          alpha: 0.12,
          goldHighlight: true, // Blend with brand's gold
        },
        {
          baseY: h * 0.5,
          amplitude: h * 0.22,
          frequency: 0.8,
          phaseOffset: Math.PI / 3,
          baseWidth: 48 * scale,
          alpha: 0.15,
          goldHighlight: false,
        },
        {
          baseY: h * 0.65,
          amplitude: h * 0.15,
          frequency: 1.2,
          phaseOffset: (Math.PI * 2) / 3,
          baseWidth: 24 * scale,
          alpha: 0.1,
          goldHighlight: true,
        },
        {
          baseY: h * 0.45,
          amplitude: h * 0.25,
          frequency: 0.6,
          phaseOffset: Math.PI,
          baseWidth: 60 * scale,
          alpha: 0.08,
          goldHighlight: false,
        },
      ];

      // Draw each silk ribbon
      ribbons.forEach((ribbon) => {
        // Draw the main satin/silk body of the ribbon made of multi-layered fine threads
        const steps = w / 4; // Horizontal draw resolution
        const threadCount = 14; // Number of parallel flowing fibers

        for (let i = 0; i < threadCount; i++) {
          // Normalize fiber position from -1 to 1 across the ribbon width
          const tFactor = (i - (threadCount - 1) / 2) / ((threadCount - 1) / 2 || 1);
          
          ctx.beginPath();
          
          // Outer fibers fade out, center fibers are more intense
          const fiberAlpha = ribbon.alpha * (1 - Math.abs(tFactor) * 0.65);
          
          // Determine thread color
          let strokeColor = color;
          if (ribbon.goldHighlight && i % 3 === 0) {
            // Infuse premium gold highlights (#C8A261) to elevate the travertine theme
            strokeColor = '#C8A261';
          }

          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = 1.25;
          ctx.globalAlpha = fiberAlpha;

          // For rotation safety, draw slightly beyond canvas boundaries
          const startX = -100;
          const endX = w + 100;

          for (let step = 0; step <= steps; step++) {
            const x = startX + (step / steps) * (endX - startX);
            const yCenter = getWaveY(
              x,
              time,
              ribbon.baseY,
              ribbon.amplitude,
              ribbon.frequency,
              ribbon.phaseOffset
            );
            const ribbonWidth = getRibbonWidth(x, time, ribbon.baseWidth, ribbon.phaseOffset);
            const y = yCenter + tFactor * ribbonWidth;

            if (step === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }
      });

      ctx.restore();
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions, speed, scale, color, noiseIntensity, rotation]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full min-h-[150px] relative overflow-hidden bg-transparent select-none pointer-events-none ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full bg-transparent"
        style={{ mixBlendMode: 'normal' }}
      />
    </div>
  );
};

export default Silk;
