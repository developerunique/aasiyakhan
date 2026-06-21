import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GalleryItem } from '../types';

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
    title: 'A Divine Cradle',
    description: 'Sweet baby dreams under the ultimate care and protection of Allah.',
    date: 'Newborn Blessing'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800',
    title: 'Heavenly Smile',
    description: 'A miniature reflection of innocence and the pure fitrah of childhood.',
    date: 'Little Wonders'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    title: 'Gentle Blossom',
    description: 'Growing in grace and purity like a soft pink rose in the spring of Imaan.',
    date: 'First Milestones'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800',
    title: 'Radiant Guidance',
    description: 'May her steps always be illuminated by the beautiful light of Islam.',
    date: 'Warm Atmosphere'
  }
];

export default function PhotoGallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const openLightbox = (idx: number) => {
    setActiveIdx(idx);
    document.body.style.overflow = 'hidden'; // block page scrolling
  };

  const closeLightbox = () => {
    setActiveIdx(null);
    document.body.style.overflow = ''; // restore scrolling
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeIdx === null) return;
    setActiveIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeIdx === null) return;
    setActiveIdx((prev) => (prev !== null && prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0));
  };

  // Swiping support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchEndX - touchStartX.current;

    // Detect horizontal swipe
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handlePrev(); // swiped right -> previous
      } else {
        handleNext(); // swiped left -> next
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 relative z-10">
      
      {/* Small Section Header */}
      <div className="text-center mb-10">
        <span className="text-natural-gold text-xs font-sans font-bold uppercase tracking-[0.2em]">Our Sweet Milestones</span>
        <h3 className="font-serif text-2xl md:text-3xl text-natural-brown font-bold mt-1">Photo Gallery of Blessings</h3>
        <p className="text-natural-brown/65 text-xs font-sans mt-2 max-w-md mx-auto font-semibold">
          Capturing beautiful moments of Aasiya's growth and pure childhood blessings.
        </p>
      </div>

      {/* Grid of rounded, shadow cards matching Natural Tones styling */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GALLERY_ITEMS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ y: -6 }}
            className="group relative bg-white rounded-[32px] overflow-hidden shadow-xs border border-natural-sage/15 cursor-pointer transition-all duration-300"
            onClick={() => openLightbox(idx)}
          >
            {/* Image Wrap */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100 relative">
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Soft overlay */}
              <div className="absolute inset-0 bg-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-3 rounded-full bg-white/95 shadow-xs text-natural-gold">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              {/* Float category badge */}
              {item.date && (
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[10px] uppercase tracking-wider font-sans font-bold text-natural-brown shadow-xs">
                  {item.date}
                </span>
              )}
            </div>

            {/* Title & Desc Text */}
            <div className="p-5">
              <h4 className="font-serif font-bold text-natural-brown text-md group-hover:text-natural-gold transition-colors duration-200">
                {item.title}
              </h4>
              <p className="text-[#5a4b44]/75 font-sans text-xs mt-1.5 leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-neutral-950/95 flex flex-col items-center justify-center p-4 backdrop-blur-md select-none touch-none"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Left */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 cursor-pointer hidden md:block"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Imagery Container (Middle) */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full max-h-[70vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // retain lightbox
            >
              <img
                src={GALLERY_ITEMS[activeIdx].url}
                alt={GALLERY_ITEMS[activeIdx].title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl pointer-events-none"
              />
            </motion.div>

            {/* Info Box bottom */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-center text-white mt-6 max-w-xl px-4 pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-amber-400 text-xs tracking-widest uppercase font-sans font-semibold mb-1">
                {GALLERY_ITEMS[activeIdx].date}
              </p>
              <h4 className="font-serif text-xl font-bold">
                {GALLERY_ITEMS[activeIdx].title}
              </h4>
              <p className="text-neutral-400 text-xs md:text-sm mt-2 leading-relaxed">
                {GALLERY_ITEMS[activeIdx].description}
              </p>
              <div className="text-[10px] text-neutral-500 mt-4 uppercase tracking-[0.15em] font-sans">
                Swipe left / right or use arrows • {activeIdx + 1} of {GALLERY_ITEMS.length}
              </div>
            </motion.div>

            {/* Navigation Right */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 cursor-pointer hidden md:block"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
