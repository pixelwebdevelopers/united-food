import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Award, ShieldCheck, HeartPulse, Clock, CheckCircle2, Globe, 
  Sparkles, ArrowLeft, ArrowRight, Factory, Users, Check
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/productsData';

export default function HeritagePage() {
  const milestones = [
    {
      year: '2005',
      title: 'The Buttar Foundation',
      desc: 'Founded with a relentless commitment to pure, unadulterated food products, starting with traditional family pickle curing recipes.'
    },
    {
      year: '2012',
      title: 'Spices & Himalayan Salt Expansion',
      desc: 'Expanded into 100% pure stone-ground spices and authentic rock salt extraction from the pristine Khewra salt range.'
    },
    {
      year: '2018',
      title: 'Beverages & Export Operations',
      desc: 'Introduced fruit nectars, dairy flavored milks, and launched worldwide export compliance for Middle East and Western markets.'
    },
    {
      year: 'Today',
      title: '100+ Master Products',
      desc: 'Serving thousands of satisfied retail consumers, food service businesses, and international distributors with premium certified Halal foods.'
    }
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
          <span className="text-[#34070c] font-bold">Brand Heritage & Story</span>
        </div>

        {/* Hero Section of Heritage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-[#34070c]/20 text-xs font-bold text-[#34070c]">
              <Clock className="w-3.5 h-3.5 text-[#34070c]" />
              <span>ESTABLISHED SINCE 2005 • 25+ YEARS OF TRUST</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              A LEGACY OF AUTHENTICITY, <br />
              <span className="crimson-gradient-text">PASSION & CULINARY PURITY</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At United Foods, we believe that real food is born from respect for natural ingredients. 
              Under our proud heritage brand <strong>Buttar (Since 2005)</strong>, we have spent decades perfecting 
              the art of traditional pickle preservation, spice grinding, and pristine mineral harvesting.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-extrabold text-[#34070c] font-heading">25+ Years</div>
                <div className="text-xs text-slate-500">Unbroken Heritage</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-extrabold text-[#b8860b] font-heading">100% Pure</div>
                <div className="text-xs text-slate-500">Chemical-Free Promise</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-square rounded-3xl p-6 bg-gradient-to-tr from-red-50 via-white to-amber-50 border border-[#34070c]/20 shadow-xl flex flex-col items-center justify-center text-center space-y-4">
              <div className="relative w-40 h-40">
                <Image
                  src="/assets/01_Logos_and_Branding/Buttar_Since_2005_Gold_Shield_Logo.png"
                  alt="Buttar Since 2005 Gold Shield Brand Seal"
                  fill
                  className="object-contain drop-shadow-lg"
                  priority
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  BUTTAR BRAND SEAL
                </h3>
                <p className="text-xs text-[#34070c] font-bold">
                  Quality Guaranteed by United Foods
                </p>
              </div>

              <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-around text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#34070c]" />
                  <span>Halal Certified</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#34070c]" />
                  <span>ISO Standards</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Historical Timeline */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
              OUR JOURNEY OF EXCELLENCE
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              How a passion for authentic culinary traditions grew into an international food enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative">
                <span className="text-2xl font-extrabold text-[#34070c] font-heading block">{item.year}</span>
                <h3 className="font-heading text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Pillars & Manufacturing Standards */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-[#34070c] uppercase tracking-wider">Quality Assurance</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                STATE-OF-THE-ART HYGIENIC MANUFACTURING
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our modern processing facilities feature automated sterile packaging lines, vacuum-sealed sealing, 
                and rigorous multi-stage laboratory testing to ensure zero contamination and preserve natural aromas.
              </p>
              <div className="pt-2">
                <Link href="/products" className="btn-primary text-xs">
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-[#34070c]" />
                <h4 className="font-heading text-sm font-bold text-slate-900">Zero Artificial Chemicals</h4>
                <p className="text-xs text-slate-500">Pure traditional oil & vinegar preservation with no hazardous synthetic additives.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
                <HeartPulse className="w-6 h-6 text-[#34070c]" />
                <h4 className="font-heading text-sm font-bold text-slate-900">Nutritional Integrity</h4>
                <p className="text-xs text-slate-500">Low-temperature grinding preserves essential oils and natural medicinal properties.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
                <Factory className="w-6 h-6 text-[#34070c]" />
                <h4 className="font-heading text-sm font-bold text-slate-900">Automated Sealing</h4>
                <p className="text-xs text-slate-500">Airtight tamper-evident jars, multi-layer foil pouches, and heavy-duty jute bags.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
                <Globe className="w-6 h-6 text-[#34070c]" />
                <h4 className="font-heading text-sm font-bold text-slate-900">Global Halal Compliance</h4>
                <p className="text-xs text-slate-500">Full compliance with international Halal export and international phytosanitary rules.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
