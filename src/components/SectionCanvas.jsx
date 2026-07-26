import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import orangeSplatter from '../assets/orange-splatter.png';
import { useMousePosition } from '../context/MouseContext';

export default function SectionCanvas({
  id,
  className = "",
  splashPosition = "bottom-left",
  splashHueShift = 0, // In degrees (e.g. 0 for orange, 150 for teal, 200 for blue)
  splashOpacity = 0.15,
  dotCount = 18,
  dotPosition = "top-right",
  snippet = "",
  snippetPosition = "top-right",
  contentClassName = "",
  children
}) {
  const { mouseX, mouseY } = useMousePosition();
  
  // Parallax transform for snippet
  const snippetX = useTransform(mouseX, [-1, 1], [-6, 6]);
  const snippetY = useTransform(mouseY, [-1, 1], [-6, 6]);

  // Determine absolute classes based on position prop
  const getPositionClass = (pos) => {
    switch (pos) {
      case 'top-left':
        return 'top-0 left-0 origin-top-left';
      case 'top-right':
        return 'top-0 right-0 origin-top-right';
      case 'bottom-left':
        return 'bottom-0 left-0 origin-bottom-left';
      case 'bottom-right':
        return 'bottom-0 right-0 origin-bottom-right';
      default:
        return 'top-0 left-0';
    }
  };

  const splashClass = getPositionClass(splashPosition);
  const dotClass = getPositionClass(dotPosition);
  const snippetClass = getPositionClass(snippetPosition);

  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {/* 1. GPU Hue-Drift Paint Splatter Layer */}
      <div
        className={`absolute w-[600px] h-[600px] pointer-events-none select-none z-0 mix-blend-screen`}
        style={{
          ...parsePositionStyles(splashPosition),
          backgroundImage: `url(${orangeSplatter})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          opacity: splashOpacity,
          filter: `hue-rotate(${splashHueShift}deg) contrast(1.1)`,
        }}
      />


      {/* 3. Ambient Floating Code Snippet */}
      {snippet && (
        <motion.pre
          style={{ x: snippetX, y: snippetY, ...parsePositionStyles(snippetPosition) }}
          className="absolute text-[10px] sm:text-[11px] font-code text-[#9C9388]/30 leading-relaxed pointer-events-none select-none hidden lg:block z-0 text-left font-normal m-16"
        >
          {snippet}
        </motion.pre>
      )}

      {/* 4. Foreground Content */}
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
