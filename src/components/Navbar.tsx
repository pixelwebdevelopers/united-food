'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Menu, X, Phone, Mail, ChevronRight, Sparkles, 
  Utensils, Droplet, Coffee, Heart, Mountain, Wheat, Video, Image as ImageIcon
} from 'lucide-react';
import { COMPANY_INFO, CATEGORIES_LIST } from '@/data/productsData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: 'Home', href: '#home' },
    { name: 'Categories', href: '#categories' },
    { name: 'Products', href: '#products' },
    { name: 'Our Heritage', href: '#heritage' },
    { name: 'Videos & Reels', href: '#videos' },
    { name: 'Banners', href: '#banners' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#090d16]/90 backdrop-blur-xl border-b border-[#d4af37]/25 shadow-2xl py-3' 
            : 'bg-[#090d16]/70 backdrop-blur-md border-b border-white/5 py-4'
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="#home" className="flex items-center gap-3 group text-decoration-none">
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full p-1 bg-gradient-to-tr from-[#8b1524] via-[#d4af37] to-[#8b1524] shadow-lg shadow-[#8b1524]/40 flex-shrink-0 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#090d16] flex items-center justify-center">
                <Image
                  src="/assets/01_Logos_and_Branding/United_Foods_3D_Gold_Camels_Emblem.jpeg"
                  alt="United Foods Logo"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full scale-110"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg md:text-xl font-bold tracking-wider text-white flex items-center gap-1.5">
                UNITED <span className="text-[#f3cf65]">FOODS</span>
              </span>
              <span className="text-[10px] md:text-[11px] text-[#d4af37] font-medium tracking-widest uppercase">
                Spice Up Your Life
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] font-medium text-slate-200 hover:text-[#f3cf65] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20United%20Foods,%20I%20would%20like%20to%20inquire%20about%20your%20products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs !py-2.5 !px-5 flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+92 300 8292550</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-[#d4af37]/30 transition-colors focus:outline-none"
            aria-label="Open Mobile Menu"
          >
            <Menu className="w-6 h-6 text-[#f3cf65]" />
          </button>
        </div>
      </header>

      {/* ========================================================= */}
      {/* MOBILE PROFESSIONAL SLIDE-OVER SIDEBAR DRAWER MENU */}
      {/* ========================================================= */}
      <div 
        className={`fixed inset-0 z-50 transition-visibility duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop Overlay */}
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Sidebar Drawer Container */}
        <div 
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-[380px] bg-[#0c1220] border-l border-[#d4af37]/30 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Top Bar of Drawer */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#5c0b15]/40 to-transparent">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-black/40 border border-[#d4af37]/40 flex items-center justify-center">
                <Image
                  src="/assets/01_Logos_and_Branding/United_Foods_3D_Gold_Camels_Emblem.jpeg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-white tracking-wider">UNITED FOODS</h3>
                <p className="text-[10px] text-[#f3cf65]">Global Flavors, Authentic Tastes</p>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Scrollable Links Area */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
            {/* Quick Navigation Links */}
            <div className="space-y-1.5">
              <p className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider mb-2 px-3">
                Main Navigation
              </p>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            {/* Product Category Shortcuts */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider mb-3 px-3">
                Product Categories ({CATEGORIES_LIST.length - 1})
              </p>
              <div className="grid grid-cols-2 gap-2">
                {CATEGORIES_LIST.filter(c => c.id !== 'all').map((cat) => (
                  <a
                    key={cat.id}
                    href="#products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#d4af37]/40 hover:bg-[#8b1524]/20 transition-all text-xs flex flex-col gap-1 text-slate-300 hover:text-white"
                  >
                    <span className="font-medium truncate">{cat.name}</span>
                    <span className="text-[10px] text-[#f3cf65]">{cat.count} Items</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#8b1524]/30 to-[#5c0b15]/10 border border-[#d4af37]/30">
              <p className="text-xs font-semibold text-white mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#f3cf65]" />
                <span>Direct Inquiries</span>
              </p>
              <p className="text-[11px] text-slate-300 mb-3">
                Export orders & nationwide wholesale distribution inquiries available.
              </p>
              <div className="space-y-2">
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-2 text-xs text-slate-200 hover:text-[#f3cf65]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-2 text-xs text-slate-200 hover:text-[#f3cf65] truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span className="truncate">{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="p-5 border-t border-white/10 bg-[#090d16] space-y-2.5">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20United%20Foods,%20I%20would%20like%20to%20place%20an%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full text-center text-xs !py-3 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Direct Inquire</span>
            </a>
            <p className="text-[10px] text-center text-slate-500">
              {COMPANY_INFO.legacy} • Certified Pure
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
