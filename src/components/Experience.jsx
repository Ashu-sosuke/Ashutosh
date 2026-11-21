import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight, Zap, ArrowUpRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import SectionCanvas from './SectionCanvas';
import ScrollReveal from './ScrollReveal';
import { useLenis } from '../providers/SmoothScrollProvider';
import { staggerContainer, fadeUp, slideFromLeft } from '../lib/motionVariants';

export default function Experience() {
  const { scrollTo } = useLenis();

  const expSnippet = `// Professional Experience Timeline
val internships = listOf(
  Role(company = "OBJECTX Innovatech", focus = "Kotlin & Compose"),
  Role(company = "ParkVault", deliverable = "Razorpay Integration")
)`;

  const handleContactClick = (e) => {
    e.preventDefault();
    scrollTo('#contact', { offset: -75, duration: 1.1 });
  };

  return (
    <SectionCanvas
      id="experience"
      snippet={expSnippet}
      snippetPosition="top-left"
      className="py-24 relative overflow-hidden"
    >
      <div className="layout-container">
        <div className="flex flex-col gap-10">
          {/* Section Header */}
          <ScrollReveal delay={0}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-1 rounded-full bg-[#2EC4B6]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#2EC4B6]">
                  Career Trajectory
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#F5F0E8] text-left">
                Work Experience & Contributions
              </h2>
              <p className="text-sm text-[#9C9388] max-w-xl text-left">
                Practical engineering experience shipping native mobile features, real-time cloud data layers, and secure checkout systems.
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline Layout */}
          <ScrollReveal delay={0.1}>
            <div className="relative pl-6 sm:pl-10 border-l-2 border-[#2E2A26] ml-2 sm:ml-4 space-y-10">
              {experienceData.map((exp) => (
                <motion.div
                  key={exp.company}
                  variants={slideFromLeft}
                  className="relative"
                >
                  {/* Glowing Pulse Timeline Node */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-3 w-5 h-5 rounded-full bg-[#0F0E0D] border-[3px] border-[#FF6B35] flex items-center justify-center">
                    <motion.span
                      animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute w-8 h-8 rounded-full bg-[#FF6B35]/20 pointer-events-none"
                    />
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="p-6 sm:p-8 rounded-2xl bg-[#1A1815] border border-[#2E2A26] hover:border-[#FF6B35]/30 shadow-xl shadow-[#0F0E0D]/40 group text-left transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#2E2A26]">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F0E8]">
                            {exp.role}
                          </h3>
                          <span className="text-sm font-semibold text-[#FF6B35]">
                            @ {exp.company}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#2EC4B6]/12 text-[#2EC4B6] border border-[#2EC4B6]/25">
                            {exp.badge}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 text-xs text-[#9C9388] flex-wrap">
                        <span className="flex items-center gap-1.5 bg-[#0F0E0D] px-3 py-1.5 rounded-lg border border-[#2E2A26]">
                          <Calendar className="w-3.5 h-3.5 text-[#FF6B35]" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 bg-[#0F0E0D] px-3 py-1.5 rounded-lg border border-[#2E2A26]">
                          <MapPin className="w-3.5 h-3.5 text-[#2EC4B6]" />
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Verified Responsibilities */}
                    <ul className="mt-5 space-y-3">
                      {exp.points.map((point, pIndex) => (
                        <li key={pIndex} className="flex items-start gap-3 text-sm leading-relaxed text-[#9C9388]">
                          <ChevronRight className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-[#F5F0E8]/90">
                            {point.includes("Razorpay") ? (
                              <>
                                {point.split("Razorpay")[0]}
                                <strong className="text-[#FF6B35] font-semibold">Razorpay</strong>
                                {point.split("Razorpay")[1]}
                              </>
                            ) : point.includes("30%") ? (
                              <>
                                {point.split("30%")[0]}
                                <strong className="text-[#2EC4B6] font-semibold">30%</strong>
                                {point.split("30%")[1]}
                              </>
                            ) : (
                              point
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Core Stack Strip */}
                    <div className="mt-5 pt-4 border-t border-[#2E2A26] text-xs">
                      <span className="flex items-center gap-1.5 text-[#9C9388]">
                        <Zap className="w-3.5 h-3.5 text-[#FF6B35]" />
                        <span className="font-semibold text-[#F5F0E8]">Stack:</span> {exp.stack}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Open to Collaborations Card */}
              <motion.div
                variants={slideFromLeft}
                className="relative"
              >
                {/* Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-3 w-5 h-5 rounded-full bg-[#0F0E0D] border-[3px] border-[#2EC4B6]/60 flex items-center justify-center">
                  <motion.span
                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute w-7 h-7 rounded-full bg-[#2EC4B6]/15 pointer-events-none"
                  />
                </div>

                <div className="p-6 sm:p-7 rounded-2xl bg-[#1A1815]/50 border border-[#2E2A26] border-dashed shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-left">
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold font-heading text-[#F5F0E8]">
                      Open to Collaborations & New Roles
                    </h4>
                    <p className="text-xs sm:text-sm text-[#9C9388] leading-relaxed max-w-xl">
                      Interested in technical discussions and engineering opportunities focused on Android architecture (Kotlin/Compose) and AI systems (FastAPI/LLM pipelines).
                    </p>
                  </div>
                  <motion.a
                    href="#contact"
                    onClick={handleContactClick}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-5 py-2.5 rounded-full bg-[#2EC4B6]/10 text-[#2EC4B6] hover:bg-[#2EC4B6]/20 border border-[#2EC4B6]/25 transition-colors text-xs font-semibold shrink-0 inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Let’s collaborate</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionCanvas>
  );
}
