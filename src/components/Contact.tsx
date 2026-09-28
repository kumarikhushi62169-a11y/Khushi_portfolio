import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [validationAlert, setValidationAlert] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({ title: 'Message Sent!', desc: 'Your message has been sent to kumarikhushi62169@gmail.com.' });
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    const missing: string[] = [];

    if (!formData.name.trim()) {
      newErrors.name = 'Your Name is required (Aapka naam bharna zaroori hai)';
      missing.push('Your Name');
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Your Email is required (Email bharna zaroori hai)';
      missing.push('Email');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (Sahi email format likhein)';
      missing.push('Valid Email');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required (Phone number bharna zaroori hai)';
      missing.push('Phone Number');
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number (Kam se kam 10 anko ka number likhein)';
      missing.push('Valid 10-digit Phone Number');
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required (Subject bharna zaroori hai)';
      missing.push('Subject');
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required (Message likhna zaroori hai)';
      missing.push('Message');
    }

    return { isValid: Object.keys(newErrors).length === 0, newErrors, missing };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const { isValid, newErrors, missing } = validate();
    if (!isValid) {
      setErrors(newErrors);
      setValidationAlert(`Aapne ye zaroori field nahi bhara hai: ${missing.join(', ')}. Kripya sabhi fields dhyan se bharein.`);
      return;
    }

    setErrors({});
    setValidationAlert(null);
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/kumarikhushi62169@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name} (${formData.phone}): ${formData.subject}`,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setToastMessage({
          title: 'Message Sent!',
          desc: 'Your message and phone number have been delivered directly to kumarikhushi62169@gmail.com.'
        });
        setShowToast(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setShowToast(false), 4500);
      } else if (data.message && data.message.includes('Activation')) {
        setToastMessage({
          title: 'Message Recorded!',
          desc: "FormSubmit sent an 'Activate Form' confirmation email to kumarikhushi62169@gmail.com. Please click it once in your Gmail to activate direct forwarding."
        });
        setShowToast(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setShowToast(false), 6000);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err: any) {
      console.warn('FormSubmit AJAX failed, falling back to Gmail direct link:', err);
      setSubmitError('Unable to send automatically via background server. You can send directly using Gmail below:');
    } finally {
      setIsSubmitting(false);
    }
  };

  const directGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=kumarikhushi62169@gmail.com&su=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
  )}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
      if (Object.keys(errors).length <= 1) {
        setValidationAlert(null);
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            Have a project in mind or looking for a developer? Feel free to reach out. I'm currently available for new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 space-y-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=kumarikhushi62169@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="Send email to kumarikhushi62169@gmail.com"
                    className="text-lg font-medium text-slate-900 dark:text-white hover:text-primary transition-colors"
                  >
                    kumarikhushi62169@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Phone</h4>
                  <a href="tel:+916398769763" className="text-lg font-medium text-slate-900 dark:text-white hover:text-primary transition-colors">
                    6398769763
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-lg font-medium text-slate-900 dark:text-white mb-6">
                    Agra, Uttar Pradesh
                  </p>
                </div>
              </div>
              
              {/* Google Map Placeholder */}
              <div className="w-full h-48 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113543.08581788647!2d77.93483321528438!3d27.176670068533804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1714070000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Location"
                  className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/kumarikhushi62169-a11y"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 rounded-full bg-[#181717] hover:bg-black text-white flex items-center justify-center hover:-translate-y-1 hover:scale-110 transition-all shadow-lg hover:shadow-black/40"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/khushi-kumari-20a6b4357/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-full bg-[#0A66C2] hover:bg-[#004182] text-white flex items-center justify-center hover:-translate-y-1 hover:scale-110 transition-all shadow-lg shadow-[#0A66C2]/30 hover:shadow-[#0A66C2]/50"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kumarikhushi62169@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email kumarikhushi62169@gmail.com"
                title="Send email to kumarikhushi62169@gmail.com"
                className="w-12 h-12 rounded-full bg-[#EA4335] hover:bg-[#c5221f] text-white flex items-center justify-center hover:-translate-y-1 hover:scale-110 transition-all shadow-lg shadow-[#EA4335]/30 hover:shadow-[#EA4335]/50"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} noValidate className="glass-card p-8 md:p-10 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Send Me a Message</h3>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="text-rose-500 font-bold">*</span> All fields are required (Sabhi zaroori hain)
                </span>
              </div>

              {validationAlert && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-900 dark:text-rose-200 text-sm flex items-start gap-3 animate-shake">
                  <AlertCircle size={20} className="text-rose-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold mb-0.5">Form अधूरा है (Fields Missing)</p>
                    <p className="text-xs text-rose-800 dark:text-rose-300 leading-relaxed">{validationAlert}</p>
                  </div>
                </div>
              )}
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center justify-between">
                    <span>Your Name <span className="text-rose-500">*</span></span>
                    {errors.name && <span className="text-xs text-rose-500 font-medium">Required</span>}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border transition-all text-slate-900 dark:text-white focus:outline-none ${
                      errors.name 
                        ? 'border-rose-400 focus:ring-2 focus:ring-rose-500/50 bg-rose-50/10' 
                        : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/50'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-xs text-rose-500 font-medium">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center justify-between">
                    <span>Your Email <span className="text-rose-500">*</span></span>
                    {errors.email && <span className="text-xs text-rose-500 font-medium">Required</span>}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border transition-all text-slate-900 dark:text-white focus:outline-none ${
                      errors.email 
                        ? 'border-rose-400 focus:ring-2 focus:ring-rose-500/50 bg-rose-50/10' 
                        : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/50'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-xs text-rose-500 font-medium">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center justify-between">
                    <span>Phone Number <span className="text-rose-500">*</span></span>
                    {errors.phone && <span className="text-xs text-rose-500 font-medium">Required</span>}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border transition-all text-slate-900 dark:text-white focus:outline-none ${
                      errors.phone 
                        ? 'border-rose-400 focus:ring-2 focus:ring-rose-500/50 bg-rose-50/10' 
                        : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/50'
                    }`}
                    placeholder="+91 9876543210"
                  />
                  {errors.phone && <p className="text-xs text-rose-500 font-medium">{errors.phone}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center justify-between">
                    <span>Subject <span className="text-rose-500">*</span></span>
                    {errors.subject && <span className="text-xs text-rose-500 font-medium">Required</span>}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border transition-all text-slate-900 dark:text-white focus:outline-none ${
                      errors.subject 
                        ? 'border-rose-400 focus:ring-2 focus:ring-rose-500/50 bg-rose-50/10' 
                        : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/50'
                    }`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <p className="text-xs text-rose-500 font-medium">{errors.subject}</p>}
                </div>
              </div>

              <div className="space-y-1.5 mb-8">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center justify-between">
                  <span>Message <span className="text-rose-500">*</span></span>
                  {errors.message && <span className="text-xs text-rose-500 font-medium">Required</span>}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border transition-all text-slate-900 dark:text-white focus:outline-none resize-none ${
                    errors.message 
                      ? 'border-rose-400 focus:ring-2 focus:ring-rose-500/50 bg-rose-50/10' 
                      : 'border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/50'
                  }`}
                  placeholder="Hello Khushi, I'd like to talk about..."
                />
                {errors.message && <p className="text-xs text-rose-500 font-medium">{errors.message}</p>}
              </div>

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value={`New Portfolio Message from ${formData.name || 'Visitor'}`} />

              {submitError && (
                <div className="mb-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <AlertCircle size={18} className="text-amber-600 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                  <a
                    href={directGmailUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-semibold shrink-0 transition-colors"
                  >
                    Open in Gmail <ExternalLink size={14} />
                  </a>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending to Gmail...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Mail size={14} className="text-primary shrink-0" /> Delivered to <span className="font-semibold text-slate-700 dark:text-slate-300">kumarikhushi62169@gmail.com</span>
                </p>
              </div>

              {/* Success Toast Overlay */}
              <AnimatePresence>
                {showToast && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 z-10 flex items-center justify-center bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-3xl p-6 text-center"
                  >
                    <div className="max-w-md">
                      <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200 dark:border-emerald-800">
                        <CheckCircle size={32} />
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{toastMessage.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{toastMessage.desc}</p>
                      <button
                        type="button"
                        onClick={() => setShowToast(false)}
                        className="px-5 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
