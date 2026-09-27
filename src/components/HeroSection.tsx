'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, Leaf, ShieldCheck, Globe, Plane } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#34070c] text-white overflow-hidden">
      
      {/* ========================================================================= */}
      {/* DESKTOP BACKGROUND (Seamlessly blended from left to right) */}
      {/* ========================================================================= */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/united-food-hero-section.webp"
          alt="United Foods Authentic Basmati Rice, Traditional Pickles, Spices and Himalayan Pink Salt"
          fill
          priority
          quality={95}
          className="object-cover object-right xl:object-center opacity-100"
        />
        {/* Smooth horizontal gradient blend from dark burgundy on left to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#34070c] via-[#34070c]/90 to-transparent w-[62%]" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>

      {/* ========================================================================= */}
      {/* HERO CONTENT CONTAINER */}
      {/* ========================================================================= */}
      <div className="container relative z-10 pt-8 pb-4 sm:pt-12 sm:pb-8 lg:py-20 xl:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HERO CONTENT & VALUE PROPOSITION */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5 sm:space-y-6 max-w-2xl z-10">
            
            {/* Top Eyebrow Tag */}
            <div className="inline-block">
              <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.22em] text-[#d4af37] uppercase drop-shadow-sm">
                PAKISTANI FOOD EXPORTS
              </span>
            </div>

            {/* Main Editorial Serif Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] font-bold text-white leading-[1.1] sm:leading-[1.12] tracking-tight drop-shadow-md">
              Authentic <br />
              Flavors for a <br />
              <span className="text-[#f5d77f]">Global Table</span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-[#e8dbce] leading-relaxed max-w-xl font-normal opacity-95">
              Premium spices, traditional pickles, Himalayan pink salt, basmati rice and more — delivering the true taste of Pakistan to homes and businesses worldwide.
            </p>

            {/* 3 Value Badges (Pure, Premium, Export) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 py-1.5 sm:py-2 w-full max-w-xl">
              
              {/* Feature 1 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3 pr-1 sm:pr-3 border-r border-white/15">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#d4af37]/70 bg-[#250508]/80 backdrop-blur-sm flex items-center justify-center flex-shrink-0 text-[#f5d77f] shadow-sm">
                  <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f5d77f]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[10px] sm:text-xs font-bold text-white leading-tight">
                    100% Pure &amp; Natural
                  </h4>
                  <p className="text-[9px] sm:text-[11px] text-[#cfbca8] leading-tight hidden xs:block sm:block">
                    No Artificial Preservatives
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3 px-1 sm:px-3 border-r border-white/15">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#d4af37]/70 bg-[#250508]/80 backdrop-blur-sm flex items-center justify-center flex-shrink-0 text-[#f5d77f] shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f5d77f]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[10px] sm:text-xs font-bold text-white leading-tight">
                    Premium Quality
                  </h4>
                  <p className="text-[9px] sm:text-[11px] text-[#cfbca8] leading-tight hidden xs:block sm:block">
                    Trusted Globally
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3 pl-1 sm:pl-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#d4af37]/70 bg-[#250508]/80 backdrop-blur-sm flex items-center justify-center flex-shrink-0 text-[#f5d77f] shadow-sm">
                  <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f5d77f]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-[10px] sm:text-xs font-bold text-white leading-tight">
                    Worldwide Export
                  </h4>
                  <p className="text-[9px] sm:text-[11px] text-[#cfbca8] leading-tight hidden xs:block sm:block">
                    50+ Countries
                  </p>
                </div>
              </div>

            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full sm:w-auto">
              {/* Primary Gold Button */}
              <Link
                href="/products"
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#f5d77f] via-[#e5bc53] to-[#d4af37] text-[#2c060a] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-black/40 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 text-[#2c060a]" />
              </Link>

              {/* Secondary Outlined Glass Button */}
              <Link
                href="/media"
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-black/25 hover:bg-white/10 text-white font-semibold text-sm sm:text-base border border-white/35 hover:border-[#f5d77f] hover:text-[#f5d77f] flex items-center justify-center gap-2.5 backdrop-blur-sm transition-all text-center"
              >
                <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-white text-white translate-x-[0.5px]" />
                </div>
                <span>Watch Our Story</span>
              </Link>
            </div>

          </div>

          {/* ========================================================= */}
          {/* DESKTOP ONLY RIGHT COLUMN: STAMP & ELEGANT SIGN-OFF */}
          {/* ========================================================= */}
          <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-between items-end min-h-[480px] xl:min-h-[520px] pointer-events-none">
            
            {/* Rotating Gold Stamp Badge: EXPORTING WORLDWIDE */}
            <div className="relative self-end mt-2 mr-6 xl:mr-10 group cursor-pointer pointer-events-auto">
              <div className="relative w-32 h-32 xl:w-36 xl:h-36 flex items-center justify-center">
                
                {/* SVG Circular Text with Smooth Infinite Rotation */}
                <svg
                  viewBox="0 0 160 160"
                  className="w-full h-full animate-spin-slow group-hover:[animation-play-state:paused]"
                >
                  <defs>
                    <path
                      id="stampCirclePathDesktop"
                      d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                    />
                  </defs>
                  
                  {/* Outer delicate dashed border */}
                  <circle
                    cx="80"
                    cy="80"
                    r="74"
                    fill="none"
                    stroke="#f5d77f"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    opacity="0.85"
                  />
                  
                  {/* Inner thin ring */}
                  <circle
                    cx="80"
                    cy="80"
                    r="44"
                    fill="none"
                    stroke="#f5d77f"
                    strokeWidth="1"
                    opacity="0.6"
                  />

                  {/* Circular Curving Text */}
                  <text
                    fill="#f5d77f"
                    fontSize="13.5"
                    fontWeight="700"
                    letterSpacing="3.2"
                  >
                    <textPath
                      href="#stampCirclePathDesktop"
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      • EXPORTING • WORLDWIDE •
                    </textPath>
                  </text>
                </svg>

                {/* Center Plane / Globe Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-[#34070c]/85 backdrop-blur-xs border border-[#f5d77f]/50 flex items-center justify-center shadow-inner">
                    <Plane className="w-5 h-5 text-[#f5d77f] -rotate-45" />
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom-Right Luxury Sign-off: Taste Tradition Trust */}
            <div className="mt-auto pt-6 text-right select-none pr-4 xl:pr-6">
              <p className="font-serif italic text-xl xl:text-2xl text-[#f5d77f]/95 tracking-wide font-normal leading-[1.25] drop-shadow-md">
                Taste <br />
                Tradition <br />
                Trust
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE SEAMLESSLY BLENDED BOTTOM VISUAL (No hard card borders) */}
      {/* Positioned right-center to reveal rice, pickle jar, spices & pink salt */}
      {/* ========================================================================= */}
      <div className="lg:hidden relative w-full h-[250px] xs:h-[280px] sm:h-[340px] -mt-2 overflow-hidden">
        
        {/* Background Image seamlessly integrated */}
        <Image
          src="/united-food-hero-section.webp"
          alt="United Foods Traditional Spices, Pickles, Rice and Himalayan Salt"
          fill
          quality={95}
          className="object-cover object-[76%_center] sm:object-[74%_center]"
        />

        {/* Soft top-fade gradient so the image melts seamlessly into the solid burgundy above */}
        <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-[#34070c] via-[#34070c]/60 to-transparent pointer-events-none" />

        {/* Soft bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#34070c]/80 to-transparent pointer-events-none" />

        {/* Rotating Gold Stamp Badge (Floating directly on the blended visual) */}
        <div className="absolute top-2 left-4 z-10">
          <div className="relative w-20 h-20 xs:w-22 xs:h-22 sm:w-26 sm:h-26 flex items-center justify-center bg-[#34070c]/70 backdrop-blur-sm rounded-full p-1 border border-[#f5d77f]/40 shadow-xl">
            <svg
              viewBox="0 0 160 160"
              className="w-full h-full animate-spin-slow"
            >
              <defs>
                <path
                  id="stampCirclePathMobile"
                  d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                />
              </defs>
              <circle
                cx="80"
                cy="80"
                r="74"
                fill="none"
                stroke="#f5d77f"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                opacity="0.85"
              />
              <text
                fill="#f5d77f"
                fontSize="13.5"
                fontWeight="700"
                letterSpacing="3.2"
              >
                <textPath
                  href="#stampCirclePathMobile"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  • EXPORTING • WORLDWIDE •
                </textPath>
              </text>
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-[#34070c] border border-[#f5d77f]/60 flex items-center justify-center shadow-md">
                <Plane className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-[#f5d77f] -rotate-45" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right Sign-off (Floating directly on image) */}
        <div className="absolute bottom-3 right-4 text-right select-none bg-[#34070c]/50 backdrop-blur-xs px-3 py-1 rounded-full border border-[#f5d77f]/20">
          <p className="font-serif italic text-xs sm:text-sm text-[#f5d77f] tracking-wide font-normal leading-tight drop-shadow-md">
            Taste • Tradition • Trust
          </p>
        </div>

      </div>

    </section>
  );
}
