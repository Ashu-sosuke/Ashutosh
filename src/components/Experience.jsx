import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight, Zap, ArrowUpRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient glow blob */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-[#2EC4B6]/4 blur-[120px] rounded-full pointer-events-none" />

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
              <span className="text-xs font-medium uppercase tracking-widest text-[#2EC4B6]">Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#F5F0E8]">
              Where I've worked & what's next
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative pl-5 sm:pl-8 border-l-2 border-[#2E2A26] ml-2 sm:ml-4 space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[27px] sm:-left-[41px] top-2 w-5 h-5 rounded-full bg-[#0F0E0D] border-[3px] border-[#FF6B35] shadow-md shadow-[#FF6B35]/15" />

                {/* Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#1A1815] border border-[#2E2A26] card-hover shadow-lg group">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#2E2A26]">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F0E8]">
                          {exp.role}
                        </h3>
                        <span className="text-sm font-medium text-[#FF6B35]">
                          @ {exp.company}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#2EC4B6]/12 text-[#2EC4B6] border border-[#2EC4B6]/25">
                          {exp.badge}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-[#9C9388] flex-wrap">
                      <span className="flex items-center gap-1.5 bg-[#0F0E0D] px-3 py-1.5 rounded-lg border border-[#2E2A26]">
                        <Calendar className="w-3.5 h-3.5 text-[#FF6B35]" strokeWidth={2.2} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 bg-[#0F0E0D] px-3 py-1.5 rounded-lg border border-[#2E2A26]">
                        <MapPin className="w-3.5 h-3.5 text-[#2EC4B6]" strokeWidth={2.2} />
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="mt-5 space-y-3.5">
                    {exp.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-3 text-sm leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-[#F5F0E8]/90">
                          {point.includes("Razorpay") ? (
                            <>
                              {point.split("Razorpay")[0]}
                              <strong className="text-[#FF6B35] font-semibold">Razorpay</strong>
                              {point.split("Razorpay")[1]}
                            </>
                          ) : point.includes("reducing data-fetch latency by 30%") ? (
                            <>
                              {point.split("reducing data-fetch latency by 30%")[0]}
                              <strong className="text-[#2EC4B6] font-semibold">reducing data-fetch latency by 30%</strong>
                              {point.split("reducing data-fetch latency by 30%")[1]}
                            </>
                          ) : (
                            point
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack strip */}
                  <div className="mt-5 pt-4 border-t border-[#2E2A26] text-xs text-[#9C9388]">
                    <span className="flex items-center gap-1.5 text-[#FF6B35] font-medium">
                      <Zap className="w-3.5 h-3.5" strokeWidth={2.2} />
                      Core Stack: Kotlin · Jetpack Compose · Firebase Firestore · Razorpay SDK
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* What's Next Timeline Item */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[27px] sm:-left-[41px] top-2 w-5 h-5 rounded-full bg-[#0F0E0D] border-[3px] border-[#2EC4B6]/60 shadow-md shadow-[#2EC4B6]/15" />

              {/* Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#1A1815]/40 border border-[#2E2A26] border-dashed shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1">
                  <h4 className="text-lg font-bold font-heading text-[#F5F0E8]">
                    Currently Seeking Next Opportunities
                  </h4>
                  <p className="text-sm text-[#9C9388] leading-relaxed max-w-xl">
                    Exploring Android Developer Internships and backend collaborations focusing on Kotlin/Compose architectures or FastAPI AI system deployments.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="px-5 py-2.5 rounded-full bg-[#2EC4B6]/10 text-[#2EC4B6] hover:bg-[#2EC4B6]/20 border border-[#2EC4B6]/25 transition-all text-xs font-semibold shrink-0 inline-flex items-center gap-1.5"
                >
                  <span>Let's collaborate</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
