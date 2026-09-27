'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductExplorer from '@/components/ProductExplorer';
import { Sparkles, Layers, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function ProductsContent() {
  const searchParams = useSearchParams();
  const catQuery = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    if (catQuery) {
      setActiveCategory(catQuery);
    }
  }, [catQuery]);

  return (
    <div className="py-8 bg-slate-50/50 min-h-screen">
      <div className="container mb-4">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 py-2">
          <Link href="/" className="hover:text-[#34070c] transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#34070c] font-bold">Product Catalog</span>
        </div>
      </div>

      <ProductExplorer
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-slate-500">Loading catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
