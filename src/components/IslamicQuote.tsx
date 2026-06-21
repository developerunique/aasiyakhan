import React from 'react';
import { motion } from 'motion/react';

export default function IslamicQuote() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
      {/* 1. Animated English Quote Card in Natural Tones theme */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="relative bg-white/70 backdrop-blur-md rounded-[40px] p-8 border border-natural-gold/20 shadow-sm hover:shadow-md hover:border-natural-gold/45 transition-all duration-300 group flex flex-col justify-between"
      >
        {/* Subtle decorative quote icon */}
        <div className="absolute top-4 right-6 text-natural-gold/10 text-6xl font-serif select-none pointer-events-none group-hover:text-natural-gold/20 transition-colors duration-300">
          &ldquo;
        </div>

        {/* Small header */}
        <div className="flex items-center gap-2 mb-4 text-natural-gold text-xs font-sans font-semibold uppercase tracking-widest">
          <span>◆</span>
          <span>A Divine Entrustment</span>
        </div>

        {/* Animated Quote */}
        <p className="text-[#5a4b44] font-serif text-lg md:text-xl leading-relaxed italic relative z-10 pt-2">
          &ldquo;Every child is a precious gift entrusted by Allah. May Allah fill her life with Imaan, happiness, mercy and endless barakah.&rdquo; <span className="text-rose-400 not-italic">🤍</span>
        </p>

        {/* Miniature decorative border branch at bottom */}
        <div className="flex justify-center mt-6 text-natural-gold/30 group-hover:text-natural-gold/60 transition-colors duration-300">
          <svg viewBox="0 0 100 20" fill="currentColor" className="w-24 h-6">
            <path d="M10 10 Q30 5, 50 10 T90 10 M30 10 C30 5, 40 5, 40 10 M60 10 C60 5, 70 5, 70 10" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </motion.div>


      {/* 2. Elegant Urdu Shayari Card in Natural Tones theme */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
        className="relative bg-white rounded-[40px] p-8 border border-pink-50/80 shadow-sm hover:shadow-md hover:border-pink-200 transition-all duration-300 group flex flex-col justify-between overflow-hidden"
      >
        {/* Decorative gold ornament tab */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-[#fdfaf5] border border-b-0 border-natural-gold/20 px-4 py-1 text-natural-gold rounded-full text-xs">
          🤍
        </div>

        {/* Soft watermark pattern behind */}
        <div className="absolute -bottom-8 -right-8 w-32 h-32 text-natural-gold/10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3,3" />
            <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Small header */}
        <div className="flex items-center gap-2 mb-4 text-natural-gold text-xs font-sans font-semibold uppercase tracking-widest mt-2">
          <span>🌸</span>
          <span>Dua &amp; Shayari</span>
        </div>

        {/* Urdu Shayari Lines with optional right-to-left layout for perfect Urdu font representation */}
        <div className="space-y-4 font-serif text-[#5a4b44] text-xl md:text-2xl tracking-wide text-center leading-relaxed font-semibold pt-4" dir="rtl">
          <p className="hover:text-natural-gold transition-colors duration-200">
            ہر مسکراہٹ میں اللہ کی رحمت ہو،
          </p>
          <p className="hover:text-natural-gold transition-colors duration-200">
            ہر قدم پر اس کی حفاظت ہو۔
          </p>
          <p className="hover:text-natural-gold transition-colors duration-200">
            ہر دعا قبول ہو اس کی،
          </p>
          <p className="hover:text-natural-gold transition-colors duration-200">
            اور زندگی بھر برکت ہی برکت ہو۔ <span className="text-rose-400 not-italic font-sans text-lg">🤍</span>
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-1.5 mt-6 text-rose-300">
          <span className="w-1.5 h-1.5 rounded-full bg-natural-gold"></span>
          <span className="w-8 h-[1px] bg-pink-100"></span>
          <span className="text-xs">✨</span>
          <span className="w-8 h-[1px] bg-pink-100"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-natural-gold"></span>
        </div>
      </motion.div>
    </div>
  );
}
