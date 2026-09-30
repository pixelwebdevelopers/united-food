'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, Phone, Mail, ChevronRight, Sparkles, Globe
} from 'lucide-react';
import { COMPANY_INFO, CATEGORIES_LIST } from '@/data/productsData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'Heritage', href: '/heritage' },
    { name: 'Media & Reels', href: '/media' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      {/* RED ROYAL HEADER */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#290509]/95 backdrop-blur-xl border-b border-[#d4af37]/40 shadow-xl py-3' 
            : 'bg-[#34070c] border-b border-[#d4af37]/30 py-3.5 shadow-md'
        }`}
      >
        <div className="container flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group text-decoration-none">
            <div className="relative w-11 h-11 md:w-13 md:h-13 rounded-full p-0.5 bg-gradient-to-tr from-[#f3cf65] via-white to-[#d4af37] shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#090d16] flex items-center justify-center">
                <Image
                  src="/assets/01_Logos_and_Branding/United_Foods_3D_Gold_Camels_Emblem.jpeg"
                  alt="United Foods Logo"
                  width={52}
                  height={52}
                  className="object-cover w-full h-full scale-110"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-base md:text-lg font-extrabold tracking-wider !text-[#f5d77f] flex items-center">
                <span>UNITED <span className="!text-[#f5d77f]">FOODS</span></span>
                <sup className="text-[8px] md:text-[9px] font-bold text-[#f5d77f] tracking-normal ml-0.5 align-super opacity-90">TM</sup>
              </span>
              <span className="text-[9px] md:text-[10px] text-[#f9e390] font-semibold tracking-widest uppercase opacity-90">
                Spice Up Your Life
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[14px] font-bold transition-all relative py-1 group ${
                    isActive 
                      ? 'text-[#fde68a]' 
                      : 'text-white/90 hover:text-[#fde68a]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#fde68a] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full border border-[#d4af37]/70 bg-[#290509]/80 hover:bg-[#4e0b12] text-[#f5d77f] hover:text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-[#f5d77f]" />
              <span>Export Inquiries</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors focus:outline-none"
            aria-label="Open Mobile Menu"
          >
            <Menu className="w-6 h-6 text-[#fde68a]" />
          </button>
        </div>
      </header>

      {/* ========================================================= */}
      {/* MOBILE PROFESSIONAL SLIDE-OVER SIDEBAR DRAWER MENU */}
      {/* ========================================================= */}
      <div 
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop Overlay */}
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Sidebar Drawer Container */}
        <div 
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-[380px] bg-[#ffffff] border-l border-slate-200 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Top Bar of Drawer */}
          <div className="p-5 border-b border-[#d4af37]/30 flex items-center justify-between bg-[#34070c] text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-black/40 border border-[#f3cf65]/40 flex items-center justify-center">
                <Image
                  src="/assets/01_Logos_and_Branding/United_Foods_3D_Gold_Camels_Emblem.jpeg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading text-xs sm:text-sm font-extrabold !text-[#f5d77f] tracking-wider inline-flex items-center">
                  <span>UNITED FOODS</span>
                  <sup className="text-[7px] font-bold text-[#f5d77f] ml-0.5 align-super">TM</sup>
                </h3>
                <p className="text-[9px] text-[#fde68a]">Global Flavors, Authentic Tastes</p>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Scrollable Links Area */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
            {/* Quick Navigation Links */}
            <div className="space-y-1">
              <p className="text-[11px] font-bold text-[#34070c] uppercase tracking-wider mb-2 px-3">
                Main Navigation
              </p>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all text-sm font-bold ${
                      isActive
                        ? 'bg-[#34070c] text-white'
                        : 'text-slate-800 hover:text-[#34070c] hover:bg-[#34070c]/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  </Link>
                );
              })}
            </div>

            {/* Product Category Shortcuts */}
            <div className="pt-4 border-t border-slate-100">
              <p className="text-[11px] font-bold text-[#34070c] uppercase tracking-wider mb-3 px-3">
                Product Categories ({CATEGORIES_LIST.length - 1})
              </p>
              <div className="grid grid-cols-2 gap-2">
                {CATEGORIES_LIST.filter(c => c.id !== 'all').map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/products?category=${cat.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#34070c] hover:bg-[#34070c]/5 transition-all text-xs flex flex-col gap-0.5 text-slate-700 hover:text-[#34070c]"
                  >
                    <span className="font-bold truncate">{cat.name}</span>
                    <span className="text-[10px] text-[#34070c] font-semibold">{cat.count} Items</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#34070c]/10 to-[#34070c]/5 border border-[#34070c]/20">
              <p className="text-xs font-bold text-[#34070c] mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#b8860b]" />
                <span>Direct Inquiries</span>
              </p>
              <p className="text-[11px] text-slate-600 mb-3">
                Export orders & nationwide wholesale distribution inquiries.
              </p>
              <div className="space-y-1.5">
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-[#34070c]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#34070c]" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-[#34070c] truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-[#34070c]" />
                  <span className="truncate">{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20United%20Foods,%20I%20would%20like%20to%20place%20an%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center text-xs !py-3 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp (+92 300 8292550)</span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.email}?subject=Order%20%26%20Inquiry%20-%20United%20Foods`}
              className="btn-outline w-full text-center text-xs !py-2.5 flex items-center justify-center gap-2 bg-white hover:bg-slate-50"
            >
              <Mail className="w-4 h-4 text-[#34070c]" />
              <span>Email Us ({COMPANY_INFO.email})</span>
            </a>

            <p className="text-[10px] text-center text-slate-500 font-medium pt-1">
              {COMPANY_INFO.legacy} • Certified Pure
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

