'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, Globe, MapPin, Sparkles, Heart, ShieldCheck, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, CATEGORIES_LIST } from '@/data/productsData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060910] border-t border-[#d4af37]/25 text-slate-300 pt-16 pb-12 relative overflow-hidden">
      
      {/* Subtle Glow in Footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#8b1524]/15 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="container">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info & Master Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-black/40 border border-[#d4af37]/40 flex items-center justify-center p-1">
                <Image
                  src="/assets/01_Logos_and_Branding/United_Foods_3D_Gold_Camels_Emblem.jpeg"
                  alt="United Foods Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-white tracking-wider">UNITED FOODS</h3>
                <p className="text-xs text-[#f3cf65]">Global Flavors, Authentic Tastes</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              United Foods is a premier food enterprise providing traditional slow-cured pickles (achar), 
              pure ground and whole spices, Himalayan salts, extra long-grain Basmati rice, cold-pressed oils, 
              and refreshing fruit juices.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#f5d77f]">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-[#d4af37]/30">
                ⭐ {COMPANY_INFO.legacy}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-[#d4af37]/30">
                100% Halal
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-[#f3cf65] transition-colors">Home</a></li>
              <li><a href="#categories" className="hover:text-[#f3cf65] transition-colors">Categories</a></li>
              <li><a href="#products" className="hover:text-[#f3cf65] transition-colors">Product Catalog</a></li>
              <li><a href="#heritage" className="hover:text-[#f3cf65] transition-colors">Brand Heritage</a></li>
              <li><a href="#videos" className="hover:text-[#f3cf65] transition-colors">Videos & Reels</a></li>
              <li><a href="#banners" className="hover:text-[#f3cf65] transition-colors">Promotions</a></li>
              <li><a href="#contact" className="hover:text-[#f3cf65] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Categories Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Our Products
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#products" className="hover:text-[#f3cf65] transition-colors">Traditional Pickles (Achar)</a></li>
              <li><a href="#products" className="hover:text-[#f3cf65] transition-colors">Pure Spices & Herb Powders</a></li>
              <li><a href="#products" className="hover:text-[#f3cf65] transition-colors">Himalayan Pink Salt & Lamps</a></li>
              <li><a href="#products" className="hover:text-[#f3cf65] transition-colors">Long-Grain Basmati Rice</a></li>
              <li><a href="#products" className="hover:text-[#f3cf65] transition-colors">Pure Olive, Mustard & Sunflower Oils</a></li>
              <li><a href="#products" className="hover:text-[#f3cf65] transition-colors">Natural Fruit Juices & Milks</a></li>
              <li><a href="#products" className="hover:text-[#f3cf65] transition-colors">Natural Jaggery & Sweeteners</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Buttar Seal (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Contact & Inquiries
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-[#f3cf65] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-[#f3cf65] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>{COMPANY_INFO.website}</span>
              </div>
            </div>

            {/* BUTTAR EMBEDDED LOGO SECTION */}
            <div className="pt-2 flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-[#d4af37]/30">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/assets/01_Logos_and_Branding/Buttar_Since_2005_Gold_Shield_Logo.jpeg"
                  alt="Buttar Since 2005"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-white font-heading">BUTTAR SINCE 2005</p>
                <p className="text-[10px] text-[#f3cf65]">Trust & Quality Guarantee</p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Developer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div>
            <p>© {new Date().getFullYear()} <strong>United Foods</strong>. All Rights Reserved.</p>
          </div>

          {/* DEVELOPER CREDIT REQUIREMENT */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/5">
            <span>Developed by</span>
            <a
              href="https://pixelwebdevelopes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f3cf65] font-semibold hover:underline transition-all"
            >
              Pixel Web Developers (pixelwebdevelopes.com)
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[11px]">Back to top</span>
          </button>

        </div>

      </div>
    </footer>
  );
}
