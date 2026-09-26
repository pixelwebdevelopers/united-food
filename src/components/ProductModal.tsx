'use client';

import React from 'react';
import Image from 'next/image';
import { X, ShieldCheck, Sparkles, Phone, CheckCircle, Package, ArrowRight } from 'lucide-react';
import { ProductItem, COMPANY_INFO } from '@/data/productsData';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello United Foods, I am interested in inquiring about "${product.name}" (${product.category}, Pack Size: ${product.packSize}). Please share wholesale pricing and availability.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-fadeIn"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#0e1626] border border-[#d4af37]/40 rounded-3xl shadow-2xl overflow-hidden z-10 animate-scaleUp my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-white/20 text-slate-300 hover:text-white transition-colors border border-white/10"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Image Side (Never cropped - contained with luxury radial background) */}
          <div className="relative aspect-square md:aspect-auto md:h-full bg-gradient-to-b from-[#162035] to-[#0a0f1c] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-contain max-h-[280px] md:max-h-[340px] w-auto drop-shadow-2xl"
                priority
              />
            </div>

            {/* Halal / Quality Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#8b1524]/80 backdrop-blur-md border border-[#d4af37]/40 text-[11px] font-bold text-[#f3cf65] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Halal & Pure</span>
            </div>
          </div>

          {/* Details Side */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="inline-block px-2.5 py-1 rounded-md bg-[#d4af37]/15 text-[#f3cf65] text-xs font-semibold">
                {product.category}
              </div>

              <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">
                {product.name}
              </h3>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Package className="w-4 h-4 text-[#d4af37]" />
                <span>Pack / Weight: <strong className="text-white">{product.packSize}</strong></span>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Product Highlights:</p>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                    <span>Crafted with pure natural ingredients</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                    <span>Zero artificial chemical preservatives</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                    <span>Hygienically packaged under strict quality control</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                    <span>Export ready standard for worldwide shipping</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full text-center text-xs !py-3 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>

              <p className="text-[10px] text-center text-slate-400">
                Bulk Wholesale & Retail Distribution Inquiries Welcome
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
