import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Layout, Server, Smartphone, Database, Code, Zap } from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and performant user interfaces using modern React, Tailwind CSS, and animations.',
    icon: Layout
  },
  {
    title: 'Backend Development',
    description: 'Creating robust, scalable server-side architectures, business logic, and authentication systems with Node.js.',
    icon: Server
  },
  {
    title: 'Responsive Website Design',
    description: 'Ensuring your application looks and functions perfectly across all devices, from mobile phones to large desktop screens.',
    icon: Smartphone
  },
  {
    title: 'REST API Development',
    description: 'Designing and implementing secure, efficient, and well-documented RESTful APIs for seamless data exchange.',
    icon: Database
  },
  {
    title: 'Portfolio Development',
    description: 'Crafting premium, award-winning personal and professional portfolios to showcase your work and skills effectively.',
    icon: Code
  },
  {
    title: 'Website Optimization',
    description: 'Improving core web vitals, load times, and SEO rankings to provide the best possible user experience.',
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
            I offer a wide range of web development services to help you bring your ideas to life with modern technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-900 dark:text-white mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
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
