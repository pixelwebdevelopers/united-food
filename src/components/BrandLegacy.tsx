'use client';

import React from 'react';
import Image from 'next/image';
import { Award, ShieldCheck, HeartPulse, Sparkles, Check, Globe, Clock, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/data/productsData';

export default function BrandLegacy() {
  const pillars = [
    {
      icon: Award,
      title: '25+ Years Legacy of Trust',
      desc: 'Established with the trusted Buttar brand heritage since 2005, delivering authenticity across generations.',
    },
    {
      icon: ShieldCheck,
      title: '100% Pure & Unadulterated',
      desc: 'Zero artificial chemical preservatives, authentic recipes, and pure spices ground from pristine harvests.',
    },
    {
      icon: HeartPulse,
      title: 'Hygienically Automated Packaging',
      desc: 'State-of-the-art sterile manufacturing processes guaranteeing peak flavor, crispness, and nutritional value.',
    },
    {
      icon: Globe,
      title: 'Worldwide Export Standard',
      desc: 'Strict international food quality controls compliant with global Halal and premium export standards.',
    },
  ];

  return (
    <section id="heritage" className="py-20 bg-gradient-to-b from-[#090d16] via-[#111728] to-[#090d16] relative border-t border-b border-white/5">
      <div className="container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual: Buttar & United Foods Crest Display */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl p-4 bg-gradient-to-tr from-[#8b1524]/60 via-[#d4af37]/30 to-[#5c0b15]/60 border border-[#d4af37]/40 shadow-2xl">
              
              <div className="w-full h-full rounded-2xl bg-[#090d16] p-6 flex flex-col items-center justify-center text-center space-y-4 relative overflow-hidden">
                
                {/* Buttar Gold Shield Logo */}
                <div className="relative w-36 h-36">
                  <Image
                    src="/assets/01_Logos_and_Branding/Buttar_Since_2005_Gold_Shield_Logo.jpeg"
                    alt="Buttar Since 2005 Brand Seal"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading text-xl font-bold text-white tracking-wider">
                    BUTTAR & UNITED FOODS
                  </h3>
                  <p className="text-xs text-[#f3cf65] font-semibold">
                    Global Flavors • Authentic Tastes
                  </p>
                </div>

                <div className="w-full pt-3 border-t border-white/10 flex items-center justify-around text-slate-300 text-xs font-medium">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Pure Heritage</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Halal Certified</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Text & 4 Pillars */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8b1524]/30 border border-[#d4af37]/30 text-xs font-semibold text-[#f3cf65]">
                <Clock className="w-3.5 h-3.5 text-[#f3cf65]" />
                <span>OUR TRADITION & QUALITY PROMISE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                CRAFTED WITH PASSION, <br />
                <span className="gold-gradient-text">ROOTED IN AUTHENTICITY</span>
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                At United Foods, we uphold a rich heritage of flavor and trust. Every jar of pickle, every sachet 
                of ground spice, and every grain of Basmati rice undergoes rigorous curation to ensure our customers 
                receive the real, untainted taste of nature.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#d4af37]/40 hover:bg-[#8b1524]/10 transition-all space-y-2"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b1524] to-[#5c0b15] border border-[#d4af37]/40 flex items-center justify-center text-[#f3cf65] shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
