import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
  return (
    <div className="py-8 bg-white min-h-screen">
      <div className="container mb-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 py-2">
          <Link href="/" className="hover:text-[#8b1524] transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#8b1524] font-bold">Contact & Inquiries</span>
        </div>
      </div>

      <ContactSection />
    </div>
  );
}
