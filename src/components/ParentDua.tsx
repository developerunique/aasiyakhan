import React from 'react';
import { motion } from 'motion/react';

export default function ParentDua() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[40px] bg-white/80 backdrop-blur-lg border border-natural-gold/25 p-8 md:p-12 shadow-xs hover:shadow-md transition-all duration-300 group"
      >
        {/* Decorative corner Islamic Geometric vectors */}
        <div className="absolute top-0 left-0 w-24 h-24 text-natural-gold/10 select-none pointer-events-none group-hover:text-natural-gold/20 transition-colors duration-500">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
            <path d="M0 0 L40 0 C40 20 20 40 0 40 Z" />
            <circle cx="20" cy="20" r="10" stroke="currentColor" fill="none" strokeWidth="2" />
          </svg>
        </div>

        <div className="absolute bottom-0 right-0 w-24 h-24 text-natural-sage/10 select-none pointer-events-none group-hover:text-natural-sage/20 transition-colors duration-500 rotate-180">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
            <path d="M0 0 L40 0 C40 20 20 40 0 40 Z" />
            <circle cx="20" cy="20" r="10" stroke="currentColor" fill="none" strokeWidth="2" />
          </svg>
        </div>

        {/* Title: A Dua From Mommy & Daddy 🤲 */}
        <div className="text-center mb-8">
          <span className="text-rose-400 text-lg mb-1 block">🌸</span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-natural-brown tracking-wide inline-flex items-center gap-2">
            A Dua From Mommy &amp; Daddy <span className="inline-block animate-pulse">🤲</span>
          </h3>
          <div className="flex justify-center mt-3 text-natural-gold/30">
            <svg viewBox="0 0 120 10" fill="currentColor" className="w-32 h-3">
              <path d="M10 5 L110 5 M55 0 L65 10 M65 0 L55 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
        </div>

        {/* Heartfelt Letter/Prayer */}
        <div className="space-y-6 text-[#5a4b44] font-serif text-md md:text-lg leading-relaxed text-center max-w-xl mx-auto italic">
          <p>
            &ldquo;Our beloved princess, the day you entered our world, you brought along the beautiful scent of Jannah and filled our home with an overwhelming light of love.&rdquo;
          </p>
          <p>
            &ldquo;We pray that Allah (SWT) always guards your beautiful smiles, directs your little steps in the light of truth, and nurtures your precious heart with the sweetness of Imaan.&rdquo;
          </p>
          <p>
            &ldquo;May Allah bless you with active wisdom, genuine kindness, perfect health, and make you of those who bring light, joy, and mercy to everyone around you.&rdquo;
          </p>
          <p className="not-italic text-sm font-sans tracking-widest text-natural-gold uppercase font-bold mt-4">
            Aameen, Ya Rabb-al-Aalameen. 🤲🌹
          </p>
        </div>

        {/* Small signing details */}
        <div className="flex items-center justify-center gap-2 mt-8 text-xs font-sans text-natural-brown/50">
          <span className="font-semibold">Written with absolute love, hopes &amp; prayers</span>
        </div>
      </motion.div>
    </div>
  );
}
