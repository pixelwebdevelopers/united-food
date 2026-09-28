'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ShieldCheck, Phone, Mail, CheckCircle, Package, Maximize2, ArrowLeft } from 'lucide-react';
import { ProductItem, COMPANY_INFO } from '@/data/productsData';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [isFullScreenImage, setIsFullScreenImage] = useState(false);

  // Reset full screen image state when product changes or modal closes
  useEffect(() => {
    setIsFullScreenImage(false);
  }, [product]);

  // Handle ESC key press (close full screen image first if open, or modal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullScreenImage) {
          setIsFullScreenImage(false);
        } else if (product) {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullScreenImage, product, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello United Foods, I am interested in inquiring about "${product.name}" (${product.category}, Pack Size: ${product.packSize}). Please share wholesale pricing and availability.`
  );

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. STANDARD QUICK VIEW MODAL */}
      {/* ========================================================================= */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <div 
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fadeIn"
        />

        {/* Modal Card */}
        <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 animate-scaleUp my-auto">
          
          {/* Close Modal Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-[#34070c] text-white transition-colors cursor-pointer shadow-md"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Image Side (Clickable for Full Screen View) */}
            <div 
              onClick={() => setIsFullScreenImage(true)}
              className="relative min-h-[340px] md:min-h-[440px] bg-slate-50 p-4 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 overflow-hidden cursor-zoom-in group"
            >
              <div className="relative w-full h-full min-h-[320px] flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-2 drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Halal / Quality Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#34070c] text-white text-[11px] font-bold flex items-center gap-1.5 z-10 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f5d77f]" />
                <span>100% Halal &amp; Pure</span>
              </div>

              {/* Click to Zoom Pill Indicator */}
              <div className="absolute bottom-4 inset-x-4 flex justify-center z-10 opacity-85 group-hover:opacity-100 transition-opacity">
                <div className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg group-hover:bg-[#34070c] transition-colors">
                  <Maximize2 className="w-3.5 h-3.5 text-[#f5d77f]" />
                  <span>Click image to view full screen</span>
                </div>
              </div>
            </div>

            {/* Details Side */}
            <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="inline-block px-2.5 py-1 rounded-md bg-red-50 text-[#34070c] border border-[#34070c]/20 text-xs font-bold">
                  {product.category}
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <Package className="w-4 h-4 text-[#34070c]" />
                  <span>Pack / Weight: <strong className="text-slate-900">{product.packSize}</strong></span>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Product Highlights:</p>
                  <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#34070c] flex-shrink-0" />
                      <span>Crafted with pure natural ingredients</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#34070c] flex-shrink-0" />
                      <span>Zero artificial chemical preservatives</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#34070c] flex-shrink-0" />
                      <span>Hygienically packaged under strict quality control</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#34070c] flex-shrink-0" />
                      <span>Export ready standard for worldwide shipping</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center text-xs !py-3 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#f5d77f]" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(`Product Inquiry: ${product.name} (${product.packSize})`)}&body=${encodeURIComponent(`Hello United Foods,\n\nI am interested in ordering/inquiring about "${product.name}" (${product.packSize}, Category: ${product.category}).\n\nPlease share wholesale pricing and availability details.\n\nThank you.`)}`}
                  className="btn-outline w-full text-center text-xs !py-3 flex items-center justify-center gap-2 hover:bg-slate-50"
                >
                  <Mail className="w-4 h-4 text-[#34070c]" />
                  <span>Inquire via Email</span>
                </a>

                <p className="text-[10px] text-center text-slate-400">
                  Bulk Wholesale &amp; Retail Distribution Inquiries Welcome
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. FULL SCREEN PRODUCT IMAGE LIGHTBOX (Triggered by clicking image) */}
      {/* ========================================================================= */}
      {isFullScreenImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6 animate-fadeIn">
          
          {/* Top Navigation Bar with Back & Close */}
          <div className="fixed top-0 inset-x-0 z-50 p-4 sm:p-6 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent pointer-events-auto">
            {/* Prominent Back Button */}
            <button
              onClick={() => setIsFullScreenImage(false)}
              className="px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/25 shadow-xl flex items-center gap-2 transition-all cursor-pointer"
              aria-label="Back to quick view"
            >
              <ArrowLeft className="w-4 h-4 text-[#f5d77f]" />
              <span>Back to Details</span>
            </button>

            {/* Product Title in Center Header */}
            <div className="hidden sm:block text-center max-w-md mx-auto">
              <span className="text-[10px] uppercase font-bold text-[#f5d77f] tracking-wider block">
                {product.category} • {product.packSize}
              </span>
              <p className="text-sm font-bold text-white truncate drop-shadow">
                {product.name}
              </p>
            </div>

            {/* Cross / Close Button */}
            <button
              onClick={() => setIsFullScreenImage(false)}
              className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white backdrop-blur-md border border-white/25 shadow-xl transition-all cursor-pointer"
              aria-label="Close full screen image"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Backdrop Click Dismiss */}
          <div
            onClick={() => setIsFullScreenImage(false)}
            className="absolute inset-0 z-10 cursor-pointer"
          />

          {/* High-Resolution Full-Screen Image Container */}
          <div className="relative z-20 w-full h-[78vh] sm:h-[84vh] max-w-4xl flex items-center justify-center p-2 sm:p-6 select-none">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              priority
            />
          </div>

          {/* Bottom Title Pill for Mobile */}
          <div className="fixed bottom-4 inset-x-4 z-50 sm:hidden text-center pointer-events-none">
            <div className="inline-block px-4 py-2 rounded-full bg-[#34070c]/95 backdrop-blur-md border border-[#f5d77f]/40 text-white text-xs font-semibold shadow-2xl max-w-xs truncate">
              <span className="text-[#f5d77f] font-bold block text-[10px]">{product.category} • {product.packSize}</span>
              <span className="text-white">{product.name}</span>
            </div>
          </div>

        </div>
      )}
    </>
  );
}
