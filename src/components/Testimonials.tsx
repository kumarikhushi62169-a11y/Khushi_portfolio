import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    content: 'Khushi is an exceptional developer who consistently delivers high-quality work. Her attention to detail and ability to solve complex problems made our project a huge success.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartupX',
    content: 'Working with Khushi was a great experience. She brings a perfect blend of technical expertise and creative problem-solving. The frontend she built for us is both beautiful and performant.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Lead Designer',
    company: 'Creative Studio',
    content: 'I highly recommend Khushi for any web development needs. She perfectly translated our designs into functional, pixel-perfect code while adding smooth, premium animations.',
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/5 dark:bg-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Client Testimonials</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative h-[400px] sm:h-[350px] md:h-[300px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0"
            >
              <div className="glass-card p-8 md:p-12 h-full flex flex-col items-center text-center">
                <Quote size={40} className="text-primary/20 dark:text-primary/30 mb-6" />
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="mt-auto">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm font-medium text-primary">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-slate-300 dark:bg-slate-700 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
