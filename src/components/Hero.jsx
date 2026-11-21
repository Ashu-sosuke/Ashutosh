import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileText, Sparkles, Smartphone, Cpu, ShieldCheck } from 'lucide-react';
import { heroData } from '../data/portfolioData';
import SectionCanvas from './SectionCanvas';
import Tilt from './Tilt';
import Magnetic from './Magnetic';
import { useLenis } from '../providers/SmoothScrollProvider';
import { staggerContainer, fadeUp } from '../lib/motionVariants';
import ashuIllustrated from '../assets/ashu-illustrated.png';
import AKLogo from './AKLogo';

export default function Hero() {
  const { scrollTo } = useLenis();

  // ── Animated Typing / Cycling Role Text ──
  const roles = heroData.roles || ["Android Developer", "AI Engineer", "Software Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayedText !== currentRole) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 75);
    } else if (!isDeleting && displayedText === currentRole) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayedText !== '') {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 35);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, roles]);

  const heroSnippet = `class SoftwareEngineer {
  val name = "Ashutosh Kumar Bharti"
  val brand = "ASHUTOSH"
  val tagline = "Engineering Intelligence"
  val focus = listOf("Kotlin", "Compose", "FastAPI", "AI Systems")
}`;

  const handleScrollClick = (e, target) => {
    e.preventDefault();
    scrollTo(target, { offset: -75, duration: 1.1 });
  };

  return (
    <SectionCanvas
      id="home"
      snippet={heroSnippet}
      snippetPosition="top-right"
      className="relative min-h-screen bg-grid-cyber"
      contentClassName="relative z-10 w-full min-h-screen flex flex-col justify-center items-center pt-28 pb-20"
    >
      <div className="layout-container w-full relative z-10">
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-14"
        >
          {/* ── LEFT: HERO EDITORIAL TEXT & ACTIONS ── */}
          <div className="flex-1 text-center lg:text-left flex flex-col gap-6 max-w-2xl">
            {/* Status pill badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1A1815] border border-[#2E2A26] shadow-inner text-xs font-medium text-[#9C9388]">
                <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
                <span className="text-[#F5F0E8]/90">Available for Opportunities</span>
                <span className="text-[#2E2A26]">|</span>
                <span className="text-[#2EC4B6] font-mono text-[11px]">Uttarakhand, IN</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F0E8] font-heading leading-[1.08]"
            >
              Engineering Ideas Into{' '}
              <span className="text-gradient-orange-teal font-extrabold inline-block">
                Intelligent Products.
              </span>
            </motion.h1>

            {/* Interactive Dynamic Typing Role Bar */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center lg:justify-start gap-2.5 text-lg sm:text-xl lg:text-2xl font-semibold font-heading"
            >
              <span className="text-[#9C9388]">Specializing as</span>
              <span className="text-[#2EC4B6] border-b-2 border-[#FF6B35] pb-0.5 min-w-[210px] text-left inline-flex items-center">
                {displayedText}
                <span className="inline-block w-0.5 h-6 ml-1 bg-[#FF6B35] animate-pulse" />
              </span>
            </motion.div>

            {/* Supporting Bio Paragraph */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-[#F5F0E8]/85 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal"
            >
              I’m <strong className="text-[#F5F0E8] font-semibold">{heroData.name}</strong>, a software developer focused on building modern{' '}
              <span className="text-[#F5F0E8] font-semibold">Android applications</span>, intelligent{' '}
              <span className="text-[#F5F0E8] font-semibold">AI-powered systems</span>, and scalable software solutions.
            </motion.p>

            {/* Three Strategic CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              {/* Explore My Work CTA */}
              <Magnetic>
                <motion.a
                  href="#projects"
                  onClick={(e) => handleScrollClick(e, '#projects')}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3.5 rounded-full bg-[#FF6B35] text-[#0F0E0D] text-sm font-semibold hover:bg-[#FF6B35]/85 transition-colors shadow-lg shadow-[#FF6B35]/25 flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </Magnetic>

              {/* Download Resume Button */}
              <Magnetic>
                <motion.a
                  href={heroData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Ashutosh_Resume.pdf"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3.5 rounded-full bg-[#1A1815] text-[#F5F0E8] text-sm font-semibold border border-[#2E2A26] hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#0F0E0D]/40 group"
                >
                  <FileText className="w-4 h-4 text-[#FF6B35] group-hover:scale-110 transition-transform" />
                  <span>Download Resume</span>
                </motion.a>
              </Magnetic>

              {/* Let's Connect CTA */}
              <Magnetic>
                <motion.a
                  href="#contact"
                  onClick={(e) => handleScrollClick(e, '#contact')}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-3.5 rounded-full bg-transparent text-[#2EC4B6] hover:bg-[#2EC4B6]/15 text-sm font-semibold border-2 border-[#2EC4B6] transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#2EC4B6]/10"
                >
                  <span>Let's Connect</span>
                </motion.a>
              </Magnetic>
            </motion.div>

            {/* Quick tech highlights ribbon */}
            <motion.div
              variants={fadeUp}
              className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-[#9C9388] flex-wrap"
            >
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-[#FF6B35]" />
                Kotlin & Jetpack Compose
              </span>
              <span className="text-[#2E2A26]">·</span>
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#2EC4B6]" />
                FastAPI & AI Systems
              </span>
              <span className="text-[#2E2A26]">·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B35]" />
                Production Shipped
              </span>
            </motion.div>
          </div>

          {/* ── RIGHT: OFFICIAL AK BRAND LOGO STAGE WITH 3D TILT ── */}
          <div className="relative shrink-0 flex flex-col items-center justify-center">
            {/* Soft Ambient Radial Backlight Glow (strictly <= 12% opacity, centered behind emblem) */}
            <div
              className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full blur-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(255,107,53,0.12) 0%, rgba(46,196,182,0.08) 55%, transparent 75%)',
              }}
            />

            {/* Subtle orbital dashed halo */}
            <div className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full border border-white/[0.04] pointer-events-none animate-spin-slow" />

            <Tilt maxTilt={10} className="relative z-10">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="relative rounded-3xl p-6 sm:p-8 bg-[#1A1815]/95 border border-[#2E2A26] shadow-2xl shadow-[#0F0E0D]/80 backdrop-blur-xl flex flex-col items-center justify-center group"
              >
                {/* Cyber corner accents */}
                <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#FF6B35]/40 rounded-tl pointer-events-none" />
                <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#2EC4B6]/40 rounded-tr pointer-events-none" />
                <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#2EC4B6]/40 rounded-bl pointer-events-none" />
                <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#FF6B35]/40 rounded-br pointer-events-none" />

                {/* Profile Portrait Image */}
                <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-2xl overflow-hidden border border-[#2E2A26] relative transition-transform duration-500 group-hover:scale-105 shadow-xl shadow-[#0F0E0D]/80 bg-[#0F0E0D]">
                  <img
                    src={ashuIllustrated}
                    alt="Ashutosh Kumar Bharti"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Emblem Footer Caption */}
                <div className="mt-6 flex flex-col items-center text-center">
                  <span className="font-heading font-black tracking-[0.26em] text-[#F5F0E8] text-lg sm:text-xl">
                    ASHUTOSH
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-5 h-[2px] rounded-full bg-[#FF6B35]" />
                    <span className="text-[11px] tracking-widest uppercase font-semibold text-[#9C9388]">
                      Engineering Intelligence
                    </span>
                    <span className="w-5 h-[2px] rounded-full bg-[#2EC4B6]" />
                  </div>
                </div>

                {/* ── FLOATING TECH BADGES (With subtle float animation) ── */}
                {/* Floating Top Left Pill: Jetpack Compose */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -left-3 sm:-left-5 z-20 px-3 py-1.5 rounded-full bg-[#1A1815] border border-[#2E2A26] text-[11px] font-semibold text-[#F5F0E8] shadow-xl shadow-[#0F0E0D]/80 flex items-center gap-1.5 backdrop-blur-md whitespace-nowrap"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                  Jetpack Compose
                </motion.div>

                {/* Floating Top Right Pill: FastAPI */}
                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -right-3 sm:-right-5 z-20 px-3 py-1.5 rounded-full bg-[#1A1815] border border-[#2E2A26] text-[11px] font-semibold text-[#F5F0E8] shadow-xl shadow-[#0F0E0D]/80 flex items-center gap-1.5 backdrop-blur-md whitespace-nowrap"
                >
                  <span className="w-2 h-2 rounded-full bg-[#2EC4B6]" />
                  FastAPI
                </motion.div>

                {/* Floating Bottom Left Pill: Room + WorkManager */}
                <motion.div
                  animate={{ y: [3, -5, 3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-3 -left-3 sm:-left-5 z-20 px-3 py-1.5 rounded-full bg-[#1A1815] border border-[#2E2A26] text-[11px] font-semibold text-[#F5F0E8] shadow-xl shadow-[#0F0E0D]/80 flex items-center gap-1.5 backdrop-blur-md whitespace-nowrap"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                  Room & WorkManager
                </motion.div>

                {/* Floating Bottom Right Pill: PyTorch & LLM */}
                <motion.div
                  animate={{ y: [-3, 5, -3] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-3 -right-3 sm:-right-5 z-20 px-3 py-1.5 rounded-full bg-[#1A1815] border border-[#2E2A26] text-[11px] font-semibold text-[#F5F0E8] shadow-xl shadow-[#0F0E0D]/80 flex items-center gap-1.5 backdrop-blur-md whitespace-nowrap"
                >
                  <span className="w-2 h-2 rounded-full bg-[#2EC4B6]" />
                  PyTorch & LLM
                </motion.div>
              </motion.div>
            </Tilt>
          </div>
        </motion.div>
      </div>
    </SectionCanvas>
  );
}
