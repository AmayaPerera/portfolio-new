import React from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
  FaArrowRight,
} from 'react-icons/fa';

export function ContactSection() {
  const email = 'amayaperera2000@gmail.com';

  const subject = encodeURIComponent("Let's Work Together");
  const body = encodeURIComponent("Hi Amaya,\n\n");

  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  const gmailLink = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=${encodeURIComponent(
    email
  )}&su=${subject}&body=${body}`;

  return (
    <section id="contact" className="pt-24 px-0 relative z-10">
      <div className="max-w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          {/* Glass background */}
          <div className="absolute inset-0 bg-white/[0.02]" />

          <div className="relative p-8 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Build Something{' '}
              <span className="text-teal-400">Amazing</span>
            </h2>

            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to chat about the
              latest tech, I&apos;m always open to new opportunities.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <motion.a
                href={mailtoLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-black font-medium rounded-full transition-colors shadow-lg shadow-teal-500/20"
              >
                <FaEnvelope className="w-5 h-5" />
                Open Email App
              </motion.a>

              <motion.a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full border border-white/10 transition-colors"
              >
                Open Gmail in Browser
                <FaArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6">
              {[
                { icon: FaGithub, href: 'https://github.com/AmayaPerera' },
                { icon: FaLinkedinIn, href: 'www.linkedin.com/in/amayaperera' },
                { icon: FaDribbble, href: 'https://dribbble.com/Amyxya' },
                { icon: FaBehance, href: 'https://www.behance.net/amayaperera2' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: '#14B8A6' }}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
