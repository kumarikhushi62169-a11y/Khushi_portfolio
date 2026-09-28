import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Github } from 'lucide-react';
import projectWeatherApp from '../assets/images/project_weather_app_1785227708626.jpg';
import projectSnakeGame from '../assets/images/project_snake_game_1785227726768.jpg';
import projectWeatherBackend from '../assets/images/project_weather_backend_1785227745521.jpg';

const projects = [
  // Frontend Projects
  {
    title: 'Weather App',
    description: 'A responsive weather application providing current conditions and forecasts for cities worldwide.',
    image: projectWeatherApp,
    tech: ['React', 'Tailwind CSS', 'OpenWeather API'],
    category: 'Frontend',
    github: 'https://github.com/kumarikhushi62169-a11y',
    live: 'https://khushi-weather-app.netlify.app'
  },
  {
    title: 'Animation Counter App',
    description: 'An interactive application featuring beautiful scroll-triggered number animations and stat counters.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tech: ['HTML/CSS', 'JavaScript', 'GSAP'],
    category: 'Frontend',
    github: 'https://github.com/kumarikhushi62169-a11y',
    live: 'https://khushi-animation-counter.netlify.app'
  },
  {
    title: 'Todo App',
    description: 'A task management interface with drag-and-drop functionality, local storage persistence, and filtering.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Redux', 'CSS Modules'],
    category: 'Frontend',
    github: 'https://github.com/kumarikhushi62169-a11y',
    live: 'https://khushi-todo-app.netlify.app'
  },
  {
    title: 'Car Game',
    description: 'A 2D browser-based racing game with collision detection, score tracking, and keyboard controls.',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800',
    tech: ['HTML5 Canvas', 'JavaScript', 'CSS3'],
    category: 'Frontend',
    github: 'https://github.com/kumarikhushi62169-a11y',
    live: 'https://khushi-car-game.netlify.app'
  },
  {
    title: 'Snake Game',
    description: 'Classic retro snake game rebuilt for the web with responsive design and high-score saving.',
    image: projectSnakeGame,
    tech: ['JavaScript', 'HTML/CSS'],
    category: 'Frontend',
    github: 'https://github.com/kumarikhushi62169-a11y',
    live: 'https://khushi-snake-game.netlify.app'
  },
  {
    title: 'Calculator App',
    description: 'A sleek, fully functional calculator web application with basic arithmetic operations and a clean UI.',
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=800',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    github: 'https://github.com/kumarikhushi62169-a11y',
    live: 'https://khushi-calculator.netlify.app'
  },
  {
    title: 'Mouse Zoomer Effect',
    description: 'An interactive image zoomer component that follows the mouse cursor for detailed product viewing.',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'CSS', 'Framer Motion'],
    category: 'Frontend',
    github: 'https://github.com/kumarikhushi62169-a11y',
    live: 'https://khushi-mouse-zoomer.netlify.app'
  },
  // Fullstack Projects
  {
    title: 'Employee Management System (EMS)',
    description: 'Currently working on a full-stack Employee Management System with role-based access, attendance tracking, department management, and MongoDB database integration.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB (Currently in Progress)'],
    category: 'Fullstack',
    github: 'https://github.com/kumarikhushi62169-a11y',
    live: 'https://github.com/kumarikhushi62169-a11y'
  },
  {
    title: 'E-Commerce Website',
    description: 'A full-stack e-commerce platform with product browsing, shopping cart, and secure checkout features.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    category: 'Fullstack',
    github: 'https://github.com/kumarikhushi62169-a11y',
    live: 'https://khushi-ecommerce.netlify.app'
  },
  {
    title: 'Real-Time Chat App',
    description: 'A full-stack messaging platform with private and group chat features, read receipts, and online status.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    category: 'Fullstack',
    github: 'https://github.com/kumarikhushi62169-a11y',
    live: 'https://khushi-chat-app.netlify.app'
  },
  {
    title: 'CRUD Application',
    description: 'A robust data management dashboard supporting create, read, update, and delete operations with user auth.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    tech: ['MERN Stack', 'Tailwind', 'JWT'],
    category: 'Fullstack',
    github: 'https://github.com/kumarikhushi62169-a11y',
    live: 'https://khushi-crud-app.netlify.app'
  },
  {
    title: 'Hospital Website',
    description: 'Secure platform for scheduling appointments, managing patient records, and tracking staff schedules.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'Express', 'MongoDB'],
    category: 'Fullstack',
    github: 'https://github.com/kumarikhushi62169-a11y',
    live: 'https://khushi-hospital-website.netlify.app'
  },
  // Backend Projects
  {
    title: 'Image Gallery API',
    description: 'A RESTful API service for uploading, compressing, tagging, and retrieving high-resolution images.',
    image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&q=80&w=800',
    tech: ['Node.js', 'Express', 'Cloudinary', 'MongoDB'],
    category: 'Backend',
    github: 'https://github.com/kumarikhushi62169-a11y',
    live: 'https://khushi-image-gallery-api.netlify.app'
  },
  {
    title: 'News Aggregator API',
    description: 'A backend service that scrapes, categorizes, and serves the latest news articles from various global sources.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
    tech: ['Python', 'Django', 'PostgreSQL'],
    category: 'Backend',
    github: 'https://github.com/kumarikhushi62169-a11y',
    live: 'https://khushi-news-api.netlify.app'
  },
  {
    title: 'Real-Time Weather Service',
    description: 'A high-performance backend microservice for aggregating and caching weather data via WebSocket streams.',
    image: projectWeatherBackend,
    tech: ['Go', 'Redis', 'WebSockets'],
    category: 'Backend',
    github: 'https://github.com/kumarikhushi62169-a11y',
    live: 'https://khushi-weather-service.netlify.app'
  }
];

const categories = ['All', 'Frontend', 'Backend', 'Fullstack'];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 bg-transparent" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-primary shadow-sm border border-slate-200 dark:border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card group overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10 duration-300"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary dark:bg-primary/20 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
