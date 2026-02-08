import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, BookAIcon, Book } from 'lucide-react';
const journeyItems = [{
  year: '2024 - Present',
  title: 'Frontend Developer | UI/UX Engineer | QA Engineer',
  company: 'Archmage Solutions (Pvt) Ltd',
  description: 'Designed UI/UX and built responsive, interactive web interfaces using modern technologies, managed WordPress sites, created interactive elements, and ensured quality through testing across devices.',
  icon: Briefcase
}, {
  year: '2023 - 2024',
  title: 'Frontend Developer',
  company: 'Freelance',
  description: 'Developed mobile-friendly websites using React, Next.js, and modern web tools, ensuring content quality and applying research, testing, and implementation best practices.',
  icon: PaletteIcon
}, {
  year: '2022 - 2023',
  title: 'Product Support Executive',
  company: 'Retail Information Technologies (Pvt) Ltd',
  description: 'Provided product support and troubleshooting, collaborated with cross-functional teams, and contributed to POS/ERP systems, SQL operations, and UI/web development.',
  icon: ShieldIcon
}, {
  year: '2019 - 2022',
  title: 'BSc (Hons) Computer Science',
  company: 'University of Wolverhampton (CINEC)',
  // description: 'Specialized in Human-Computer Interaction and Software Engineering.',
  icon: GraduationCap
},{
  year: '2019 - 2021',
  title: 'HND in Computing and Software Engineering',
  company: 'Cardiff Metropolitan University (ICBT)',
  // description: 'Specialized in Human-Computer Interaction and Software Engineering.',
  icon: Book
}];
// Helper icons needed since I can't import them all at top if they aren't used yet
// But for cleaner code, let's just use generic icons or import them
import { Palette as PaletteIcon, ShieldCheck as ShieldIcon } from 'lucide-react';
export function JourneySection() {
  return <section id="journey" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-teal-400 font-medium tracking-wider uppercase mb-2">
            My Journey
          </h2>
          <h3 className="text-4xl font-bold text-white">
            Professional Timeline
          </h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/0 via-teal-500/50 to-teal-500/0" />

          <div className="space-y-12">
            {journeyItems.map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 top-0 w-3 h-3 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)] z-10 mt-6" />

                {/* Content Card */}
                <div className="flex-1 ml-6 md:ml-0">
                  <div className={`p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-teal-500/30 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <span className="text-teal-400 font-mono text-sm">
                        {item.year}
                      </span>
                      <item.icon className="w-4 h-4 text-gray-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">{item.company}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}