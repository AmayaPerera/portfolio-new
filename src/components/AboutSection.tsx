import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Search } from 'lucide-react';
export function AboutSection() {
  return <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-teal-400 font-medium tracking-wider uppercase mb-2">
                About Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Designing with logic.
                <br />
                Coding with empathy.
              </h3>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm a multidisciplinary technologist who doesn't just build
                software—I craft experiences. With a unique background spanning{' '}
                <span className="text-white font-medium">UI/UX Design</span>,{' '}
                <span className="text-white font-medium">
                  Frontend Development
                </span>
                , and{' '}
                <span className="text-white font-medium">QA Engineering</span>,
                I see products from every angle.
              </p>
              <p>
                My philosophy is simple: A beautiful interface is meaningless if
                it's not functional, and clean code is wasted if the user
                experience is poor. I bridge these gaps to create seamless,
                robust digital solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Frontend', 'UI/UX', 'QA Testing', 'Wordpress', 'Performance'].map(tag => <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-teal-500/30 transition-colors">
                  {tag}
                </span>)}
            </div>
          </div>

          {/* Right: Image/Visual */}
          <div className="relative">
            <motion.div whileHover={{
            scale: 1.02
          }} className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm aspect-square flex items-center justify-center group">
              {/* Placeholder for Profile Image - using a gradient/icon composition since we don't have a real photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-black opacity-20" />
               <img
    src="/image.png"   // put image inside public folder
    alt="Amaya Perera"
    className="w-full h-full object-cover"
  />
              {/* <div className="relative z-20 text-center p-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-tr from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Your Name Here
                </h4>
                <p className="text-teal-400">Full Stack Designer & Developer</p>
              </div> */}

              {/* Glass overlay effect */}
               
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute top-[-20px] right-[-20px] w-full h-full border border-teal-500/20 rounded-2xl -z-10" />
            <div className="absolute bottom-[-20px] left-[-20px] w-full h-full border border-white/5 rounded-2xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>;
}