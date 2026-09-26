'use client';

import React from 'react';
import { Phone, Mail, Sparkles, Award, Globe, ShieldCheck, Truck } from 'lucide-react';
import { COMPANY_INFO } from '@/data/productsData';

export default function MarqueeBanner() {
  const marqueeItems = [
    { icon: Sparkles, text: '100% Pure & Natural Ingredients' },
    { icon: Award, text: 'Global Flavors, Authentic Tastes' },
    { icon: Globe, text: 'Export Quality Across Worldwide Markets' },
    { icon: ShieldCheck, text: 'Certified Halal & Hygienically Packed' },
    { icon: Truck, text: 'Wholesale & Nationwide Fast Distribution' },
    { icon: Phone, text: `Direct WhatsApp: ${COMPANY_INFO.phone}` },
    { icon: Mail, text: `Official Email: ${COMPANY_INFO.email}` },
    { icon: Sparkles, text: `${COMPANY_INFO.legacy}` },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#5c0b15] via-[#8b1524] to-[#5c0b15] text-[#f8fafc] border-b border-[#d4af37]/30 py-2.5 z-50 text-xs font-medium tracking-wide">
      <div className="marquee-track flex items-center gap-8 whitespace-nowrap">
        {/* Repeat twice for continuous marquee loop */}
        {[...marqueeItems, ...marqueeItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="inline-flex items-center gap-2.5 px-3">
              <Icon className="w-3.5 h-3.5 text-[#f3cf65] animate-pulse flex-shrink-0" />
              <span className="text-slate-100">{item.text}</span>
              <span className="text-[#d4af37]/40 text-xs ml-4">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
