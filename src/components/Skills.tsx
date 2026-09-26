import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 90 },
      { name: 'REST API', level: 90 },
      { name: 'JWT Authentication', level: 90 },
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'Firebase', level: 90 },
      { name: 'Oracle', level: 85 },
    ]
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'VS Code & Postman', level: 95 },
      { name: 'Docker', level: 85 },
      { name: 'Vercel', level: 90 },
    ]
  },
  {
    title: 'AI & Developer Tools',
    skills: [
      { name: 'ChatGPT', level: 95 },
      { name: 'OpenAI Codex', level: 90 },
      { name: 'Cursor AI', level: 92 },
      { name: 'GitHub Copilot', level: 92 },
      { name: 'Claude', level: 90 },
    ]
  },
  {
    title: 'Languages & Currently Pursuing',
    skills: [
      { name: 'Java, Python, C/C++', level: 85 },
      { name: 'Data Analysis', level: 50 },
      { name: 'Graphic Design', level: 50 },
    ]
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:bg-primary/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass-card p-8 group hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center before:content-[''] before:w-3 before:h-3 before:bg-primary before:rounded-full before:mr-3">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
