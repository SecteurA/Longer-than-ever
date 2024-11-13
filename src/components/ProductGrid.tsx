import React, { useEffect, useState } from 'react';

const originalImages = [
  { src: 'https://flormar.rabatcommerce.com/LP/Artboard-1.webp', alt: 'Flormar Mascara View 1' },
  { src: 'https://flormar.rabatcommerce.com/LP/Artboard--2.webp', alt: 'Flormar Mascara View 2' },
  { src: 'https://flormar.rabatcommerce.com/LP/Artboard--3.webp', alt: 'Flormar Mascara View 3' },
  { src: 'https://flormar.rabatcommerce.com/LP/Artboard--4.webp', alt: 'Flormar Mascara View 4' },
  { src: 'https://flormar.rabatcommerce.com/LP/Artboard--5.webp', alt: 'Flormar Mascara View 5' },
  { src: 'https://flormar.rabatcommerce.com/LP/Artboard--6.webp', alt: 'Flormar Mascara View 6' },
  { src: 'https://flormar.rabatcommerce.com/LP/Artboard--7.webp', alt: 'Flormar Mascara View 7' },
  { src: 'https://flormar.rabatcommerce.com/LP/Artboard--8.webp', alt: 'Flormar Mascara View 8' },
  { src: 'https://flormar.rabatcommerce.com/LP/Artboard--9.webp', alt: 'Flormar Mascara View 9' },
  { src: 'https://flormar.rabatcommerce.com/LP/Artboard-.webp', alt: 'Flormar Mascara View 10' },
];

export function ProductGrid() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const imagesPerSlide = isMobile ? 1 : 4;
  
  // Create an array with duplicated images for smooth infinite scroll
  const images = [...originalImages, ...originalImages.slice(0, imagesPerSlide)];
  const totalSlides = Math.ceil(originalImages.length / imagesPerSlide);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      const next = prev + 1;
      if (next >= totalSlides) {
        // Schedule a reset to the beginning without animation
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(0);
        }, 500);
        return totalSlides;
      }
      return next;
    });
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      if (prev <= 0) {
        // Schedule a reset to the end without animation
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(totalSlides - 1);
        }, 500);
        return -1;
      }
      return prev - 1;
    });
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll opacity-0 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Le Mascara Parfait pour des cils Parfaits <span className="text-[#FFD700]">✨</span>
        </h2>
        
        <div 
          className="relative max-w-[1200px] mx-auto overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className={`flex ${isTransitioning ? 'transition-transform duration-500' : ''} ease-in-out`}
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides + 1 }).map((_, slideIndex) => (
              <div 
                key={slideIndex}
                className="w-full flex-shrink-0 flex gap-4"
              >
                {images
                  .slice(
                    slideIndex * imagesPerSlide,
                    (slideIndex + 1) * imagesPerSlide
                  )
                  .map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className={`${
                        isMobile ? 'w-full' : 'w-1/4'
                      } px-2`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[300px] md:h-[400px] object-contain hover:scale-105 transition-transform duration-300"
                        loading={slideIndex === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transform transition-transform hover:scale-110"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transform transition-transform hover:scale-110"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-pink-600 w-4' 
                    : 'bg-pink-300 hover:bg-pink-400'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}