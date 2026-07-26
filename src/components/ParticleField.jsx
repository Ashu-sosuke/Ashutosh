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

  // Generate particle configurations once on mount
  const particlesData = useMemo(() => {
    const count = 80;
    const data = [];
    const colors = ['#FF6B35', '#2EC4B6', '#3A6EA5']; // Orange, Teal, Muted Blue

    for (let i = 0; i < count; i++) {
      const isCircle = Math.random() > 0.4; // 60% circles, 40% dashes
      
      // Color proportion: 50% orange, 35% teal, 15% blue
      const randColor = Math.random();
      let color = colors[0];
      if (randColor > 0.5 && randColor <= 0.85) {
        color = colors[1];
      } else if (randColor > 0.85) {
        color = colors[2];
      }

      const size = Math.random() * 4 + 2; // Size between 2px and 6px
      const baseOpacity = Math.random() * 0.1 + 0.15; // Base opacity between 0.15 and 0.25
      const baseX = Math.random() * 100; // Viewport width %
      const baseY = Math.random() * 100; // Viewport height %
      const rotation = isCircle ? 0 : Math.random() * 360; // Dash angle rotation
      
      // Idle float (sine wave vertical drift parameters)
      const idleSpeed = Math.random() * 0.0006 + 0.0003; // Multi-second cycle speeds
      const idleOffset = Math.random() * Math.PI * 2;
      const driftRange = Math.random() * 12 + 8; // Idle bobbing range (8px to 20px)

      data.push({
        isCircle,
        color,
        size,
        baseOpacity,
        baseX,
        baseY,
        rotation,
        idleSpeed,
        idleOffset,
        driftRange,
      });
    }
    return data;
  }, []);

  useEffect(() => {
    // Check constraints: disable animations on mobile touch devices or reduced-motion
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isCoarse || prefersReducedMotion) {
      // For mobile or reduced motion, render the static dots without ticking rAF loop
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

        // Convert viewport % coordinates to current screen pixels
        const px = (data.baseX / 100) * width;
        const py = (data.baseY / 100) * height;

        // Compute idle float drift
        const idleY = Math.sin(time * data.idleSpeed + data.idleOffset) * data.driftRange;

        // Particle resting coordinates with idle bobbing
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
          // Falloff factor: 1 at cursor center, 0 at outer proximity bounds
          const factor = 1 - distance / proximityRadius;
          const easedFactor = factor * factor; // Quadratic ease for smoother fade-in

          // Brighten: scale opacity smoothly up to 0.95 maximum
          finalOpacity = data.baseOpacity + (0.95 - data.baseOpacity) * easedFactor;

          // Scale up slightly for very close particles (within 60px)
          if (distance < 60) {
            const scaleFactor = 1 - distance / 60;
            finalScale = 1.0 + scaleFactor * 0.4; // max scale 1.4x
          }

          // Antigravity repulsion (displacement away from cursor)
          const maxDisplacement = 12; // push distance up to 12px
          const displaceDistance = maxDisplacement * easedFactor;

          // Direction vector from cursor center pointing outwards
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

        // Commit styled values directly to the DOM for high performance
        el.style.opacity = finalOpacity;
        el.style.transform = `translate3d(${finalX}px, ${finalY}px, 0) scale(${finalScale}) ${
          data.isCircle ? '' : `rotate(${data.rotation}deg)`
        }`;
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
      {particlesData.map((p, idx) => (
        <div
          key={idx}
          ref={(el) => (particlesRef.current[idx] = el)}
          style={{
            position: 'absolute',
            left: `${p.baseX}vw`,
            top: `${p.baseY}vh`,
            width: p.isCircle ? `${p.size}px` : `${p.size * 1.6}px`, // Dash is longer
            height: p.isCircle ? `${p.size}px` : `${p.size * 0.4}px`, // Dash is thinner
            backgroundColor: p.color,
            borderRadius: p.isCircle ? '50%' : '2px',
            opacity: p.baseOpacity,
            transform: p.isCircle ? 'none' : `rotate(${p.rotation}deg)`,
            transformOrigin: 'center',
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
}
