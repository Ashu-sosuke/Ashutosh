import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { heroData } from '../data/portfolioData';
import ashuIllustrated from '../assets/ashu-illustrated.png';
import orangeSplatter from '../assets/orange-splatter.png';
import DotGrid from './DotGrid';
import { useMousePosition } from '../context/MouseContext';

function CodeDecoration() {
  const { mouseX, mouseY } = useMousePosition();
  const translateX = useTransform(mouseX, [-1, 1], [-8, 8]);
  const translateY = useTransform(mouseY, [-1, 1], [-8, 8]);

  return (
    <motion.pre
      style={{ x: translateX, y: translateY }}
      className="absolute top-32 right-12 text-[11px] font-code text-[#9C9388]/30 leading-relaxed pointer-events-none select-none hidden lg:block z-0 text-left font-normal"
    >
      {`class Developer {
  const passion = 'android';
  const focus = ['ai', 'ml', 'systems'];
  const code = () => 'building impact';
}`}
    </motion.pre>
  );
}

export default function Hero() {
  // ── Scroll Parallax for Background Blobs ──
  const { scrollY } = useScroll();
  const yBlob1 = useTransform(scrollY, [0, 800], [0, 100]);
  const yBlob2 = useTransform(scrollY, [0, 800], [0, -80]);
  const yBlob3 = useTransform(scrollY, [0, 800], [0, 50]);

  // Easing curve expo-out feel
  const customTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: customTransition,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* 1. Paint-splatter texture layer behind Hero (Bleeds bottom-left → center) */}
      <div 
        className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] pointer-events-none select-none z-0 mix-blend-screen opacity-[0.22]"
        style={{
          backgroundImage: `url(${orangeSplatter})`,
          backgroundSize: 'contain',
          backgroundPosition: 'bottom left',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* 2. Cursor-Reactive Dot Grids */}
      {/* Top-Right Cluster */}
      <DotGrid count={36} maxOffset={25} className="top-24 right-16 hidden md:block" />
      {/* Bottom-Right Cluster */}
      <DotGrid count={24} maxOffset={18} className="bottom-20 right-12 hidden md:block" />

      {/* 3. Ambient Code Snippet Decoration */}
      <CodeDecoration />

      {/* Parallax Background ambient color washes */}
      <motion.div
        style={{ y: yBlob1 }}
        className="absolute top-[15%] left-[15%] w-[450px] h-[350px] bg-[#FF6B35]/6 blur-[130px] rounded-full pointer-events-none z-0"
      />
      <motion.div
        style={{ y: yBlob2 }}
        className="absolute bottom-[20%] right-[10%] w-[400px] h-[300px] bg-[#2EC4B6]/5 blur-[120px] rounded-full pointer-events-none z-0"
      />
      <motion.div
        style={{ y: yBlob3 }}
        className="absolute top-[60%] left-[50%] w-[300px] h-[200px] bg-[#3A6EA5]/4 blur-[100px] rounded-full pointer-events-none z-0"
      />

      {/* Foreground Content */}
      <div className="layout-container w-full z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20"
        >
          {/* ── LEFT: TEXT BLOCK (staggered container pattern) ── */}
          <div className="flex-1 text-center lg:text-left flex flex-col gap-5">
            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-sm font-medium tracking-wider uppercase text-[#FF6B35]"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#F5F0E8] font-heading leading-[1.05]"
            >
              {heroData.name}
              <span className="text-[#9C9388] font-normal text-xl sm:text-2xl lg:text-3xl block mt-1">
                goes by "{heroData.nickname}"
              </span>
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-[#2EC4B6] font-heading"
            >
              {heroData.title}
            </motion.p>

            {/* Subhead */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#9C9388] max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              Building production Android apps in{' '}
              <span className="text-[#F5F0E8] font-medium">Kotlin & Jetpack Compose</span>{' '}
              and real-time AI pipelines with{' '}
              <span className="text-[#F5F0E8] font-medium">FastAPI & LLM inference</span>{' '}
              — while still in college.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-[#FF6B35] text-[#0F0E0D] text-sm font-semibold hover:bg-[#FF6B35]/85 transition-all shadow-lg shadow-[#FF6B35]/15 flex items-center gap-2 group"
              >
                <span>See My Work</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-transparent text-[#2EC4B6] text-sm font-semibold border-2 border-[#2EC4B6] hover:bg-[#2EC4B6]/10 transition-all flex items-center gap-2"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: CIRCULAR PORTRAIT (spring transition + status delay) ── */}
          <div className="relative shrink-0 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: 0.4,
              }}
              className="w-[280px] h-[280px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden"
              style={{
                boxShadow: '0 20px 60px -12px rgba(15, 14, 13, 0.7), 0 8px 24px -8px rgba(255, 107, 53, 0.08)',
              }}
            >
              <img
                src={ashuIllustrated}
                alt="Ashutosh Kumar Bharti — illustrated portrait"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Status pill below portrait with delay */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1815] border border-[#2E2A26] text-xs font-medium text-[#9C9388] z-10"
            >
              <span className="w-2 h-2 rounded-full bg-[#2EC4B6] animate-pulse" />
              <span className="text-[#F5F0E8]">Open to work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.4 },
          y: { repeat: Infinity, duration: 2 },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="flex flex-col items-center gap-1 text-[#9C9388] hover:text-[#FF6B35] transition-colors">
          <span className="text-[11px] tracking-widest uppercase font-medium">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
