import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, ArrowLeft, PackageCheck } from 'lucide-react';
import { CATEGORIES_LIST } from '@/data/productsData';

export default function CategoriesPage() {
  const categoryDetails = [
    {
      id: 'pickles',
      name: 'Pickles (Achar)',
      tagline: 'Traditional Slow-Cured Authentic Recipes',
      description: 'Handcrafted traditional mango, mixed, garlic, green chilli, lemon, and stuffed red chilli pickles preserved in rich mustard oil and secret spice blends.',
      itemCount: 16,
      image: '/assets/02_Pickles/Mango_Pickle_Aam_Ka_Achar_Jar_400g.jpeg',
      badge: 'Bestseller',
    },
    {
      id: 'spices',
      name: 'Pure Spices & Seasonings',
      tagline: 'Freshly Ground Powders & Whole Seed Spices',
      description: 'Aromatic turmeric (haldi), red chilli powders, cumin seeds, coriander powders, garam masala, and specialty spice blends ground from whole harvests.',
      itemCount: 18,
      image: '/assets/04_Spices_and_Seasonings/Ground_Spices/Turmeric_Powder_Haldi_Jar_250g.jpeg',
      badge: '100% Pure',
    },
    {
      id: 'salts',
      name: 'Himalayan Pink Salt',
      tagline: 'Pristine Mineral-Rich Rock Salts & Craft Lamps',
      description: 'Authentic Khewra mineral-rich pink rock salts in fine, medium, coarse grinders, and hand-carved natural therapeutic Himalayan salt lamps.',
      itemCount: 12,
      image: '/assets/04_Spices_and_Seasonings/Himalayan_Salts/Himalayan_Pink_Salt_Fine_Jar_800g.jpeg',
      badge: '84+ Minerals',
    },
    {
      id: 'chutneys',
      name: 'Pastes & Gourmet Chutneys',
      tagline: 'Sweet, Tangy & Spicy Artisanal Condiments',
      description: 'Rich sweet mango chutneys, plum chutneys, fresh ginger garlic cooking paste, and tangy tamarind sauces crafted for wholesome feasts.',
      itemCount: 3,
      image: '/assets/03_Pastes_and_Chutneys/Mango_Chutney_Aam_Ki_Chatni_Jar_400g.jpeg',
      badge: 'Artisanal',
    },
    {
      id: 'rice',
      name: 'Basmati Rice & Grains',
      tagline: 'Extra Long Grain Super Kernel Basmati (5kg - 20kg)',
      description: 'Aged fragrant long-grain Basmati rice, premium sella rice, and whole pulses packaged in premium woven jute sacks and export bags.',
      itemCount: 5,
      image: '/assets/05_Rice_and_Grains/Premium_Long_Grain_Basmati_Rice_Bag_20kg.jpeg',
      badge: 'Export Grade',
    },
    {
      id: 'oils',
      name: 'Pure Cold-Pressed Edible Oils',
      tagline: 'Tunisian Extra Virgin Olive, Mustard & Sunflower',
      description: '100% pure cold-pressed extra virgin olive oil imported from Tunisia, pungent mustard cooking oil, and refined heart-healthy sunflower oil.',
      itemCount: 7,
      image: '/assets/06_Edible_Oils/Extra_Virgin_Olive_Oil_From_Tunisia_Bottle_01.jpeg',
      badge: 'Cold Pressed',
    },
    {
      id: 'beverages',
      name: 'Fruit Juices, Milks & Tea',
      tagline: '100% Pure Mango, Guava, Apple Juices & Kashmiri Qahwa',
      description: 'Refreshing fruit nectar bottles (250ml & 1L), premium dairy flavored milks (Chocolate, Badam Zafran), and invigorating herbal green teas.',
      itemCount: 29,
      image: '/assets/07_Beverages_and_Dairy/Fruit_Juices_250ml/Mango_Juice_Bottle_250ml.jpeg',
      badge: 'Natural Nectar',
    },
    {
      id: 'sweeteners',
      name: 'Natural Jaggery & Sweeteners',
      tagline: 'Traditional Cane Gur Cups, Brown Sugar & Dates',
      description: 'Pure chemical-free cane jaggery (Gur) tea cups, raw brown crystals, crushed shakkar, and wholesome nutrient-packed dried dates.',
      itemCount: 10,
      image: '/assets/08_Specialty_and_Sweeteners/Pure_Natural_Jaggery_Gur_60_Cups_Tea_Pack.jpeg',
      badge: 'Unrefined',
    },
  ];

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="container">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-[#8b1524] transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#8b1524] font-bold">Categories</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-[#8b1524]/20 text-xs font-bold text-[#8b1524]">
            <Sparkles className="w-3.5 h-3.5 text-[#8b1524]" />
            <span>EXPLORE OUR CULINARY DOMAINS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            PRODUCT <span className="crimson-gradient-text">CATEGORIES</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover the comprehensive range of United Foods products. From traditional kitchen staples to 
            international export-quality delicacies, click any category to view all available pack sizes and specifications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryDetails.map((cat) => (
            <div 
              key={cat.id}
              className="bg-white rounded-3xl border border-slate-200 hover:border-[#8b1524]/40 hover:shadow-xl transition-all p-6 flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Image Container with 3:3.8 Aspect Ratio */}
                <div className="relative w-full aspect-[3/3.8] rounded-2xl bg-slate-50 p-0 flex items-center justify-center border border-slate-100 mb-6 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#8b1524] text-white text-[11px] font-bold shadow-md z-10">
                    {cat.badge}
                  </div>

                  {/* Count */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 text-[11px] font-bold shadow-md z-10 flex items-center gap-1.5">
                    <PackageCheck className="w-3.5 h-3.5 text-[#8b1524]" />
                    <span>{cat.itemCount} Products</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-[#8b1524] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#8b1524]">
                    {cat.tagline}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href={`/products?category=${cat.id}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#8b1524] text-slate-800 hover:text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-200 hover:border-[#8b1524] transition-all shadow-sm"
                >
                  <span>Browse {cat.name}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
