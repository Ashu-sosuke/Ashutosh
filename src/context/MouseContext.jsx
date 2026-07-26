import React, { createContext, useContext, useEffect } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

const MouseContext = createContext();

export function MousePositionProvider({ children }) {
  const mouseX = useMotionValue(0); // Normalized -1 to 1 relative to center
  const mouseY = useMotionValue(0); // Normalized -1 to 1 relative to center

  // Smooth trailing spring configuration
  const springConfig = { stiffness: 45, damping: 22 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if the device has a mouse/fine pointer
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    let frameId;
    const handleMouseMove = (e) => {
      // Throttle mousemove updates using requestAnimationFrame
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // Normalize coordinates to range [-1, 1]
        const normX = (e.clientX / width) * 2 - 1;
        const normY = (e.clientY / height) * 2 - 1;

        mouseX.set(normX);
        mouseY.set(normY);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <MouseContext.Provider value={{ mouseX: smoothX, mouseY: smoothY }}>
      {children}
    </MouseContext.Provider>
  );
}

export function useMousePosition() {
  const context = useContext(MouseContext);
  if (!context) {
    return { mouseX: smoothX, mouseY: smoothY };
  }
  return context;
}
