'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, LayoutGrid } from 'lucide-react';
import { CATEGORIES_LIST } from '@/data/productsData';

interface CategoryCard {
  id: string;
  name: string;
  tagline: string;
  itemCount: number;
  image: string;
  accent: string;
}

export default function CategoryCarousel({ onSelectCategory }: { onSelectCategory?: (catId: string) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const categoryCards: CategoryCard[] = [
    {
      id: 'masalas',
      name: 'Recipe Masala Mixes',
      tagline: 'Authentic Biryani, Haleem, Curry & Kabab Mixes',
      itemCount: 14,
      image: '/assets/11_Recipe_Masalas/Chicken_Biryani_Recipe_Mix_Box.jpeg',
      accent: 'from-red-600/10 to-[#34070c]/10',
    },
    {
      id: 'desserts',
      name: 'Desserts & Custards',
      tagline: 'Creamy Fruit Custard & Crystal Jelly Powders',
      itemCount: 5,
      image: '/assets/12_Desserts_and_Custards/Mango_Custard_Powder_Box.jpeg',
      accent: 'from-yellow-500/10 to-[#34070c]/10',
    },
    {
      id: 'pickles',
      name: 'Pickles (Achar)',
      tagline: 'Traditional Slow-Cured Recipes',
      itemCount: 12,
      image: '/assets/02_Pickles/Green_Chilli_Pickle_Hari_Mirch_Achar_Jar.jpeg',
      accent: 'from-amber-600/10 to-[#34070c]/10',
    },
    {
      id: 'spices',
      name: 'Spices & Seasonings',
      tagline: 'Freshly Ground & Pure Whole Spices',
      itemCount: 17,
      image: '/assets/04_Spices_and_Seasonings/Ground_Spices/Turmeric_Powder_Haldi_Jar_250g.jpeg',
      accent: 'from-yellow-600/10 to-[#34070c]/10',
    },
    {
      id: 'salts',
      name: 'Himalayan Pink Salt',
      tagline: '84+ Natural Minerals & Lamps',
      itemCount: 7,
      image: '/assets/04_Spices_and_Seasonings/Himalayan_Salts/Himalayan_Pink_Salt_Export_Quality_Jar_800g.jpeg',
      accent: 'from-rose-600/10 to-[#34070c]/10',
    },
    {
      id: 'chutneys',
      name: 'Pastes & Chutneys',
      tagline: 'Sweet, Tangy & Spicy Condiments',
      itemCount: 6,
      image: '/assets/03_Pastes_and_Chutneys/Mango_Chutney_Aam_Ki_Chatni_Jar_400g.jpeg',
      accent: 'from-orange-600/10 to-[#34070c]/10',
    },
    {
      id: 'rice',
      name: 'Basmati Rice & Grains',
      tagline: 'Premium Extra Long Grain (5k-20kg)',
      itemCount: 4,
      image: '/assets/05_Rice_and_Grains/Premium_Long_Grain_Basmati_Rice_Bag_20kg.jpeg',
      accent: 'from-amber-700/10 to-[#34070c]/10',
    },
    {
      id: 'oils',
      name: 'Pure Edible Oils',
      tagline: 'Tunisian Olive, Mustard & Sunflower',
      itemCount: 3,
      image: '/assets/06_Edible_Oils/Extra_Virgin_Olive_Oil_From_Tunisia_Bottle_01.jpeg',
      accent: 'from-emerald-700/10 to-[#34070c]/10',
    },
    {
      id: 'beverages',
      name: 'Juices, Milks & Tea',
      tagline: '100% Pure Fruit Juices & Kashmiri Qahwa',
      itemCount: 26,
      image: '/assets/07_Beverages_and_Dairy/Fruit_Juices_250ml/Mango_Juice_Bottle_250ml.jpeg',
      accent: 'from-red-600/10 to-[#34070c]/10',
    },
    {
      id: 'sweeteners',
      name: 'Natural Sweeteners',
      tagline: 'Pure Jaggery (Gur), Brown Sugar & Dates',
      itemCount: 8,
      image: '/assets/08_Specialty_and_Sweeteners/Pure_Natural_Jaggery_Gur_60_Cups_Tea_Pack.jpeg',
      accent: 'from-amber-800/10 to-[#34070c]/10',
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

  const handleCardClick = (catId: string) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    router.push(`/products?category=${catId}`);
  };

  return (
    <section id="categories" className="py-16 bg-slate-50 relative border-b border-slate-200">
      <div className="container">
        
        {/* Section Header with Carousel Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-[#34070c]/20 text-xs font-bold text-[#34070c] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#34070c]" />
              <span>EXPLORE OUR RANGE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              PRODUCT <span className="crimson-gradient-text">CATEGORIES</span>
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              Swipe through our diverse collection of traditional recipes, pure spices, staples, and refreshing beverages.
            </p>
          </div>

          {/* Nav Controls & View All Link */}
          <div className="flex items-center gap-3">
            <Link
              href="/categories"
              className="px-4 py-2 rounded-full bg-white border border-slate-200 hover:border-[#34070c] text-slate-700 hover:text-[#34070c] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-[#34070c]" />
              <span>All Categories</span>
            </Link>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scroll('left')}
                className="p-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#34070c] shadow-sm transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#34070c] shadow-sm transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
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
              onClick={() => handleCardClick(card.id)}
              className="flex-shrink-0 w-[280px] sm:w-[320px] rounded-2xl bg-white p-4 flex flex-col justify-between cursor-pointer group snap-start border border-slate-200 hover:border-[#34070c]/40 hover:shadow-xl transition-all relative overflow-hidden shadow-sm"
            >
              {/* Category Card Top Accent */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${card.accent} rounded-full blur-2xl pointer-events-none`} />

              {/* Product Thumbnail (Portrait 3/3.8 Shape) */}
              <div className="relative w-full aspect-[3/3.8] rounded-xl bg-slate-50 p-0 flex items-center justify-center border border-slate-100 mb-4 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  sizes="(max-width: 640px) 280px, 320px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Badge for Item Count */}
                <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#34070c] text-white text-[10px] font-bold shadow-md z-10">
                  {card.itemCount} Items
                </div>
              </div>

              {/* Text Information */}
              <div className="space-y-1">
                <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-[#34070c] transition-colors">
                  {card.name}
                </h3>
                <p className="text-xs text-slate-500 leading-snug">
                  {card.tagline}
                </p>
              </div>

              {/* Card Action Link */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#34070c]">
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
