import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Astra SOS (Safety & ML)",
      description: "Comprehensive Android safety application featuring a real-time 'Safety Heatmap' and color-coded incident mapping for proactive threat visualization.",
      tags: ["Kotlin", "Jetpack Compose", "Google Maps API", "Firebase", "Faster-Whisper"],
      github: "https://github.com/Ashu-sosuke/Astra_SOS",
      deepDive: "#"
    },
    {
      title: "Luxora (E-commerce UI)",
      description: "Full-stack e-commerce app with secure login, intuitive UI/UX, and real-time inventory management using MVVM architecture.",
      tags: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM", "UPI"],
      github: "https://github.com/Ashu-sosuke/Luxora"
    },
    {
      title: "Face Recognition (Computer Vision)",
      description: "Computer vision pipeline utilizing OpenCV and CNNs for high-speed, real-time facial identification.",
      tags: ["Python", "OpenCV", "CameraX", "CNNs"],
      github: "https://github.com/Ashu-sosuke/Face-Recognition"
    }
  ];

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      {/* Background Decorative Elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.03) 0%, transparent 70%)',
        filter: 'blur(50px)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '5rem' }}
        >
          <span style={{ color: '#10B981', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem' }}>Portfolio</span>
          <h2 style={{ fontSize: '3.5rem', marginTop: '0.5rem', fontWeight: '800' }}>Featured Work</h2>
          <div style={{ width: '80px', height: '6px', backgroundColor: '#10B981', marginTop: '1.5rem', borderRadius: '3px' }} />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2.5rem'
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
