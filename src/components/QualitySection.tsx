import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
const qaPrinciples = ['Comprehensive Unit & Integration Testing', 'Automated End-to-End Test Suites', 'Accessibility (WCAG) Compliance', 'Performance Optimization & Monitoring', 'Cross-Browser & Device Compatibility', 'Security Best Practices & Audits'];
export function QualitySection() {
  return <section className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden p-8 md:p-12 bg-gradient-to-br from-teal-900/20 to-black border border-teal-500/20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

          <div className="relative z-10 text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quality is not an act, it is a habit.
            </h2>
            <p className="text-gray-400">
              My development process integrates QA from day one, ensuring robust
              and reliable deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            {qaPrinciples.map((principle, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="flex items-center gap-3 p-4 rounded-xl bg-black/40 border border-white/5 hover:border-teal-500/30 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span className="text-gray-200 text-sm font-medium">
                  {principle}
                </span>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}