'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Play, Film, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { BRAND_VIDEOS } from '@/data/productsData';

export default function HomeVideoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleVideoClick = (videoId: string) => {
    // Directly navigate to the Media & Reels page
    router.push(`/media?video=${videoId}`);
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-[#34070c]/20 text-xs font-bold text-[#34070c] mb-2">
              <Film className="w-3.5 h-3.5 text-[#34070c]" />
              <span>EXPERIENCE IN MOTION</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              PROMOTIONAL <span className="crimson-gradient-text">VIDEOS &amp; REELS</span>
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Watch our vertical reels and promotional highlights showcasing authentic preparations and ingredients.
            </p>
          </div>

          {/* Nav Controls & View All Link */}
          <div className="flex items-center gap-3">
            <Link
              href="/media"
              className="px-4 py-2 rounded-full bg-white border border-slate-200 hover:border-[#34070c] text-slate-700 hover:text-[#34070c] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 text-[#34070c]" />
              <span>Watch All Videos ({BRAND_VIDEOS.length})</span>
            </Link>

            {/* Left / Right scroll buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scroll('left')}
                className="p-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#34070c] shadow-sm transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#34070c] shadow-sm transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HORIZONTAL CAROUSEL TRACK (Portrait 9:16 Cards for Mobile & Desktop) */}
        {/* ========================================================================= */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {BRAND_VIDEOS.map((video) => {
            const isReel = video.name.includes('Reel');
            return (
              <div
                key={video.id}
                onClick={() => handleVideoClick(video.id)}
                className="flex-shrink-0 w-[220px] xs:w-[250px] sm:w-[280px] rounded-2xl overflow-hidden cursor-pointer group snap-start border border-slate-200 hover:border-[#34070c]/50 hover:shadow-2xl transition-all relative bg-slate-950 shadow-md"
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

                  {/* Gradient Overlay for Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85 pointer-events-none" />

                  {/* Format Pill (Top Left) */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-bold text-[#f5d77f] flex items-center gap-1 z-10 shadow-sm">
                    <Film className="w-3 h-3" />
                    <span>{isReel ? 'Portrait Reel' : 'HD Promo'}</span>
                  </div>

                  {/* Center Glowing Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-[#34070c]/90 border border-[#f5d77f]/60 flex items-center justify-center text-white shadow-2xl group-hover:scale-115 group-hover:bg-[#4e0b12] transition-transform duration-300">
                      <Play className="w-6 h-6 ml-0.5 fill-[#f5d77f] text-[#f5d77f]" />
                    </div>
                  </div>

                  {/* Bottom Text Information */}
                  <div className="absolute bottom-0 inset-x-0 p-4 space-y-1.5 z-10">
                    <span className="text-[10px] font-bold text-[#f5d77f] uppercase tracking-wider block drop-shadow-sm">
                      {video.category}
                    </span>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-white line-clamp-2 leading-snug drop-shadow-md group-hover:text-[#f5d77f] transition-colors">
                      {video.name}
                    </h3>
                    <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-white/90 group-hover:text-[#f5d77f] transition-colors">
                      <span>Watch Full Video</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button Footer */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/media"
            className="btn-outline !py-3 !px-6 text-xs inline-flex items-center gap-2 w-full justify-center"
          >
            <span>Explore All {BRAND_VIDEOS.length} Media &amp; Reels</span>
            <ArrowRight className="w-4 h-4 text-[#34070c]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
