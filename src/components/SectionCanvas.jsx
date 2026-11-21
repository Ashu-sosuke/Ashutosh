import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { useMousePosition } from '../context/MouseContext';

export default function SectionCanvas({
  id,
  className = "",
  snippet = "",
  snippetPosition = "top-right",
  contentClassName = "",
  children
}) {
  const { mouseX, mouseY } = useMousePosition();
  
  // Parallax transform for snippet
  const snippetX = useTransform(mouseX, [-1, 1], [-6, 6]);
  const snippetY = useTransform(mouseY, [-1, 1], [-6, 6]);

  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {/* Ambient Floating Code Snippet */}
      {snippet && (
        <motion.pre
          style={{ x: snippetX, y: snippetY, ...parsePositionStyles(snippetPosition) }}
          className="absolute text-[10px] sm:text-[11px] font-code text-[#9C9388]/30 leading-relaxed pointer-events-none select-none hidden lg:block z-0 text-left font-normal m-16"
        >
          {snippet}
        </motion.pre>
      )}

      {/* Foreground Content */}
      <div className={`relative z-10 ${contentClassName}`}>
        {children}
      </div>
    </section>
  );
}

// Map position strings to absolute positioning styles
function parsePositionStyles(pos) {
  switch (pos) {
    case 'top-left':
      return { top: 0, left: 0 };
    case 'top-right':
      return { top: 0, right: 0 };
    case 'bottom-left':
      return { bottom: 0, left: 0 };
    case 'bottom-right':
      return { bottom: 0, right: 0 };
    default:
      return { top: 0, left: 0 };
  }
}
