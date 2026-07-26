import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Tilt({ children, maxTilt = 6, className = "" }) {
  const ref = useRef(null);

  const x = useMotionValue(0.5); // Range [0, 1] across card width
  const y = useMotionValue(0.5); // Range [0, 1] across card height

  // Eased spring transforms
  const springX = useSpring(x, { stiffness: 90, damping: 22 });
  const springY = useSpring(y, { stiffness: 90, damping: 22 });

  // Map to degrees: invert X bounds so tilting matches the actual cursor side
  const rotateX = useTransform(springY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(springX, [0, 1], [-maxTilt, maxTilt]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hasFinePointer || prefersReducedMotion) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
