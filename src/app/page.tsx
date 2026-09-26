'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import CategoryCarousel from '@/components/CategoryCarousel';
import ProductExplorer from '@/components/ProductExplorer';
import BrandLegacy from '@/components/BrandLegacy';
import VideoGallery from '@/components/VideoGallery';
import BannerShowcase from '@/components/BannerShowcase';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
  };

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section with 3D Emblem & Actions */}
      <HeroSection />

      {/* 2. Modern Horizontal Category Carousel */}
      <CategoryCarousel onSelectCategory={handleSelectCategory} />

      {/* 3. Comprehensive Filterable Product Catalog Explorer */}
      <ProductExplorer
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* 4. Buttar Since 2005 & United Foods Brand Heritage & Pillars */}
      <BrandLegacy />

      {/* 5. Promotional Videos & Reels Showcase */}
      <VideoGallery />

      {/* 6. Campaign & Marketing Banners Lightbox */}
      <BannerShowcase />

      {/* 7. Wholesale Inquiry & Contact Section */}
      <ContactSection />
    </div>
  );
}
