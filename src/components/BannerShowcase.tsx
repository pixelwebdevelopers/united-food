'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Eye, X, Image as ImageIcon } from 'lucide-react';
import { PROMOTIONAL_BANNERS, BannerItem } from '@/data/productsData';

export default function BannerShowcase() {
  const [selectedBanner, setSelectedBanner] = useState<BannerItem | null>(null);

  return (
    <section id="banners" className="py-20 bg-gradient-to-b from-[#090d16] via-[#101726] to-[#090d16] relative border-t border-b border-white/5">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#8b1524]/30 border border-[#d4af37]/30 text-xs font-semibold text-[#f3cf65]">
            <ImageIcon className="w-3.5 h-3.5 text-[#f3cf65]" />
            <span>MARKETING & CAMPAIGNS ({PROMOTIONAL_BANNERS.length} BANNERS)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            PROMOTIONAL <span className="gold-gradient-text">CAMPAIGNS</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Explore our curated promotional artwork, retail posters, and recipe mix campaign banners.
          </p>
        </div>

        {/* Banners Grid with Contain images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROMOTIONAL_BANNERS.map((banner) => (
            <div
              key={banner.id}
              onClick={() => setSelectedBanner(banner)}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-[#d4af37]/60 relative flex flex-col"
            >
              {/* Image Container with Contain */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-slate-900 to-[#0c1220] p-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={banner.image}
                  alt={banner.name}
                  width={400}
                  height={300}
                  className="object-contain max-h-[220px] w-auto group-hover:scale-105 transition-transform duration-500 drop-shadow-lg"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#d4af37] text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View High-Res Banner</span>
                  </span>
                </div>
              </div>

              {/* Title & Tag */}
              <div className="p-4 border-t border-white/5 space-y-1">
                <span className="text-[10px] font-semibold text-[#d4af37] uppercase tracking-wider block">
                  Campaign Artwork
                </span>
                <h3 className="font-heading text-sm font-bold text-white group-hover:text-[#f3cf65] transition-colors line-clamp-1">
                  {banner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Banner Lightbox Modal */}
      {selectedBanner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div 
            onClick={() => setSelectedBanner(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
          />

          <div className="relative w-full max-w-4xl bg-[#0e1626] border border-[#d4af37]/50 rounded-3xl overflow-hidden shadow-2xl z-10 animate-scaleUp my-8">
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#5c0b15]/50 to-transparent">
              <h3 className="font-heading text-base sm:text-lg font-bold text-white">{selectedBanner.name}</h3>
              <button
                onClick={() => setSelectedBanner(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                aria-label="Close banner view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full max-h-[75vh] p-6 flex items-center justify-center bg-black/90">
              <Image
                src={selectedBanner.image}
                alt={selectedBanner.name}
                width={1000}
                height={800}
                className="object-contain max-h-[65vh] w-auto rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
