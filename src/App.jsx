import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeyFacts from './components/KeyFacts';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MousePositionProvider } from './context/MouseContext';
import ParticleField from './components/ParticleField';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // ── Scroll Progress Bar (Framer Motion) ──
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Initialize Lenis smooth scrolling (standard open-source ScrollSmoother alternative)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5, // Faint touch smoothing
      infinite: false,
    });

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Integrate Lenis with GSAP RequestAnimationFrame
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable lag smoothing in GSAP ScrollTrigger for better sync
    gsap.ticker.lagSmoothing(0);

    // Scroll trigger cleanup on unmount
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <MousePositionProvider>
      <div className="min-h-screen bg-[#0F0E0D] text-[#F5F0E8] antialiased selection:bg-[#FF6B35]/20 selection:text-[#FF6B35] bg-grain overflow-x-hidden">
        <ParticleField />
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left bg-gradient-to-r from-[#FF6B35] to-[#2EC4B6]"
          style={{ scaleX }}
        />

        <Navbar />

        {/* DOM Wrapper Structure compatible with smooth scroll containers */}
        <div id="smooth-wrapper">
          <div id="smooth-content" className="relative z-10">

            <Hero />
            <KeyFacts />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Achievements />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </MousePositionProvider>
  );
}

