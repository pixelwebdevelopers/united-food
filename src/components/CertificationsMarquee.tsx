'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export interface CertificationItem {
  id: string;
  name: string;
  code: string;
  category: string;
  description: string;
  image: string;
  accent: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'halal',
    name: 'Halal Certified',
    code: 'Global Compliance',
    category: 'Religious Dietary Standard',
    description: '100% authentic Halal processing and ingredient sourcing compliance.',
    image: '/assets/certifications/halal_certified.jpeg',
    accent: 'from-emerald-600/15 to-[#34070c]/10',
  },
  {
    id: 'iso-22000',
    name: 'ISO 22000',
    code: 'Food Safety Standard',
    category: 'International Standards',
    description: 'Comprehensive global food safety management and hygiene protocols.',
    image: '/assets/certifications/iso_22000.jpeg',
    accent: 'from-blue-600/15 to-[#34070c]/10',
  },
  {
    id: 'iso-9001',
    name: 'ISO 9001',
    code: 'Quality Management',
    category: 'Process Excellence',
    description: 'Standardized quality management systems across production lines.',
    image: '/assets/certifications/iso_9001.jpeg',
    accent: 'from-slate-600/15 to-[#34070c]/10',
  },
  {
    id: 'haccp',
    name: 'HACCP Certified',
    code: 'Food Safety System',
    category: 'Hazard Control',
    description: 'Systematic preventive approach to chemical, physical, and biological safety.',
    image: '/assets/certifications/haccp_certified.jpeg',
    accent: 'from-sky-600/15 to-[#34070c]/10',
  },
  {
    id: 'gmp',
    name: 'GMP Certified',
    code: 'Good Manufacturing',
    category: 'Manufacturing Practice',
    description: 'Rigorous control over sterile packaging, storage, and clean processing.',
    image: '/assets/certifications/gmp_certified.jpeg',
    accent: 'from-green-600/15 to-[#34070c]/10',
  },
  {
    id: 'fda',
    name: 'FDA Registered',
    code: 'US Facility Compliance',
    category: 'Export Compliance',
    description: 'Registered facilities meeting international standards for global exports.',
    image: '/assets/certifications/fda_registered.jpeg',
    accent: 'from-blue-700/15 to-[#34070c]/10',
  },
  {
    id: 'organic',
    name: '100% Organic',
    code: 'Natural Harvest',
    category: 'Pure & Chemical-Free',
    description: 'Natural ingredients free from synthetic pesticides and harmful preservatives.',
    image: '/assets/certifications/organic_certified.jpeg',
    accent: 'from-emerald-700/15 to-[#34070c]/10',
  },
  {
    id: 'vegan',
    name: 'Certified Vegan',
    code: 'Plant-Based Standard',
    category: 'Vegan.org Certified',
    description: '100% vegetarian & plant-derived formulations with no animal byproducts.',
    image: '/assets/certifications/vegan_certified.jpeg',
    accent: 'from-teal-600/15 to-[#34070c]/10',
  },
  {
    id: 'kosher',
    name: 'Kosher Certified',
    code: 'Dietary Compliance',
    category: 'Purity Standard',
    description: 'Strict adherence to global dietary purity and clean production standards.',
    image: '/assets/certifications/kosher_certified.jpeg',
    accent: 'from-indigo-600/15 to-[#34070c]/10',
  },
];

interface CertificationsMarqueeProps {
  className?: string;
  showHeading?: boolean;
  theme?: 'light' | 'subtle';
}

export default function CertificationsMarquee({ 
  className = '', 
  showHeading = true,
  theme = 'light' 
}: CertificationsMarqueeProps) {
  // Duplicate array 4 times for a mathematically perfect -50% seamless endless loop
  const marqueeCards = [...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS];

  return (
    <section 
      className={`relative py-16 overflow-hidden select-none ${
        theme === 'subtle' 
          ? 'bg-slate-50/80 border-y border-slate-200/80' 
          : 'bg-white border-b border-slate-200'
      } ${className}`}
    >
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-red-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {showHeading && (
        <div className="container mb-10 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-[#34070c]/20 text-xs font-bold text-[#34070c] shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#34070c]" />
            <span>GLOBAL STANDARDS &amp; ACCREDITATIONS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            INTERNATIONAL QUALITY <span className="crimson-gradient-text">&amp; CERTIFICATIONS</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            United Foods™ adheres to stringent worldwide quality and hygiene benchmarks. Every batch is certified 
            for purity, safety, and authentic culinary integrity.
          </p>
        </div>
      )}

      {/* Marquee Wrapper with Side Fade Gradients */}
      <div className="relative w-full overflow-hidden group">
        {/* Left and Right Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Continuous Smooth Endless Marquee Track */}
        <div className="marquee-track flex gap-4 sm:gap-6 py-2">
          {marqueeCards.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex-shrink-0 w-[240px] sm:w-[270px] md:w-[290px] rounded-2xl bg-white p-4 sm:p-5 border border-slate-200/90 hover:border-[#34070c]/50 hover:shadow-xl transition-all duration-300 flex items-center gap-4 group/card relative overflow-hidden shadow-xs hover:-translate-y-1"
            >
              {/* Card Ambient Glow */}
              <div 
                className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${item.accent} rounded-full blur-xl pointer-events-none transition-opacity group-hover/card:opacity-100 opacity-50`} 
              />

              {/* High-res Certification Icon Container */}
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-slate-50 border border-slate-100 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-xs group-hover/card:scale-105 group-hover/card:border-[#34070c]/30 transition-all duration-300">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={72}
                  height={72}
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0 space-y-0.5">
                <div className="inline-flex items-center gap-1 text-[10px] font-bold text-[#b8860b] uppercase tracking-wider">
                  <CheckCircle2 className="w-3 h-3 text-[#b8860b]" />
                  <span className="truncate">{item.code}</span>
                </div>
                <h3 className="font-heading text-sm sm:text-base font-extrabold text-slate-900 group-hover/card:text-[#34070c] transition-colors truncate">
                  {item.name}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-1 leading-tight">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Trust Indicators */}
      <div className="container mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-500">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>100% Halal Certified</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <span>ISO &amp; HACCP Compliant</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-500" />
          <span>FDA Registered Facility</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#34070c]" />
          <span>Export-Ready Quality</span>
        </div>
      </div>
    </section>
  );
}
