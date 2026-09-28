import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Code2, Globe, Sparkles, Brain, Briefcase, FileCheck } from 'lucide-react';

const certificates = [
  {
    title: 'Full Stack Developer',
    category: 'Full Stack & Web Architecture',
    credential: 'Professional Certification',
    icon: Code2,
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Web Developer',
    category: 'Modern Web & Frontend Engineering',
    credential: 'Professional Certification',
    icon: Globe,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Generative AI',
    category: 'Advanced AI & LLM Applications',
    credential: 'Professional Certification',
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Beginner AI',
    category: 'AI Fundamentals & Machine Learning',
    credential: 'Foundational Certification',
    icon: Brain,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'AI for Business Professionals',
    category: 'Applied AI & Enterprise Productivity',
    credential: 'Professional Specialization',
    icon: Briefcase,
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Resume Writing and Job Interviewing Certificate',
    category: 'Career Development & Communication',
    credential: 'Professional Certification • Khushi',
    icon: FileCheck,
    gradient: 'from-rose-500 to-red-600',
  },
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
          <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Industry-recognized credentials in Full Stack & Web Development, Artificial Intelligence, and Career Skills.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => {
            const Icon = cert.icon || Award;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 flex flex-col items-center text-center group hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${cert.gradient} flex items-center justify-center text-white shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <Icon size={30} />
                </div>

                <span className="text-[11px] font-semibold tracking-wider uppercase text-primary dark:text-accent mb-2">
                  {cert.category}
                </span>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-auto pt-4 flex items-center gap-1.5">
                  <Award size={14} className="text-accent" />
                  {cert.credential}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
