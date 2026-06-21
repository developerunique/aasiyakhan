import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

// EASILY REPLACEABLE NASHEED/AUDIO URL CONFIGURATION
const DEFAULT_AUDIO_URL = "/nasheed.mp3"; // Place your nasheed.mp3 inside the 'public' folder
const FALLBACK_AUDIO_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Online fallback if nasheed.mp3 is not uploaded yet

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5); // Default 50% volume
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioError, setAudioError] = useState(false);
  const [audioSrc, setAudioSrc] = useState(DEFAULT_AUDIO_URL);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initial audio setup
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Autoplay on mount when the user clicks 'Enter Blessings' (fulfilling web browser interaction policy)
  useEffect(() => {
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setAudioError(false);
          })
          .catch((err) => {
            console.log("Autoplay waiting for manual user play trigger:", err);
            setIsPlaying(false);
          });
      }
    }
  }, [audioSrc]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setAudioError(false);
        })
        .catch((err) => {
          console.warn("Audio play blocked or unavailable. User must interact first.", err);
          setIsPlaying(true);
        });
    }
  };

  const handleMuteToggle = () => {
    if (!audioRef.current) return;
    const nextMute = !isMuted;
    audioRef.current.muted = nextMute;
    setIsMuted(nextMute);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      if (val > 0) {
        audioRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleError = () => {
    // If the local nasheed.mp3 is not uploaded yet or fails, fall back to online placeholder gracefully
    if (audioSrc === DEFAULT_AUDIO_URL) {
      console.log("Local nasheed.mp3 not found. Falling back to default online preview!");
      setAudioSrc(FALLBACK_AUDIO_URL);
    } else {
      setAudioError(true);
      console.log("Audio failed to load. Ready for replacement!");
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return "00:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 relative z-10">
      {/* Underlying invisible HTML5 Audio player */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onError={handleError}
        loop
      />

      <div className="relative bg-white/80 backdrop-blur-md rounded-[32px] p-6 border border-natural-sage/20 shadow-xs hover:shadow-md transition-all duration-300">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Track Info */}
          <div className="flex items-center gap-4">
            <motion.div
              animate={isPlaying ? { rotate: 360 } : {}}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className={`p-3.5 rounded-full ${isPlaying ? 'bg-natural-sage/20 text-natural-brown' : 'bg-neutral-100 text-neutral-400'} transition-all duration-500`}
            >
              <Music className="w-5 h-5" />
            </motion.div>
            <div className="text-center sm:text-left">
              <h4 className="font-serif font-bold text-[#5a4b44] text-sm md:text-md">
                Spiritual Background Ambience
              </h4>
              <p className="text-natural-brown/60 font-sans text-xs mt-1">
                {audioError ? "(Audio file customizer ready 🎧)" : "Click Play to hear ambient melody"}
              </p>
            </div>
          </div>

          {/* Core Controls */}
          <div className="flex items-center gap-3">
            {/* Play/Pause Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={handlePlayPause}
              className={`p-3.5 rounded-full shadow-xs cursor-pointer transition-colors duration-200 ${
                isPlaying 
                  ? 'bg-rose-400 hover:bg-rose-500 text-white' 
                  : 'bg-natural-gold hover:bg-natural-gold/90 text-white'
              }`}
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </motion.button>

            {/* Mute Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleMuteToggle}
              className="p-3 rounded-full hover:bg-natural-sage/10 text-natural-brown transition-colors cursor-pointer"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-5 h-5 text-rose-400" /> : <Volume2 className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Volume & Track Slider Zone */}
        <div className="mt-5 pt-4 border-t border-natural-sage/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Elapsed Timer */}
            <div className="text-natural-brown/60 font-mono text-xs w-20 text-center sm:text-left select-none">
              {formatTime(currentTime)} / {formatTime(duration || 180)}
            </div>

            {/* Volume Slider Control */}
            <div className="flex items-center gap-2 flex-1 justify-end w-full sm:max-w-[200px]">
              <span className="text-natural-brown/60 text-xs font-sans font-semibold">Vol</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-full accent-natural-gold h-1 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
