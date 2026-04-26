import React from 'react';
import HeroBackground from './HeroBackground';
import HeroTitle from './HeroTitle';
import HeroActions from './HeroActions';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background Component */}
      <HeroBackground />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <div className="flex flex-col gap-4">
          <HeroTitle />
          <HeroActions />
        </div>
      </div>
    </section>
  );
}