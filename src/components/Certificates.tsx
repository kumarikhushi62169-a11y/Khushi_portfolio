import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { 
  Award, 
  ExternalLink, 
  Eye, 
  Building2, 
  Calendar, 
  CheckCircle2, 
  X, 
  Code2, 
  Globe, 
  Sparkles, 
  Brain, 
  Briefcase, 
  FileCheck,
  ShieldCheck,
  Download
} from 'lucide-react';
import hpLifeCertImage from '../assets/images/hp_life_ai_certificate.svg';
import hpLifeBeginnersCertImage from '../assets/images/hp_life_ai_beginners_certificate.svg';
import hpLifeResumeCertImage from '../assets/images/hp_life_resume_interviewing_certificate.svg';
import hpLifeBusinessWebsitesCertImage from '../assets/images/hp_life_effective_business_websites_certificate.svg';
import proUpWebDevCertImage from '../assets/images/proup_web_development_certificate.svg';
import fullStackCertImage from '../assets/images/fullstack_developer_certificate.svg';

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  image?: string;
  icon: React.ElementType;
  gradient: string;
  skills: string[];
  description: string;
}

const certificatesData: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'Full Stack Technical Skills',
    issuer: 'Applied Project Competencies',
    category: 'Full Stack Development',
    issueDate: '2025–2026',
    credentialId: 'SKILLS-FULLSTACK-KHUSHI',
    credentialUrl: '#projects',
    image: fullStackCertImage,
    icon: Code2,
    gradient: 'from-blue-600 to-indigo-600',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'MySQL'],
    description: 'Demonstrated hands-on full stack engineering proficiency verified through real-world applications: Employee Management System (EMS), E-Commerce, Real-Time Chat, and CRUD systems.'
  },
  {
    id: 'cert-2',
    title: 'Web Development Workshop',
    issuer: 'ProUP Innovations & PMCS',
    category: 'Frontend Engineering',
    issueDate: '2nd Nov 2025',
    credentialId: 'PROUP-WD-2025-KHUSHI',
    credentialUrl: 'https://proupinnovations.com',
    image: proUpWebDevCertImage,
    icon: Globe,
    gradient: 'from-red-600 to-orange-500',
    skills: ['Web Development', 'Frontend Engineering', 'Interactive Web', 'Workshop Training'],
    description: 'Successfully participated in the Online Workshop on Web Development organized by ProUP Innovations in association with PMCS.'
  },
  {
    id: 'cert-3',
    title: 'Effective Business Websites',
    issuer: 'HP LIFE | HP Foundation',
    category: 'Web Development & Strategy',
    issueDate: '9/7/2026',
    credentialId: '9dccc195-f803-4ef2-97d9-4032ec2b9a0a',
    credentialUrl: 'https://www.life-global.org',
    image: hpLifeBusinessWebsitesCertImage,
    icon: Globe,
    gradient: 'from-blue-600 to-indigo-600',
    skills: ['Business Websites', 'Customer Behavior', 'Website Metrics', 'Web Best Practices'],
    description: 'Learned best-practice development techniques to design business websites, understand customer behavior, and use website metrics effectively.'
  },
  {
    id: 'cert-4',
    title: 'AI for Business Professionals',
    issuer: 'HP LIFE | HP Foundation',
    category: 'Artificial Intelligence',
    issueDate: '9/7/2026',
    credentialId: '1e007d18-d349-4365-82e5-d0a8c9d83f15',
    credentialUrl: 'https://www.life-global.org',
    image: hpLifeCertImage,
    icon: Briefcase,
    gradient: 'from-blue-600 to-cyan-600',
    skills: ['AI in Business', 'Prompt Engineering', 'AI Ethics', 'Professional Growth'],
    description: 'Learned AI role in business, standalone vs integrated AI tools, crafting effective prompts, ethical usage, and leveraging AI for professional growth.'
  },
  {
    id: 'cert-5',
    title: 'AI for Beginners',
    issuer: 'HP LIFE | HP Foundation',
    category: 'Artificial Intelligence',
    issueDate: '9/9/2026',
    credentialId: '4dd0f29e-11d0-45b5-be01-c9144098513f',
    credentialUrl: 'https://www.life-global.org',
    image: hpLifeBeginnersCertImage,
    icon: Brain,
    gradient: 'from-blue-600 to-indigo-600',
    skills: ['AI Fundamentals', 'Data for AI', 'Business Tech', 'AI Ethics'],
    description: 'Gained understanding of AI impact on technology, core concepts and applications, importance of data, enterprise use, and ethical implications.'
  },
  {
    id: 'cert-6',
    title: 'Resume Writing and Job Interviewing',
    issuer: 'HP LIFE | HP Foundation',
    category: 'Professional Development',
    issueDate: '9/3/2026',
    credentialId: '6e24e009-7a76-493a-a929-23bcd6133f0d',
    credentialUrl: 'https://www.life-global.org',
    image: hpLifeResumeCertImage,
    icon: FileCheck,
    gradient: 'from-blue-600 to-teal-600',
    skills: ['Tailored Resume', 'Cover Letter', 'Interview Preparation', 'Self-Assessment'],
    description: 'Learned how to create tailored resumes and cover letters, prepare for high-impact interviews, and utilize self-assessment tools for job search success.'
  }
];

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack Development', 'Frontend Engineering', 'Web Development & Strategy', 'Artificial Intelligence', 'Professional Development'];

  const filteredCerts = activeCategory === 'All'
    ? certificatesData
    : certificatesData.filter(c => c.category === activeCategory);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Decorative Blurs */}
      <div className="absolute -left-64 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 dark:bg-primary/5 pointer-events-none" />
      <div className="absolute -right-64 bottom-1/4 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:bg-accent/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award size={14} />
            Verified Credentials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Industry-recognized credentials in Full Stack & Web Engineering, Artificial Intelligence, and Career Excellence.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md shadow-primary/30 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-primary border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certification Cards Grid Layout */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  layout
                  key={cert.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="glass-card p-6 flex flex-col justify-between group hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Subtle Top Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cert.gradient}`} />

                  <div>
                    {/* Top Header: Icon + Issuing Organization */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className={`w-13 h-13 rounded-2xl bg-gradient-to-tr ${cert.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300`}>
                        <Icon size={24} />
                      </div>

                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700">
                        <Building2 size={12} className="text-primary" />
                        <span className="truncate max-w-[140px]">{cert.issuer}</span>
                      </div>
                    </div>

                    {/* Category Label */}
                    <span className="inline-block text-[11px] font-bold tracking-wider uppercase text-primary dark:text-accent mb-1.5">
                      {cert.category}
                    </span>

                    {/* Certification Name */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>

                    {/* Certificate Image Preview Banner if available */}
                    {cert.image && (
                      <div 
                        onClick={() => setSelectedCert(cert)}
                        className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 mb-3 bg-white dark:bg-slate-800 cursor-pointer group/img shadow-sm hover:shadow-md transition-all"
                        title="Click to view full certificate"
                      >
                        <img 
                          src={cert.image} 
                          alt={`${cert.title} - ${cert.issuer}`} 
                          className="w-full h-36 object-contain bg-white transition-transform duration-500 group-hover/img:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-2.5">
                          <span className="text-[11px] font-semibold text-white flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md">
                            <Eye size={12} />
                            Click to View Certificate
                          </span>
                        </div>
                        <div className="absolute top-2 right-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                          <CheckCircle2 size={10} /> Verified
                        </div>
                      </div>
                    )}

                    {/* Brief Description */}
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                      {cert.description}
                    </p>

                    {/* Skills Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cert.skills.slice(0, 3).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-cyan-300 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-medium text-slate-500 dark:text-slate-400">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Meta & Actions */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        Issued {cert.issueDate}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 size={12} />
                        Verified
                      </span>
                    </div>

                    {/* Buttons: Preview & Link */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-primary/10 text-primary hover:bg-primary hover:text-white dark:bg-primary/20 dark:text-cyan-300 dark:hover:bg-primary dark:hover:text-white transition-all cursor-pointer"
                        title="Preview certificate credential"
                      >
                        <Eye size={14} />
                        Preview
                      </button>

                      <a
                        href={cert.credentialUrl}
                        target={cert.id === 'cert-1' ? '_self' : '_blank'}
                        rel={cert.id === 'cert-1' ? undefined : 'noopener noreferrer'}
                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-primary transition-all"
                        title={cert.id === 'cert-1' ? 'Explore portfolio projects' : 'Open credential verification'}
                      >
                        <ExternalLink size={14} />
                        {cert.id === 'cert-1' ? 'Projects' : 'Verify'}
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 max-w-2xl w-full overflow-hidden relative max-h-[90vh] flex flex-col"
            >
              {/* Modal Top Banner */}
              <div className={`p-5 md:p-6 bg-gradient-to-r ${selectedCert.gradient} text-white relative shrink-0`}>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2 text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">
                  <ShieldCheck size={16} />
                  Official Credential Preview
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {selectedCert.title}
                </h3>
                <p className="text-sm text-white/90 font-medium">
                  Issued by {selectedCert.issuer} • Recipient: Khushi Kumari
                </p>
              </div>

              {/* Certificate Inner Showcase Card */}
              <div className="p-5 md:p-6 overflow-y-auto">
                {selectedCert.image ? (
                  <div className="mb-5 rounded-xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-lg relative bg-white group/full">
                    <img 
                      src={selectedCert.image} 
                      alt={`${selectedCert.title} Certificate`} 
                      className="w-full h-auto object-contain mx-auto"
                    />
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-primary/30 dark:border-primary/20 rounded-xl p-5 bg-slate-50/60 dark:bg-slate-800/40 text-center relative mb-5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 mx-auto flex items-center justify-center text-white shadow-md mb-3">
                      <Award size={24} />
                    </div>

                    <span className="text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
                      Certificate of Completion
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                      Khushi Kumari
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                      Successfully completed and certified in <strong>{selectedCert.title}</strong> by <strong>{selectedCert.issuer}</strong>.
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      <span>ID: {selectedCert.credentialId}</span>
                      <span>•</span>
                      <span>Issued: {selectedCert.issueDate}</span>
                    </div>
                  </div>
                )}

                {/* Serial Number & Meta */}
                <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-lg bg-slate-100 dark:bg-slate-800/60 mb-4 text-xs text-slate-600 dark:text-slate-300">
                  <div className="font-mono">
                    <span className="text-slate-400">Serial No: </span>
                    <strong className="text-primary dark:text-cyan-400">{selectedCert.credentialId}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400">Issued: </span>
                    <strong>{selectedCert.issueDate}</strong>
                  </div>
                </div>

                {/* Skills Verified */}
                <div className="mb-5">
                  <h5 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Verified Competencies
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skills.map((s, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-cyan-300 rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  <a
                    href={selectedCert.credentialUrl}
                    target={selectedCert.id === 'cert-1' ? '_self' : '_blank'}
                    rel={selectedCert.id === 'cert-1' ? undefined : 'noopener noreferrer'}
                    onClick={() => {
                      if (selectedCert.id === 'cert-1') {
                        setSelectedCert(null);
                      }
                    }}
                    className="flex-1 min-w-[160px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/25 transition-all"
                  >
                    <ExternalLink size={16} />
                    {selectedCert.id === 'cert-1' ? 'Explore Live Projects' : `Verify on ${selectedCert.issuer.split(' ')[0]}`}
                  </a>
                  {selectedCert.image && (
                    <a
                      href={selectedCert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                      title="Open full size certificate image in new tab"
                    >
                      <Download size={15} />
                      Full View
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="py-2.5 px-4 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
