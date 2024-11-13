import React from 'react';
import { ShoppingCart } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-16 bg-pink-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll opacity-0 floating">
          LE MASCARA POUR DES CILS TRÈS LOOOOONGS
        </h2>
        <p className="text-xl mb-8 animate-on-scroll opacity-0 hover-scale inline-block">
          FLORMAR "LONGER THAN EVER" : Enfin le mascara que vous attendiez !
        </p>
        <a 
          href="https://flormar.ma/product/longer-than-ever-mascara?sku=32000163-001"
          className="cta-button bg-white text-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-100 flex items-center gap-2 mx-auto inline-flex shine-effect"
        >
          <ShoppingCart className="w-5 h-5" />
          Acheter maintenant
        </a>
      </div>
    </section>
  );
}