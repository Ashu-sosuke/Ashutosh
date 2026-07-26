import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { heroData } from '../data/portfolioData';
import ashuIllustrated from '../assets/ashu-illustrated.png';
import SectionCanvas from './SectionCanvas';
import Magnetic from './Magnetic';

export default function Hero() {
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

  const heroSnippet = `class Developer {
  const passion = 'android';
  const focus = ['ai', 'ml', 'systems'];
  const code = () => 'building impact';
}`;

  return (
    <SectionCanvas
      id="hero"
      splashPosition="bottom-left"
      splashHueShift={0}
      splashOpacity={0.22}
      dotCount={36}
      dotPosition="top-right"
      snippet={heroSnippet}
      snippetPosition="top-right"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20"
    >
      <div className="layout-container w-full z-10 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20"
        >
          {/* ── LEFT: TEXT BLOCK ── */}
          <div className="flex-1 text-center lg:text-left flex flex-col gap-5">
            <motion.p
              variants={itemVariants}
              className="text-sm font-medium tracking-wider uppercase text-[#FF6B35]"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#F5F0E8] font-heading leading-[1.05]"
            >
              {heroData.name}
              <span className="text-[#9C9388] font-normal text-xl sm:text-2xl lg:text-3xl block mt-1">
                goes by "{heroData.nickname}"
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-[#2EC4B6] font-heading"
            >
              {heroData.title}
            </motion.p>

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

            {/* Magnetic CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2"
            >
              <Magnetic>
                <a
                  href="#projects"
                  className="px-7 py-3.5 rounded-full bg-[#FF6B35] text-[#0F0E0D] text-sm font-semibold hover:bg-[#FF6B35]/85 transition-all shadow-lg shadow-[#FF6B35]/15 flex items-center gap-2 group cursor-pointer"
                >
                  <span>See My Work</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  href="#contact"
                  className="px-7 py-3.5 rounded-full bg-transparent text-[#2EC4B6] text-sm font-semibold border-2 border-[#2EC4B6] hover:bg-[#2EC4B6]/10 transition-all flex items-center gap-2 cursor-pointer"
                >
                  Get in Touch
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* ── RIGHT: CIRCULAR PORTRAIT ── */}
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
    </SectionCanvas>
  );
}
