'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, ShieldCheck, Award, ArrowRight, Play, Globe, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/data/productsData';

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Background Gradient & Light Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] bg-gradient-to-r from-[#8b1524]/20 via-[#d4af37]/15 to-[#8b1524]/20 blur-3xl pointer-events-none -z-10" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Legacy Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#8b1524]/40 via-white/5 to-[#d4af37]/20 border border-[#d4af37]/40 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#f3cf65] animate-pulse" />
              <span className="text-xs md:text-sm font-semibold text-[#f5d77f] tracking-wide">
                BUTTAR SINCE 2005 • 25+ YEARS OF TRUST
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                GLOBAL FLAVORS, <br />
                <span className="gold-gradient-text drop-shadow-md">
                  AUTHENTIC TASTES
                </span>
              </h1>
              <p className="font-heading text-lg md:text-2xl text-[#f3cf65] font-semibold tracking-wider pt-1">
                Spice Up Your Life
              </p>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed">
              Experience the pinnacle of culinary purity with United Foods. From our authentic slow-cured traditional 
              <strong> Pickles (Achar)</strong>, aromatic ground & whole spices, pure <strong>Himalayan Pink Salt</strong>, 
              long-grain <strong>Basmati Rice</strong>, to 100% natural cold-pressed oils, fruit juices & flavored milks.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl py-2">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>100% Pure & Natural</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>No Artificial Preservatives</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>Halal & Export Certified</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a href="#products" className="btn-primary">
                <span>Explore Full Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#videos" className="btn-outline">
                <Play className="w-4 h-4 text-[#f3cf65]" />
                <span>Watch Product Reels</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20United%20Foods,%20I%20would%20like%20to%20place%20a%20wholesale%20or%20export%20inquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold !bg-transparent border border-[#d4af37] !text-[#f3cf65] hover:!bg-[#d4af37]/10"
              >
                <span>Wholesale Inquiry</span>
              </a>
            </div>

            {/* Floating Trust Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 w-full max-w-xl">
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-white font-heading">100+</div>
                <div className="text-[11px] text-slate-400">Master Products</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-[#f3cf65] font-heading">10+</div>
                <div className="text-[11px] text-slate-400">Categories</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-white font-heading">Global</div>
                <div className="text-[11px] text-slate-400">Export Standard</div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Glowing Backdrop Frame */}
            <div className="relative w-full max-w-[480px] aspect-square rounded-3xl p-3 bg-gradient-to-br from-[#8b1524]/60 via-[#d4af37]/40 to-[#5c0b15]/60 border border-[#d4af37]/50 shadow-2xl shadow-[#8b1524]/50">
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#111728] to-[#090d16] flex items-center justify-center p-4">
                
                {/* Hero Master Emblem Image */}
                <Image
                  src="/assets/01_Logos_and_Branding/United_Foods_Master_Hero_Emblem_With_Spices.jpeg"
                  alt="United Foods Master Hero Spices Brand Emblem"
                  fill
                  className="object-contain p-2 hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Floating Seal Badge Bottom Right */}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-[#d4af37]/60 rounded-xl p-2.5 shadow-xl flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                    <Award className="w-4 h-4 text-[#f3cf65]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium leading-none">Brand Promise</p>
                    <p className="text-xs text-white font-bold leading-tight">100% Authentic</p>
                  </div>
                </div>

                {/* Floating Export Ready Badge Top Left */}
                <div className="absolute top-3 left-3 bg-[#5c0b15]/90 backdrop-blur-md border border-[#d4af37]/40 rounded-xl px-3 py-1.5 shadow-xl flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#f3cf65]" />
                  <span className="text-[11px] font-semibold text-white">Worldwide Export</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
