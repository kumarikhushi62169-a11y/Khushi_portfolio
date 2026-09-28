import React, { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import avatarImg from '../assets/images/female_developer_avatar_1785307560850.jpg';

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden" ref={heroRef}>
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:bg-primary/10 dark:mix-blend-normal"></div>
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:bg-secondary/10 dark:mix-blend-normal"></div>
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 dark:bg-accent/10 dark:mix-blend-normal"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left">
            <span className="hero-text text-accent font-mono text-sm tracking-widest uppercase mb-4 block">
              Welcome to my world
            </span>
            <h1 className="hero-text text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-[1.1]">
              Hi, I'm <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">KHUSHI</span>
            </h1>
            <div className="hero-text text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 mb-6 flex items-center justify-center lg:justify-start space-x-2 h-12">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Web Developer',
                  2000,
                  'MERN Stack Developer',
                  2000,
                  'Flutter Developer',
                  2000,
                  'Mobile Application Developer',
                  2000,
                  'Frontend Developer',
                  2000,
                  'Backend Developer',
                  2000,
                  'React Developer',
                  2000,
                  'Node.js Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse mt-1"></span>
            </div>
            <p className="hero-text text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
              I am a passionate Full Stack Developer with experience in developing modern web applications. I solve real-world problems through scalable software.
            </p>
            
            <div className="hero-text flex flex-wrap gap-4 justify-center lg:justify-start mb-10 pt-4">
              <a
                href="#contact"
                className="px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-sm shadow-xl hover:scale-105 transition-transform flex items-center justify-center"
              >
                Hire Me
              </a>
              <button
                type="button"
                onClick={onOpenResume}
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download size={18} className="text-white" />
                Resume
              </button>
            </div>

            <div className="hero-text flex items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/kumarikhushi62169-a11y"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 rounded-full bg-[#181717] hover:bg-black text-white flex items-center justify-center shadow-lg hover:shadow-black/40 hover:-translate-y-1 hover:scale-110 transition-all duration-300"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/khushi-kumari-20a6b4357/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white flex items-center justify-center shadow-lg hover:shadow-[#0A66C2]/40 hover:-translate-y-1 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kumarikhushi62169@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email kumarikhushi62169@gmail.com"
                title="Send email to kumarikhushi62169@gmail.com"
                className="w-12 h-12 rounded-full bg-[#EA4335] hover:bg-[#c5221f] text-white flex items-center justify-center shadow-lg hover:shadow-[#EA4335]/40 hover:-translate-y-1 hover:scale-110 transition-all duration-300"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <motion.div 
              className="relative w-72 h-72 md:w-96 md:h-96"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-40 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/50 dark:border-slate-800/50 shadow-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <img src={avatarImg} alt="Software Engineer Avatar" className="w-full h-full object-cover" />
              </div>
              
              {/* Floating badges */}
              <motion.div 
                className="absolute top-10 -left-6 glass-card px-4 py-2 flex items-center gap-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium dark:text-white">Available for work</span>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-12 -right-6 glass-card p-3"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-2xl font-bold text-primary dark:text-accent block text-center">1+</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Years Exp.</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
