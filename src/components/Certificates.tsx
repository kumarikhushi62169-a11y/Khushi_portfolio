import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award } from 'lucide-react';

const certificates = [
  'Web Development Bootcamp',
  'React Development & Advanced Patterns',
  'JavaScript Algorithms and Data Structures',
  'Node.js & Express.js Backend Architecture',
  'Python Programming',
  'Version Control with Git & GitHub'
];

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="py-24 relative" ref={ref}>
      <div className="absolute -left-64 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:bg-secondary/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Certifications</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col items-center text-center group hover:bg-white/60 dark:hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                {cert}
              </h3>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-auto pt-4">
                Professional Certification
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
