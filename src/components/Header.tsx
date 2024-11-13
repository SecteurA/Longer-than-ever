import React from 'react';
import { ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <img 
          src="https://i.postimg.cc/QC54JWKK/Flormar-Mascara.webp" 
          alt="Flormar Logo" 
          className="h-12 w-auto hover-scale"
        />
        <a 
          href="https://flormar.ma/product/longer-than-ever-mascara?sku=32000163-001"
          className="cta-button bg-pink-600 text-white px-6 py-2 rounded-full flex items-center gap-2 shine-effect"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Acheter</span>
        </a>
      </div>
    </header>
  );
}