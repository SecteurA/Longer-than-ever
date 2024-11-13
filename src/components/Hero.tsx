import React from 'react';

export function Hero() {
  return (
    <section className="pt-20">
      <picture className="w-full">
        <source
          media="(min-width: 768px)"
          srcSet="https://admin.flormar.ma/wp-content/uploads/2024/06/Bannier-longer-than-ever.jpg"
        />
        <source
          media="(max-width: 767px)"
          srcSet="https://admin.flormar.ma/wp-content/uploads/2024/06/Bannier-longer-than-ever-mobile.png"
        />
        <img
          src="https://admin.flormar.ma/wp-content/uploads/2024/06/Bannier-longer-than-ever.jpg"
          alt="Flormar Longer Than Ever Mascara"
          className="w-full object-cover"
        />
      </picture>
    </section>
  );
}