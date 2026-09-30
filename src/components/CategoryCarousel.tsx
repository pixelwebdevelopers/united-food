'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, LayoutGrid } from 'lucide-react';

interface CategoryCard {
  id: string;
  name: string;
  tagline: string;
  itemCount: number;
  image: string;
  accent: string;
}

const CATEGORY_CARDS: CategoryCard[] = [
  {
    id: 'masalas',
    name: 'Recipe Masala Mixes',
    tagline: 'Authentic Biryani, Haleem, Curry & Kabab Mixes',
    itemCount: 16,
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
    itemCount: 8,
    image: '/assets/02_Pickles/Green_Chilli_Pickle_Hari_Mirch_Achar_Jar.jpeg',
    accent: 'from-amber-600/10 to-[#34070c]/10',
  },
  {
    id: 'spices',
    name: 'Spices & Seasonings',
    tagline: 'Freshly Ground & Pure Whole Spices',
    itemCount: 16,
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
    id: 'rice',
    name: 'Basmati Rice & Grains',
    tagline: 'Premium Extra Long Grain (5k-20kg)',
    itemCount: 4,
    image: '/assets/05_Rice_and_Grains/Camel_Basmati_Rice_Premium_Long_Grain.jpeg',
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
    id: 'qehwa',
    name: 'Tea & Kashmiri Qehwa',
    tagline: 'Pure Saffron Qehwa, Dust Tea & Ispaghol Husk',
    itemCount: 3,
    image: '/assets/07_Beverages_and_Dairy/Tea_and_Qahwa/Royal_Kashmiri_Qahwa_Saffron_Cardamom_Jar_01.jpeg',
    accent: 'from-amber-600/10 to-[#34070c]/10',
  },
  {
    id: 'beverages',
    name: 'Juices & Flavored Milks',
    tagline: '100% Pure Mango, Guava, Apple Juices & Dairy',
    itemCount: 14,
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

// Duplicate 3 times for continuous infinite loop in both directions
const INFINITE_CARDS = [...CATEGORY_CARDS, ...CATEGORY_CARDS, ...CATEGORY_CARDS];

export default function CategoryCarousel({ onSelectCategory }: { onSelectCategory?: (catId: string) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Interaction tracking state & refs
  const isInteractingRef = useRef<boolean>(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartScrollLeftRef = useRef<number>(0);
  const hasDraggedRef = useRef<boolean>(false);

  // Position initialized check
  const isPositionInitializedRef = useRef<boolean>(false);

  // Initialize scroll position to middle set on mount
  useEffect(() => {
    const el = scrollRef.current;
    if (el && !isPositionInitializedRef.current) {
      const singleSetWidth = el.scrollWidth / 3;
      if (singleSetWidth > 0) {
        el.scrollLeft = singleSetWidth;
        isPositionInitializedRef.current = true;
      }
    }
  }, []);

  // Infinite wrap-around helper
  const checkInfiniteWrap = useCallback(() => {
    const el = scrollRef.current;
    if (!el || el.scrollWidth <= 0) return;
    const singleSetWidth = el.scrollWidth / 3;
    if (singleSetWidth <= 0) return;

    if (el.scrollLeft >= singleSetWidth * 2) {
      el.scrollLeft -= singleSetWidth;
    } else if (el.scrollLeft <= 5) {
      el.scrollLeft += singleSetWidth;
    }
  }, []);

  // Continuous Auto-moving Marquee Loop
  useEffect(() => {
    let lastTime = performance.now();

    const step = (now: number) => {
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (!isInteractingRef.current && scrollRef.current) {
        const el = scrollRef.current;
        // 45px per second marquee speed
        el.scrollLeft += 45 * delta;
        checkInfiniteWrap();
      }

      animFrameIdRef.current = requestAnimationFrame(step);
    };

    animFrameIdRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, [checkInfiniteWrap]);

  // Pause & resume auto-scroll on interaction
  const pauseAutoScroll = () => {
    isInteractingRef.current = true;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
  };

  const scheduleResume = (delay = 2000) => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, delay);
  };

  // Touch Handlers for Mobile
  const handleTouchStart = () => {
    pauseAutoScroll();
    hasDraggedRef.current = false;
  };

  const handleTouchMove = () => {
    hasDraggedRef.current = true;
    pauseAutoScroll();
    checkInfiniteWrap();
  };

  const handleTouchEnd = () => {
    scheduleResume(2200);
  };

  // Mouse Drag Handlers for Desktop Swiping
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    dragStartXRef.current = e.pageX - scrollRef.current.offsetLeft;
    dragStartScrollLeftRef.current = scrollRef.current.scrollLeft;
    pauseAutoScroll();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragStartXRef.current) * 1.5;
    if (Math.abs(walk) > 5) {
      hasDraggedRef.current = true;
    }
    scrollRef.current.scrollLeft = dragStartScrollLeftRef.current - walk;
    checkInfiniteWrap();
  };

  const handleMouseUp = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      scheduleResume(2000);
    }
  };

  const handleMouseLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
    }
    scheduleResume(1000);
  };

  // Programmatic Button Scroll
  const scroll = (direction: 'left' | 'right') => {
    pauseAutoScroll();
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(() => {
        checkInfiniteWrap();
      }, 350);
    }
    scheduleResume(3000);
  };

  const handleCardClick = (catId: string) => {
    // If user was dragging/swiping, do not trigger card click
    if (hasDraggedRef.current) return;

    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    router.push(`/products?category=${catId}`);
  };

  return (
    <section id="categories" className="py-16 bg-slate-50 relative border-b border-slate-200 overflow-hidden select-none">
      <div className="container">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-[#34070c]/20 text-xs font-bold text-[#34070c] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#34070c]" />
              <span>EXPLORE OUR RANGE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              PRODUCT <span className="crimson-gradient-text">CATEGORIES</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
              Swipe or glide through our authentic recipe masalas, pure whole spices, Himalayan salts, and beverages.
            </p>
          </div>

          {/* Nav Controls & View All Link */}
          <div className="flex items-center justify-between sm:justify-end gap-3">
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
                className="p-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#34070c] shadow-sm transition-all active:scale-95"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#34070c] shadow-sm transition-all active:scale-95"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Infinite Marquee Carousel Track */}
        <div
          ref={scrollRef}
          onScroll={checkInfiniteWrap}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={pauseAutoScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none cursor-grab active:cursor-grabbing will-change-transform"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            userSelect: 'none'
          }}
        >
          {INFINITE_CARDS.map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              onClick={() => handleCardClick(card.id)}
              className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] rounded-2xl bg-white p-4 flex flex-col justify-between cursor-pointer group border border-slate-200 hover:border-[#34070c]/40 hover:shadow-xl transition-all relative overflow-hidden shadow-sm"
            >
              {/* Category Card Top Accent Glow */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${card.accent} rounded-full blur-2xl pointer-events-none`} />

              {/* Product Thumbnail */}
              <div className="relative w-full aspect-[3/3.8] rounded-xl bg-slate-50 p-0 flex items-center justify-center border border-slate-100 mb-4 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                  loading="lazy"
                  draggable={false}
                />

                {/* Badge for Item Count */}
                <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#34070c] text-white text-[10px] font-bold shadow-md z-10">
                  {card.itemCount} Items
                </div>
              </div>

              {/* Text Information */}
              <div className="space-y-1">
                <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#34070c] transition-colors line-clamp-1">
                  {card.name}
                </h3>
                <p className="text-xs text-slate-500 leading-snug line-clamp-2">
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
