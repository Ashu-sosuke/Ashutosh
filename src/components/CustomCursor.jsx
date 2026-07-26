import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../context/MouseContext';

export default function CustomCursor() {
  const { clientX, clientY, smoothClientX, smoothClientY, hoverState, setHoverState } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (!mediaQuery.matches || motionQuery.matches) {
      return;
    }

    setIsVisible(true);
    document.documentElement.classList.add('cursor-none');
    document.body.classList.add('cursor-none');

    // Global listener to dynamically detect hovered interactive elements or images
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const interactiveEl = target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer');
      
      if (interactiveEl) {
        if (interactiveEl.classList.contains('projects-featured-image') || target.closest('.projects-featured-image')) {
          setHoverState('image');
        } else {
          setHoverState('interactive');
        }
      } else {
        setHoverState(null);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.documentElement.classList.remove('cursor-none');
      document.body.classList.remove('cursor-none');
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [setHoverState]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none select-none">
      {/* Trailing Outer Ring (Teal) */}
      <motion.div
        style={{
          x: smoothClientX,
          y: smoothClientY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hoverState === 'interactive' ? 44 : hoverState === 'image' ? 76 : 28,
          height: hoverState === 'interactive' ? 44 : hoverState === 'image' ? 36 : 28,
          borderRadius: hoverState === 'image' ? '12px' : '9999px',
          borderColor: hoverState === 'interactive' ? '#FF6B35' : '#2EC4B6',
          backgroundColor: hoverState === 'image' ? 'rgba(46, 196, 182, 0.15)' : 'rgba(46, 196, 182, 0)',
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 24, mass: 0.4 }}
        className="absolute border-2 border-[#2EC4B6]/50 flex items-center justify-center overflow-hidden"
      >
        {hoverState === 'image' && (
          <span className="text-[10px] font-bold font-heading text-[#2EC4B6] tracking-wider uppercase">
            View
          </span>
        )}
      </motion.div>

      {/* Inner Dot (Orange) */}
      <motion.div
        style={{
          x: clientX,
          y: clientY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hoverState === 'interactive' ? 0.3 : hoverState === 'image' ? 0 : 1,
          opacity: hoverState === 'interactive' ? 0.2 : hoverState === 'image' ? 0 : 1,
        }}
        className="absolute w-2 h-2 rounded-full bg-[#FF6B35]"
      />
    </div>
  );
}
