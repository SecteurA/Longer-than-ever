import React from 'react';
import { Award, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-8 h-8 text-pink-600" />,
    title: "Longue Tenue",
    description: "Tenue exceptionnelle jusqu'à 24h sans bavures ni paquets"
  },
  {
    icon: <Sparkles className="w-8 h-8 text-pink-600" />,
    title: "Cils Définis",
    description: "Séparation parfaite des cils pour un regard captivant"
  }
];

export function Features() {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 animate-on-scroll opacity-0">
          <h3 className="text-2xl font-bold mb-6 text-pink-600">Description du produit</h3>
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="prose prose-lg text-gray-700 space-y-4 md:flex-1 order-2 md:order-1">
              <p>
                Flormar vous propose un mascara nourrissant qui allonge et intensifie le regard. 
                Il saisit les cils de la racine à la pointe pour un effet allongeant spectaculaire. 
                En plus d'être efficace, il nourrit les cils grâce à sa formule spéciale.
              </p>
              <p>
                Le mascara Flormar Longer Than Ever s'applique facilement grâce à sa brosse flexible, 
                même sur les cils les plus courts. Il offre un regard défini et une couleur intense 
                qui dure longtemps. Appliquez-le et profitez de cils longs et captivants en un instant !
              </p>
            </div>
            <img 
              src="https://i.postimg.cc/Mp7vMwDZ/Capture-d-e-cran-2024-11-11-a-04-05-32.png"
              alt="Flormar Longer Than Ever Mascara"
              className="w-full md:w-1/3 max-w-[300px] mx-auto object-contain rounded-lg shadow-lg hover-scale order-1 md:order-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}