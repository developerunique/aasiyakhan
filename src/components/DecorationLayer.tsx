import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Soft falling peach/pink petals
interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  spin: number;
}

export default function DecorationLayer() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate gentle petals
    const initialPetals = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage of screen width
      delay: Math.random() * 10,
      duration: 12 + Math.random() * 10,
      size: 10 + Math.random() * 15,
      spin: Math.random() * 360,
    }));
    setPetals(initialPetals);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* 1. Hanging Swaying Lanterns (Fanous) */}
      <div className="absolute top-0 left-4 md:left-12 w-16 md:w-24 h-auto aspect-[3/8] origin-top text-amber-500/85">
        <motion.div
          animate={{ rotate: [-4, 4, -4] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="w-full h-full flex flex-col items-center"
        >
          {/* Rope */}
          <div className="w-[1px] h-12 md:h-24 bg-amber-600/30"></div>
          {/* Lantern Body */}
          <svg viewBox="0 0 100 200" fill="currentColor" className="w-12 h-24 md:w-16 md:h-32 drop-shadow-lg">
            {/* Top Loop */}
            <circle cx="50" cy="15" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            {/* Cap */}
            <path d="M25 45 L50 20 L75 45 Z" />
            <path d="M20 45 L80 45 L75 55 L25 55 Z" className="opacity-90" />
            {/* Glass body with star cutout */}
            <path d="M25 55 L15 110 L30 150 L70 150 L85 110 L75 55 Z" fill="currentColor" className="opacity-70" />
            {/* Intricate decorative patterns */}
            <path d="M50 70 L55 85 L70 85 L58 95 L62 110 L50 100 L38 110 L42 95 L30 85 L45 85 Z" fill="#fff" className="opacity-80" />
            {/* Bottom Cap */}
            <rect x="25" y="150" width="50" height="10" rx="3" />
            <path d="M35 160 L50 185 L65 160 Z" />
            {/* Tiny hanging bell/bead */}
            <circle cx="50" cy="190" r="4" />
          </svg>
        </motion.div>
      </div>

      <div className="absolute top-0 right-4 md:right-12 w-14 md:w-20 h-auto aspect-[3/8] origin-top text-amber-500/75">
        <motion.div
          animate={{ rotate: [3, -3, 3] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="w-full h-full flex flex-col items-center"
        >
          <div className="w-[1px] h-20 md:h-36 bg-amber-600/30"></div>
          <svg viewBox="0 0 100 200" fill="currentColor" className="w-10 h-20 md:w-14 md:h-28 drop-shadow-md">
            <circle cx="50" cy="15" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M28 40 L50 15 L72 40 Z" />
            <path d="M25 40 L75 40 L70 50 L30 50 Z" />
            <path d="M30 50 L20 110 L35 145 L65 145 L80 110 L70 50 Z" fill="currentColor" className="opacity-60" />
            {/* Crescent Moon pattern inside */}
            <path d="M45 75 A15 15 0 1 0 65 95 A12 12 0 1 1 45 75" fill="#fff" className="opacity-80" />
            <rect x="30" y="145" width="40" height="8" rx="2" />
            <path d="M38 153 L50 175 L62 153 Z" />
          </svg>
        </motion.div>
      </div>


      {/* 2. Drifting Soft White Clouds */}
      <div className="absolute top-32 left-0 w-full">
        {/* Cloud 1 */}
        <motion.div
          initial={{ x: "-20%" }}
          animate={{ x: "110%" }}
          transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          className="absolute text-white/40 drop-shadow-sm"
        >
          <svg viewBox="0 0 100 40" fill="currentColor" className="w-32 md:w-48 h-auto">
            <path d="M10 30 A15 15 0 0 1 30 15 A20 20 0 0 1 70 15 A15 15 0 0 1 90 30 Z" />
          </svg>
        </motion.div>

        {/* Cloud 2 */}
        <motion.div
          initial={{ x: "-40%" }}
          animate={{ x: "115%" }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear", delay: 15 }}
          className="absolute top-24 text-[#ECE9E6]/30"
        >
          <svg viewBox="0 0 100 40" fill="currentColor" className="w-40 md:w-64 h-auto">
            <path d="M10 32 A12 12 0 0 1 25 20 A18 18 0 0 1 60 15 A20 20 0 0 1 90 32 Z" />
          </svg>
        </motion.div>
      </div>


      {/* 3. Tiny Twinkling Stars & Sparkles */}
      <div className="absolute inset-0">
        {[
          { top: "15%", left: "25%", delay: 0.5, size: 8 },
          { top: "25%", left: "75%", delay: 1.2, size: 12 },
          { top: "45%", left: "10%", delay: 2.0, size: 10 },
          { top: "60%", left: "85%", delay: 0.1, size: 6 },
          { top: "75%", left: "15%", delay: 1.7, size: 14 },
          { top: "85%", left: "70%", delay: 2.5, size: 8 },
          { top: "35%", left: "90%", delay: 0.9, size: 10 },
          { top: "5%", left: "50%", delay: 1.4, size: 12 },
        ].map((star, idx) => (
          <motion.div
            key={`star-${idx}`}
            style={{
              position: 'absolute',
              top: star.top,
              left: star.left,
            }}
            animate={{
              scale: [0.5, 1.2, 0.5],
              opacity: [0.2, 0.9, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + (idx % 3),
              delay: star.delay,
              ease: "easeInOut",
            }}
            className="text-amber-400"
          >
            {/* Clean SVG elegant 4-point star representing Islamic spark/blessing */}
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: star.size, height: star.size }}>
              <path d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z" />
            </svg>
          </motion.div>
        ))}
      </div>


      {/* 4. Beautiful Grazing Butterflies */}
      <div className="absolute inset-y-0 w-full">
        {/* Butterfly 1 - elegant pink & gold */}
        <motion.div
          animate={{
            x: [50, 150, 80, 200, 100],
            y: [200, 350, 250, 420, 300],
            rotate: [15, 45, -15, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut",
          }}
          className="absolute z-20 top-20 left-10 md:left-24 text-rose-300"
        >
          <div className="relative">
            <motion.div
              animate={{ rotateY: [0, 60, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              className="w-8 h-8 flex items-center justify-center transform-gpu"
            >
              {/* Custom SVG Butterfly */}
              <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-md">
                <path d="M50 45 C35 20, 15 30, 25 55 C15 75, 40 85, 50 65 C60 85, 85 75, 75 55 C85 30, 65 20, 50 45 Z" fill="currentColor" />
                <circle cx="50" cy="45" r="3" fill="#E2AF5B" />
                <path d="M50 43 A 15 15 0 0 0 45 25 M 50 43 A 15 15 0 0 1 55 25" stroke="#E2AF5B" strokeWidth="2" fill="none" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Butterfly 2 - lavender & sage */}
        <motion.div
          animate={{
            x: [800, 650, 720, 500, 750],
            y: [400, 250, 380, 150, 320],
            rotate: [-20, 10, -5, -45, -10],
          }}
          transition={{
            repeat: Infinity,
            duration: 28,
            ease: "easeInOut",
          }}
          className="absolute z-20 top-32 right-12 md:right-32 text-indigo-200"
        >
          <div className="relative">
            <motion.div
              animate={{ rotateY: [0, 55, 0] }}
              transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut", delay: 0.2 }}
              className="w-10 h-10 flex items-center justify-center transform-gpu"
            >
              <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-md">
                <path d="M50 45 C35 20, 15 30, 25 55 C15 75, 40 85, 50 65 C60 85, 85 75, 75 55 C85 30, 65 20, 50 45 Z" fill="currentColor" />
                <circle cx="50" cy="45" r="3" fill="#E2AF5B" />
                <path d="M50 43 A 15 15 0 0 0 45 25 M 50 43 A 15 15 0 0 1 55 25" stroke="#E2AF5B" strokeWidth="2" fill="none" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>


      {/* 5. Genuinely drifting and rotating pink rose petals & tiny white flowers */}
      <AnimatePresence>
        {petals.map((petal) => (
          <motion.div
            key={`petal-${petal.id}`}
            initial={{
              top: "-5%",
              left: `${petal.x}%`,
              opacity: 0,
              rotate: petal.spin,
            }}
            animate={{
              top: "105%",
              left: [`${petal.x}%`, `${petal.x + 8}%`, `${petal.x - 5}%`, `${petal.x + 2}%`],
              opacity: [0, 0.85, 0.85, 0],
              rotate: petal.spin + 450,
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute z-0 text-rose-200/50"
            style={{ width: petal.size, height: petal.size }}
          >
            {/* SVG Rose Petal shape or small floral petal */}
            {petal.id % 2 === 0 ? (
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-full h-full drop-shadow-xs">
                <path d="M10 0 C4 2, 0 8, 3 14 C6 19, 14 19, 17 14 C20 8, 16 2, 10 0 Z" />
              </svg>
            ) : (
              // White soft floral element
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-white/50">
                <circle cx="12" cy="12" r="3" fill="currentColor" />
                <path d="M12 2 C10 5, 6 5, 6 9 C6 11, 8 13, 12 11 M12 2 C14 5, 18 5, 18 9 C18 11, 16 13, 12 11" stroke="currentColor" fill="currentColor" />
                <path d="M12 22 C10 19, 6 19, 6 15 C6 13, 8 11, 12 13 M12 22 C14 19, 18 19, 18 15 C18 13, 16 11, 12 13" stroke="currentColor" fill="currentColor" />
              </svg>
            )}
          </motion.div>
        ))}
      </AnimatePresence>


      {/* 6. Soft Floating Pastel Balloons (No party style, deeply integrated, soft pink & ivory) */}
      <div className="absolute inset-y-0 w-full overflow-hidden">
        {/* Soft Pink Balloon - Left high */}
        <motion.div
          animate={{
            y: [550, 480, 520, 550],
            x: [100, 120, 95, 100],
            rotate: [-2, 3, -1, -2],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: "easeInOut",
          }}
          className="absolute left-6 md:left-24 top-[35%] opacity-40 z-10 w-20 md:w-32 text-rose-200"
        >
          <svg viewBox="0 0 100 200" fill="currentColor" className="w-full h-auto">
            <ellipse cx="50" cy="60" rx="35" ry="45" />
            <path d="M47 105 L53 105 L55 110 L45 110 Z" />
            {/* S-shaped Balloon String */}
            <path d="M50 110 Q55 130 45 150 T50 190" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </motion.div>

        {/* Ivory/Beige Balloon - Right low */}
        <motion.div
          animate={{
            y: [850, 780, 820, 850],
            x: [10, -10, 5, 10],
            rotate: [3, -2, 2, 3],
          }}
          transition={{
            repeat: Infinity,
            duration: 16,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute right-8 md:right-28 top-[50%] opacity-30 z-10 w-16 md:w-26 text-amber-100"
        >
          <svg viewBox="0 0 100 200" fill="currentColor" className="w-full h-auto">
            <ellipse cx="50" cy="60" rx="32" ry="42" />
            <path d="M47 102 L53 102 L55 107 L45 107 Z" />
            <path d="M50 107 Q45 125 55 145 T48 185" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
