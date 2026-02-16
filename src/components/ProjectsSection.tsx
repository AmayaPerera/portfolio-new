import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type Category = 'All' | 'Frontend' | 'UI/UX' | 'QA' | 'WordPress';

const projects = [
  {
    id: 1,
    title: 'Scope Cinema',
    category: 'Frontend',
    image: '/scopeweb.png',
    tags: ['Next.js', 'Tailwind', 'Shadcn UI'],
    description:
      'Frontend development focused on performance and usability for Scope Cinemas.',
    github: null,
    live: 'https://scopecinemas.com',
  },
  {
    id: 2,
    title: 'House of Granites',
    category: 'WordPress',
    image: '/HOGweb.png',
    tags: ['Elementor', 'Astra'],
    description:
      'Custom WordPress website built for HOG with a focus on performance and usability.',
    github: null,
    live: 'https://demo.archmage.lk/hog/home/',
  },
  {
    id: 3,
    title: 'Scope Cinema Web & Mobile QA',
    category: 'QA',
    image: '/scopeqa1.png',
    tags: ['Selenium', 'Manual Testing'],
    description:
      'Manual and Selenium testing for Scope Cinemas web and mobile.',
    github: null,
    live: 'https://scopecinemas.com',
  },
  {
    id: 4,
    title: 'WILS',
    category: 'WordPress',
    image: '/WILS.png',
    tags: ['Elementor', 'Astra', 'ACF'],
    description:
      'Designed and developed a WordPress site for Wils Restoration Services.',
    github: null,
    live: null,
  },
  {
    id: 5,
    title: 'Portfolio',
    category: 'Frontend',
    image: '/portfolio.png',
    tags: ['React + Vite', 'Tailwind CSS', 'Framer Motion'],
    description:
      'Personal portfolio showcasing frontend, UI/UX, and QA projects.',
    github: null,
    live: null,
  },
  {
    id: 6,
    title: 'ENIGMA',
    category: 'UI/UX',
    image: '/enigma.png',
    tags: ['Wireframing', 'User Testing', 'Figma'],
    description:
      'Designed an elegant UI/UX experience for Enigma Jewellery.',
    github: null,
    live: 'https://www.behance.net/gallery/194874835/ENIGMA-Jewellery-Website',
  },
  {
    id: 7,
    title: 'Cine Digital',
    category: 'Frontend',
    image: '/cinedigital.png',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    description:
      'Developed a responsive frontend for the Cine Digital website.',
    github: null,
    live: null,
  },
  {
    id: 8,
    title: 'Cashflow (Banking Mobile App)',
    category: 'UI/UX',
    image: '/cashflow.png',
    tags: ['Wireframing', 'User Testing', 'Figma'],
    description:
      'Designed a mobile app UI/UX for a banking application.',
    github: null,
    live: 'https://www.behance.net/gallery/200082647/Cashflow-(Banking-Mobile-App)',
  },
 {
    id: 9,
    title: 'Eatz',
    category: 'UI/UX',
    image: '/eatz.png',
    tags: ['Wireframing', 'User Testing', 'Figma'],
    description:
      'Designed a mobile app UI/UX for a food delivery application.',
    github: null,
    live: 'https://www.behance.net/gallery/193030113/Eatz-Food-Application-UI',
  },
  {
    id: 10,
    title: 'House of Granites',
    category: 'QA',
    image: '/HOGQA.png',
    tags: ['Manual Testing'],
    description:
      'Tested website functionality and mobile responsiveness for House Granite.',
    github: null,
    live: 'https://demo.archmage.lk/hog/home/',
  },
];

const categories: Category[] = ['All', 'Frontend', 'UI/UX', 'QA', 'WordPress'];
const MAX_VISIBLE = 6;

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] =
    useState<Category>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects.slice(0, MAX_VISIBLE)
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-teal-400 font-medium tracking-wider uppercase mb-2">
            Portfolio
          </h2>
          <h3 className="text-4xl font-bold text-white mb-8">
            Featured Projects
          </h3>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  activeCategory === cat
                    ? 'text-black'
                    : 'text-gray-400 bg-white/5 hover:bg-white/10'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-teal-400 rounded-full -z-10"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-teal-500/30 transition-colors"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay Buttons */}
                  {(project.github || project.live) && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/10 hover:bg-teal-500 text-white transition-colors backdrop-blur-sm"
                        >
                          <FaGithub size={20} />
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/10 hover:bg-teal-500 text-white transition-colors backdrop-blur-sm"
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </span>

                  <h4 className="text-xl font-bold text-white mt-2 mb-2 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded bg-white/5 text-gray-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
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
