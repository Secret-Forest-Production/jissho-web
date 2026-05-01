import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import AboutSection from '../components/about/AboutSection';
import KeunggulanSection from '../components/keunggulan/KeunggulanSection';
import ProgramSection from '../components/program/ProgramSection';
import BannerSection from '../components/banner/BannerSection';
import MitraSection from '../components/mitra/MitraSection';
import TestimoniSection from '../components/testimoni/TestimoniSection';
import GaleriSection from '../components/galeri/GaleriSection';

export default function LandingContainers() {
  return (
    <main className="relative w-full">
      <HeroSection />
      <AboutSection />
      <KeunggulanSection />
      <ProgramSection />
      <BannerSection />
      <MitraSection />
      <TestimoniSection />
      <GaleriSection />
    </main>
  );
}