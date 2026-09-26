import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2 } from 'lucide-react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-light dark:bg-dark"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          yoyo: Infinity,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="flex flex-col items-center"
      >
        <Code2 size={64} className="text-primary mb-4" />
        <h1 className="text-2xl font-bold tracking-widest text-slate-800 dark:text-slate-200">
          KHUSHI
        </h1>
        <div className="mt-4 h-1 w-24 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
