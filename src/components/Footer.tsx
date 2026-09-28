import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white/5 dark:bg-slate-900/10 backdrop-blur-xl border-t border-black/5 dark:border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#home" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white mb-4 block">
              KHUSHI<span className="text-primary">.</span>
            </a>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm">
              Building Modern, Scalable & User-Friendly Web Applications. 
              Let's create something amazing together.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/kumarikhushi62169-a11y"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-[#181717] hover:bg-black text-white flex items-center justify-center shadow-md hover:shadow-black/40 hover:-translate-y-1 hover:scale-110 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/khushi-kumari-20a6b4357/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white flex items-center justify-center shadow-md hover:shadow-[#0A66C2]/40 hover:-translate-y-1 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kumarikhushi62169@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email kumarikhushi62169@gmail.com"
                title="Send email to kumarikhushi62169@gmail.com"
                className="w-10 h-10 rounded-full bg-[#EA4335] hover:bg-[#c5221f] text-white flex items-center justify-center shadow-md hover:shadow-[#EA4335]/40 hover:-translate-y-1 hover:scale-110 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Experience'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {['Frontend Development', 'Backend Development', 'REST API Design', 'Web Optimization', 'Responsive Design'].map((item) => (
                <li key={item}>
                  <span className="text-slate-600 dark:text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Khushi. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:-translate-y-1 transition-transform shadow-lg shadow-primary/30 focus:outline-none"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
