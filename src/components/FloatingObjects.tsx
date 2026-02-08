import React from 'react';
import { motion } from 'framer-motion';
export function FloatingObjects() {
  return <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Teal Gradient Orb */}
      <motion.div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-500/20 blur-[100px]" animate={{
      x: [0, 50, 0],
      y: [0, 30, 0],
      scale: [1, 1.1, 1]
    }} transition={{
      duration: 20,
      repeat: Infinity,
      ease: 'easeInOut'
    }} />

      {/* Secondary Orb */}
      <motion.div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[100px]" animate={{
      x: [0, -30, 0],
      y: [0, -50, 0],
      scale: [1, 1.2, 1]
    }} transition={{
      duration: 25,
      repeat: Infinity,
      ease: 'easeInOut'
    }} />

      {/* Floating Cube Representation (Wireframe-ish) */}
      <motion.div className="absolute top-[20%] right-[10%] w-24 h-24 border border-white/5 rounded-xl backdrop-blur-sm" animate={{
      rotate: [0, 180, 360],
      y: [0, -20, 0]
    }} transition={{
      duration: 30,
      repeat: Infinity,
      ease: 'linear'
    }} />

      {/* Floating Ring */}
      <motion.div className="absolute bottom-[30%] left-[5%] w-32 h-32 border-2 border-teal-500/10 rounded-full" animate={{
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut'
    }} />
    </div>;
}