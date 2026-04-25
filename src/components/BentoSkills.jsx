import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Database, 
  Wrench, 
  Smartphone,
  Server,
  Cloud,
  Cpu
} from 'lucide-react';

const SkillBadge = ({ name, color }) => {
  // Simple mapping of names to representative icons/colors if needed
  // For now we use the dot or a generic icon with the brand color
  return (
    <motion.div
      whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)', borderColor: color }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.6rem 1.1rem',
        backgroundColor: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '10px',
        color: 'rgba(255,255,255,0.8)',
        fontSize: '0.9rem',
        transition: 'all 0.3s ease',
        cursor: 'default'
      }}
    >
      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: color, boxShadow: `0 0 8px ${color}` }} />
      <span>{name}</span>
    </motion.div>
  );
};

const CategorizedSkills = () => {
  const categories = [
    {
      title: "Languages",
      icon: <Code2 size={22} color="#10B981" />,
      skills: [
        { name: "Kotlin", color: "#7F52FF" },
        { name: "Java", color: "#ED8B00" },
        { name: "Python", color: "#3776AB" },
        { name: "C / C++", color: "#00599C" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "SQL", color: "#4479A1" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers size={22} color="#10B981" />,
      skills: [
        { name: "Jetpack Compose", color: "#4285F4" },
        { name: "FastAPI", color: "#05998B" },
        { name: "React", color: "#61DAFB" },
        { name: "Framer Motion", color: "#E10098" },
        { name: "Coroutines", color: "#4285F4" },
        { name: "Ktor", color: "#F88909" }
      ]
    },
    {
      title: "Databases & Backend",
      icon: <Database size={22} color="#10B981" />,
      skills: [
        { name: "Firebase", color: "#FFCA28" },
        { name: "Supabase", color: "#3ECF8E" },
        { name: "PostgreSQL", color: "#336791" },
        { name: "Room DB", color: "#3DDC84" },
        { name: "MongoDB", color: "#47A248" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={22} color="#10B981" />,
      skills: [
        { name: "Git / GitHub", color: "#F05032" },
        { name: "Android Studio", color: "#3DDC84" },
        { name: "Docker", color: "#2496ED" },
        { name: "Postman", color: "#FF6C37" },
        { name: "Figma", color: "#F24E1E" },
        { name: "Google Cloud", color: "#4285F4" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative' }}>
      {/* Decorative Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.02) 0%, transparent 70%)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '6rem', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem' }}>Skills & Expertise<span style={{ color: '#10B981' }}>.</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            A collection of technologies I'm proficient with, leveraging modern tools to build impactful solutions.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 style={{ 
                fontSize: '1.4rem', 
                color: '#fff', 
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontWeight: '700'
              }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '12px', 
                  backgroundColor: 'rgba(16, 185, 129, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  {cat.icon}
                </div>
                {cat.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                {cat.skills.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} color={skill.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorizedSkills;
