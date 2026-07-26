import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Smartphone, Wrench, Code } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import DotGrid from './DotGrid';

export default function Skills() {
  const iconMap = {
    Smartphone: Smartphone,
    Cpu: Cpu,
    Wrench: Wrench,
  };

  const categoryAccents = {
    Android: { color: '#FF6B35', bg: 'rgba(255, 107, 53, 0.12)' },
    'AI / Backend': { color: '#2EC4B6', bg: 'rgba(46, 196, 182, 0.12)' },
    Tools: { color: '#3A6EA5', bg: 'rgba(58, 110, 165, 0.15)' },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Reactive Dot Grid */}
      <DotGrid count={12} maxOffset={12} className="bottom-12 left-8 hidden md:block" />

      {/* Background ambient glow blob */}
      <div className="absolute top-[30%] left-[-10%] w-[380px] h-[380px] bg-[#2EC4B6]/4 blur-[120px] rounded-full pointer-events-none" />


      <div className="layout-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-10"
        >
          {/* Section Header */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="w-8 h-1 rounded-full bg-[#2EC4B6]" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#2EC4B6]">Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#F5F0E8]">
              Technical toolkit
            </h2>
          </div>

          {/* Skill Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillsData.map((group, index) => {
              const IconComponent = iconMap[group.iconName] || Code;
              const accent = categoryAccents[group.category] || categoryAccents.Tools;

              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
                  className="p-6 rounded-2xl bg-[#1A1815] border border-[#2E2A26] card-hover flex flex-col justify-between"
                >
                  <div>
                    {/* Category header */}
                    <div className="flex items-center gap-3 pb-4 mb-5 border-b border-[#2E2A26]">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: accent.bg }}
                      >
                        <IconComponent className="w-5 h-5" style={{ color: accent.color }} strokeWidth={2.2} />
                      </div>
                      <h3 className="font-heading text-base font-bold text-[#F5F0E8]">
                        {group.category}
                      </h3>
                    </div>

                    {/* Chips with Staggered scale pop */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2"
                    >
                      {group.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          variants={chipVariants}
                          className="px-3 py-1.5 rounded-full font-code text-xs font-medium border transition-colors hover:brightness-125 cursor-default"
                          style={{
                            backgroundColor: accent.bg,
                            color: accent.color,
                            borderColor: `${accent.color}30`,
                          }}
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#2E2A26]/60 text-[11px] text-[#9C9388]">
                    {group.skills.length} core technologies
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
