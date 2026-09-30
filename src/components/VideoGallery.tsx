'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Play, Film, X, Video, ArrowLeft, RotateCcw, Volume2, Sparkles } from 'lucide-react';
import { BRAND_VIDEOS, VideoItem } from '@/data/productsData';

function VideoGalleryContent() {
  const searchParams = useSearchParams();
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'promo' | 'reels'>('all');

  // Auto-open video if query param ?video=id is present
  useEffect(() => {
    const videoId = searchParams?.get('video');
    if (videoId) {
      const match = BRAND_VIDEOS.find((v) => v.id === videoId);
      if (match) {
        setActiveVideo(match);
      }
    }
  }, [searchParams]);

  // Prevent background scrolling when full screen player is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeVideo]);

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredVideos = BRAND_VIDEOS.filter((v) => {
    if (filterType === 'promo') return v.name.includes('Promo');
    if (filterType === 'reels') return v.name.includes('Reel');
    return true;
  });

  return (
    <section id="videos" className="py-12 sm:py-16 bg-white relative border-b border-slate-200">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-50 border border-[#34070c]/20 text-xs font-bold text-[#34070c]">
            <Video className="w-3.5 h-3.5 text-[#34070c]" />
            <span>MEDIA &amp; REELS SHOWCASE ({BRAND_VIDEOS.length} VIDEOS)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            EXPERIENCE OUR <span className="crimson-gradient-text">STORY IN MOTION</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Watch our high-definition promotional videos and vertical mobile reels showcasing authentic preparation, 
            rich ingredients, and vibrant packaging of United Foods™.
          </p>
        </div>

        {/* Video Filter Buttons */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-10 flex-wrap">
          <button
            onClick={() => setFilterType('all')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              filterType === 'all'
                ? 'bg-[#34070c] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:text-[#34070c] hover:bg-slate-200'
            }`}
          >
            All Videos ({BRAND_VIDEOS.length})
          </button>
          <button
            onClick={() => setFilterType('promo')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              filterType === 'promo'
                ? 'bg-[#34070c] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:text-[#34070c] hover:bg-slate-200'
            }`}
          >
            Brand Promo HD ({BRAND_VIDEOS.filter((v) => v.name.includes('Promo')).length})
          </button>
          <button
            onClick={() => setFilterType('reels')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              filterType === 'reels'
                ? 'bg-[#34070c] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:text-[#34070c] hover:bg-slate-200'
            }`}
          >
            Product Reels ({BRAND_VIDEOS.filter((v) => v.name.includes('Reel')).length})
          </button>
        </div>

        {/* ========================================================= */}
        {/* PORTRAIT VIDEO GRID (2 cols on mobile, 3 on tablet, 4 on desktop) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredVideos.map((video) => {
            const isReel = video.name.includes('Reel');
            return (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-slate-200 hover:border-[#34070c]/50 hover:shadow-2xl relative flex flex-col justify-between bg-slate-950 shadow-sm transition-all"
              >
                {/* 9:16 Portrait Video Thumbnail Frame */}
                <div className="relative w-full aspect-[9/16] bg-slate-950 flex items-center justify-center overflow-hidden">
                  <video
                    src={video.videoUrl}
                    preload="metadata"
                    playsInline
                    muted
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                  />
                  
                  {/* Dark High-Contrast Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/60 pointer-events-none" />

                  {/* Format Badge (Top Left) */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/25 text-[9px] sm:text-[10px] font-bold text-[#f5d77f] flex items-center gap-1 z-10 shadow-md">
                    <Film className="w-3 h-3 text-[#f5d77f]" />
                    <span>{isReel ? 'Portrait Reel' : 'HD Promo'}</span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#34070c]/90 border border-[#f5d77f]/70 flex items-center justify-center text-white shadow-2xl group-hover:scale-115 group-hover:bg-[#4e0b12] transition-transform duration-300">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5 fill-[#f5d77f] text-[#f5d77f]" />
                    </div>
                  </div>

                  {/* Bottom Text Information */}
                  <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 space-y-1 z-10">
                    <span className="text-[9px] sm:text-[10px] font-extrabold !text-[#f5d77f] uppercase tracking-wider block drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                      {video.category}
                    </span>
                    <h3 className="font-heading text-xs sm:text-sm md:text-base font-bold !text-white line-clamp-2 leading-snug drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] group-hover:!text-[#f5d77f] transition-colors">
                      {video.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ========================================================= */}
      {/* FULL SCREEN PORTRAIT VIDEO MODAL WITH PROPER BACK/CLOSE */}
      {/* ========================================================= */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 sm:p-4 animate-fadeIn">
          
          {/* Top Navigation Bar with Back / Close Button */}
          <div className="fixed top-0 inset-x-0 z-50 p-4 sm:p-6 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent pointer-events-auto">
            {/* Prominent Back Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/25 shadow-xl flex items-center gap-2 transition-all cursor-pointer"
              aria-label="Back to gallery"
            >
              <ArrowLeft className="w-4 h-4 text-[#f5d77f]" />
              <span>Back to Videos</span>
            </button>

            {/* Video Title in Center for Desktop */}
            <div className="hidden sm:block text-center max-w-md mx-auto px-5 py-2 rounded-full bg-[#34070c]/90 backdrop-blur-md border border-[#f5d77f]/30 shadow-2xl">
              <span className="text-[10px] uppercase font-bold !text-[#f5d77f] tracking-wider block">
                {activeVideo.category}
              </span>
              <p className="text-sm font-bold !text-white truncate drop-shadow">
                {activeVideo.name}
              </p>
            </div>

            {/* Close Button on Right */}
            <button
              onClick={() => setActiveVideo(null)}
              className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white backdrop-blur-md border border-white/25 shadow-xl transition-all cursor-pointer"
              aria-label="Close video player"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Backdrop Click */}
          <div
            onClick={() => setActiveVideo(null)}
            className="absolute inset-0 z-10 cursor-pointer"
          />

          {/* Portrait Video Player Container */}
          <div className="relative z-20 h-[80vh] sm:h-[84vh] max-h-[920px] aspect-[9/16] max-w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black flex items-center justify-center">
            <video
              src={activeVideo.videoUrl}
              controls
              autoPlay
              playsInline
              loop
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mobile Video Bottom Title Pill */}
          <div className="fixed bottom-4 inset-x-4 z-50 sm:hidden text-center pointer-events-none">
            <div className="inline-block px-4 py-2 rounded-full bg-[#34070c]/95 backdrop-blur-md border border-[#f5d77f]/40 text-white text-xs font-semibold shadow-2xl max-w-xs truncate">
              <span className="!text-[#f5d77f] font-bold block text-[10px]">{activeVideo.category}</span>
              <span className="!text-white">{activeVideo.name}</span>
            </div>
          </div>

        </div>
      )}
    </section>
  );
}

export default function VideoGallery() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading videos...</div>}>
      <VideoGalleryContent />
    </Suspense>
  );
}
