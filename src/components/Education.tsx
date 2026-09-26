import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Dr. Bhim Rao Ambedkar University',
    period: 'Expected Graduation: 2027',
    score: null
  },
  {
    degree: 'Intermediate (12th Grade)',
    institution: 'Board of Intermediate Education',
    period: 'Completed',
    score: '75.64%'
  },
  {
    degree: 'High School (10th Grade)',
    institution: 'Board of High School',
    period: 'Completed',
    score: '74.69%'
  }
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-transparent" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary dark:bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {item.degree}
                  </h3>
                  <h4 className="text-lg text-slate-600 dark:text-slate-300 font-medium mb-2">
                    {item.institution}
                  </h4>
                  <div className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400">
                    <Calendar size={16} className="mr-2" />
                    {item.period}
                  </div>
                </div>
              </div>
              
              {item.score && (
                <div className="md:text-right ml-16 md:ml-0">
                  <div className="inline-flex flex-col items-center justify-center px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Score</span>
                    <span className="text-2xl font-bold text-primary dark:text-accent">{item.score}</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
