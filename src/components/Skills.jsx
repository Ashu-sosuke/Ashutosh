import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Smartphone, Server, Wrench, Code2, Sparkles } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import SectionCanvas from './SectionCanvas';
import ScrollReveal from './ScrollReveal';
import Tilt from './Tilt';
import { staggerContainer, fadeUp } from '../lib/motionVariants';

export default function Skills() {
  const iconMap = {
    Smartphone: Smartphone,
    Server: Server,
    Cpu: Cpu,
    Wrench: Wrench,
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const skillsSnippet = `val technicalStack = mapOf(
  "mobile" to listOf("Kotlin", "Jetpack Compose", "Coroutines"),
  "backend" to listOf("FastAPI", "Pydantic", "MongoDB"),
  "ai_ml" to listOf("PyTorch", "Whisper", "Groq Llama 3.3"),
  "devops" to listOf("Docker", "Render", "CI/CD Workflows")
)`;

  return (
    <SectionCanvas
      id="skills"
      snippet={skillsSnippet}
      snippetPosition="top-right"
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
                  Technical Proficiency
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#F5F0E8] text-left">
                Engineering Toolkit & Architecture
              </h2>
              <p className="text-sm text-[#9C9388] max-w-xl text-left">
                Production-tested mobile frameworks, asynchronous backend systems, edge ML runtimes, and developer tooling.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Categorized Bento Cards Grid */}
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsData.map((group) => {
                const IconComponent = iconMap[group.iconName] || Code2;
                const accent = group.accent || '#FF6B35';

                return (
                  <Tilt key={group.category} maxTilt={5} className="w-full">
                    <motion.div
                      variants={fadeUp}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className="p-6 sm:p-7 rounded-2xl bg-[#1A1815] border border-[#2E2A26] hover:border-[#FF6B35]/40 flex flex-col justify-between text-left transition-all duration-300 shadow-xl shadow-[#0F0E0D]/50 h-full relative group overflow-hidden"
                    >
                      {/* Top colored accent line */}
                      <div
                        className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: `linear-gradient(90deg, ${accent}, transparent)`,
                        }}
                      />

                      <div>
                        {/* Category header */}
                        <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-[#2E2A26]">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-md"
                              style={{ backgroundColor: `${accent}15` }}
                            >
                              <IconComponent className="w-5 h-5" style={{ color: accent }} strokeWidth={2.2} />
                            </div>
                            <div>
                              <h3 className="font-heading text-lg font-bold text-[#F5F0E8]">
                                {group.category}
                              </h3>
                              <p className="text-xs text-[#9C9388] line-clamp-1">
                                {group.description}
                              </p>
                            </div>
                          </div>

                          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#0F0E0D] border border-[#2E2A26] text-[#9C9388] shrink-0">
                            {group.skills.length} techs
                          </span>
                        </div>

                        {/* Technology chips */}
                        <motion.div
                          variants={staggerContainer(0.03)}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true }}
                          className="flex flex-wrap gap-2 pt-2"
                        >
                          {group.skills.map((skill) => (
                            <motion.span
                              key={skill}
                              variants={chipVariants}
                              whileHover={{
                                scale: 1.05,
                                borderColor: accent,
                                color: '#F5F0E8',
                                transition: { duration: 0.15 },
                              }}
                              className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-[#2E2A26] bg-[#0F0E0D] text-[#9C9388] hover:text-[#F5F0E8] transition-colors cursor-default"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>

                      {/* Card footer indicator */}
                      <div className="mt-6 pt-3 border-t border-[#2E2A26] flex items-center justify-between text-[11px] text-[#9C9388]">
                        <span className="flex items-center gap-1.5 font-medium" style={{ color: accent }}>
                          <Sparkles className="w-3 h-3" /> Production Verified
                        </span>
                        <span>Zero vanity metrics</span>
                      </div>
                    </motion.div>
                  </Tilt>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionCanvas>
  );
}
