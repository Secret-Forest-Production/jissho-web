import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import AboutSection from '../components/about/AboutSection';

export default function LandingContainers() {
  return (
    <main className="relative w-full">
      <HeroSection />
      <AboutSection />
    </main>
  );
}