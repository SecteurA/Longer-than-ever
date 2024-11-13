import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { Features } from './components/Features';
import { BottomSection } from './components/BottomSection';
import { ProductGrid } from './components/ProductGrid';
import { CTASection } from './components/CTASection';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <VideoSection />
      <Features />
      <BottomSection />
      <ProductGrid />
      <CTASection />
    </div>
  );
}

export default App;