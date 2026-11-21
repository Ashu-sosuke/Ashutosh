import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeyFacts from './components/KeyFacts';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import PersonalProjects from './components/PersonalProjects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MousePositionProvider } from './context/MouseContext';
import { SmoothScrollProvider } from './providers/SmoothScrollProvider';
import ParticleField from './components/ParticleField';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  // ── Scroll Progress Bar (Framer Motion) ──
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <SmoothScrollProvider>
      <MousePositionProvider>
        <div className="min-h-screen bg-[#0F0E0D] text-[#F5F0E8] antialiased selection:bg-[#FF6B35]/20 selection:text-[#FF6B35] bg-grain overflow-x-clip">
          <ParticleField />
          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left bg-gradient-to-r from-[#FF6B35] to-[#2EC4B6]"
            style={{ scaleX }}
          />

          <Navbar />

          <main className="relative z-10">
            <Hero />
            <KeyFacts />
            <About />
            <Skills />
            <Projects />
            <PersonalProjects />
            <Experience />
            <Achievements />
            <Contact />
            <Footer />
          </main>
          <Analytics />
        </div>
      </MousePositionProvider>
    </SmoothScrollProvider>
  );
}
