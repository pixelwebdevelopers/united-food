import type { Metadata } from 'next';
import './globals.css';
import MarqueeBanner from '@/components/MarqueeBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.camelunitedfoods.com'),
  title: 'United Foods | Global Flavors, Authentic Tastes - Premium Pickles, Spices & Food Products',
  description: 'Official portfolio and product catalog of United Foods (Since 2005). Explore our traditional slow-cured pickles (achar), 100% pure ground & whole spices, Himalayan pink salt, Basmati rice, cold-pressed oils, fruit juices, and natural sweeteners.',
  keywords: [
    'United Foods',
    'United Foods Pakistan',
    'camel united foods',
    'Pickles Achar',
    'Mango Pickle',
    'Pure Spices',
    'Himalayan Pink Salt',
    'Basmati Rice',
    'Natural Juices',
    'Buttar Since 2005',
    'Halal Food Products',
    'Export Food Quality'
  ],
  authors: [{ name: 'United Foods' }, { name: 'Pixel Web Developers', url: 'https://pixelwebdevelopes.com' }],
  openGraph: {
    title: 'United Foods | Global Flavors, Authentic Tastes',
    description: 'Explore over 100+ premium products: Pickles, Pure Spices, Himalayan Salt, Basmati Rice, Tunisian Olive Oil & Beverages.',
    url: 'https://www.camelunitedfoods.com',
    siteName: 'United Foods',
    images: [
      {
        url: '/assets/01_Logos_and_Branding/United_Foods_Master_Hero_Emblem_With_Spices.jpeg',
        width: 1200,
        height: 630,
        alt: 'United Foods Master Portfolio'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/assets/01_Logos_and_Branding/United_Foods_3D_Gold_Camels_Emblem.jpeg',
    apple: '/assets/01_Logos_and_Branding/United_Foods_3D_Gold_Camels_Emblem.jpeg',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Nunito:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-[#8b1524] selection:text-[#f3cf65]">
        {/* Marquee Banner Above Header */}
        <MarqueeBanner />
        
        {/* Sticky Header with Mobile Sidebar */}
        <Navbar />
        
        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
