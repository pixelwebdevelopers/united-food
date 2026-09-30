'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function LoadingScreen() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const fallbackTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleFinish = useCallback(() => {
    if (isFading || !isPlaying) return;
    setIsFading(true);
    // Allow smooth fade-out animation before unmounting
    setTimeout(() => {
      setIsPlaying(false);
      setIsMounted(false);
    }, 700);
  }, [isFading, isPlaying]);

  // Adjust safety fallback timer dynamically when video metadata loads (supports 5s+ videos)
  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    const duration = video.duration;
    if (duration && !isNaN(duration) && duration > 0) {
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
      }
      // Set fallback to duration + 2.5s buffer so the full video (5s or whatever length) plays to completion
      fallbackTimerRef.current = setTimeout(() => {
        handleFinish();
      }, Math.max((duration * 1000) + 2500, 8000));
    }
  };

  useEffect(() => {
    // Lock background scroll during the intro splash animation
    if (isPlaying) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPlaying]);

  useEffect(() => {
    // Initial generous safety fallback timeout (10 seconds) in case network is slow or autoplay policy stalls
    fallbackTimerRef.current = setTimeout(() => {
      handleFinish();
    }, 10000);

    // Attempt autoplay immediately
    const playDesktop = desktopVideoRef.current?.play();
    if (playDesktop !== undefined) {
      playDesktop.catch(() => {
        // Autoplay policy fallback
      });
    }

    const playMobile = mobileVideoRef.current?.play();
    if (playMobile !== undefined) {
      playMobile.catch(() => {
        // Autoplay policy fallback
      });
    }

    return () => {
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
      }
    };
  }, [handleFinish]);

  if (!isMounted) return null;

  return (
    <div
      onClick={handleFinish}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#000000] overflow-hidden select-none transition-all duration-700 ease-out cursor-pointer ${
        isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-label="Loading United Foods..."
    >
      {/* Subtle background ambient pulse glow */}
      <div className="absolute inset-0 bg-radial from-[#34070c]/20 via-black to-black pointer-events-none" />

      {/* Desktop Video (Landscape - visible on md and larger) */}
      <video
        ref={desktopVideoRef}
        src="/loading-screen/desktop.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleFinish}
        className="hidden md:block w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Mobile Video (Portrait - visible on mobile screens) */}
      <video
        ref={mobileVideoRef}
        src="/loading-screen/mobile.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleFinish}
        className="block md:hidden w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Subtle Skip button in the top right corner */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleFinish();
        }}
        className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white/80 hover:text-white text-xs font-semibold backdrop-blur-md transition-all z-20"
      >
        Skip Intro &times;
      </button>
    </div>
  );
}
