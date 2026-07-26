import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Maximize2, X, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import astraImg from '../assets/astra.png';
import SectionCanvas from './SectionCanvas';
import Tilt from './Tilt';
import Magnetic from './Magnetic';

export default function Projects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

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

  const featuredProject = projectsData.find((p) => p.id === 'astrasos') || projectsData[0];
  const gridProjects = projectsData.filter((p) => p.id !== 'astrasos');

  const customBezier = [0.22, 1, 0.36, 1];

  const gridContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
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

  const projectsSnippet = `function deploySystem() {
  routeIncident();
  triggerSMSFailover();
  updateGeomapCoordinates();
}`;

  return (
    <SectionCanvas
      id="projects"
      splashPosition="top-left"
      splashHueShift={150}
      splashOpacity={0.16}
      dotCount={16}
      dotPosition="bottom-right"
      snippet={projectsSnippet}
      snippetPosition="bottom-right"
      className="py-24 relative overflow-hidden"
    >
      <div className="layout-container">
        <div className="flex flex-col gap-10">
          {/* Section Header */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="w-8 h-1 rounded-full bg-[#FF6B35]" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#FF6B35]">
                Projects
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#F5F0E8] text-left">
              Featured work & open source
            </h2>
          </div>

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
                  {featuredProject.role} · LIVE
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left: Image Showcase with 3D Tilt Wrapper */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: customBezier }}
                className="lg:col-span-6 flex flex-col justify-center relative z-10"
              >
                <Tilt maxTilt={10}>
                  <div
                    onClick={() => setLightboxOpen(true)}
                    onMouseMove={handleGlowMove}
                    onMouseEnter={() => setIsGlowVisible(true)}
                    onMouseLeave={() => setIsGlowVisible(false)}
                    className="projects-featured-image relative rounded-xl p-3 bg-gradient-to-br from-[#FF6B35]/15 via-[#1A1815] to-[#2EC4B6]/15 border border-[#2E2A26] cursor-pointer group/img transition-all duration-300 hover:border-[#FF6B35]/50 shadow-inner overflow-hidden"
                  >
                    {/* Inner image container */}
                    <div className="relative rounded-lg overflow-hidden border border-[#2E2A26] bg-[#0F0E0D]">
                      <img
                        src={astraImg}
                        alt="AstraSOS AI Emergency Response Ecosystem"
                        className="w-full h-auto object-cover transform group-hover/img:scale-[1.01] transition-transform duration-300"
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
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[11px] text-[#9C9388]">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#2EC4B6]" /> 4 Microservices · Dual Dispatch
                      </span>
                      <span className="text-[#FF6B35] font-semibold tracking-wider">CLICK TO EXPAND</span>
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
                className="lg:col-span-6 flex flex-col justify-between space-y-6 text-left"
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

                  <p className="text-sm text-[#9C9388] leading-relaxed">
                    Architected a 4-service AI ecosystem (Android client, FastAPI intelligence engine, React dashboard, geospatial scraper) routing SOS incidents from trigger to responder dashboard with real-time multi-signal fusion.
                  </p>

                  {/* Real Metrics Bar */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] flex flex-col">
                      <span className="text-2xl sm:text-3xl font-bold font-heading text-[#FF6B35]">
                        &lt; 2s
                      </span>
                      <span className="text-[10px] font-semibold text-[#9C9388] uppercase tracking-wider mt-0.5">
                        Trigger-to-Dispatch
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] flex flex-col">
                      <span className="text-2xl sm:text-3xl font-bold font-heading text-[#2EC4B6]">
                        -20%
                      </span>
                      <span className="text-[10px] font-semibold text-[#9C9388] uppercase tracking-wider mt-0.5">
                        Battery Reduction
                      </span>
                    </div>
                  </div>

                  {/* Why It Matters Callout */}
                  <div className="p-4 rounded-r-xl border-l-3 border-[#FF6B35] bg-[#FF6B35]/8">
                    <span className="text-[10px] font-semibold text-[#FF6B35] uppercase tracking-wider block mb-0.5">
                      Why It Matters
                    </span>
                    <p className="text-xs sm:text-sm text-[#F5F0E8] italic font-medium">
                      "Most emergency apps assume you have signal and a stable network. This one doesn't."
                    </p>
                  </div>
                </div>

                {/* Tech tags and GitHub CTA */}
                <div className="space-y-4 pt-4 border-t border-[#2E2A26]">
                  <div className="flex flex-wrap gap-1.5">
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
                    <div className="flex items-center gap-4">
                      <Magnetic>
                        <a
                          href={featuredProject.github}
                          target="_blank"
                          rel="noreferrer"
                          className="px-5 py-2.5 rounded-full bg-[#FF6B35] text-[#0F0E0D] font-semibold text-xs hover:bg-[#FF6B35]/90 transition-all inline-flex items-center gap-1.5 shadow-md shadow-[#FF6B35]/15 cursor-pointer"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>VIEW ON GITHUB</span>
                        </a>
                      </Magnetic>

                      <button
                        onClick={() => setCaseStudyOpen(true)}
                        className="px-4 py-2.5 rounded-full bg-[#0F0E0D] border border-[#2E2A26] text-[#9C9388] hover:text-[#F5F0E8] hover:border-[#FF6B35] transition-all text-xs font-semibold inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>CASE STUDY</span>
                        <ArrowRight className="w-3.5 h-3.5" />
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

          {/* ── GRID CARDS: 02 & 03 (cascade stagger pattern) ── */}
          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold font-heading text-[#F5F0E8] text-left">
                More Projects
              </h3>
              <div className="h-[1px] bg-[#2E2A26] flex-1" />
            </div>

            <motion.div
              variants={gridContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10"
            >
              {gridProjects.map((project, idx) => (
                <Tilt key={project.id} maxTilt={4} className="w-full">
                  <motion.div
                    variants={cardVariants}
                    whileTap={{ scale: 0.98 }}
                    className="p-6 sm:p-7 rounded-2xl bg-[#1A1815] border border-[#2E2A26] hover:border-[#FF6B35]/40 transition-colors duration-300 shadow-lg flex flex-col justify-between group cursor-default h-full text-left"
                  >
                    <div className="space-y-4">
                      {/* Header Row */}
                      <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#2E2A26]">
                        <div className="flex items-center gap-2.5">
                          <span className="w-7 h-7 rounded-md bg-[#0F0E0D] border border-[#2E2A26] flex items-center justify-center font-code text-xs font-bold text-[#2EC4B6]">
                            0{idx + 2}
                          </span>
                          <span className="text-xs text-[#9C9388] font-medium">{project.role}</span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#2EC4B6]/12 text-[#2EC4B6] border border-[#2EC4B6]/25 uppercase tracking-wider">
                          {project.status}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold font-heading text-[#F5F0E8] group-hover:text-[#FF6B35] transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-[#9C9388] leading-relaxed">
                        {project.id === 'fitstore'
                          ? 'Architecting an offline-first Android app (Clean Architecture, MVI/MVVM) with a WorkManager reconciliation engine between Room cache and FastAPI/MongoDB backend.'
                          : 'Designed an OpenEnv-compliant simulation environment benchmarking AI agents\' strategic reasoning across multi-turn negotiations with typed Pydantic schemas.'}
                      </p>

                      {/* Real Metric Callout */}
                      <div className="p-3.5 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] flex items-center justify-between">
                        {project.id === 'fitstore' ? (
                          <>
                            <div>
                              <span className="text-xl font-bold font-heading text-[#FF6B35] block">
                                0%
                              </span>
                              <span className="text-[10px] font-semibold text-[#9C9388] uppercase tracking-wider">
                                Data Loss Offline
                              </span>
                            </div>
                            <span className="text-xs text-[#2EC4B6] font-code bg-[#2EC4B6]/10 px-2.5 py-1 rounded-full border border-[#2EC4B6]/20">
                              Room + WorkManager
                            </span>
                          </>
                        ) : (
                          <>
                            <div>
                              <span className="text-xl font-bold font-heading text-[#2EC4B6] block">
                                3 TIER
                              </span>
                              <span className="text-[10px] font-semibold text-[#9C9388] uppercase tracking-wider">
                                Task Escalation Benchmark
                              </span>
                            </div>
                            <span className="text-xs text-[#FF6B35] font-code bg-[#FF6B35]/10 px-2.5 py-1 rounded-full border border-[#FF6B35]/20">
                              OpenEnv Protocol
                            </span>
                          </>
                        )}
                      </div>

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

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full pt-3 border-t border-[#2E2A26] flex items-center justify-between text-xs font-semibold text-[#FF6B35] hover:text-[#FF6B35]/80 transition-colors"
                      >
                        <span>→ VIEW CODE ON GITHUB</span>
                        <span className="text-[11px] font-code text-[#9C9388] font-normal">
                          {project.repoName}
                        </span>
                      </a>
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
                  className="p-2 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] text-[#9C9388] hover:text-[#FF6B35] hover:border-[#FF6B35] transition-colors"
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
                  className="p-2 rounded-xl bg-[#0F0E0D] border border-[#2E2A26] text-[#9C9388] hover:text-[#FF6B35] hover:border-[#FF6B35] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-5 text-sm text-[#F5F0E8]/90 leading-relaxed font-sans max-h-[70vh] overflow-y-auto pr-2">
                <div className="p-4 rounded-xl bg-[#0F0E0D] border border-[#2E2A26]">
                  <h4 className="font-bold text-[#FF6B35] font-heading mb-2">
                    1. The Problem Space
                  </h4>
                  <p className="text-xs text-[#9C9388]">
                    Most emergency response apps rely on active data networks. In high-risk scenarios, connectivity drops or app triggers fail. AstraSOS was engineered for zero-dependency reliability under 2 seconds.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0F0E0D] border border-[#2E2A26]">
                  <h4 className="font-bold text-[#2EC4B6] font-heading mb-2">
                    2. Multi-Signal AI Fusion Pipeline
                  </h4>
                  <p className="text-xs text-[#9C9388]">
                    • <strong>Faster-Whisper:</strong> Audio stream is transcribed locally/on edge in under 400ms.<br />
                    • <strong>Librosa:</strong> Audio pitch and vocal stress frequency analysis detects panic state.<br />
                    • <strong>Groq Llama 3.3 70B:</strong> Synthesizes speech text + stress level to autonomously route severity.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0F0E0D] border border-[#2E2A26]">
                  <h4 className="font-bold text-[#FF6B35] font-heading mb-2">
                    3. Dual-Path Failover Dispatch
                  </h4>
                  <p className="text-xs text-[#9C9388]">
                    Local Android SIM sends emergency SMS directly if data connection drops, while Twilio API handles cloud dispatch when data is available. Optimized Room DB background sync cut battery drain by 20%.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2E2A26] flex items-center justify-between">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-full bg-[#FF6B35] text-[#0F0E0D] font-semibold text-xs hover:bg-[#FF6B35]/90 transition-all inline-flex items-center gap-1.5"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>

                <button
                  onClick={() => setCaseStudyOpen(false)}
                  className="text-xs font-semibold text-[#9C9388] hover:text-[#F5F0E8]"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionCanvas>
  );
}
