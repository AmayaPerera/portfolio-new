import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronRight } from 'lucide-react';
const terminalLines = [{
  text: 'git status',
  delay: 500
}, {
  text: 'git commit -m "Designing intuitive UI"',
  delay: 1500
}, {
  text: 'git commit -m "Building frontend components"',
  delay: 3000
}, {
  text: 'git commit -m "Testing for quality"',
  delay: 4500
}, {
  text: 'git push origin main',
  delay: 6000
}];
export function HeroSection() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) {
      setIsTyping(false);
      return;
    }
    const targetLine = terminalLines[currentLineIndex];
    if (currentText.length < targetLine.text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(targetLine.text.slice(0, currentText.length + 1));
      }, 50); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, targetLine.text]);
        setCurrentText('');
        setCurrentLineIndex(prev => prev + 1);
      }, 800); // Delay between lines
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentText]);
  return <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 relative z-10">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }}>
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.2
        }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Available for work
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Digital Experiences
            </span>{' '}
            with Precision
          </h1>

          <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-lg">
            Frontend Developer & UI/UX Designer with QA Engineering. I bridge the
            gap between design, code, and quality.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a href="#projects" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-black font-bold rounded-full transition-colors shadow-lg shadow-teal-500/20">
              View Projects
            </motion.a>
            <motion.a href="#contact" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full backdrop-blur-sm transition-colors">
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Terminal Animation */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 0.4,
        duration: 0.8
      }} className="relative">
          <div className="w-full rounded-2xl bg-[#0F0F0F]/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="ml-2 text-xs text-gray-500 font-mono">
                amayaperera@portfolio:~/projects
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm md:text-base h-[320px] overflow-y-auto custom-scrollbar">
              {lines.map((line, index) => <div key={index} className="mb-2 text-gray-300 flex items-start">
                  <span className="text-teal-500 mr-2">➜</span>
                  <span>{line}</span>
                </div>)}

              {isTyping && <div className="text-gray-300 flex items-center">
                  <span className="text-teal-500 mr-2">➜</span>
                  <span>{currentText}</span>
                  <motion.span animate={{
                opacity: [0, 1, 0]
              }} transition={{
                repeat: Infinity,
                duration: 0.8
              }} className="w-2 h-5 bg-teal-500 ml-1 inline-block align-middle" />
                </div>}

              {!isTyping && <div className="mt-4 text-teal-700">
                  <span className="text-teal-500 mr-2">➜</span>
                  Build successful! Ready to deploy. 🚀
                </div>}
            </div>
          </div>

          {/* Decorative Elements behind terminal */}
          <div className="absolute -z-10 top-[-20px] right-[-20px] w-full h-full rounded-2xl border border-teal-500/20 bg-transparent" />
          <div className="absolute -z-10 bottom-[-20px] left-[-20px] w-full h-full rounded-2xl border border-white/5 bg-transparent" />
        </motion.div>
      </div>
    </section>;
}