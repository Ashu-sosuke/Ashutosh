import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SmoothScrollContext = createContext({
  lenis: null,
  scrollTo: () => {},
});

export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const [lenisInstance, setLenisInstance] = useState(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.075,
      touchMultiplier: 1.5,
      wheelMultiplier: 1.0,
      autoRaf: true,
      anchors: true,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Provide global access for debugging or external calls
    if (typeof window !== 'undefined') {
      window.lenis = lenis;
    }

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
      if (typeof window !== 'undefined') {
        delete window.lenis;
      }
    };
  }, []);

  const scrollTo = useCallback((target, options = {}) => {
    const defaultOptions = { offset: -75, duration: 1.2, ...options };
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, defaultOptions);
    } else {
      if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'smooth' });
      } else {
        const element = typeof target === 'string'
          ? document.querySelector(target)
          : target;
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisInstance, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useLenis() {
  return useContext(SmoothScrollContext);
}
