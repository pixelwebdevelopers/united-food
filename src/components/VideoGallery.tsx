'use client';

import React, { useState } from 'react';
import { Play, Film, X, Sparkles, Video, Volume2 } from 'lucide-react';
import { BRAND_VIDEOS, VideoItem } from '@/data/productsData';

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'promo' | 'reels'>('all');

  const filteredVideos = BRAND_VIDEOS.filter((v) => {
    if (filterType === 'promo') return v.name.includes('Promo');
    if (filterType === 'reels') return v.name.includes('Reel');
    return true;
  });

  return (
    <section id="videos" className="py-20 bg-[#090d16] relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#8b1524]/30 border border-[#d4af37]/30 text-xs font-semibold text-[#f3cf65]">
            <Video className="w-3.5 h-3.5 text-[#f3cf65]" />
            <span>MEDIA & REELS SHOWCASE ({BRAND_VIDEOS.length} VIDEOS)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            EXPERIENCE OUR <span className="gold-gradient-text">STORY IN MOTION</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Watch our high-definition promotional videos and mobile product reels showcasing the authentic preparation, 
            rich ingredients, and vibrant packaging of United Foods.
          </p>
        </div>

        {/* Video Filter Buttons */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setFilterType('all')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
              filterType === 'all'
                ? 'bg-gradient-to-r from-[#8b1524] to-[#ab2133] text-white border border-[#d4af37]/60 shadow-lg'
                : 'bg-white/5 text-slate-300 hover:text-white border border-white/5'
            }`}
          >
            All Videos ({BRAND_VIDEOS.length})
          </button>
          <button
            onClick={() => setFilterType('promo')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
              filterType === 'promo'
                ? 'bg-gradient-to-r from-[#8b1524] to-[#ab2133] text-white border border-[#d4af37]/60 shadow-lg'
                : 'bg-white/5 text-slate-300 hover:text-white border border-white/5'
            }`}
          >
            Brand Promo HD (4)
          </button>
          <button
            onClick={() => setFilterType('reels')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
              filterType === 'reels'
                ? 'bg-gradient-to-r from-[#8b1524] to-[#ab2133] text-white border border-[#d4af37]/60 shadow-lg'
                : 'bg-white/5 text-slate-300 hover:text-white border border-white/5'
            }`}
          >
            Product Reels (5)
          </button>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => {
            const isReel = video.name.includes('Reel');
            return (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-[#d4af37]/60 relative flex flex-col justify-between"
              >
                {/* Video Player / Poster Container */}
                <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
                  <video
                    src={video.videoUrl}
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                    muted
                  />
                  
                  {/* Play Overlay Button */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#8b1524] to-[#d4af37] flex items-center justify-center text-white shadow-xl shadow-[#8b1524]/60 group-hover:scale-115 transition-transform">
                      <Play className="w-6 h-6 ml-0.5 fill-current text-[#f9e390]" />
                    </div>
                  </div>

                  {/* Format Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#d4af37]/40 text-[10px] font-bold text-[#f3cf65] flex items-center gap-1">
                    <Film className="w-3 h-3" />
                    <span>{isReel ? 'Mobile Reel' : 'HD Promo'}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 space-y-1">
                  <span className="text-[10px] font-semibold text-[#d4af37] uppercase tracking-wider block">
                    {video.category}
                  </span>
                  <h3 className="font-heading text-sm md:text-base font-bold text-white group-hover:text-[#f3cf65] transition-colors">
                    {video.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Video Modal Lightbox */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
          />

          <div className="relative w-full max-w-4xl bg-[#0e1626] border border-[#d4af37]/50 rounded-3xl overflow-hidden shadow-2xl z-10 animate-scaleUp">
            
            {/* Header with Title and Close */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#5c0b15]/50 to-transparent">
              <div>
                <span className="text-[11px] text-[#f3cf65] font-semibold uppercase">{activeVideo.category}</span>
                <h3 className="font-heading text-base sm:text-lg font-bold text-white">{activeVideo.name}</h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Container */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              <video
                src={activeVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
