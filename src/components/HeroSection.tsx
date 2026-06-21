import React from 'react';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* 1. Floral Border/Frame (Elegant Corner Decorations matching Natural Tones styling) */}
      <div className="absolute top-0 inset-x-0 h-4 flex justify-between px-4 opacity-75 select-none">
        {/* Top-left corners */}
        <div className="w-16 h-16 border-t border-l border-natural-gold/30 rounded-tl-3xl top-2 left-2 absolute pointer-events-none" />
        <div className="w-12 h-12 border-t border-l border-natural-sage/25 rounded-tl-2xl top-4 left-4 absolute pointer-events-none" />
        {/* Top-right corners */}
        <div className="w-16 h-16 border-t border-r border-natural-gold/30 rounded-tr-3xl top-2 right-2 absolute pointer-events-none" />
        <div className="w-12 h-12 border-t border-r border-natural-sage/25 rounded-tr-2xl top-4 right-4 absolute pointer-events-none" />
      </div>

      {/* Decorative central golden crescent & star hanging over the hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mb-6 text-natural-gold drop-shadow-xs flex flex-col items-center"
      >
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-14 h-14">
          {/* Crescent Moon */}
          <path d="M50 20 A30 30 0 1 0 80 50 A24 24 0 1 1 50 20 Z" />
          {/* A small elegant gold star hanging */}
          <path d="M55 45 L57 51 L63 51 L58 55 L60 61 L55 57 L50 61 L52 55 L47 51 L53 51 Z" className="animate-pulse" />
        </svg>
      </motion.div>

      {/* Container for Heading with staggered reveal and gentle motion */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center px-4">
        
        {/* Calligraphic phrase: 🌸 اللهم بارك لها with theme colors */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/80 border border-natural-gold/20 shadow-xs mb-8"
        >
          <span className="text-rose-300 text-lg">🌸</span>
          <span className="font-serif font-bold text-2xl md:text-3xl text-natural-gold tracking-wide">
            اللهم بارك لها
          </span>
          <span className="text-rose-300 text-lg">🌸</span>
        </motion.div>

        {/* Allah Bless You, Aasiya Khan 🤲🎂 */}
        <div className="overflow-visible pb-2 select-none">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-neutral-800 leading-[1.3] text-[#5a4b44]"
          >
            <span className="text-rose-400">Allah Bless You,</span> <br />
            <span className="font-bold text-natural-brown relative inline-block">
              Aasiya Khan
            </span>{" "}
            <span className="inline-block animate-bounce origin-bottom text-3xl md:text-5xl ml-1">🤲🎂</span>
          </motion.h1>
        </div>

        {/* Subtitle / soft marker line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="flex items-center gap-2 w-full max-w-sm mt-8 justify-center"
        >
          <div className="h-[1px] bg-natural-gold flex-1"></div>
          <div className="text-natural-gold text-xs">◆</div>
          <div className="h-[1px] bg-natural-gold flex-1"></div>
        </motion.div>

        {/* Gentle welcome sub-tag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.1, duration: 1.2 }}
          className="text-natural-brown/70 font-sans tracking-widest text-xs uppercase mt-3 font-semibold"
        >
          A Sacred Milestone of Love, Faith &amp; Family
        </motion.p>
      </div>

      {/* Decorative hanging floral vines/garland on the sides */}
      <div className="absolute right-4 md:right-8 top-12 w-8 h-24 text-natural-sage/20 hidden sm:block">
        <svg viewBox="0 0 30 100" fill="currentColor" className="w-full h-full">
          <path d="M15 0 C15 20 5 30 5 40 C5 50 25 55 25 65 C25 75 15 90 15 100" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="15" cy="20" r="3" fill="#e8bb8a" />
          <circle cx="5" cy="40" r="4" fill="#fbcfe8" />
          <circle cx="25" cy="65" r="3" fill="#d4af37" />
          <circle cx="15" cy="85" r="4" fill="#9caf88" />
        </svg>
      </div>

      <div className="absolute left-4 md:left-8 top-12 w-8 h-24 text-natural-sage/20 hidden sm:block">
        <svg viewBox="0 0 30 100" fill="currentColor" className="w-full h-full transform scale-x-[-1]">
          <path d="M15 0 C15 20 5 30 5 40 C5 50 25 55 25 65 C25 75 15 90 15 100" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="15" cy="20" r="3" fill="#e8bb8a" />
          <circle cx="5" cy="40" r="4" fill="#fbcfe8" />
          <circle cx="25" cy="65" r="3" fill="#d4af37" />
          <circle cx="15" cy="85" r="4" fill="#9caf88" />
        </svg>
      </div>
    </section>
  );
}
