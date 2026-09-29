'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, Sparkles, Eye, Phone, ShieldCheck, CheckCircle2, 
  Award, Play, Film, MessageCircle, ChevronRight, Layers, LayoutGrid, Mail
} from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import CategoryCarousel from '@/components/CategoryCarousel';
import HomeVideoCarousel from '@/components/HomeVideoCarousel';
import ProductModal from '@/components/ProductModal';
import LoadingScreen from '@/components/LoadingScreen';
import { ALL_PRODUCTS, BRAND_VIDEOS, COMPANY_INFO, ProductItem } from '@/data/productsData';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Curate 8 featured flagship bestsellers for the homepage
  const featuredProducts = [
    ALL_PRODUCTS.find(p => p.id === 'uf-006') || ALL_PRODUCTS[0],
    ALL_PRODUCTS.find(p => p.id === 'uf-094') || ALL_PRODUCTS[1],
    ALL_PRODUCTS.find(p => p.id === 'uf-033') || ALL_PRODUCTS[7],
    ALL_PRODUCTS.find(p => p.id === 'uf-036') || ALL_PRODUCTS[20],
    ALL_PRODUCTS.find(p => p.id === 'uf-061') || ALL_PRODUCTS[30],
    ALL_PRODUCTS.find(p => p.id === 'uf-059') || ALL_PRODUCTS[28],
    ALL_PRODUCTS.find(p => p.id === 'uf-073') || ALL_PRODUCTS[40],
    ALL_PRODUCTS.find(p => p.id === 'uf-105') || ALL_PRODUCTS[70],
  ].filter(Boolean);

  return (
    <div className="flex flex-col">
      {/* 0. Cinematic Splash / Loading Screen Animation */}
      <LoadingScreen />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Interactive Category Carousel */}
      <CategoryCarousel />

      {/* 3. Featured Bestsellers Showcase */}
      <section className="py-20 bg-white border-b border-slate-200 relative">
        <div className="container">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-[#34070c]/20 text-xs font-bold text-[#34070c] mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#34070c]" />
                <span>FEATURED SELECTIONS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                BESTSELLING <span className="crimson-gradient-text">PRODUCTS</span>
              </h2>
              <p className="text-slate-600 text-sm mt-1 max-w-xl">
                A handpicked selection of our most loved pickles, pristine Himalayan rock salts, and pure spices.
              </p>
            </div>

            <Link
              href="/products"
              className="btn-primary text-xs !py-3 !px-6 flex items-center gap-2"
            >
              <span>View All 100+ Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured Grid (4:6 Portrait cards with object-cover) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="glass-card rounded-2xl p-4 flex flex-col justify-between group border border-slate-200 hover:border-[#34070c]/40 hover:shadow-xl relative bg-white transition-all shadow-sm"
              >
                <div>
                  <div 
                    onClick={() => setSelectedProduct(product)}
                    className="product-img-wrapper cursor-pointer mb-4 relative"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Quick View Hover Button */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 z-10">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#34070c] text-white font-bold text-xs flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5 text-[#f5d77f]" />
                        <span>Quick View</span>
                      </span>
                    </div>

                    {/* Pack Size Pill */}
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-bold text-slate-800 shadow-sm z-10">
                      {product.packSize}
                    </div>

                    {/* Halal Badge */}
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#34070c] text-[9px] font-bold text-white flex items-center gap-1 z-10 shadow-sm">
                      <ShieldCheck className="w-3 h-3 text-[#f5d77f]" />
                      <span>Halal</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-[#34070c] uppercase tracking-wider block">
                      {product.category}
                    </span>
                    <h3 
                      onClick={() => setSelectedProduct(product)}
                      className="font-heading text-base font-bold text-slate-900 group-hover:text-[#34070c] transition-colors line-clamp-2 cursor-pointer"
                    >
                      {product.name}
                    </h3>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-xs font-semibold text-slate-600 hover:text-[#34070c] flex items-center gap-1 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#34070c]" />
                    <span>Details</span>
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20United%20Foods,%20I%20am%20interested%20in%20"${encodeURIComponent(product.name)}"%20(${encodeURIComponent(product.packSize)}).%20Please%20share%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full bg-[#34070c] hover:bg-[#4e0b12] text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <Phone className="w-3 h-3 text-[#f5d77f]" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="btn-outline !py-3.5 !px-8 text-sm inline-flex items-center gap-2"
            >
              <span>Explore All 100+ Products & Categories</span>
              <ChevronRight className="w-4 h-4 text-[#34070c]" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Brand Legacy Teaser */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-square rounded-3xl p-6 bg-white border border-slate-200 shadow-xl flex flex-col items-center justify-center text-center space-y-4">
                <div className="relative w-36 h-36">
                  <Image
                    src="/assets/01_Logos_and_Branding/Buttar_Since_2005_Gold_Shield_Logo.png"
                    alt="Buttar Since 2005"
                    fill
                    className="object-contain drop-shadow-md"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-slate-900">BUTTAR SINCE 2005</h3>
                  <p className="text-xs text-[#34070c] font-bold">25+ Years of Authenticity</p>
                </div>
                <div className="w-full pt-3 border-t border-slate-100 flex justify-around text-xs text-slate-600 font-semibold">
                  <span>Pure Heritage</span>
                  <span>•</span>
                  <span>100% Halal</span>
                  <span>•</span>
                  <span>Export Grade</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-[#34070c]/20 text-xs font-bold text-[#34070c]">
                <Award className="w-3.5 h-3.5 text-[#34070c]" />
                <span>ROOTED IN TRADITION</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                CRAFTED WITH INTEGRITY, <br />
                <span className="crimson-gradient-text">TRUSTED WORLDWIDE</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From hand-selected mustard seed oils to sun-cured green mangoes and mineral-rich Khewra rock salts, 
                United Foods™ has been delivering purity and rich culinary heritage to homes and kitchens globally.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-xl font-extrabold text-[#34070c] font-heading">0% Chemical</div>
                  <p className="text-xs text-slate-500">Pure natural preservation</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-xl font-extrabold text-[#b8860b] font-heading">Global Exports</div>
                  <p className="text-xs text-slate-500">Certified Halal standards</p>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/heritage" className="btn-primary text-xs !py-3 !px-6 inline-flex items-center gap-2">
                  <span>Read Full Brand Story & Pillars</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Video Media Carousel (Portrait format on mobile and desktop) */}
      <HomeVideoCarousel />

      {/* 6. Quick CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#34070c] via-[#4e0b12] to-[#200407] text-white">
        <div className="container text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-[#fde68a] border border-[#fde68a]/30">
            <MessageCircle className="w-4 h-4" />
            <span>WHOLESALE & EXPORT INQUIRIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            READY TO ORDER OR DISTRIBUTE?
          </h2>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Contact our sales team today for wholesale price lists, sample requests, export containers, or retail partnerships.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full bg-white text-[#34070c] font-extrabold text-sm shadow-xl hover:bg-slate-100 transition-all"
            >
              Submit Business Inquiry
            </Link>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20United%20Foods,%20I%20am%20interested%20in%20wholesale%20distribution.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm flex items-center gap-2 shadow-xl transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp (+92 300 8292550)</span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.email}?subject=Wholesale%20%26%20Distribution%20Inquiry%20-%20United%20Foods`}
              className="px-6 py-3.5 rounded-full bg-[#f5d77f] hover:bg-[#e5bc53] text-[#2c060a] font-extrabold text-sm flex items-center gap-2 shadow-xl transition-all"
            >
              <Mail className="w-4 h-4 text-[#2c060a]" />
              <span>Email Direct ({COMPANY_INFO.email})</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
