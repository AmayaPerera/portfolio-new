import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Layout, ShieldCheck, Globe } from 'lucide-react';
const services = [{
  icon: Layout,
  title: 'Frontend Development',
  description: 'Building responsive, performant, and accessible web applications using modern React ecosystems.',
  color: 'text-blue-400'
}, {
  icon: Palette,
  title: 'UI/UX Design',
  description: 'Creating intuitive user flows and high-fidelity interfaces that delight users and solve real problems.',
  color: 'text-purple-400'
}, {
  icon: ShieldCheck,
  title: 'Quality Assurance',
  description: 'Ensuring software reliability through rigorous testing strategies, automation, and attention to detail.',
  color: 'text-teal-400'
}, {
  icon: Globe,
  title: 'WordPress Development',
  description: 'Custom theme development and CMS solutions tailored to specific business needs and content strategies.',
  color: 'text-orange-400'
}];
export function ServicesSection() {
  return <section id="services" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-teal-400 font-medium tracking-wider uppercase mb-2">
            What I Offer
          </h2>
          <h3 className="text-4xl font-bold text-white">
            Comprehensive Digital Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => <motion.div key={service.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1,
          duration: 0.5
        }} whileHover={{
          y: -8,
          scale: 1.02
        }} className="p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/10 transition-all group">
              <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors ${service.color}`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}