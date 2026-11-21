import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Maximize2,
  X,
  ArrowRight,
  ShieldCheck,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import astraImg from '../assets/astra.png';
import SectionCanvas from './SectionCanvas';
import Tilt from './Tilt';
import Magnetic from './Magnetic';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Featured AstraSOS Image hover cursor-glow coordinates
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isGlowVisible, setIsGlowVisible] = useState(false);

  const handleGlowMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
        setCaseStudyOpen(false);
        setActiveModalProject(null);
      }
    };
    if (lightboxOpen || caseStudyOpen || activeModalProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen, caseStudyOpen, activeModalProject]);

  const featuredProject = projectsData.find((p) => p.id === 'astrasos') || projectsData[0];
  const gridProjects = projectsData.filter((p) => p.id !== 'astrasos');

  const customBezier = [0.22, 1, 0.36, 1];

  const gridContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: customBezier },
    },
  };

  const projectsSnippet = `fun deploySystem(module: SystemModule) {
  validateArchitectureContracts()
  initializeOfflineDataLayer()
  startInferencePipeline()
}`;

  return (
    <SectionCanvas
      id="projects"
      snippet={projectsSnippet}
      snippetPosition="bottom-right"
      className="py-24 relative overflow-hidden"
    >
      <div className="layout-container">
        <div className="flex flex-col gap-10">
          {/* Section Header */}
          <ScrollReveal delay={0}>
            <div className="flex flex-col gap-2 text-left">
              <div className="flex items-center gap-3">
                <span className="w-8 h-1 rounded-full bg-[#FF6B35]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B35]">
                  Portfolio Showcase
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#F5F0E8]">
                Featured work & open source
              </h2>
              <p className="text-sm text-[#9C9388] max-w-2xl">
                Production Android applications, emergency response architectures, offline-first platforms, and open-source benchmarks.
              </p>
            </div>
          </ScrollReveal>

          {/* ── CARD 01: FEATURED SYSTEM (AstraSOS) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-[#1A1815] border border-[#FF6B35]/35 p-6 sm:p-8 shadow-xl relative overflow-hidden group/featured"
          >
            {/* Top Row */}
            <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-[#2E2A26]">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-[#0F0E0D] border border-[#2E2A26] flex items-center justify-center font-code text-xs font-bold text-[#FF6B35]">
                  01
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FF6B35]">
                  Featured Architecture
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-[#2EC4B6]/12 text-[#2EC4B6] border border-[#2EC4B6]/25 uppercase tracking-wider">
                  {featuredProject.role} · LIVE ARCHITECTURE
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: Image Showcase with 3D Tilt Wrapper */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: customBezier }}
                className="lg:col-span-7 flex flex-col justify-center relative z-10"
              >
                <Tilt maxTilt={8}>
                  <div
                    onClick={() => setLightboxOpen(true)}
                    onMouseMove={handleGlowMove}
                    onMouseEnter={() => setIsGlowVisible(true)}
                    onMouseLeave={() => setIsGlowVisible(false)}
                    className="projects-featured-image relative rounded-xl p-3 bg-gradient-to-br from-[#FF6B35]/15 via-[#1A1815] to-[#2EC4B6]/15 border border-[#2E2A26] cursor-pointer group/img transition-all duration-300 hover:border-[#FF6B35]/50 shadow-inner overflow-hidden"
                  >
                    {/* Inner image container */}
                    <div className="relative rounded-lg overflow-hidden border border-[#2E2A26] bg-[#0F0E0D] aspect-[4/3] w-full">
                      <img
                        src={astraImg}
                        alt="AstraSOS AI Emergency Response Ecosystem"
                        className="w-full h-full object-contain transform group-hover/img:scale-[1.01] transition-transform duration-300"
                      />

                      {/* Interactive Pointer-reactive Glow overlay */}
                      {isGlowVisible && (
                        <div
                          className="absolute inset-0 pointer-events-none z-10 opacity-30 mix-blend-screen"
                          style={{
                            background: `radial-gradient(160px circle at ${glowPos.x}px ${glowPos.y}px, rgba(46, 196, 182, 0.45), transparent 85%)`,
                          }}
                        />
                      )}

                      {/* Bottom Overlay Bar */}
                      <div className="absolute bottom-0 left-0 right-0 px-3.5 py-2.5 bg-[#0F0E0D]/90 backdrop-blur-md border-t border-[#2E2A26] flex items-center justify-between text-[11px] text-[#9C9388] z-20">
                        <span className="flex items-center gap-1.5 font-medium">
                          <ShieldCheck className="w-4 h-4 text-[#2EC4B6]" />
                          Voice · Transcription · News · SOS
                        </span>
                        <span className="text-[#FF6B35] font-semibold tracking-wider flex items-center gap-1">
                          <Maximize2 className="w-3 h-3" />
                          EXPAND
                        </span>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>

              {/* Right: Content Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: customBezier }}
                className="lg:col-span-5 flex flex-col justify-between space-y-5 text-left"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#F5F0E8]">
                      AstraSOS
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#2EC4B6] font-heading mt-0.5">
                      AI Emergency Response Ecosystem
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#9C9388] leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Real Metrics Bar */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] flex flex-col">
                      <span className="text-xl sm:text-2xl font-bold font-heading text-[#FF6B35]">
                        1.15 s median
                      </span>
                      <span className="text-[10px] font-semibold text-[#9C9388] uppercase tracking-wider mt-0.5">
                        Trigger to Dashboard (n=5)
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] flex flex-col">
                      <span className="text-xl sm:text-2xl font-bold font-heading text-[#2EC4B6]">
                        33/33 routed
                      </span>
                      <span className="text-[10px] font-semibold text-[#9C9388] uppercase tracking-wider mt-0.5">
                        Emergency Categories
                      </span>
                    </div>
                  </div>

                  {/* Why It Matters Callout */}
                  <div className="p-3.5 rounded-r-xl border-l-3 border-[#FF6B35] bg-[#FF6B35]/8">
                    <span className="text-[10px] font-semibold text-[#FF6B35] uppercase tracking-wider block mb-0.5">
                      Why It Matters
                    </span>
                    <p className="text-xs text-[#F5F0E8] italic font-medium leading-relaxed">
                      "{featuredProject.whyItMatters}"
                    </p>
                  </div>
                </div>

                {/* Tech tags and GitHub CTA */}
                <div className="space-y-4 pt-4 border-t border-[#2E2A26]">
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-[#0F0E0D] text-[#2EC4B6] border border-[#2E2A26] font-code text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3">
                      <Magnetic>
                        <a
                          href={featuredProject.github}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#FF6B35] text-[#0F0E0D] font-semibold text-xs hover:bg-[#FF6B35]/90 transition-all inline-flex items-center gap-1.5 shadow-md shadow-[#FF6B35]/15 cursor-pointer"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>VIEW GITHUB</span>
                        </a>
                      </Magnetic>

                      <button
                        onClick={() => setCaseStudyOpen(true)}
                        className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#0F0E0D] border border-[#2E2A26] text-[#9C9388] hover:text-[#F5F0E8] hover:border-[#FF6B35] transition-all text-xs font-semibold inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>CASE STUDY</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#FF6B35]" />
                      </button>

                      <button
                        onClick={() => setActiveModalProject(featuredProject)}
                        className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#0F0E0D] border border-[#2E2A26] text-[#9C9388] hover:text-[#2EC4B6] hover:border-[#2EC4B6] transition-all text-xs font-semibold inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>DETAILS</span>
                      </button>
                    </div>

                    <span className="text-[11px] font-code text-[#9C9388]">
                      {featuredProject.repoName}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── GRID CARDS: OTHER PROJECTS ── */}
          <div className="flex flex-col gap-6 mt-4">
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-3">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F0E8] text-left">
                  More Projects & Systems
                </h3>
                <div className="h-[1px] bg-[#2E2A26] flex-1" />
              </div>
            </ScrollReveal>

            <motion.div
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10"
            >
              {gridProjects.map((project, idx) => (
                <Tilt key={project.id} maxTilt={4} className="w-full h-full">
                  <motion.div
                    variants={cardVariants}
                    whileTap={{ scale: 0.99 }}
                    className="p-6 sm:p-7 rounded-2xl bg-[#1A1815] border border-[#2E2A26] hover:border-[#FF6B35]/40 transition-colors duration-300 shadow-lg flex flex-col justify-between group cursor-default h-full text-left relative overflow-hidden"
                  >
                    {/* Top colored accent line */}
                    {project.metric && (
                      <div
                        className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: `linear-gradient(90deg, ${project.metric.accentColor || '#FF6B35'}, ${project.metric.badgeColor || '#2EC4B6'})`,
                        }}
                      />
                    )}

                    <div className="space-y-4">
                      {/* Header Row */}
                      <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#2E2A26]">
                        <div className="flex items-center gap-2.5">
                          <span className="w-7 h-7 rounded-md bg-[#0F0E0D] border border-[#2E2A26] flex items-center justify-center font-code text-xs font-bold text-[#2EC4B6]">
                            {`0${idx + 2}`}
                          </span>
                          <span className="text-xs text-[#9C9388] font-medium">{project.role}</span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#2EC4B6]/12 text-[#2EC4B6] border border-[#2EC4B6]/25 uppercase tracking-wider">
                          {project.status}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold font-heading text-[#F5F0E8] group-hover:text-[#FF6B35] transition-colors leading-snug">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#9C9388] leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Real Metric Callout */}
                      {project.metric && (
                        <div className="p-3.5 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] flex items-center justify-between">
                          <div>
                            <span
                              className="text-xl font-bold font-heading block"
                              style={{ color: project.metric.accentColor || '#FF6B35' }}
                            >
                              {project.metric.value}
                            </span>
                            <span className="text-[10px] font-semibold text-[#9C9388] uppercase tracking-wider">
                              {project.metric.label}
                            </span>
                          </div>
                          <span
                            className="text-xs font-code px-2.5 py-1 rounded-full border"
                            style={{
                              backgroundColor: `${project.metric.badgeColor || '#2EC4B6'}15`,
                              borderColor: `${project.metric.badgeColor || '#2EC4B6'}30`,
                              color: project.metric.badgeColor || '#2EC4B6',
                            }}
                          >
                            {project.metric.badge}
                          </span>
                        </div>
                      )}

                      {/* Why it matters */}
                      {project.whyItMatters && (
                        <p className="text-xs text-[#FF6B35] italic font-medium leading-relaxed">
                          ⚡ Why it matters: "{project.whyItMatters}"
                        </p>
                      )}
                    </div>

                    {/* Tags & Action Link Bar */}
                    <div className="mt-6 pt-4 border-t border-[#2E2A26] flex flex-col gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-full bg-[#0F0E0D] text-[#9C9388] border border-[#2E2A26] font-code text-[10px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="w-full pt-3 border-t border-[#2E2A26] flex items-center justify-between gap-2">
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF6B35] hover:text-[#FF6B35]/80 transition-colors cursor-pointer"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>VIEW GITHUB</span>
                          </a>
                        ) : (
                          <span className="text-xs text-[#9C9388]/50">Internal / Private</span>
                        )}

                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="px-3 py-1 rounded-lg bg-[#0F0E0D] hover:bg-[#2E2A26] border border-[#2E2A26] text-xs font-semibold text-[#F5F0E8] hover:text-[#FF6B35] transition-all cursor-pointer flex items-center gap-1"
                        >
                          <span>Details</span>
                          <ArrowRight className="w-3 h-3 text-[#FF6B35]" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </Tilt>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX MODAL FOR ASTRASOS ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-50 bg-[#0F0E0D]/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#1A1815] border border-[#FF6B35]/30 rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2E2A26]">
                <div>
                  <h4 className="text-base font-bold font-heading text-[#F5F0E8]">
                    AstraSOS — High-Res Architecture Preview
                  </h4>
                  <p className="text-xs text-[#9C9388]">
                    {featuredProject.repoName}
                  </p>
                </div>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="p-2 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] text-[#9C9388] hover:text-[#FF6B35] hover:border-[#FF6B35] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-auto flex-1 flex items-center justify-center p-2">
                <img
                  src={astraImg}
                  alt="AstraSOS Full Preview"
                  className="max-w-full max-h-[75vh] object-contain rounded-xl border border-[#2E2A26]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CASE STUDY MODAL FOR ASTRASOS ── */}
      <AnimatePresence>
        {caseStudyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCaseStudyOpen(false)}
            data-lenis-prevent
            className="fixed inset-0 z-50 bg-[#0F0E0D]/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#1A1815] border border-[#FF6B35]/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
            >
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#2E2A26]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6B35] block mb-1">
                    System Case Study
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-[#F5F0E8]">
                    AstraSOS Architecture & Engineering Deep-Dive
                  </h3>
                </div>
                <button
                  onClick={() => setCaseStudyOpen(false)}
                  className="p-2 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] text-[#9C9388] hover:text-[#FF6B35] hover:border-[#FF6B35] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-5 text-sm text-[#F5F0E8]/90 leading-relaxed font-sans max-h-[70vh] overflow-y-auto pr-2">
                <div className="p-4 rounded-xl bg-[#0F0E0D] border border-[#2E2A26]">
                  <h4 className="font-bold text-[#FF6B35] font-heading mb-2">
                    1. The Problem Space
                  </h4>
                  <p className="text-xs text-[#9C9388] leading-relaxed">
                    Most emergency response apps rely on active data networks. In high-risk scenarios, connectivity drops or app triggers fail. AstraSOS was engineered for zero-dependency reliability delivering SOS incidents from trigger to responder dashboard in a 1.15 s median.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0F0E0D] border border-[#2E2A26]">
                  <h4 className="font-bold text-[#2EC4B6] font-heading mb-2">
                    2. Multi-Signal AI Fusion Pipeline
                  </h4>
                  <p className="text-xs text-[#9C9388] leading-relaxed">
                    • <strong>Faster-Whisper:</strong> Audio stream is transcribed locally/on edge with low-latency execution.<br />
                    • <strong>Librosa:</strong> Audio pitch and vocal stress frequency analysis detects distress states.<br />
                    • <strong>Groq Llama 3.3 70B:</strong> Synthesizes speech text and stress levels to autonomously route 33/33 scenarios to the correct emergency service (Police/Fire/Hospital).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0F0E0D] border border-[#2E2A26]">
                  <h4 className="font-bold text-[#FF6B35] font-heading mb-2">
                    3. Dual-Path Failover Dispatch
                  </h4>
                  <p className="text-xs text-[#9C9388] leading-relaxed">
                    Local Android SIM sends emergency SMS directly if data connection drops, with cloud Twilio automated failover (verified in 50 simulated trials), plus a news-fetcher module feeding verified incidents to the dashboard.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2E2A26] flex items-center justify-between">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-full bg-[#FF6B35] text-[#0F0E0D] font-semibold text-xs hover:bg-[#FF6B35]/90 transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>

                <button
                  onClick={() => setCaseStudyOpen(false)}
                  className="text-xs font-semibold text-[#9C9388] hover:text-[#F5F0E8] cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── INTERACTIVE PROJECT DETAILS MODAL ── */}
      <AnimatePresence>
        {activeModalProject && (
          <div data-lenis-prevent className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-[#0F0E0D]/85 backdrop-blur-md"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#1A1815] border border-[#2E2A26] p-6 sm:p-8 shadow-2xl shadow-[#0F0E0D] z-10 text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                aria-label="Close details"
                className="absolute top-5 right-5 p-2 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] text-[#9C9388] hover:text-[#FF6B35] hover:border-[#FF6B35] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FF6B35]/15 border border-[#FF6B35]/30 text-[#FF6B35]">
                  {activeModalProject.category}
                </span>
                <span className="text-xs text-[#9C9388]">
                  {activeModalProject.role}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#F5F0E8]">
                {activeModalProject.title}
              </h3>

              {/* Why it matters callout */}
              {activeModalProject.whyItMatters && (
                <div className="mt-4 p-4 rounded-xl bg-[#FF6B35]/5 border-l-3 border-[#FF6B35]">
                  <p className="text-xs text-[#F5F0E8]/90 leading-relaxed font-medium">
                    {activeModalProject.whyItMatters}
                  </p>
                </div>
              )}

              {/* Verified Key Achievements Bullets */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9C9388] mb-3">
                  Verified Engineering Deliverables
                </h4>
                <ul className="space-y-2.5">
                  {(activeModalProject.bullets || [activeModalProject.description]).map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F0E8]/90 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architectural Breakdown */}
              {activeModalProject.architecture && (
                <div className="mt-6 pt-6 border-t border-[#2E2A26]">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9C9388] mb-3 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[#2EC4B6]" />
                    Architectural Deep-Dive
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(activeModalProject.architecture).map(([key, value]) => (
                      <div key={key} className="p-3 rounded-xl bg-[#0F0E0D] border border-[#2E2A26]">
                        <span className="text-[10px] font-mono uppercase text-[#2EC4B6] block font-semibold">
                          {key}
                        </span>
                        <span className="text-xs text-[#9C9388] mt-1 block leading-snug">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="mt-6 pt-6 border-t border-[#2E2A26]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9C9388] mb-3">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#0F0E0D] border border-[#2E2A26] text-[#F5F0E8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 pt-6 border-t border-[#2E2A26] flex items-center justify-between">
                {activeModalProject.github ? (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#FF6B35] text-[#0F0E0D] text-xs font-semibold flex items-center gap-2 hover:bg-[#FF6B35]/85 transition-colors shadow-lg shadow-[#FF6B35]/20 cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-[#9C9388]">Repository confidential</span>
                )}

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-full bg-[#0F0E0D] border border-[#2E2A26] text-xs font-medium text-[#9C9388] hover:text-[#F5F0E8] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SectionCanvas>
  );
}
