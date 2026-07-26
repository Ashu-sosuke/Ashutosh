import React from 'react';
import { motion } from 'framer-motion';
import { Award, Medal, Star, Users } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const customBezier = [0.22, 1, 0.36, 1];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background ambient glow blob */}
      <div className="absolute top-[40%] right-[-10%] w-[380px] h-[380px] bg-[#FF6B35]/4 blur-[120px] rounded-full pointer-events-none" />

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
              <span className="w-8 h-1 rounded-full bg-[#FF6B35]" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#FF6B35]">Achievements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#F5F0E8]">
              Recognition & hackathons
            </h2>
          </div>

          {/* Centered cards layout */}
          <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
            {achievementsData.map((item, index) => (
              <motion.div
                key={item.event}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: customBezier, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#1A1815] border border-[#2E2A26] card-hover shadow-lg group relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF6B35] via-[#2EC4B6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: index === 0 ? 'rgba(255,107,53,0.12)' : 'rgba(46,196,182,0.12)',
                      }}
                    >
                      {index === 0 ? (
                        <Medal className="w-6 h-6 text-[#FF6B35]" strokeWidth={2.2} />
                      ) : (
                        <Star className="w-6 h-6 text-[#2EC4B6]" strokeWidth={2.2} />
                      )}
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="px-2.5 py-1 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] border border-[#FF6B35]/25 text-xs font-semibold">
                        {item.year}
                      </span>
                      {item.team && (
                        <span className="text-[11px] text-[#9C9388] mt-1 flex items-center gap-1">
                          <Users className="w-3 h-3 text-[#2EC4B6]" strokeWidth={2.2} /> {item.team}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Event */}
                  <h3 className="text-xl font-bold font-heading text-[#F5F0E8] group-hover:text-[#FF6B35] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#FF6B35] mt-1">
                    {item.event}
                  </p>
                  <p className="text-xs text-[#9C9388] mt-0.5">
                    {item.location || item.team}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#9C9388] mt-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-[#2E2A26] flex items-center justify-between text-xs">
                  <span className="text-[#2EC4B6] flex items-center gap-1.5 font-medium">
                    <Award className="w-3.5 h-3.5" strokeWidth={2.2} /> Verified Achievement
                  </span>
                  <span className="text-[#9C9388]">National Level</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
