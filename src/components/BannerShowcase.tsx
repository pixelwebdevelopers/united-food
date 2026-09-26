'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, X, Image as ImageIcon } from 'lucide-react';
import { PROMOTIONAL_BANNERS, BannerItem } from '@/data/productsData';

export default function BannerShowcase() {
  const [selectedBanner, setSelectedBanner] = useState<BannerItem | null>(null);

  return (
    <section id="banners" className="py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-50 border border-[#8b1524]/20 text-xs font-bold text-[#8b1524]">
            <ImageIcon className="w-3.5 h-3.5 text-[#8b1524]" />
            <span>MARKETING & CAMPAIGNS ({PROMOTIONAL_BANNERS.length} BANNERS)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            PROMOTIONAL <span className="crimson-gradient-text">CAMPAIGNS</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Explore our curated promotional artwork, retail posters, and recipe mix campaign banners.
          </p>
        </div>

        {/* Banners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROMOTIONAL_BANNERS.map((banner) => (
            <div
              key={banner.id}
              onClick={() => setSelectedBanner(banner)}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer border border-slate-200 hover:border-[#8b1524]/40 hover:shadow-xl relative flex flex-col bg-white"
            >
              {/* Image Container with Contain */}
              <div className="relative w-full aspect-[4/3] bg-white p-4 flex items-center justify-center overflow-hidden border-b border-slate-100">
                <Image
                  src={banner.image}
                  alt={banner.name}
                  width={400}
                  height={300}
                  className="object-contain max-h-[220px] w-auto group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#8b1524] text-white font-bold text-xs flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-[#f5d77f]" />
                    <span>View High-Res Banner</span>
                  </span>
                </div>
              </div>

              {/* Title & Tag */}
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold text-[#8b1524] uppercase tracking-wider block">
                  Campaign Artwork
                </span>
                <h3 className="font-heading text-sm font-bold text-slate-900 group-hover:text-[#8b1524] transition-colors line-clamp-1">
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
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          />

          <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl z-10 animate-scaleUp my-8">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-[#8b1524] text-white">
              <h3 className="font-heading text-base sm:text-lg font-bold text-white">{selectedBanner.name}</h3>
              <button
                onClick={() => setSelectedBanner(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close banner view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full max-h-[75vh] p-6 flex items-center justify-center bg-slate-950">
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
