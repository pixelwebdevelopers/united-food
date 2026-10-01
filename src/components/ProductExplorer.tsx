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

const normalizeCategory = (cat: string): string => {
  const lower = (cat || '').toLowerCase().trim().replace(/[-_ ]+/g, '');
  if (['masalas', 'masala', 'recipemasalas', 'recipemasala', 'recipie', 'recipe', 'recipemix', 'recipemixes', 'recipies'].includes(lower)) return 'masalas';
  if (['desserts', 'dessert', 'custards', 'custard', 'custardpowder', 'custardpowders', 'jelly'].includes(lower)) return 'desserts';
  if (['pickles', 'pickle', 'achar'].includes(lower)) return 'pickles';
  if (['ketchupjams', 'ketchup', 'jams', 'ketchupandjams', 'ketchupjam', 'jam', 'sauces', 'sauce', 'ketchups'].includes(lower)) return 'ketchup-jams';
  if (['spices', 'spice', 'seasonings', 'seasoning', 'groundspices'].includes(lower)) return 'spices';
  if (['salts', 'salt', 'himalayansalt', 'himalayansalts', 'pinksalt'].includes(lower)) return 'salts';
  if (['rice', 'grains', 'grain', 'basmati', 'basmatirice'].includes(lower)) return 'rice';
  if (['oils', 'oil', 'edibleoils', 'edibleoil', 'oliveoil'].includes(lower)) return 'oils';
  if (['qehwa', 'qahwa', 'tea', 'teas', 'kashmiriqehwa', 'kashmiriqahwa', 'herbaltea', 'qehwas'].includes(lower)) return 'qehwa';
  if (['beverages', 'beverage', 'juices', 'juice', 'milk', 'milks'].includes(lower)) return 'beverages';
  if (['sweeteners', 'sweetener', 'jaggery', 'gur'].includes(lower)) return 'sweeteners';
  return lower;
};

export default function ProductExplorer({ activeCategory, setActiveCategory }: ProductExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(24);

  const normalizedActive = useMemo(() => normalizeCategory(activeCategory), [activeCategory]);

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      const normalizedGroup = normalizeCategory(product.group);
      const matchesCategory = 
        normalizedActive === 'all' || 
        normalizedActive === '' ||
        normalizedGroup === normalizedActive ||
        product.group.toLowerCase() === activeCategory.toLowerCase() ||
        product.category.toLowerCase().includes(activeCategory.toLowerCase());

      const matchesSearch = 
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.packSize.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, normalizedActive, searchQuery]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setVisibleCount(24);
    if (typeof window !== 'undefined') {
      const url = catId === 'all' ? '/products' : `/products?category=${catId}`;
      window.history.replaceState(null, '', url);
    }
  };

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section id="products" className="py-20 bg-white relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-50 border border-[#34070c]/20 text-xs font-bold text-[#34070c]">
            <Layers className="w-3.5 h-3.5 text-[#34070c]" />
            <span>FULL PRODUCT PORTFOLIO ({ALL_PRODUCTS.length} ITEMS)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            MASTER PRODUCT <span className="crimson-gradient-text">CATALOG</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
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
              className="w-full pl-12 pr-12 py-3.5 rounded-full bg-slate-50 border border-slate-200 focus:border-[#34070c] focus:bg-white text-slate-900 placeholder-slate-400 text-sm outline-none transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-[#34070c]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {CATEGORIES_LIST.map((cat) => {
              const isActive = (normalizedActive === 'all' && cat.id === 'all') || normalizedActive === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#34070c] text-white shadow-md shadow-[#34070c]/20 scale-105 border border-[#34070c]'
                      : 'bg-white text-slate-700 hover:text-[#34070c] hover:bg-slate-50 border border-slate-200 shadow-sm'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {cat.id === 'all' ? ALL_PRODUCTS.length : cat.count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Product Grid */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="glass-card rounded-2xl p-4 flex flex-col justify-between group border border-slate-200 hover:border-[#34070c]/40 hover:shadow-xl relative bg-white"
              >
                <div>
                  {/* Image Container with Portrait 3:4.2 Cover Fit */}
                  <div 
                    onClick={() => setSelectedProduct(product)}
                    className="product-img-wrapper cursor-pointer mb-4 relative"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center"
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

                  {/* Info */}
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

                {/* Card Action Buttons */}
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
        ) : (
          <div className="text-center py-16 bg-slate-50 border border-slate-200 rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-slate-600 text-sm font-medium mb-3">No products match your current search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="btn-primary text-xs !py-2 !px-4"
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
              <ChevronDown className="w-4 h-4 text-[#34070c]" />
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
