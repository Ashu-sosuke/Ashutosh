import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="project-card"
    >
      <div
        style={{
          transform: "translateZ(50px)",
          backgroundColor: "rgba(20, 20, 20, 0.8)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
          padding: "2rem",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: hovered ? "0 20px 40px rgba(16, 185, 129, 0.15)" : "none",
          transition: "box-shadow 0.3s ease",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {hovered && (
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
        )}

        <div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#fff" }}>{project.title}</h3>
          <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.95rem", marginBottom: "2rem" }}>
            {project.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.1, rotate: 2 }}
                style={{
                  fontSize: "0.75rem",
                  padding: "0.4rem 0.8rem",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "4px",
                  color: "#10B981",
                  border: "1px solid rgba(16, 185, 129, 0.2)"
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <a
            href={project.github}
            style={{ fontSize: "0.85rem", fontWeight: "600", color: "#10B981", display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            View on GitHub →
          </a>
          {project.deepDive && (
             <a
             href={project.deepDive}
             style={{ fontSize: "0.85rem", fontWeight: "600", color: "rgba(255,255,255,0.5)" }}
           >
             Project Deep Dive
           </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
