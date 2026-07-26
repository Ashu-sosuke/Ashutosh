import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

const MouseContext = createContext();

export function MousePositionProvider({ children }) {
  const [hoverState, setHoverState] = useState(null); // 'interactive' | 'image' | null
  
  const mouseX = useMotionValue(0); // Normalized -1 to 1 relative to center
  const mouseY = useMotionValue(0);

  // Exact pixel values for custom cursor
  const clientX = useMotionValue(0);
  const clientY = useMotionValue(0);

  // Spring animations for trailing outer ring and general offsets
  const springConfig = { stiffness: 60, damping: 24, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const cursorSpringConfig = { stiffness: 120, damping: 20, mass: 0.4 };
  const smoothClientX = useSpring(clientX, cursorSpringConfig);
  const smoothClientY = useSpring(clientY, cursorSpringConfig);

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    let frameId;
    const handleMouseMove = (e) => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // Normalized coordinates [-1, 1] relative to center
        const normX = (e.clientX / width) * 2 - 1;
        const normY = (e.clientY / height) * 2 - 1;

        mouseX.set(normX);
        mouseY.set(normY);

        // Raw pixel values
        clientX.set(e.clientX);
        clientY.set(e.clientY);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [mouseX, mouseY, clientX, clientY]);

  return (
    <MouseContext.Provider
      value={{
        mouseX: smoothX,
        mouseY: smoothY,
        clientX,
        clientY,
        smoothClientX,
        smoothClientY,
        hoverState,
        setHoverState,
      }}
    >
      {children}
    </MouseContext.Provider>
  );
}

export function useMousePosition() {
  const context = useContext(MouseContext);
  if (!context) {
    throw new Error('useMousePosition must be used within a MousePositionProvider');
  }
  return context;
}
