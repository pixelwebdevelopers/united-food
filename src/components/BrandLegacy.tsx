'use client';

import React from 'react';
import Image from 'next/image';
import { Award, ShieldCheck, HeartPulse, Clock, CheckCircle2, Globe } from 'lucide-react';
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
    <section id="heritage" className="py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual: Buttar & United Foods Crest Display */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl p-4 bg-gradient-to-tr from-red-50 via-white to-amber-50 border border-[#8b1524]/20 shadow-xl shadow-slate-200">
              
              <div className="w-full h-full rounded-2xl bg-white border border-slate-100 p-6 flex flex-col items-center justify-center text-center space-y-4 relative overflow-hidden shadow-inner">
                
                {/* Buttar Gold Shield Logo */}
                <div className="relative w-36 h-36">
                  <Image
                    src="/assets/01_Logos_and_Branding/Buttar_Since_2005_Gold_Shield_Logo.jpeg"
                    alt="Buttar Since 2005 Brand Seal"
                    fill
                    className="object-contain drop-shadow-md"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading text-xl font-bold text-slate-900 tracking-wider">
                    BUTTAR & UNITED FOODS
                  </h3>
                  <p className="text-xs text-[#8b1524] font-bold">
                    Global Flavors • Authentic Tastes
                  </p>
                </div>

                <div className="w-full pt-3 border-t border-slate-100 flex items-center justify-around text-slate-600 text-xs font-semibold">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8b1524]" />
                    <span>Pure Heritage</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8b1524]" />
                    <span>Halal Certified</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Text & 4 Pillars */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-[#8b1524]/20 text-xs font-bold text-[#8b1524]">
                <Clock className="w-3.5 h-3.5 text-[#8b1524]" />
                <span>OUR TRADITION & QUALITY PROMISE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                CRAFTED WITH PASSION, <br />
                <span className="crimson-gradient-text">ROOTED IN AUTHENTICITY</span>
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
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
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#8b1524]/40 hover:shadow-md transition-all space-y-2 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-50 border border-[#8b1524]/20 flex items-center justify-center text-[#8b1524] shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
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
