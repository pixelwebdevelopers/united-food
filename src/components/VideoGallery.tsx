'use client';

import React, { useState } from 'react';
import { Play, Film, X, Video } from 'lucide-react';
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
    <section id="videos" className="py-20 bg-white relative border-b border-slate-200">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-50 border border-[#8b1524]/20 text-xs font-bold text-[#8b1524]">
            <Video className="w-3.5 h-3.5 text-[#8b1524]" />
            <span>MEDIA & REELS SHOWCASE ({BRAND_VIDEOS.length} VIDEOS)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            EXPERIENCE OUR <span className="crimson-gradient-text">STORY IN MOTION</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Watch our high-definition promotional videos and mobile product reels showcasing the authentic preparation, 
            rich ingredients, and vibrant packaging of United Foods.
          </p>
        </div>

        {/* Video Filter Buttons */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setFilterType('all')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              filterType === 'all'
                ? 'bg-[#8b1524] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:text-[#8b1524] hover:bg-slate-200'
            }`}
          >
            All Videos ({BRAND_VIDEOS.length})
          </button>
          <button
            onClick={() => setFilterType('promo')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              filterType === 'promo'
                ? 'bg-[#8b1524] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:text-[#8b1524] hover:bg-slate-200'
            }`}
          >
            Brand Promo HD (4)
          </button>
          <button
            onClick={() => setFilterType('reels')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              filterType === 'reels'
                ? 'bg-[#8b1524] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:text-[#8b1524] hover:bg-slate-200'
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
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-slate-200 hover:border-[#8b1524]/40 hover:shadow-xl relative flex flex-col justify-between bg-white"
              >
                {/* Video Player / Poster Container */}
                <div className="relative w-full aspect-video bg-slate-950 flex items-center justify-center overflow-hidden">
                  <video
                    src={video.videoUrl}
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    muted
                  />
                  
                  {/* Play Overlay Button */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#8b1524] flex items-center justify-center text-white shadow-xl shadow-[#8b1524]/40 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 ml-0.5 fill-current text-[#f5d77f]" />
                    </div>
                  </div>

                  {/* Format Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-bold text-[#f5d77f] flex items-center gap-1">
                    <Film className="w-3 h-3" />
                    <span>{isReel ? 'Mobile Reel' : 'HD Promo'}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 space-y-1">
                  <span className="text-[10px] font-bold text-[#8b1524] uppercase tracking-wider block">
                    {video.category}
                  </span>
                  <h3 className="font-heading text-sm md:text-base font-bold text-slate-900 group-hover:text-[#8b1524] transition-colors">
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
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          />

          <div className="relative w-full max-w-4xl bg-[#0e1626] border border-[#d4af37]/50 rounded-3xl overflow-hidden shadow-2xl z-10 animate-scaleUp">
            
            {/* Header with Title and Close */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#5c0b15] to-[#8b1524] text-white">
              <div>
                <span className="text-[11px] text-[#f5d77f] font-semibold uppercase">{activeVideo.category}</span>
                <h3 className="font-heading text-base sm:text-lg font-bold text-white">{activeVideo.name}</h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
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
