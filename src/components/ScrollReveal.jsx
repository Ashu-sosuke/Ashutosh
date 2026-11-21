import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Safely register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * ScrollReveal - Reusable section-level entrance reveal driven by GSAP ScrollTrigger
 * 
 * @param {React.ReactNode} children - Child elements to animate
 * @param {number} delay - Animation delay in seconds (useful for staggering heading vs body)
 * @param {number} y - Initial vertical offset in px (default: 40)
 * @param {number} duration - Animation duration in seconds (default: 0.8)
 * @param {string} ease - GSAP easing curve (default: "power3.out")
 * @param {boolean} once - If true, animation triggers once and does not reset on scroll back up (default: true)
 * @param {string} threshold - Viewport trigger position (default: "top 85%")
 * @param {string} className - Optional container styling classes
 */
export default function ScrollReveal({
  children,
  delay = 0,
  y = 40,
  duration = 0.8,
  ease = 'power3.out',
  once = true,
  threshold = 'top 85%',
  className = '',
  style = {},
  ...props
}) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // Respect user's reduced-motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    // Scoped GSAP context ensures clean teardown on unmount / hot-reload
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: y,
        },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          delay: delay,
          ease: ease,
          scrollTrigger: {
            trigger: el,
            start: threshold,
            toggleActions: once ? 'play none none none' : 'play reverse play reverse',
            once: once,
          },
        }
      );
    }, elRef);

    return () => ctx.revert();
  }, [delay, y, duration, ease, once, threshold]);

  return (
    <div ref={elRef} className={className} style={style} {...props}>
      {children}
    </div>
  );
}
