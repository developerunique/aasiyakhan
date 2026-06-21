import React from 'react';
import { motion } from 'motion/react';

export default function FooterSection() {
  return (
    <footer className="relative w-full py-16 px-4 text-center overflow-hidden z-10 bg-gradient-to-b from-transparent to-[#f4ede0]">
      
      {/* Exquisite ending decorative line */}
      <div className="flex items-center justify-center gap-3 w-full max-w-sm mx-auto mb-10 text-natural-gold/50">
        <div className="h-[1px] bg-natural-gold/30 flex-1"></div>
        <span className="text-sm">🌸</span>
        <div className="h-[1px] bg-natural-gold/30 flex-1"></div>
      </div>

      <div className="max-w-2xl mx-auto px-4 space-y-12">
        {/* Large Prominent Ending Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="font-serif text-lg md:text-2xl text-[#5a4b44] leading-relaxed font-bold italic">
            &ldquo;May Allah grant Aasiya Khan a life full of Imaan, good health, knowledge, kindness, happiness, and endless barakah. Aameen.&rdquo; <span className="text-rose-400 not-italic">🤍</span>
          </p>
        </motion.div>

        {/* Closing details & floral visual motif */}
        <div className="pt-8 border-t border-natural-sage/20 flex flex-col items-center gap-4">
          
          {/* Made with Love & Duas */}
          <p className="text-[#5a4b44]/75 font-serif text-sm tracking-wide font-semibold">
            Made with Love &amp; Duas <span className="text-rose-400">🤍</span>
          </p>

          {/* Calligraphy phrase */}
          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="font-serif text-lg md:text-xl font-bold tracking-widest text-[#d4af37] mt-1"
          >
            اللهم بارك لها
          </motion.p>

          {/* Little date-time or symbolic sign */}
          <p className="text-[10px] uppercase tracking-widest text-natural-brown/40 font-sans mt-4 font-bold">
            June 2026 • Welcome Aasiya Khan 👶
          </p>
        </div>
      </div>

      {/* Extreme border watermarks */}
      <div className="absolute bottom-4 left-4 text-natural-brown/30 text-xs font-sans tracking-widest pointer-events-none opacity-40 uppercase font-semibold">
        In the name of Allah
      </div>
      <div className="absolute bottom-4 right-4 text-natural-brown/30 text-xs font-sans tracking-widest pointer-events-none opacity-40 uppercase font-semibold">
        Blessings &amp; Peace
      </div>
    </footer>
  );
}
