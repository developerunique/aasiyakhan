import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function CountdownTimer() {
  // We'll set the default target date to be 3 days in the future relative to current time so the user can see it live!
  // Current known local time is "2026-06-21T08:03:24-07:00"
  const getInitialTarget = () => {
    // Aasiya's birthday is exactly on June 23, 2026!
    const target = new Date("2026-06-23T00:00:00");
    return target.getTime();
  };

  const [targetTime, setTargetTime] = useState(getInitialTarget());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  // Developer toggle to easily test and preview the "Completed" blessing state
  const [forceCompletedState, setForceCompletedState] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isCompleted: true,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isCompleted: false,
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  const showCompleted = timeLeft.isCompleted || forceCompletedState;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 relative z-10 text-center select-none">
      
      {/* Dev preview switcher - discreet and highly useful */}
      <div className="mb-6 flex justify-center items-center gap-3">
        <label className="text-stone-400 text-xs font-sans">
          Preview State:
        </label>
        <button
          onClick={() => setForceCompletedState(prev => !prev)}
          className={`px-3 py-1 text-[11px] rounded-full font-medium tracking-wide border transition-all cursor-pointer ${
            forceCompletedState
              ? 'bg-rose-50 text-rose-600 border-rose-200'
              : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
          }`}
        >
          {forceCompletedState ? 'Showing Blessed Finished State' : 'Showing Live Countdown'}
        </button>
      </div>

      <div className="relative bg-white/70 backdrop-blur-md rounded-[32px] p-8 border border-natural-gold/20 shadow-xs">
        
        <AnimatePresence mode="wait">
          {!showCompleted ? (
            <motion.div
              key="countdown-active"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Title representation */}
              <h3 className="font-serif text-lg md:text-xl text-[#5a4b44] font-bold tracking-wide flex items-center justify-center gap-2">
                <span>🌙</span>
                <span>Countdown Until Aasiya's Special Day</span>
                <span>🤲</span>
              </h3>

              {/* Number Boxes */}
              <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-md mx-auto pt-2">
                {[
                  { value: timeLeft.days, label: "Days" },
                  { value: timeLeft.hours, label: "Hours" },
                  { value: timeLeft.minutes, label: "Mins" },
                  { value: timeLeft.seconds, label: "Secs" },
                ].map((item, idx) => (
                  <div
                    key={`time-${idx}`}
                    className="flex flex-col items-center p-3 bg-gradient-to-b from-white to-[#fdfaf5] border border-natural-sage/15 rounded-2xl shadow-xs"
                  >
                    <span className="font-mono text-2xl md:text-3xl font-bold text-natural-gold tracking-tight">
                      {item.value.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[10px] md:text-xs font-sans uppercase tracking-widest text-natural-brown/40 mt-1 font-semibold">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="countdown-completed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="py-4 space-y-4 text-center max-w-lg mx-auto"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="text-4xl"
              >
                🌸🤲🎂
              </motion.div>
              <h3 className="font-serif text-xl md:text-2xl text-natural-gold font-bold leading-relaxed">
                Alhamdulillah, This Blessed Day Has Arrived. May Allah Bless Aasiya Khan Always.
              </h3>
              <p className="text-natural-brown/65 text-xs font-sans font-semibold">
                May your life be illuminated with endless barakah and divine mercy.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
