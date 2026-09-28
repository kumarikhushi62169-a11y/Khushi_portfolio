import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Layout, Server, Smartphone, Database, Code, Zap, Layers } from 'lucide-react';

const services = [
  {
    title: 'Full Stack Development',
    description: 'End-to-end web applications combining robust backend architectures with dynamic, intuitive frontends and database management.',
    icon: Layers
  },
  {
    title: 'Flutter & Mobile Development',
    description: 'Cross-platform mobile applications for Android & iOS with smooth animations, native performance, and responsive UI.',
    icon: Smartphone
  },
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and performant user interfaces using modern React, Tailwind CSS, and animations.',
    icon: Layout
  },
  {
    title: 'Backend Development',
    description: 'Creating robust, scalable server-side architectures, RESTful APIs, and secure authentication systems with Node.js.',
    icon: Server
  },
  {
    title: 'REST API & Database',
    description: 'Designing and implementing secure, high-performance RESTful APIs backed by SQL & MongoDB for seamless data flow.',
    icon: Database
  },
  {
    title: 'Responsive Website Design',
    description: 'Ensuring your application looks and functions flawlessly across all screens, from handheld phones to wide desktops.',
    icon: Smartphone
  },
  {
    title: 'Portfolio Development',
    description: 'Crafting premium, modern personal and professional portfolios to showcase your work and skills effectively.',
    icon: Code
  },
  {
    title: 'Website Optimization',
    description: 'Improving core web vitals, speed, responsiveness, and SEO rankings to provide the best possible user experience.',
    icon: Zap
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-transparent" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">What I Do</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Comprehensive Full Stack, Mobile, and Web Development services designed to bring modern digital solutions to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card p-6 flex flex-col group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-900 dark:text-white mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon size={26} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
