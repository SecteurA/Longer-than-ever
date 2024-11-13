import React from 'react';

export function BottomSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll opacity-0">
            Flormar Longer Than Ever : Enfin le mascara que vous attendiez !
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto animate-on-scroll opacity-0">
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          <div className="flex justify-center animate-on-scroll opacity-0">
            <img
              src="https://i.postimg.cc/yNTCHtLr/Capture-d-e-cran-2024-11-07-a-10-52-52.png"
              alt="Flormar Longer Than Ever Mascara"
              className="w-4/5 h-auto rounded-xl"
            />
          </div>
          <div className="flex items-center animate-on-scroll opacity-0">
            <p className="text-lg text-gray-700 italic leading-relaxed">
              <span className="font-bold">Un mascara innovant</span><br />
              Le mascara Flormar "Longer Than Ever" est équipé d'une brosse flexible qui capture chaque cil, même les plus courts, pour un effet allongeant impressionnant. Sa formule enrichie en 83% d'ingrédients d'origine naturelle, incluant de l'huile d'amande et de la vitamine E, nourrit et embellit les cils.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          <div className="flex items-center animate-on-scroll opacity-0">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-bold">Un engagement pour la diversité !</span><br />
              Flormar est déterminée à utiliser des ingrédients propres dans ses produits et à adopter des emballages recyclés, croyant que notre planète et toutes ses créatures méritent le meilleur.
              <br /><br />
              Le Mascara Flormar "Longer Than Ever" allonge facilement même les cils les plus courts . Sa forme conique et sa matière en silicone facilitent son application pour des cils super longs !
            </p>
          </div>
          <div className="flex justify-center animate-on-scroll opacity-0">
            <img
              src="https://i.postimg.cc/T1Ms5cNW/Capture-d-e-cran-2024-11-07-a-10-54-52.png"
              alt="Flormar Longer Than Ever Natural Ingredients"
              className="w-4/5 h-auto rounded-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="flex justify-center animate-on-scroll opacity-0">
            <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/w7Ak-hhjw8w"
                title="Flormar Longer Than Ever Mascara Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-8 animate-on-scroll opacity-0">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-pink-600">
                Pourquoi choisir le mascara nourrissant Flormar "Longer Than Ever" ?
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Le mascara Flormar "Longer Than Ever" allonge et volumise les cils tout en leur apportant une couleur intense. Sa brosse flexible permet une application facile et sa formule nourrit et hydrate les cils. Il offre un effet longue durée, idéal pour le quotidien comme pour les occasions spéciales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}