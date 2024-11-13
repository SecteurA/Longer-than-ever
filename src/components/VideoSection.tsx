import React from 'react';
import { ShoppingCart } from 'lucide-react';

export function VideoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300 floating">
              LE MASCARA POUR DES CILS TRÈS LOOOOONGS
            </h2>
            <span className="text-2xl md:text-3xl font-bold text-pink-600 inline-block animate-pulse">
              FLORMAR "LONGER THAN EVER"
            </span>
          </div>
          
          <div className="animate-on-scroll opacity-0">
            <div className="mb-8 text-center">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto font-medium animate-on-scroll opacity-0">
                Le nouveau mascara Longer Than Ever de la nouvelle campagne 
                <span className="text-pink-600 font-semibold hover-scale inline-block"> ZEYNEP BASTIK X FLORMAR  </span> 
                 est spécialement conçu pour des cils looooongs.
              </p>
            </div>
            
            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl mb-12 hover-lift">
              <iframe
                src="https://www.youtube.com/embed/CejJxtmjERU"
                title="Flormar Longer Than Ever Mascara"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>

            <div className="text-center animate-on-scroll opacity-0">
              <a 
                href="https://flormar.ma/product/longer-than-ever-mascara?sku=32000163-001"
                className="cta-button inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shine-effect"
              >
                <ShoppingCart className="w-5 h-5" />
                Découvrez Longer Than Ever
              </a>
              <p className="mt-4 text-gray-600 italic hover-scale inline-block">
                Transformez votre regard dès aujourd'hui !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}