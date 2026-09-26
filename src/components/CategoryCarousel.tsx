'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { CATEGORIES_LIST } from '@/data/productsData';

interface CategoryCard {
  id: string;
  name: string;
  tagline: string;
  itemCount: number;
  image: string;
  accent: string;
}

export default function CategoryCarousel({ onSelectCategory }: { onSelectCategory: (catId: string) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const categoryCards: CategoryCard[] = [
    {
      id: 'pickles',
      name: 'Pickles (Achar)',
      tagline: 'Traditional Slow-Cured Recipes',
      itemCount: 16,
      image: '/assets/02_Pickles/Mango_Pickle_Aam_Ka_Achar_Jar_400g.jpeg',
      accent: 'from-amber-600/30 to-[#8b1524]/40',
    },
    {
      id: 'spices',
      name: 'Spices & Seasonings',
      tagline: 'Freshly Ground & Pure Whole Spices',
      itemCount: 18,
      image: '/assets/04_Spices_and_Seasonings/Ground_Spices/Turmeric_Powder_Haldi_Jar_250g.jpeg',
      accent: 'from-yellow-600/30 to-[#8b1524]/40',
    },
    {
      id: 'salts',
      name: 'Himalayan Pink Salt',
      tagline: '84+ Natural Minerals & Lamps',
      itemCount: 12,
      image: '/assets/04_Spices_and_Seasonings/Himalayan_Salts/Himalayan_Pink_Salt_Fine_Jar_800g.jpeg',
      accent: 'from-rose-600/30 to-[#8b1524]/40',
    },
    {
      id: 'chutneys',
      name: 'Pastes & Chutneys',
      tagline: 'Sweet, Tangy & Spicy Condiments',
      itemCount: 3,
      image: '/assets/03_Pastes_and_Chutneys/Mango_Chutney_Aam_Ki_Chatni_Jar_400g.jpeg',
      accent: 'from-orange-600/30 to-[#8b1524]/40',
    },
    {
      id: 'rice',
      name: 'Basmati Rice & Grains',
      tagline: 'Premium Extra Long Grain (5k-20kg)',
      itemCount: 5,
      image: '/assets/05_Rice_and_Grains/Premium_Long_Grain_Basmati_Rice_Bag_20kg.jpeg',
      accent: 'from-amber-700/30 to-[#8b1524]/40',
    },
    {
      id: 'oils',
      name: 'Pure Edible Oils',
      tagline: 'Tunisian Olive, Mustard & Sunflower',
      itemCount: 7,
      image: '/assets/06_Edible_Oils/Extra_Virgin_Olive_Oil_From_Tunisia_Bottle_01.jpeg',
      accent: 'from-emerald-700/30 to-[#8b1524]/40',
    },
    {
      id: 'beverages',
      name: 'Juices, Milks & Tea',
      tagline: '100% Pure Fruit Juices & Kashmiri Qahwa',
      itemCount: 29,
      image: '/assets/07_Beverages_and_Dairy/Fruit_Juices_250ml/Mango_Juice_Bottle_250ml.jpeg',
      accent: 'from-red-600/30 to-[#8b1524]/40',
    },
    {
      id: 'sweeteners',
      name: 'Natural Sweeteners',
      tagline: 'Pure Jaggery (Gur), Brown Sugar & Dates',
      itemCount: 10,
      image: '/assets/08_Specialty_and_Sweeteners/Pure_Natural_Jaggery_Gur_60_Cups_Tea_Pack.jpeg',
      accent: 'from-amber-800/30 to-[#8b1524]/40',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="categories" className="py-16 bg-[#090d16]/80 relative border-t border-b border-white/5">
      <div className="container">
        
        {/* Section Header with Carousel Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8b1524]/30 border border-[#d4af37]/30 text-xs font-semibold text-[#f3cf65] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#f3cf65]" />
              <span>EXPLORE OUR RANGE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              PRODUCT <span className="gold-gradient-text">CATEGORIES</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Swipe through our diverse collection of traditional recipes, pure spices, staples, and refreshing beverages.
            </p>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white hover:text-[#f3cf65] transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white hover:text-[#f3cf65] transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categoryCards.map((card) => (
            <div
              key={card.id}
              onClick={() => {
                onSelectCategory(card.id);
                const elem = document.getElementById('products');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-shrink-0 w-[280px] sm:w-[320px] rounded-2xl glass-card p-4 flex flex-col justify-between cursor-pointer group snap-start border border-white/10 hover:border-[#d4af37]/60 relative overflow-hidden"
            >
              {/* Category Card Top Accent */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${card.accent} rounded-full blur-2xl pointer-events-none`} />

              {/* Product Thumbnail (Guaranteed Contain & No Cropping) */}
              <div className="relative w-full aspect-square rounded-xl bg-gradient-to-b from-slate-900/90 to-[#0c1220] p-4 flex items-center justify-center border border-white/5 mb-4 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.name}
                  width={240}
                  height={240}
                  className="object-contain max-h-[190px] w-auto group-hover:scale-110 transition-transform duration-500 drop-shadow-xl"
                  loading="lazy"
                />

                {/* Badge for Item Count */}
                <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#d4af37]/40 text-[10px] font-bold text-[#f3cf65]">
                  {card.itemCount} Items
                </div>
              </div>

              {/* Text Information */}
              <div className="space-y-1">
                <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#f3cf65] transition-colors">
                  {card.name}
                </h3>
                <p className="text-xs text-slate-400 leading-snug">
                  {card.tagline}
                </p>
              </div>

              {/* Card Action Link */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#f3cf65]">
                <span>View Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
