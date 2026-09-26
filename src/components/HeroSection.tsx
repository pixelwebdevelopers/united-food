'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Award, ArrowRight, Play, Globe, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/data/productsData';

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-10 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-white via-slate-50/60 to-white overflow-hidden border-b border-slate-100">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] bg-gradient-to-r from-[#8b1524]/5 via-[#d4af37]/8 to-[#8b1524]/5 blur-3xl pointer-events-none -z-10" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Legacy Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-50 border border-[#8b1524]/20 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#8b1524] animate-pulse" />
              <span className="text-xs md:text-sm font-bold text-[#8b1524] tracking-wide">
                BUTTAR SINCE 2005 • 25+ YEARS OF TRUST
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                GLOBAL FLAVORS, <br />
                <span className="crimson-gradient-text drop-shadow-sm">
                  AUTHENTIC TASTES
                </span>
              </h1>
              <p className="font-heading text-lg md:text-2xl text-[#8b1524] font-bold tracking-wider pt-1">
                Spice Up Your Life
              </p>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
              Experience the pinnacle of culinary purity with United Foods. From our authentic slow-cured traditional 
              <strong className="text-slate-900"> Pickles (Achar)</strong>, aromatic ground & whole spices, pure <strong className="text-slate-900">Himalayan Pink Salt</strong>, 
              long-grain <strong className="text-slate-900">Basmati Rice</strong>, to 100% natural cold-pressed oils, fruit juices & flavored milks.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl py-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#8b1524] flex-shrink-0" />
                <span>100% Pure & Natural</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#8b1524] flex-shrink-0" />
                <span>No Artificial Preservatives</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#8b1524] flex-shrink-0" />
                <span>Halal & Export Certified</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link href="/products" className="btn-primary">
                <span>Explore Full Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link href="/media" className="btn-outline">
                <Play className="w-4 h-4 text-[#8b1524]" />
                <span>Watch Product Reels</span>
              </Link>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20United%20Foods,%20I%20would%20like%20to%20place%20a%20wholesale%20or%20export%20inquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <span>Wholesale Inquiry</span>
              </a>
            </div>

            {/* Floating Trust Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 w-full max-w-xl">
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-[#8b1524] font-heading">100+</div>
                <div className="text-[11px] font-medium text-slate-500">Master Products</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-[#b8860b] font-heading">10+</div>
                <div className="text-[11px] font-medium text-slate-500">Categories</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-[#8b1524] font-heading">Global</div>
                <div className="text-[11px] font-medium text-slate-500">Export Standard</div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Luxury Card Frame */}
            <div className="relative w-full max-w-[480px] aspect-square rounded-3xl p-3 bg-gradient-to-br from-white via-red-50/40 to-amber-50/30 border border-[#8b1524]/20 shadow-2xl shadow-slate-200">
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center p-4">
                
                {/* Hero Master Emblem Image */}
                <Image
                  src="/assets/01_Logos_and_Branding/United_Foods_Master_Hero_Emblem_With_Spices.jpeg"
                  alt="United Foods Master Hero Spices Brand Emblem"
                  fill
                  className="object-contain p-2 hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Floating Seal Badge Bottom Right */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md border border-[#d4af37]/50 rounded-xl p-2.5 shadow-lg flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#f5d77f]/40 flex items-center justify-center">
                    <Award className="w-4 h-4 text-[#8b1524]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-medium leading-none">Brand Promise</p>
                    <p className="text-xs text-slate-900 font-bold leading-tight">100% Authentic</p>
                  </div>
                </div>

                {/* Floating Export Ready Badge Top Left */}
                <div className="absolute top-3 left-3 bg-[#8b1524] text-white rounded-xl px-3 py-1.5 shadow-md flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#f5d77f]" />
                  <span className="text-[11px] font-bold">Worldwide Export</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
