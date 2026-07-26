import React, { useMemo } from 'react';
import { motion, useTransform } from 'framer-motion';
import { useMousePosition } from '../context/MouseContext';

export default function DotGrid({ count = 30, maxOffset = 20, className = "" }) {
  const { mouseX, mouseY } = useMousePosition();

  // Transform normalized mouse position to translation offsets
  const translateX = useTransform(mouseX, [-1, 1], [-maxOffset, maxOffset]);
  const translateY = useTransform(mouseY, [-1, 1], [-maxOffset, maxOffset]);

  // Generate deterministic grid dots with organic offsets
  const dots = useMemo(() => {
    const list = [];
    const cols = 6;
    for (let i = 0; i < count; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      // Jitter offsets to avoid mechanical alignment, feels hand-made
      const jitterX = (Math.sin(i * 18.5) * 0.5 + 0.5) * 14;
      const jitterY = (Math.cos(i * 32.2) * 0.5 + 0.5) * 14;

      const posX = col * 26 + jitterX;
      const posY = row * 26 + jitterY;

      const size = (i % 3) + 2.5; // Dot sizes between 2.5px and 4.5px
      const color = i % 2.5 === 0 ? '#FF6B35' : '#2EC4B6'; // Mixture of orange and teal dots
      const opacity = ((i % 5) + 2) * 0.08; // Varied opacities from 0.16 to 0.48

      list.push({ id: i, x: posX, y: posY, size, color, opacity });
    }
    return list;
  }, [count]);

  return (
    <motion.div
      style={{ x: translateX, y: translateY }}
      className={`absolute pointer-events-none select-none z-0 ${className}`}
    >
      <svg
        width="220"
        height="220"
        viewBox="0 0 220 220"
        className="overflow-visible"
      >
        {dots.map((dot) => (
          <circle
            key={dot.id}
            cx={dot.x}
            cy={dot.y}
            r={dot.size / 2}
            fill={dot.color}
            opacity={dot.opacity}
          />
        ))}
      </svg>
    </motion.div>
  );
}
