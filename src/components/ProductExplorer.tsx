'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { 
  Search, Eye, Phone, Sparkles, Filter, CheckCircle2, ShieldCheck, 
  Package, ChevronDown, Layers
} from 'lucide-react';
import { ALL_PRODUCTS, CATEGORIES_LIST, ProductItem, COMPANY_INFO } from '@/data/productsData';
import ProductModal from './ProductModal';

interface ProductExplorerProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export default function ProductExplorer({ activeCategory, setActiveCategory }: ProductExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(24);

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.group === activeCategory;
      const matchesSearch = 
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.packSize.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section id="products" className="py-20 bg-[#090d16] relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#8b1524]/30 border border-[#d4af37]/30 text-xs font-semibold text-[#f3cf65]">
            <Layers className="w-3.5 h-3.5 text-[#f3cf65]" />
            <span>FULL PRODUCT PORTFOLIO ({ALL_PRODUCTS.length} ITEMS)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            MASTER PRODUCT <span className="gold-gradient-text">CATALOG</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Browse our comprehensive array of culinary essentials. Click on any item for full packaging specs and instant wholesale inquiry.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-6 mb-10">
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search products (e.g., Mango Pickle, Haldi, Pink Salt, Olive Oil, Basmati, Juice)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(24);
              }}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/[0.04] border border-white/10 focus:border-[#d4af37] focus:bg-white/[0.07] text-white placeholder-slate-400 text-sm outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {CATEGORIES_LIST.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setVisibleCount(24);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#8b1524] to-[#ab2133] text-white border border-[#d4af37]/60 shadow-lg shadow-[#8b1524]/40 scale-105'
                      : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/5'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-black/40 text-[#f3cf65]' : 'bg-white/10 text-slate-400'
                  }`}>
                    {cat.id === 'all' ? ALL_PRODUCTS.length : cat.count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Product Grid (Ensuring NEVER cropped images with contain & luxury framing) */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="glass-card rounded-2xl p-4 flex flex-col justify-between group border border-white/10 hover:border-[#d4af37]/50 relative"
              >
                <div>
                  {/* Image Container with Contain Fit */}
                  <div 
                    onClick={() => setSelectedProduct(product)}
                    className="product-img-wrapper cursor-pointer mb-4 relative"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="object-contain"
                      loading="lazy"
                    />

                    {/* Quick View Hover Button */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#d4af37] text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Quick View</span>
                      </span>
                    </div>

                    {/* Pack Size Pill */}
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#d4af37]/30 text-[10px] font-bold text-[#f3cf65]">
                      {product.packSize}
                    </div>

                    {/* Halal Badge */}
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#8b1524]/80 text-[9px] font-semibold text-white flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#f3cf65]" />
                      <span>Halal</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider block">
                      {product.category}
                    </span>
                    <h3 
                      onClick={() => setSelectedProduct(product)}
                      className="font-heading text-base font-bold text-white group-hover:text-[#f3cf65] transition-colors line-clamp-2 cursor-pointer"
                    >
                      {product.name}
                    </h3>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Details</span>
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20United%20Foods,%20I%20am%20interested%20in%20"${encodeURIComponent(product.name)}"%20(${encodeURIComponent(product.packSize)}).%20Please%20share%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#8b1524] to-[#ab2133] hover:from-[#ab2133] hover:to-[#8b1524] text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md"
                  >
                    <Phone className="w-3 h-3 text-[#f3cf65]" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-card rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-slate-300 text-sm font-medium mb-3">No products match your current search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="btn-gold text-xs !py-2 !px-4"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredProducts.length > visibleCount && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 24)}
              className="btn-outline !py-3 !px-8 text-sm"
            >
              <span>Load More Products ({filteredProducts.length - visibleCount} remaining)</span>
              <ChevronDown className="w-4 h-4 text-[#f3cf65]" />
            </button>
          </div>
        )}

      </div>

      {/* Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
