import React from 'react';
import { motion } from 'framer-motion';
import { Medal, Star, GraduationCap, Award, Users, CheckCircle2 } from 'lucide-react';
import { achievementsData, educationData } from '../data/portfolioData';
import SectionCanvas from './SectionCanvas';
import ScrollReveal from './ScrollReveal';
import Tilt from './Tilt';
import { staggerContainer, fadeUp } from '../lib/motionVariants';

export default function Achievements() {
  const achSnippet = `// Credentials & Competitive Recognition
val education = Degree(field = "CSE", school = "RIT Roorkee")
val hackathonAward = Award(title = "2nd Runner-Up", event = "Technomax 2025")
val finalist = Award(title = "Finalist", event = "HackIndia 2025")`;

  return (
    <SectionCanvas
      id="achievements"
      snippet={achSnippet}
      snippetPosition="bottom-left"
      className="py-24 relative overflow-hidden"
    >
      <div className="layout-container">
        <div className="flex flex-col gap-10">
          {/* Section Header */}
          <ScrollReveal delay={0}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="w-8 h-1 rounded-full bg-[#FF6B35]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B35]">
                  Recognition & Education
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#F5F0E8] text-left">
                Education, Hackathons & Certifications
              </h2>
              <p className="text-sm text-[#9C9388] max-w-xl text-left">
                Academic foundation at Roorkee Institute of Technology and competitive hackathon placements.
              </p>
            </div>
          </ScrollReveal>

          {/* Education Spotlight Card */}
          <ScrollReveal delay={0.1}>
            {educationData.map((edu) => (
              <div
                key={edu.institution}
                className="p-6 sm:p-8 rounded-2xl bg-[#1A1815] border border-[#2E2A26] relative overflow-hidden text-left mb-6 shadow-xl shadow-[#0F0E0D]/40"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF6B35] via-[#2EC4B6] to-transparent" />
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF6B35]/15 border border-[#FF6B35]/30 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold text-[#FF6B35] uppercase tracking-wider">
                        {edu.status}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F0E8] mt-0.5">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-[#F5F0E8]/85 mt-1">
                        {edu.institution} · <span className="text-[#9C9388] font-normal">{edu.location}</span>
                      </p>
                      <p className="text-xs text-[#9C9388] mt-2">
                        Core Focus: {edu.focus}
                      </p>
                    </div>
                  </div>

                  <span className="px-3.5 py-1.5 rounded-full bg-[#0F0E0D] border border-[#2E2A26] text-xs font-semibold text-[#F5F0E8] self-start md:self-auto shrink-0">
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </ScrollReveal>

          {/* Hackathons & Certifications Grid */}
          <ScrollReveal delay={0.15}>
            <motion.div
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {achievementsData.map((item, index) => {
                const accents = ['#FF6B35', '#2EC4B6', '#3A6EA5'];
                const accent = accents[index % accents.length];

                return (
                  <Tilt key={item.event} maxTilt={6} className="h-full">
                    <motion.div
                      variants={fadeUp}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className="p-6 rounded-2xl bg-[#1A1815] border border-[#2E2A26] hover:border-[#FF6B35]/30 shadow-xl shadow-[#0F0E0D]/40 flex flex-col justify-between text-left h-full group relative overflow-hidden"
                    >
                      {/* Top accent line */}
                      <div
                        className="absolute top-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: accent }}
                      />

                      <div>
                        {/* Header */}
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                            style={{ backgroundColor: `${accent}15` }}
                          >
                            {index === 0 ? (
                              <Medal className="w-5 h-5" style={{ color: accent }} strokeWidth={2.2} />
                            ) : index === 1 ? (
                              <Users className="w-5 h-5" style={{ color: accent }} strokeWidth={2.2} />
                            ) : (
                              <Award className="w-5 h-5" style={{ color: accent }} strokeWidth={2.2} />
                            )}
                          </div>

                          <div className="flex flex-col items-end">
                            <span
                              className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
                              style={{
                                backgroundColor: `${accent}15`,
                                border: `1px solid ${accent}30`,
                                color: accent,
                              }}
                            >
                              {item.badge}
                            </span>
                            <span className="text-[11px] text-[#9C9388] mt-1">
                              {item.year}
                            </span>
                          </div>
                        </div>

                        {/* Title & Event */}
                        <h4 className="text-lg font-bold font-heading text-[#F5F0E8] group-hover:text-[#FF6B35] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs font-semibold text-[#FF6B35] mt-1">
                          {item.event}
                        </p>
                        {item.team && (
                          <p className="text-[11px] text-[#9C9388] mt-0.5">
                            Team: {item.team}
                          </p>
                        )}

                        {/* Description */}
                        <p className="text-xs text-[#9C9388] mt-3 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="mt-6 pt-3 border-t border-[#2E2A26] flex items-center justify-between text-[11px] text-[#9C9388]">
                        <span className="flex items-center gap-1.5 font-medium text-[#2EC4B6]">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Verified Credential
                        </span>
                      </div>
                    </motion.div>
                  </Tilt>
                );
              })}
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </SectionCanvas>
  );
}
