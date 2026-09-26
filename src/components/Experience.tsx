import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Briefcase, ChevronRight } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Web Development Intern',
    company: 'Technoster Technology Institute',
    period: 'Present',
    description: 'Currently working on live projects and collaborating on real-world development tasks with professional practices.',
    highlights: [
      'Currently working on live projects, developing and optimizing full-stack features',
      'Collaborating on real-world development tasks while following professional development and project practices',
      'Developing scalable frontend and backend architectures while solving practical coding challenges',
      'Ensuring high code quality, maintainability, and clean architecture standards'
    ]
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 md:border-none space-y-12">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-29px] md:left-1/2 md:-translate-x-1/2 w-14 h-14 bg-white dark:bg-slate-900 border-4 border-primary/30 rounded-full flex items-center justify-center z-10 shadow-lg">
                <Briefcase size={20} className="text-primary" />
              </div>

              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'} pl-8 md:pl-0 mt-4 md:mt-0`}>
                <div className="glass-card p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300 relative group">
                  {/* Small arrow pointing to timeline dot (desktop) */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-slate-800 rotate-45 ${index % 2 === 0 ? '-left-2 border-l border-b border-white/20 dark:border-slate-700/50' : '-right-2 border-r border-t border-white/20 dark:border-slate-700/50'}`}></div>
                  
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 rounded-full text-sm font-semibold mb-4">
                    {exp.period}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-4">
                    {exp.company}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-slate-600 dark:text-slate-400">
                        <ChevronRight size={18} className="text-primary shrink-0 mt-0.5 mr-2" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
