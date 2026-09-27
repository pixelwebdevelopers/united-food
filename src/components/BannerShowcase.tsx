'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Eye, X, Image as ImageIcon, Sparkles, Phone, CheckCircle, ShieldCheck, Maximize2, ArrowLeft, Download } from 'lucide-react';
import { PROMOTIONAL_BANNERS, BannerItem, COMPANY_INFO } from '@/data/productsData';

export default function BannerShowcase() {
  const [selectedBanner, setSelectedBanner] = useState<BannerItem | null>(null);
  const [isFullScreenImage, setIsFullScreenImage] = useState(false);

  // Reset full screen image state when banner changes
  useEffect(() => {
    setIsFullScreenImage(false);
  }, [selectedBanner]);

  // Handle ESC key press (close full screen image first if open, or modal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullScreenImage) {
          setIsFullScreenImage(false);
        } else if (selectedBanner) {
          setSelectedBanner(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullScreenImage, selectedBanner]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedBanner) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedBanner]);

  return (
    <section id="banners" className="py-16 sm:py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-50 border border-[#34070c]/20 text-xs font-bold text-[#34070c]">
            <ImageIcon className="w-3.5 h-3.5 text-[#34070c]" />
            <span>MARKETING &amp; CAMPAIGNS ({PROMOTIONAL_BANNERS.length} BANNERS)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            PROMOTIONAL <span className="crimson-gradient-text">CAMPAIGNS</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Explore our curated promotional artwork, retail posters, and recipe mix campaign banners crafted for global retail excellence.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PORTRAIT BANNERS GRID (Matching Product Layout 3:4.2 aspect ratio) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROMOTIONAL_BANNERS.map((banner) => (
            <div
              key={banner.id}
              className="glass-card rounded-2xl p-4 flex flex-col justify-between group border border-slate-200 hover:border-[#34070c]/40 hover:shadow-xl relative bg-white transition-all shadow-sm"
            >
              <div>
                {/* Portrait Image Container matching Product Cards */}
                <div 
                  onClick={() => setSelectedBanner(banner)}
                  className="product-img-wrapper cursor-pointer mb-4 relative"
                >
                  <Image
                    src={banner.image}
                    alt={banner.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Quick View Hover Button */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#34070c] text-white font-bold text-xs flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5 text-[#f5d77f]" />
                      <span>Quick View</span>
                    </span>
                  </div>

                  {/* Campaign Format Pill */}
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-bold text-slate-800 shadow-sm z-10">
                    Campaign Poster
                  </div>

                  {/* Badge */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#34070c] text-[9px] font-bold text-white flex items-center gap-1 z-10 shadow-sm">
                    <Sparkles className="w-3 h-3 text-[#f5d77f]" />
                    <span>HD Promo</span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-[#34070c] uppercase tracking-wider block">
                    {banner.category}
                  </span>
                  <h3 
                    onClick={() => setSelectedBanner(banner)}
                    className="font-heading text-base font-bold text-slate-900 group-hover:text-[#34070c] transition-colors line-clamp-2 cursor-pointer"
                  >
                    {banner.name}
                  </h3>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedBanner(banner)}
                  className="text-xs font-semibold text-slate-600 hover:text-[#34070c] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#34070c]" />
                  <span>View Details</span>
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Hello United Foods, I am interested in campaign banner: "${banner.name}". Please share promotional and distribution materials.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-[#34070c] hover:bg-[#4e0b12] text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <Phone className="w-3 h-3 text-[#f5d77f]" />
                  <span>Inquire</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 1. ELEGANT BRANDED MODAL (Consistent with Product Modal Color Scheme) */}
      {/* ========================================================================= */}
      {selectedBanner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div 
            onClick={() => setSelectedBanner(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fadeIn"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 animate-scaleUp my-auto">
            
            {/* Close Modal Button */}
            <button
              onClick={() => setSelectedBanner(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-[#34070c] text-white transition-colors cursor-pointer shadow-md"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Image Side (Clickable to open high-res lightbox) */}
              <div 
                onClick={() => setIsFullScreenImage(true)}
                className="relative min-h-[340px] md:min-h-[440px] bg-slate-50 p-4 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 overflow-hidden cursor-zoom-in group"
              >
                <div className="relative w-full h-full min-h-[320px] flex items-center justify-center">
                  <Image
                    src={selectedBanner.image}
                    alt={selectedBanner.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-2 drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Promotional Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#34070c] text-white text-[11px] font-bold flex items-center gap-1.5 z-10 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#f5d77f]" />
                  <span>Campaign Artwork</span>
                </div>

                {/* Click to Zoom Pill */}
                <div className="absolute bottom-4 inset-x-4 flex justify-center z-10 opacity-90 group-hover:opacity-100 transition-opacity">
                  <div className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg group-hover:bg-[#34070c] transition-colors">
                    <Maximize2 className="w-3.5 h-3.5 text-[#f5d77f]" />
                    <span>Click image to view high-res</span>
                  </div>
                </div>
              </div>

              {/* Details Side */}
              <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="inline-block px-2.5 py-1 rounded-md bg-red-50 text-[#34070c] border border-[#34070c]/20 text-xs font-bold">
                    {selectedBanner.category}
                  </div>

                  <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                    {selectedBanner.name}
                  </h3>

                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Campaign Highlights:</p>
                    <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#34070c] flex-shrink-0" />
                        <span>High-resolution master promotional artwork</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#34070c] flex-shrink-0" />
                        <span>Optimized for retail displays, posters &amp; POS marketing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#34070c] flex-shrink-0" />
                        <span>Highlights 100% natural and Halal certified products</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#34070c] flex-shrink-0" />
                        <span>Available for global distributor marketing kits</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Hello United Foods, I would like to request marketing materials for campaign: "${selectedBanner.name}".`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center text-xs !py-3 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#f5d77f]" />
                    <span>Inquire About Campaign</span>
                  </a>

                  <button
                    onClick={() => setIsFullScreenImage(true)}
                    className="btn-outline w-full text-center text-xs !py-2.5 flex items-center justify-center gap-2"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#34070c]" />
                    <span>View Fullscreen High-Res</span>
                  </button>

                  <p className="text-[10px] text-center text-slate-400">
                    Marketing &amp; Promotional Kits for Distributors &amp; Retailers
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. FULL SCREEN HIGH-RES BANNER LIGHTBOX */}
      {/* ========================================================================= */}
      {isFullScreenImage && selectedBanner && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6 animate-fadeIn">
          
          {/* Top Navigation Bar with Back & Close */}
          <div className="fixed top-0 inset-x-0 z-50 p-4 sm:p-6 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent pointer-events-auto">
            {/* Back Button */}
            <button
              onClick={() => setIsFullScreenImage(false)}
              className="px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/25 shadow-xl flex items-center gap-2 transition-all cursor-pointer"
              aria-label="Back to details"
            >
              <ArrowLeft className="w-4 h-4 text-[#f5d77f]" />
              <span>Back to Details</span>
            </button>

            {/* Title in Center Header */}
            <div className="hidden sm:block text-center max-w-md mx-auto">
              <span className="text-[10px] uppercase font-bold text-[#f5d77f] tracking-wider block">
                {selectedBanner.category}
              </span>
              <p className="text-sm font-bold text-white truncate drop-shadow">
                {selectedBanner.name}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                setIsFullScreenImage(false);
                setSelectedBanner(null);
              }}
              className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white backdrop-blur-md border border-white/25 shadow-xl transition-all cursor-pointer"
              aria-label="Close view"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Backdrop Click Dismiss */}
          <div
            onClick={() => setIsFullScreenImage(false)}
            className="absolute inset-0 z-10 cursor-pointer"
          />

          {/* High-Resolution Full-Screen Image Container */}
          <div className="relative z-20 w-full h-[78vh] sm:h-[84vh] max-w-4xl flex items-center justify-center p-2 sm:p-6 select-none">
            <Image
              src={selectedBanner.image}
              alt={selectedBanner.name}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              priority
            />
          </div>

          {/* Bottom Title Pill for Mobile */}
          <div className="fixed bottom-4 inset-x-4 z-50 sm:hidden text-center pointer-events-none">
            <div className="inline-block px-4 py-2 rounded-full bg-[#34070c]/90 backdrop-blur-md border border-[#f5d77f]/40 text-white text-xs font-semibold shadow-2xl max-w-xs truncate">
              <span className="text-[#f5d77f] font-bold block text-[10px]">{selectedBanner.category}</span>
              <span className="text-white">{selectedBanner.name}</span>
            </div>
          </div>

        </div>
      )}

    </section>
  );
}

