import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Loader2, Printer, CheckCircle } from 'lucide-react';
import jsPDF from 'jspdf';

export default function ResumeModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const generateResumeDocument = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
    });

    let y = 18;
    const leftMargin = 16;
    const rightMargin = 194;
    const contentWidth = rightMargin - leftMargin;

    // Header Name
    doc.setFont('times', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(0, 0, 0);
    doc.text('KHUSHI', 105, y, { align: 'center' });
    y += 5.5;

    // Subtitle
    doc.setFont('times', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text('FULL STACK WEB DEVELOPER', 105, y, { align: 'center' });
    y += 4.8;

    // Contact Info
    doc.setFontSize(9.5);
    doc.setTextColor(0, 0, 0);
    doc.text('Agra, Uttar Pradesh | kumarikhushi62169@gmail.com | 6398769763', 105, y, { align: 'center' });
    y += 4.5;

    // Links
    doc.setTextColor(0, 90, 200);
    doc.text('https://www.linkedin.com/in/khushi-kumari-20a6b4357/ | https://github.com/kumarikhushi62169-a11y', 105, y, { align: 'center' });
    doc.setTextColor(0, 0, 0);
    y += 7.5;

    const renderSectionHeader = (title: string) => {
      doc.setFont('times', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.text(title.toUpperCase(), leftMargin, y);
      y += 1.6;
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.4);
      doc.line(leftMargin, y, rightMargin, y);
      y += 4.5;
    };

    // PROFILE
    renderSectionHeader('Profile');
    doc.setFont('times', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(0, 0, 0);
    const profileText = 'I am a passionate and dedicated Full Stack Web Developer with a strong foundation in modern web and mobile application engineering. Skilled in React.js, JavaScript, Node.js, Express.js, Flutter, RESTful APIs, and relational/NoSQL databases (MySQL, MongoDB, PostgreSQL). Currently pursuing advanced proficiencies in Data Analysis and Graphic Design, bridging technical problem-solving with analytical insights and creative visual design to deliver scalable, high-performance, and user-centric software solutions, dedicated to making user-friendly websites.';
    const splitProfile = doc.splitTextToSize(profileText, contentWidth);
    doc.text(splitProfile, leftMargin, y);
    y += splitProfile.length * 4.3 + 3.0;

    // EXPERIENCE
    renderSectionHeader('Experience');
    doc.setFont('times', 'bold');
    doc.setFontSize(10);
    doc.text('Full Stack Web Development Intern', leftMargin, y);
    doc.setFont('times', 'normal');
    doc.text('Present', rightMargin, y, { align: 'right' });
    y += 4;
    doc.setFont('times', 'bold');
    doc.setFontSize(9.5);
    doc.text('Technoster Technology Institute', leftMargin, y);
    y += 4.2;

    const expBullets = [
      'Currently working on live projects, developing and optimizing full-stack features using React.js and modern technologies.',
      'Collaborating on real-world development tasks while following professional development and project practices.',
      'Developing scalable frontend and backend architectures, RESTful APIs, and solving practical coding challenges.'
    ];
    doc.setFont('times', 'normal');
    expBullets.forEach((bullet) => {
      doc.text('•', leftMargin + 2, y);
      const splitB = doc.splitTextToSize(bullet, contentWidth - 8);
      doc.text(splitB, leftMargin + 6, y);
      y += splitB.length * 4.2;
    });
    y += 3.5;

    // EDUCATION
    renderSectionHeader('Education');
    const eduList = [
      { title: 'Bachelor of Computer Applications (BCA)', period: 'Expected 2027', inst: 'Dr. Bhim Rao Ambedkar University', grade: 'Pursuing' },
      { title: 'Intermediate (12th Grade)', period: 'Completed 2024', inst: 'Board of Intermediate Education', grade: 'Percentage: 75%' },
      { title: 'High School (10th Grade)', period: 'Completed 2022', inst: 'Board of High School', grade: 'Percentage: 74%' }
    ];
    eduList.forEach((e) => {
      doc.setFont('times', 'bold');
      doc.setFontSize(10);
      doc.text(e.title, leftMargin, y);
      doc.setFont('times', 'normal');
      doc.text(e.period, rightMargin, y, { align: 'right' });
      y += 4;
      doc.setFontSize(9.5);
      doc.text(e.inst, leftMargin, y);
      if (e.grade) {
        doc.setFont('times', 'normal');
        doc.text(e.grade, rightMargin, y, { align: 'right' });
      }
      y += 4.2;
    });
    y += 2.5;

    // SKILLS
    renderSectionHeader('Skills');
    const skillList = [
      { label: 'Frontend & Mobile: ', val: 'HTML, CSS, JavaScript, React.js, Tailwind CSS, Flutter' },
      { label: 'Backend: ', val: 'Node.js, Express.js, RESTful APIs, JWT Authentication' },
      { label: 'Databases: ', val: 'MySQL, MongoDB, PostgreSQL, Oracle, Firebase' },
      { label: 'Languages: ', val: 'JavaScript, Java, Python, C, C++, SQL' },
      { label: 'Currently Pursuing: ', val: 'Data Analysis, Graphic Design' },
      { label: 'Tools: ', val: 'Git, GitHub, VS Code, Postman, Docker, Vercel' },
      { label: 'AI & Developer Tools: ', val: 'ChatGPT, OpenAI Codex, Cursor AI, GitHub Copilot, Claude' }
    ];
    skillList.forEach((s) => {
      doc.setFont('times', 'bold');
      doc.setFontSize(9.5);
      doc.text(s.label, leftMargin, y);
      const labelW = doc.getTextWidth(s.label);
      doc.setFont('times', 'normal');
      doc.text(s.val, leftMargin + labelW, y);
      y += 4.2;
    });
    y += 3.0;

    // PROJECTS
    renderSectionHeader('Projects');
    const projList = [
      {
        name: 'Employee Management System (EMS)',
        tech: 'React.js, Node.js, Express.js, MongoDB (Currently in Progress)',
        bullets: [
          'Currently developing an Employee Management System (EMS) to streamline staff records, departmental workflows, and attendance.',
          'Designing scalable RESTful APIs with Node.js and Express.js, backed by MongoDB database for efficient, real-time data persistence.'
        ]
      },
      {
        name: 'E-Commerce Website',
        tech: 'React.js, Node.js, Express.js, MySQL',
        bullets: [
          'Developed a full-stack e-commerce platform with product browsing, shopping cart, and secure checkout features.',
          'Implemented RESTful APIs for product management, user authentication, and order processing.'
        ]
      },
      {
        name: 'Real-Time Chat Application',
        tech: 'React.js, Node.js, Socket.io, MySQL',
        bullets: [
          'Developed a full-stack real-time messaging platform with private and group chat functionalities.',
          'Implemented real-time bidirectional communication using Socket.io for instant messaging.'
        ]
      },
      {
        name: 'Hospital Website',
        tech: 'React.js, Node.js, Express.js',
        bullets: [
          'Created a comprehensive platform for scheduling appointments and managing patient records.',
          'Implemented role-based access control and backend endpoints to automate patient queues and staff schedules.'
        ]
      }
    ];

    projList.forEach((p, pIdx) => {
      doc.setFont('times', 'bold');
      doc.setFontSize(10);
      doc.text(p.name, leftMargin, y);
      doc.setFont('times', 'italic');
      doc.setFontSize(9);
      doc.text(p.tech, rightMargin, y, { align: 'right' });
      y += 4.2;
      doc.setFont('times', 'normal');
      doc.setFontSize(9.5);
      p.bullets.forEach((b) => {
        doc.text('•', leftMargin + 2, y);
        const splitB = doc.splitTextToSize(b, contentWidth - 8);
        doc.text(splitB, leftMargin + 6, y);
        y += splitB.length * 4.2;
      });
      if (pIdx < projList.length - 1) y += 3.2;
    });

    return doc;
  };

  const triggerDownload = (doc: jsPDF, filename = 'Khushi_Resume.pdf') => {
    let succeeded = false;

    // Method 1: Blob URL download via invisible link
    try {
      const blob = doc.output('blob');
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      }, 3000);
      succeeded = true;
    } catch (e) {
      console.warn('Blob anchor download failed, attempting jsPDF save', e);
    }

    // Method 2: jsPDF direct save
    try {
      doc.save(filename);
      succeeded = true;
    } catch (e) {
      console.warn('jsPDF save failed', e);
    }

    // Method 3: Data URI fallback
    if (!succeeded) {
      try {
        const dataUri = doc.output('datauristring');
        const link = document.createElement('a');
        link.href = dataUri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        setTimeout(() => document.body.removeChild(link), 1000);
        succeeded = true;
      } catch (e) {
        console.error('Data URI download failed', e);
      }
    }

    return succeeded;
  };

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      setDownloadSuccess(false);

      // Small async delay for immediate UI feedback
      await new Promise((resolve) => setTimeout(resolve, 80));

      const doc = generateResumeDocument();
      triggerDownload(doc, 'Khushi_Resume.pdf');

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 5000);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = () => {
    try {
      const doc = generateResumeDocument();
      const blob = doc.output('blob');
      const blobUrl = URL.createObjectURL(blob);
      
      // Try opening in new tab/window where print is unhindered by iframe
      const printWindow = window.open(blobUrl, '_blank');
      if (!printWindow) {
        // If popup blocker intervened, download directly so the user gets their file
        triggerDownload(doc, 'Khushi_Resume.pdf');
      }
    } catch (err) {
      console.error('Error during print:', err);
      // Fallback: download PDF
      handleDownload();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8 resume-modal-overlay"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-white dark:bg-slate-900 w-full max-w-4xl h-full max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden resume-modal-card"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-900 resume-modal-header no-print">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">Resume</h2>
                {downloadSuccess && (
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle size={14} /> PDF Downloaded!
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={handleDownload} 
                  disabled={isDownloading}
                  title="Download Resume as PDF"
                  className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-medium transition-colors cursor-pointer shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isDownloading ? (
                    <><Loader2 size={16} className="animate-spin" /> <span className="hidden sm:inline">Generating PDF...</span></>
                  ) : downloadSuccess ? (
                    <><CheckCircle size={16} /> <span className="hidden sm:inline">Downloaded!</span></>
                  ) : (
                    <><Download size={16} /> <span className="hidden sm:inline">Save as PDF</span></>
                  )}
                </button>
                <button
                  onClick={handlePrint}
                  title="Open PDF in new tab to print or save"
                  className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                >
                  <Printer size={16} />
                  <span className="hidden sm:inline">Print / View PDF</span>
                </button>
                <button onClick={onClose} className="p-2 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors cursor-pointer">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Resume Content (Scrollable Container) */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-200/50 dark:bg-slate-950 resume-scroll-container">
              
              {/* Actual ATS Resume Paper */}
              <div id="resume-print-area" className="max-w-[21cm] mx-auto bg-white p-8 md:p-12 shadow-sm text-black font-serif print:p-0 print:shadow-none print:w-full print:max-w-none">
                
                <div className="text-center mb-6">
                  <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-1 text-black">KHUSHI</h1>
                  <h2 className="text-sm font-medium uppercase text-slate-700 mb-3 tracking-widest">FULL STACK WEB DEVELOPER</h2>
                  <p className="text-sm mb-1">
                    Agra, Uttar Pradesh | kumarikhushi62169@gmail.com | 6398769763
                  </p>
                  <p className="text-sm">
                    <a href="https://www.linkedin.com/in/khushi-kumari-20a6b4357/" className="text-blue-600 underline">https://www.linkedin.com/in/khushi-kumari-20a6b4357/</a> | <a href="https://github.com/kumarikhushi62169-a11y" className="text-blue-600 underline">https://github.com/kumarikhushi62169-a11y</a>
                  </p>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-lg font-bold uppercase border-b-2 border-black mb-3 text-black">Profile</h2>
                  <p className="text-sm leading-relaxed text-black">
                    I am a passionate and dedicated Full Stack Web Developer with a strong foundation in modern web and mobile application engineering. Skilled in React.js, JavaScript, Node.js, Express.js, Flutter, RESTful APIs, and relational/NoSQL databases (MySQL, MongoDB, PostgreSQL). Currently pursuing advanced proficiencies in Data Analysis and Graphic Design, bridging technical problem-solving with analytical insights and creative visual design to deliver scalable, high-performance, and user-centric software solutions, dedicated to making user-friendly websites.
                  </p>
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-bold uppercase border-b-2 border-black mb-3 text-black">Experience</h2>
                  <div className="mb-2">
                    <div className="flex justify-between items-baseline mb-0.5">
                      <h3 className="font-bold text-black text-base">Full Stack Web Development Intern</h3>
                      <span className="text-sm text-black font-medium">Present</span>
                    </div>
                    <p className="text-sm font-semibold text-black mb-1.5">Technoster Technology Institute</p>
                    <ul className="list-disc list-outside ml-4 text-sm text-black space-y-1">
                      <li>Currently working on live projects, developing and optimizing full-stack features using React.js and modern technologies.</li>
                      <li>Collaborating on real-world development tasks while following professional development and project practices.</li>
                      <li>Developing scalable frontend and backend architectures, RESTful APIs, and solving practical coding challenges.</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-bold uppercase border-b-2 border-black mb-3 text-black">Education</h2>
                  <div className="mb-2">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-black text-base">Bachelor of Computer Applications (BCA)</h3>
                      <span className="text-sm text-black">Expected 2027</span>
                    </div>
                    <div className="flex justify-between items-baseline text-sm text-black">
                      <p>Dr. Bhim Rao Ambedkar University</p>
                      <span className="text-black font-normal">Pursuing</span>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-black text-base">Intermediate (12th Grade)</h3>
                      <span className="text-sm text-black">Completed 2024</span>
                    </div>
                    <div className="flex justify-between items-baseline text-sm text-black">
                      <p>Board of Intermediate Education</p>
                      <span className="text-black font-normal">Percentage: 75%</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-black text-base">High School (10th Grade)</h3>
                      <span className="text-sm text-black">Completed 2022</span>
                    </div>
                    <div className="flex justify-between items-baseline text-sm text-black">
                      <p>Board of High School</p>
                      <span className="text-black font-normal">Percentage: 74%</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-bold uppercase border-b-2 border-black mb-3 text-black">Skills</h2>
                  <div className="text-sm text-black space-y-1">
                    <p><span className="font-bold">Frontend & Mobile:</span> HTML, CSS, JavaScript, React.js, Tailwind CSS, Flutter</p>
                    <p><span className="font-bold">Backend:</span> Node.js, Express.js, RESTful APIs, JWT Authentication</p>
                    <p><span className="font-bold">Databases:</span> MySQL, MongoDB, PostgreSQL, Oracle, Firebase</p>
                    <p><span className="font-bold">Languages:</span> JavaScript, Java, Python, C, C++, SQL</p>
                    <p><span className="font-bold">Currently Pursuing:</span> Data Analysis, Graphic Design</p>
                    <p><span className="font-bold">Tools:</span> Git, GitHub, VS Code, Postman, Docker, Vercel</p>
                    <p><span className="font-bold">AI & Developer Tools:</span> ChatGPT, OpenAI Codex, Cursor AI, GitHub Copilot, Claude</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-bold uppercase border-b-2 border-black mb-3 text-black">Projects</h2>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-black text-base">Employee Management System (EMS)</h3>
                      <span className="text-sm text-black italic">React.js, Node.js, Express.js, MongoDB (Currently in Progress)</span>
                    </div>
                    <ul className="list-disc list-outside ml-4 text-sm text-black space-y-1">
                      <li>Currently developing an Employee Management System (EMS) to streamline staff records, departmental workflows, and attendance.</li>
                      <li>Designing scalable RESTful APIs with Node.js and Express.js, backed by MongoDB database for efficient, real-time data persistence.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-black text-base">E-Commerce Website</h3>
                      <span className="text-sm text-black italic">React.js, Node.js, Express.js, MySQL</span>
                    </div>
                    <ul className="list-disc list-outside ml-4 text-sm text-black space-y-1">
                      <li>Developed a full-stack e-commerce platform with product browsing, shopping cart, and secure checkout features.</li>
                      <li>Implemented RESTful APIs for product management, user authentication, and order processing.</li>
                      <li>Designed a responsive and user-friendly interface using React and Tailwind CSS.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-black text-base">Real-Time Chat Application</h3>
                      <span className="text-sm text-black italic">React.js, Node.js, Socket.io, MySQL</span>
                    </div>
                    <ul className="list-disc list-outside ml-4 text-sm text-black space-y-1">
                      <li>Developed a full-stack real-time messaging platform with private and group chat functionalities.</li>
                      <li>Implemented real-time bidirectional communication using Socket.io for instant messaging.</li>
                      <li>Integrated secure user authentication and message history storage capabilities.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-black text-base">Hospital Website</h3>
                      <span className="text-sm text-black italic">React.js, Node.js, Express.js</span>
                    </div>
                    <ul className="list-disc list-outside ml-4 text-sm text-black space-y-1">
                      <li>Created a comprehensive platform for scheduling appointments and managing patient records.</li>
                      <li>Implemented role-based access control for administrators, doctors, and patients.</li>
                      <li>Developed backend endpoints to automate patient queues and track staff schedules.</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
