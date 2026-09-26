import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Code2, Github, Terminal, Coffee } from 'lucide-react';

const stats = [
  { icon: Code2, value: 25, label: 'Projects Completed', suffix: '+' },
  { icon: Terminal, value: 20, label: 'Technologies Learned', suffix: '+' },
  { icon: Github, value: 500, label: 'GitHub Contributions', suffix: '+' },
  { icon: Coffee, value: 2, label: 'Years Learning', suffix: '+' },
];

function Counter({ from, to, duration, inView }: { from: number, to: number, duration: number, inView: boolean }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number | null = null;
    let animationFrame: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * (to - from) + from));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, inView]);

  return <span>{count}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-transparent" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="glass-card p-8 md:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full transition-transform group-hover:scale-150 duration-500"></div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Passionate Full Stack Developer
              </h3>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  I am a passionate Full Stack Developer with experience in developing modern web applications. I specialize in a wide range of technologies, including <strong className="text-slate-900 dark:text-white font-extrabold">HTML5</strong>, <strong className="text-slate-900 dark:text-white font-extrabold">CSS3</strong>, <strong className="text-slate-900 dark:text-white font-extrabold">JavaScript</strong>, <strong className="text-slate-900 dark:text-white font-extrabold">TypeScript</strong>, <strong className="text-slate-900 dark:text-white font-extrabold">React.js</strong>, <strong className="text-slate-900 dark:text-white font-extrabold">Tailwind CSS</strong>, <strong className="text-slate-900 dark:text-white font-extrabold">Node.js</strong>, <strong className="text-slate-900 dark:text-white font-extrabold">Express.js</strong>, <strong className="text-slate-900 dark:text-white font-extrabold">MongoDB</strong>, <strong className="text-slate-900 dark:text-white font-extrabold">MySQL</strong>, <strong className="text-slate-900 dark:text-white font-extrabold">Git</strong>, and <strong className="text-slate-900 dark:text-white font-extrabold">REST APIs</strong>.
                </p>
                <p>
                  I enjoy solving real-world problems through scalable and user-friendly applications. Currently, I am expanding my capabilities by pursuing advanced competencies in Data Analysis and Graphic Design to bridge analytical thinking with clean visual aesthetics.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new design trends, contributing to open source, or learning about the latest in web technologies.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="glass-card p-6 flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center text-primary dark:text-accent mb-4">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 flex items-center">
                    <Counter from={0} to={stat.value} duration={2} inView={isInView} />
                    <span className="text-primary">{stat.suffix}</span>
                  </h4>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
