import React from 'react';
import { motion } from 'framer-motion';
const skillCategories = [{
  name: 'Frontend',
  skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite', 'JavaScript (ES6+)', 'HTML5/CSS3','Vue.js','Bootstrap']
}, {
  name: 'UI/UX Design',
  skills: ['Figma', 'Adobe XD', 'Prototyping', 'Wireframing', 'User Research', 'Design Systems','Sketch']
}, {
  name: 'Quality Assurance',
  skills: ['Postman', 'Selenium', 'Manual Testing', 'CI/CD Pipelines','WCAG']
}, {
  name: 'Tools & Others',
  skills: ['Git', 'PHP', 'WordPress', 'Jira', 'Agile/Scrum', 'Github', 'Vercel','Node.js','Framer Motion' ]
}];
export function SkillsSection() {
  return <section className="py-24 px-6 relative z-10 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-teal-400 font-medium tracking-wider uppercase mb-2">
            Expertise
          </h2>
          <h3 className="text-4xl font-bold text-white mb-4">Skills & Tools</h3>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            A curated stack of technologies I use to build robust, scalable, and
            beautiful applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => <motion.div key={category.name} initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: catIndex * 0.1
        }} className="p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
              <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                {category.name}
              </h4>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => <motion.span key={skill} initial={{
              opacity: 0,
              y: 10
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: catIndex * 0.1 + skillIndex * 0.05
            }} whileHover={{
              scale: 1.05,
              y: -2
            }} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-teal-500/30 hover:bg-teal-500/10 hover:text-teal-400 transition-all cursor-default">
                    {skill}
                  </motion.span>)}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}