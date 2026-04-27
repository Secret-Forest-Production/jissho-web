import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import AboutSection from '../components/about/AboutSection';
import KeunggulanSection from '../components/keunggulan/KeunggulanSection';
import ProgramSection from '../components/program/ProgramSection';
import BannerSection from '../components/banner/BannerSection';

export default function LandingContainers() {
  return (
    <main className="relative w-full">
      <HeroSection />
      <AboutSection />
      <KeunggulanSection />
      <ProgramSection />
      <BannerSection />
    </main>
  );
}