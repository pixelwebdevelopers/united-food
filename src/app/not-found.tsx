import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-white text-center">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 rounded-full bg-red-50 text-[#8b1524] flex items-center justify-center mx-auto text-3xl font-extrabold font-heading border border-[#8b1524]/20 shadow-md">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Page Not Found</h1>
          <p className="text-sm text-slate-600">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        <div className="pt-2">
          <Link
            href="/"
            className="btn-primary inline-flex items-center gap-2 text-xs !py-3 !px-6"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
