import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import LoadingScreen from '../components/LoadingScreen';
import ScrollProgress from '../components/ScrollProgress';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certificates from '../components/Certificates';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ResumeModal from '../components/ResumeModal';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {!isLoading && (
        <div className="min-h-screen flex flex-col bg-light dark:bg-dark relative overflow-hidden">
          {/* Global Background Orbs */}
          <div className="fixed top-[-100px] left-[-100px] w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
          <div className="fixed bottom-[-50px] right-[10%] w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
          
          <ScrollProgress />
          <Navbar onOpenResume={() => setIsResumeOpen(true)} />
          
          <main className="flex-grow">
            <Hero onOpenResume={() => setIsResumeOpen(true)} />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Certificates />
            <Services />
            <Testimonials />
            <Contact />
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
}
