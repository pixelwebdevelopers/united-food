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
    <footer className="bg-[#180306] border-t border-[#d4af37]/25 text-slate-300 pt-16 pb-12 relative overflow-hidden">
      
      {/* Subtle Glow in Footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#34070c]/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="container">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info & Master Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#f3cf65] via-white to-[#d4af37] shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#090d16] flex items-center justify-center">
                  <Image
                    src="/assets/01_Logos_and_Branding/United_Foods_3D_Gold_Camels_Emblem.jpeg"
                    alt="United Foods Logo"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full scale-110"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-sm sm:text-base font-bold text-white tracking-wider inline-flex items-center">
                  <span>CAMEL UNITED FOODS (Pvt) LTD</span>
                </h3>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-[#fde68a] font-semibold">Global Flavors, Authentic Tastes</p>
                  <span className="text-[#fde68a]/50 text-xs">•</span>
                  <p className="text-xs text-[#fde68a] font-bold" dir="rtl">آصلی ولذیذ وطبیعی</p>
                </div>
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              United Foods™ is a premier food enterprise providing traditional slow-cured pickles (achar), 
              pure ground and whole spices, Himalayan salts, extra long-grain Basmati rice, cold-pressed oils, 
              and refreshing fruit juices.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#f5d77f]">
              <span className="px-2.5 py-1 rounded-md bg-white/10 border border-[#d4af37]/40 font-semibold text-white">
                ⭐ {COMPANY_INFO.legacy}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 border border-[#d4af37]/40 font-semibold text-white">
                100% Halal
              </span>
            </div>

            {/* Social Media Channels */}
            <div className="pt-2">
              <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                <span>Follow &amp; Connect</span>
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {/* Facebook */}
                <button
                  type="button"
                  aria-label="Facebook"
                  title="Facebook"
                  className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-[#34070c] border border-white/10 hover:border-[#d4af37]/60 text-slate-300 hover:text-[#f3cf65] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>

                {/* Instagram */}
                <button
                  type="button"
                  aria-label="Instagram"
                  title="Instagram"
                  className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-[#34070c] border border-white/10 hover:border-[#d4af37]/60 text-slate-300 hover:text-[#f3cf65] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>

                {/* YouTube */}
                <button
                  type="button"
                  aria-label="YouTube"
                  title="YouTube"
                  className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-[#34070c] border border-white/10 hover:border-[#d4af37]/60 text-slate-300 hover:text-[#f3cf65] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </button>

                {/* TikTok */}
                <button
                  type="button"
                  aria-label="TikTok"
                  title="TikTok"
                  className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-[#34070c] border border-white/10 hover:border-[#d4af37]/60 text-slate-300 hover:text-[#f3cf65] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01V14.5c0 1.93-.52 3.86-1.63 5.42-1.39 1.96-3.66 3.25-6.07 3.52-2.61.3-5.32-.42-7.34-2.11-2.06-1.73-3.19-4.32-3.03-7 0.16-2.64 1.57-5.1 3.79-6.52 1.83-1.18 4.09-1.61 6.24-1.22v4.21c-.96-.28-2.03-.22-2.95.22-.92.44-1.63 1.25-1.94 2.21-.32.99-.2 2.11.33 3.01.52.88 1.45 1.48 2.47 1.62 1.09.15 2.23-.19 3.02-.95.77-.74 1.18-1.81 1.16-2.88V.02z"/>
                  </svg>
                </button>

                {/* LinkedIn */}
                <button
                  type="button"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-[#34070c] border border-white/10 hover:border-[#d4af37]/60 text-slate-300 hover:text-[#f3cf65] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>

                {/* WhatsApp */}
                <button
                  type="button"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-[#34070c] border border-white/10 hover:border-[#d4af37]/60 text-slate-300 hover:text-[#f3cf65] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-extrabold !text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-[#d4af37] rounded-full inline-block"></span>
              <span>Navigation</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="text-slate-300 hover:text-[#fde68a] transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-slate-300 hover:text-[#fde68a] transition-colors">Product Catalog</Link></li>
              <li><Link href="/categories" className="text-slate-300 hover:text-[#fde68a] transition-colors">Categories</Link></li>
              <li><Link href="/heritage" className="text-slate-300 hover:text-[#fde68a] transition-colors">Brand Heritage</Link></li>
              <li><Link href="/media" className="text-slate-300 hover:text-[#fde68a] transition-colors">Videos & Media</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-[#fde68a] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Categories Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-extrabold !text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-[#d4af37] rounded-full inline-block"></span>
              <span>Our Products</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/products?category=masalas" className="text-slate-300 hover:text-[#fde68a] transition-colors">Recipe Masala Mixes</Link></li>
              <li><Link href="/products?category=desserts" className="text-slate-300 hover:text-[#fde68a] transition-colors">Desserts & Custard Powders</Link></li>
              <li><Link href="/products?category=pickles" className="text-slate-300 hover:text-[#fde68a] transition-colors">Traditional Pickles (Achar)</Link></li>
              <li><Link href="/products?category=ketchup-jams" className="text-slate-300 hover:text-[#fde68a] transition-colors">Ketchup &amp; Fruit Jams</Link></li>
              <li><Link href="/products?category=spices" className="text-slate-300 hover:text-[#fde68a] transition-colors">Pure Spices &amp; Herb Powders</Link></li>
              <li><Link href="/products?category=salts" className="text-slate-300 hover:text-[#fde68a] transition-colors">Himalayan Pink Salt & Lamps</Link></li>
              <li><Link href="/products?category=rice" className="text-slate-300 hover:text-[#fde68a] transition-colors">Long-Grain Basmati Rice</Link></li>
              <li><Link href="/products?category=oils" className="text-slate-300 hover:text-[#fde68a] transition-colors">Pure Olive & Mustard Oils</Link></li>
              <li><Link href="/products?category=qehwa" className="text-slate-300 hover:text-[#fde68a] transition-colors">Tea & Kashmiri Qehwa</Link></li>
              <li><Link href="/products?category=beverages" className="text-slate-300 hover:text-[#fde68a] transition-colors">Natural Fruit Juices & Milks</Link></li>
              <li><Link href="/products?category=sweeteners" className="text-slate-300 hover:text-[#fde68a] transition-colors">Natural Sweeteners & Jaggery</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Buttar Seal (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-extrabold !text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-[#d4af37] rounded-full inline-block"></span>
              <span>Contact & Inquiries</span>
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <a 
                href={COMPANY_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-slate-300 hover:text-[#fde68a] transition-colors leading-relaxed"
              >
                <MapPin className="w-4 h-4 text-[#f3cf65] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </a>

              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-[#fde68a] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#f3cf65] flex-shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-[#fde68a] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#f3cf65] flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-4 h-4 text-[#f3cf65] flex-shrink-0" />
                <span>{COMPANY_INFO.website}</span>
              </div>
            </div>

            {/* BUTTAR EMBEDDED LOGO SECTION */}
            <div className="pt-2 flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-[#d4af37]/40">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/assets/01_Logos_and_Branding/Buttar_Since_2005_Gold_Shield_Logo.png"
                  alt="Buttar Since 2005"
                  fill
                  className="object-contain drop-shadow"
                />
              </div>
              <div className="text-left">
                <p className="text-[12px] font-extrabold !text-white font-heading">BUTTAR SINCE 2005</p>
                <p className="text-[10px] text-[#f3cf65] font-semibold">Trust & Quality Guarantee</p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Developer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div>
            <p>© {new Date().getFullYear()} <strong>United Foods™</strong>. All Rights Reserved.</p>
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
              Pixel Web Developers
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

