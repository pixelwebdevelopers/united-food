import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, ArrowLeft, PackageCheck } from 'lucide-react';
import { CATEGORIES_LIST } from '@/data/productsData';

export default function CategoriesPage() {
  const categoryDetails = [
    {
      id: 'masalas',
      name: 'Recipe Masala Mixes',
      tagline: 'Authentic Traditional Recipe Mixes & Pure Spices',
      description: 'Masterfully blended recipe spice mixes for Chicken Biryani, Kofta, Haleem, Achar Gosht, Fish, Paya, Shami Kabab, Chat Masala, Curry Powder, Kasuri Meethi, and pure boxed spices.',
      itemCount: 16,
      image: '/assets/11_Recipe_Masalas/Chicken_Biryani_Recipe_Mix_Box.jpeg',
      badge: 'Chef Choice',
    },
    {
      id: 'desserts',
      name: 'Desserts & Custard Powders',
      tagline: 'Velvety Fruit Custards & Crystal Jelly Powders',
      description: 'Indulgent mango, vanilla, banana, and strawberry custard powders alongside instant crystal mango jelly dessert mixes for delightful celebrations.',
      itemCount: 5,
      image: '/assets/12_Desserts_and_Custards/Mango_Custard_Powder_Box.jpeg',
      badge: 'Sweet Delight',
    },
    {
      id: 'pickles',
      name: 'Pickles (Achar)',
      tagline: 'Traditional Slow-Cured Authentic Recipes',
      description: 'Handcrafted traditional mango, mixed, garlic, green chilli, lemon, and stuffed red chilli pickles preserved in rich mustard oil and secret spice blends.',
      itemCount: 10,
      image: '/assets/02_Pickles/Delicious_Green_Chilli_Pickle_Hari_Mirch_Achar_Jar.jpeg',
      badge: 'Bestseller',
    },
    {
      id: 'ketchup-jams',
      name: 'Ketchup & Jams',
      tagline: 'Farm-Fresh Tomato Sauces & Natural Fruit Jams',
      description: 'Rich thick tomato ketchup, zesty chilli garlic sauce pouches, and all-natural mango, apple, orange, and mixed fruit jams cooked from real orchards.',
      itemCount: 6,
      image: '/assets/13_Ketchup_and_Jams/Tomato_Ketchup_Rich_Thick_Pouch_and_Can.jpeg',
      badge: 'Fresh Harvest',
    },
    {
      id: 'spices',
      name: 'Pure Spices & Seasonings',
      tagline: 'Freshly Ground Powders & Whole Seed Spices',
      description: 'Aromatic turmeric (haldi), red chilli powders, cumin seeds, coriander powders, beetroot superfood powder, garam masala, and specialty spice blends ground from whole harvests.',
      itemCount: 17,
      image: '/assets/04_Spices_and_Seasonings/Ground_Spices/Turmeric_Powder_Haldi_Jar_250g.jpeg',
      badge: '100% Pure',
    },
    {
      id: 'salts',
      name: 'Himalayan Pink Salt',
      tagline: 'Pristine Mineral-Rich Rock Salts & Craft Lamps',
      description: 'Authentic Khewra mineral-rich pink rock salts in fine, medium, coarse grinders, and hand-carved natural therapeutic Himalayan salt lamps.',
      itemCount: 7,
      image: '/assets/04_Spices_and_Seasonings/Himalayan_Salts/Himalayan_Pink_Salt_Export_Quality_Jar_800g.jpeg',
      badge: '84+ Minerals',
    },
    {
      id: 'rice',
      name: 'Basmati Rice & Grains',
      tagline: 'Extra Long Grain Super Kernel Basmati (5kg - 20kg)',
      description: 'Aged fragrant long-grain Basmati rice, premium sella rice, and whole pulses packaged in premium woven jute sacks and export bags.',
      itemCount: 4,
      image: '/assets/05_Rice_and_Grains/Camel_Basmati_Rice_Premium_Long_Grain.jpeg',
      badge: 'Export Grade',
    },
    {
      id: 'oils',
      name: 'Pure Cold-Pressed Edible Oils',
      tagline: 'Tunisian Extra Virgin Olive, Mustard & Sunflower',
      description: '100% pure cold-pressed extra virgin olive oil imported from Tunisia, pungent mustard cooking oil, and refined heart-healthy sunflower oil.',
      itemCount: 3,
      image: '/assets/06_Edible_Oils/Extra_Virgin_Olive_Oil_From_Tunisia_Bottle_01.jpeg',
      badge: 'Cold Pressed',
    },
    {
      id: 'qehwa',
      name: 'Tea & Kashmiri Qehwa',
      tagline: 'Pure Royal Saffron Qehwa, Dust Teas & Ispaghol Husk',
      description: 'Authentic Kashmiri saffron cardamom qehwa jars, premium dust black tea leaves, and pure psyllium husk (Ispaghol chilka).',
      itemCount: 3,
      image: '/assets/07_Beverages_and_Dairy/Tea_and_Qahwa/Royal_Kashmiri_Qahwa_Saffron_Cardamom_Jar_01.jpeg',
      badge: 'Royal Wellness',
    },
    {
      id: 'beverages',
      name: 'Fruit Juices & Flavored Milks',
      tagline: '100% Pure Mango, Guava, Apple Juices & Dairy',
      description: 'Refreshing fruit nectar bottles made with pure fruit pulp, date & saffron wellness drinks, alongside nutrient-rich dairy flavored milks.',
      itemCount: 14,
      image: '/assets/07_Beverages_and_Dairy/Fruit_Juices_250ml/Mango_Juice_Bottle_250ml.jpeg',
      badge: 'Natural Nectar',
    },
    {
      id: 'sweeteners',
      name: 'Natural Jaggery & Sweeteners',
      tagline: 'Traditional Cane Gur Cups, Brown Sugar & Dates',
      description: 'Pure chemical-free cane jaggery (Gur) tea cups, raw brown sugar crystals, crushed shakkar, and pure date & saffron powder sweeteners.',
      itemCount: 8,
      image: '/assets/08_Specialty_and_Sweeteners/Pure_Natural_Jaggery_Gur_60_Cups_Tea_Pack.jpeg',
      badge: 'Unrefined',
    },
  ];

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="container">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-[#34070c] transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#34070c] font-bold">Categories</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-[#34070c]/20 text-xs font-bold text-[#34070c]">
            <Sparkles className="w-3.5 h-3.5 text-[#34070c]" />
            <span>EXPLORE OUR CULINARY DOMAINS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            PRODUCT <span className="crimson-gradient-text">CATEGORIES</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover the comprehensive range of United Foods™ products. From traditional kitchen staples to 
            international export-quality delicacies, click any category to view all available pack sizes and specifications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryDetails.map((cat) => (
            <div 
              key={cat.id}
              className="bg-white rounded-3xl border border-slate-200 hover:border-[#34070c]/40 hover:shadow-xl transition-all p-6 flex flex-col justify-between group shadow-sm"
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
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#34070c] text-white text-[11px] font-bold shadow-md z-10">
                    {cat.badge}
                  </div>

                  {/* Count */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 text-[11px] font-bold shadow-md z-10 flex items-center gap-1.5">
                    <PackageCheck className="w-3.5 h-3.5 text-[#34070c]" />
                    <span>{cat.itemCount} Products</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-[#34070c] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#34070c]">
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
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#34070c] text-slate-800 hover:text-white font-bold text-xs flex items-center justify-center gap-2 border border-slate-200 hover:border-[#34070c] transition-all shadow-sm"
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
