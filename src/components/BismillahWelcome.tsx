import React, { useEffect } from 'react';
import { motion } from 'motion/react';

interface BismillahWelcomeProps {
  onComplete: () => void;
}

export default function BismillahWelcome({ onComplete }: BismillahWelcomeProps) {
  useEffect(() => {
    // Automatically transition to the main page after 5 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 5200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fdfaf5] select-none overflow-hidden"
    >
      {/* Background radial soft light for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_75%)] pointer-events-none" />

      {/* Decorative floral SVG watermark on top/bottom */}
      <div className="absolute top-8 text-natural-gold/15 w-44 h-auto aspect-square">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M50 0 C45 30 20 45 0 50 C20 55 45 70 50 100 C55 70 80 55 100 50 C80 45 55 30 50 0" />
        </svg>
      </div>

      <div className="z-10 flex flex-col items-center text-center px-6">
        {/* Shimmering sacred Bismillah Arabic text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="relative text-natural-brown text-5xl md:text-7xl font-serif tracking-wide select-none"
        >
          <span className="bg-gradient-to-r from-[#d4af37] via-[#5a4b44] to-[#d4af37] bg-clip-text text-transparent block font-medium">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </span>
          <p className="text-natural-gold/80 font-sans font-semibold text-xs md:text-sm uppercase tracking-[0.3em] mt-4">
            Bismillahir Rahmanir Rahim
          </p>
        </motion.div>

        {/* Elegant dividing line that grows from center */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "140px" }}
          transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-10"
        />

        {/* English quote: Every beautiful blessing begins with the Name of Allah. */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1.8, ease: "easeIn" }}
          className="text-[#5a4b44] font-serif text-lg md:text-2xl max-w-lg leading-relaxed italic"
        >
          &ldquo;Every beautiful blessing begins with the Name of Allah.&rdquo;
        </motion.p>
      </div>

      {/* Floating Skip/Enter button for a snappy, premium interactive feel */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 1.0 }}
        onClick={onComplete}
        className="absolute bottom-16 px-6 py-2.5 bg-white border border-[#d4af37]/30 hover:border-[#d4af37] rounded-full shadow-xs text-natural-brown hover:text-natural-gold font-serif text-xs uppercase tracking-widest cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
      >
        Enter Blessings 🤲
      </motion.button>

      {/* Bottom decorative floral backdrop */}
      <div className="absolute bottom-8 text-natural-sage/15 w-44 h-auto aspect-square rotate-180">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M50 0 C45 30 20 45 0 50 C20 55 45 70 50 100 C55 70 80 55 100 50 C80 45 55 30 50 0" />
        </svg>
      </div>
    </motion.div>
  );
}
