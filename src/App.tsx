/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import BismillahWelcome from './components/BismillahWelcome';
import DecorationLayer from './components/DecorationLayer';
import HeroSection from './components/HeroSection';
import IslamicQuote from './components/IslamicQuote';
import AudioPlayer from './components/AudioPlayer';
import CountdownTimer from './components/CountdownTimer';
import PhotoGallery from './components/PhotoGallery';
import ParentDua from './components/ParentDua';
import FooterSection from './components/FooterSection';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative min-h-screen selection:bg-amber-200 selection:text-amber-950 font-sans">
      
      {/* 1. Welcome Splash/Intro screen with ﷽ (with exit transformation) */}
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <BismillahWelcome onComplete={() => setIsLoaded(true)} />
        )}
      </AnimatePresence>

      {/* 2. Main Blessing Portal content */}
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative min-h-screen bg-gradient-to-b from-[#fdfaf5] via-[#faf6ee] to-[#f4ede0]"
        >
          {/* Ambient Spiritual Lighting & Patterns (Static backdrops) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.06)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(156,175,136,0.06)_0%,transparent_50%)] pointer-events-none" />

          {/* Golden/Rose Sparkles, Butterflies, Swaying Lanterns & Drifting Clouds overlay */}
          <DecorationLayer />

          {/* Primary Layout Sections */}
          <div className="relative z-10 space-y-4 md:space-y-8">
            {/* Header branding spacing */}
            <div className="pt-6 text-center select-none opacity-40 uppercase tracking-[0.3em] font-sans text-[10px] text-stone-600">
              Aasiya Khan • Blessed Daughter
            </div>

            {/* Aasiya Hero Header */}
            <HeroSection />

            {/* Split layout (The Divine Gift Quotations & Shayari Dual-cards) */}
            <IslamicQuote />

            {/* Core Sound Control */}
            <AudioPlayer />

            {/* Timekeeping Countdown Indicator */}
            <CountdownTimer />

            {/* Grid Image Gallery with full Lightbox Swipe handlers */}
            <PhotoGallery />

            {/* Glassmorphic Mommy & Daddy Letter */}
            <ParentDua />

            {/* Unified Ending and footer signature */}
            <FooterSection />
          </div>
        </motion.div>
      )}
    </div>
  );
}
