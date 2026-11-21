import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Wrench, Terminal, CheckCircle2 } from 'lucide-react';
import { personalProjectsData } from '../data/portfolioData';
import SectionCanvas from './SectionCanvas';
import Tilt from './Tilt';
import Magnetic from './Magnetic';
import ScrollReveal from './ScrollReveal';
import { staggerContainer, fadeUp } from '../lib/motionVariants';

export default function PersonalProjects() {
  const personalSnippet = `// Personal Lab & Developer Utilities
const infra = ["Docker", "Linux", "FastAPI"];
const philosophy = "Build what you use daily";
Object.freeze(infra);`;

  return (
    <SectionCanvas
      id="personal-projects"
      snippet={personalSnippet}
      snippetPosition="top-right"
      className="py-20 relative overflow-hidden"
    >
      <div className="layout-container">
        <div className="flex flex-col gap-10">
          {/* Section Header */}
          <ScrollReveal delay={0}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-1 rounded-full bg-[#3A6EA5]" />
                <span className="text-xs font-medium uppercase tracking-widest text-[#3A6EA5]">
                  Personal Projects & Lab
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#F5F0E8] text-left">
                Tools I built for myself
              </h2>

              <p className="text-sm sm:text-base text-[#9C9388] max-w-2xl text-left">
                Self-directed engineering experiments, developer utilities, and self-hosted infrastructure built to solve personal pain points and explore systems engineering.
              </p>
            </div>
          </ScrollReveal>

          {/* Grid of Personal Project Cards */}
          <ScrollReveal delay={0.12}>
            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10"
            >
            {personalProjectsData.map((project, idx) => (
              <Tilt key={project.id} maxTilt={4} className="w-full h-full">
                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.99 }}
                  className="p-6 sm:p-7 rounded-2xl bg-[#1A1815] border border-[#2E2A26] hover:border-[#3A6EA5]/60 transition-colors duration-300 shadow-lg flex flex-col justify-between group cursor-default h-full text-left relative overflow-hidden"
                >
                  {/* Subtle Accent Glow on Hover */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#3A6EA5]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#3A6EA5]/15 transition-all duration-500" />

                  <div className="space-y-4 flex-1 flex flex-col justify-between relative z-10">
                    <div className="space-y-4">
                      {/* Header Row */}
                      <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#2E2A26]">
                        <div className="flex items-center gap-2.5">
                          <span className="w-7 h-7 rounded-md bg-[#0F0E0D] border border-[#2E2A26] flex items-center justify-center font-code text-xs font-bold text-[#3A6EA5]">
                            {`P${(idx + 1).toString().padStart(2, '0')}`}
                          </span>
                          <span className="text-xs text-[#9C9388] font-medium flex items-center gap-1.5">
                            <Terminal className="w-3.5 h-3.5 text-[#3A6EA5]" />
                            {project.role}
                          </span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#3A6EA5]/15 text-[#3A6EA5] border border-[#3A6EA5]/30 uppercase tracking-wider">
                          {project.status}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold font-heading text-[#F5F0E8] group-hover:text-[#5B8DF0] transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-[#9C9388] leading-relaxed">
                        {project.description}
                      </p>

                      {/* Bullet Highlights */}
                      {project.bullets && project.bullets.length > 0 && (
                        <div className="space-y-2 pt-2">
                          {project.bullets.map((bullet, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2 text-xs text-[#9C9388] leading-relaxed">
                              <span className="mt-1 text-[#3A6EA5] shrink-0 font-bold">›</span>
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Why It Matters Callout */}
                    {project.whyItMatters && (
                      <div className="pt-3">
                        <p className="text-xs text-[#5B8DF0] italic font-medium leading-relaxed bg-[#0F0E0D]/60 p-2.5 rounded-lg border border-[#2E2A26]">
                          💡 <span className="font-semibold text-[#F5F0E8]/90">Why it matters:</span> "{project.whyItMatters}"
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Tags & Action Link Bar */}
                  <div className="mt-6 pt-4 border-t border-[#2E2A26] flex flex-col gap-3 relative z-10">
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

                    <div className="pt-3 border-t border-[#2E2A26] flex items-center justify-between">
                      <Magnetic>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3A6EA5] hover:text-[#5B8DF0] transition-colors cursor-pointer group/link"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>VIEW REPOSITORY</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      </Magnetic>

                      <span className="text-[11px] font-code text-[#9C9388] font-normal">
                        {project.repoName}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </SectionCanvas>
  );
}
