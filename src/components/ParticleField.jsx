import React, { useEffect, useRef, useMemo } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { useMousePosition } from '../context/MouseContext';

export default function ParticleField() {
  const { clientX, clientY } = useMousePosition();
  const { scrollY } = useScroll();
  const containerRef = useRef(null);
  const particlesRef = useRef([]);

  // Create a scroll-based dimming opacity: 1.0 at top of page, fading to 0.45 when scrolling past 800px
  const dimOpacity = useTransform(scrollY, [200, 800], [1.0, 0.45]);

  // Generate particle configurations once on mount using jittered grid distribution
  const particlesData = useMemo(() => {
    // Performance check: fallback to lower count on lower-end devices
    const isLowEnd = typeof navigator !== 'undefined' && 
      navigator.hardwareConcurrency && 
      navigator.hardwareConcurrency < 4;

    const cols = isLowEnd ? 10 : 16;
    const rows = isLowEnd ? 8 : 10;
    const colors = ['#FF6B35', '#2EC4B6', '#3A6EA5']; // Orange, Teal, Muted Blue

    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;
    const data = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Shape mix: 55% small dots, 30% short dashes, 15% 4-point sparkle stars
        const randShape = Math.random();
        let shape = 'dot';
        if (randShape > 0.55 && randShape <= 0.85) {
          shape = 'dash';
        } else if (randShape > 0.85) {
          shape = 'star';
        }

        // Color proportion: 50% orange, 35% teal, 15% blue
        const randColor = Math.random();
        let color = colors[0];
        if (randColor > 0.5 && randColor <= 0.85) {
          color = colors[1];
        } else if (randColor > 0.85) {
          color = colors[2];
        }

        // Size configuration by type
        let size;
        if (shape === 'dot') {
          size = Math.random() * 2 + 2; // 2-4px
        } else if (shape === 'dash') {
          size = Math.random() * 3 + 3; // 3-6px
        } else {
          size = Math.random() * 4 + 6; // 6-10px
        }

        // Density balance: low base opacity (15% to 20%)
        const baseOpacity = Math.random() * 0.05 + 0.15;

        // Jittered grid placement: random offset within cell boundaries
        const baseX = c * cellWidth + Math.random() * (cellWidth * 0.8) + (cellWidth * 0.1);
        const baseY = r * cellHeight + Math.random() * (cellHeight * 0.8) + (cellHeight * 0.1);

        const baseRotation = Math.random() * 360;
        // Continuous slow rotation speed for stars (20-30s per rotation)
        const rotationSpeed = (Math.random() * 0.015 + 0.01) * (Math.random() > 0.5 ? 1 : -1);

        // Idle vertical float drift parameters
        const idleSpeed = Math.random() * 0.0006 + 0.0003;
        const idleOffset = Math.random() * Math.PI * 2;
        const driftRange = Math.random() * 12 + 8; // Bobbing range (8px to 20px)

        data.push({
          shape,
          color,
          size,
          baseOpacity,
          baseX,
          baseY,
          baseRotation,
          rotationSpeed,
          idleSpeed,
          idleOffset,
          driftRange,
        });
      }
    }
    return data;
  }, []);

  useEffect(() => {
    // Check constraints: disable animations on mobile touch devices or reduced-motion
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isCoarse || prefersReducedMotion) {
      return;
    }

    let animationFrameId;

    const tick = (time) => {
      const mx = clientX.get();
      const my = clientY.get();
      const dim = dimOpacity.get();

      const width = window.innerWidth;
      const height = window.innerHeight;
      const proximityRadius = 180; // Cursor glow distance range (150-200px)

      particlesRef.current.forEach((el, idx) => {
        if (!el) return;
        const data = particlesData[idx];
        if (!data) return;

        // Convert percentage coordinates to current screen pixels
        const px = (data.baseX / 100) * width;
        const py = (data.baseY / 100) * height;

        // Compute vertical idle float
        const idleY = Math.sin(time * data.idleSpeed + data.idleOffset) * data.driftRange;

        // Resting position coordinates
        const rx = px;
        const ry = py + idleY;

        // Calculate distance from cursor to particle
        const dx = rx - mx;
        const dy = ry - my;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let finalOpacity = data.baseOpacity;
        let finalScale = 1.0;
        let finalX = 0;
        let finalY = idleY;

        if (distance < proximityRadius) {
          // Falloff: 1 at cursor center, 0 at bounds
          const factor = 1 - distance / proximityRadius;
          const easedFactor = factor * factor; // Quadratic ease

          // Brighten: scale opacity smoothly up to 0.95 maximum
          finalOpacity = data.baseOpacity + (0.95 - data.baseOpacity) * easedFactor;

          // Scale up slightly for very close particles (within 60px)
          if (distance < 60) {
            const scaleFactor = 1 - distance / 60;
            finalScale = 1.0 + scaleFactor * 0.45; // max scale 1.45x
          }

          // Repulsion displacement (push away from cursor)
          const maxDisplacement = 12; // push distance up to 12px
          const displaceDistance = maxDisplacement * easedFactor;

          // Direction vector from cursor pointing outwards
          let dirX = dx;
          let dirY = dy;
          if (distance > 0.1) {
            dirX /= distance;
            dirY /= distance;
          } else {
            dirX = 1;
            dirY = 0;
          }

          const repelX = dirX * displaceDistance;
          const repelY = dirY * displaceDistance;

          finalX = repelX;
          finalY = idleY + repelY;
        }

        // Apply scroll-based dimming modifier
        finalOpacity *= dim;

        // Formulate transform string
        let transformStr = `translate3d(${finalX}px, ${finalY}px, 0) scale(${finalScale})`;

        if (data.shape === 'star') {
          // Slow continuous rotation over time
          const starAngle = data.baseRotation + time * data.rotationSpeed;
          transformStr += ` rotate(${starAngle}deg)`;
        } else if (data.shape === 'dash') {
          transformStr += ` rotate(${data.baseRotation}deg)`;
        }

        // Commit styled values directly to the DOM for ultimate performance
        el.style.opacity = finalOpacity;
        el.style.transform = transformStr;
      });

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [clientX, clientY, dimOpacity, particlesData]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden"
    >
      {particlesData.map((p, idx) => {
        if (p.shape === 'star') {
          return (
            <div
              key={idx}
              ref={(el) => (particlesRef.current[idx] = el)}
              style={{
                position: 'absolute',
                left: `${p.baseX}vw`,
                top: `${p.baseY}vh`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                color: p.color,
                opacity: p.baseOpacity,
                transformOrigin: 'center',
                willChange: 'transform, opacity',
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
              </svg>
            </div>
          );
        } else {
          return (
            <div
              key={idx}
              ref={(el) => (particlesRef.current[idx] = el)}
              style={{
                position: 'absolute',
                left: `${p.baseX}vw`,
                top: `${p.baseY}vh`,
                width: p.shape === 'dot' ? `${p.size}px` : `${p.size * 1.6}px`, // Dash is longer
                height: p.shape === 'dot' ? `${p.size}px` : `${p.size * 0.4}px`, // Dash is thinner
                backgroundColor: p.color,
                borderRadius: p.shape === 'dot' ? '50%' : '2px',
                opacity: p.baseOpacity,
                transform: p.shape === 'dot' ? 'none' : `rotate(${p.baseRotation}deg)`,
                transformOrigin: 'center',
                willChange: 'transform, opacity',
              }}
            />
          );
        }
      })}
    </div>
  );
}
