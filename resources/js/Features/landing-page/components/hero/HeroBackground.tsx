import React from 'react';
import HeroBg from '@/Shared/assets/home/hero-background.webp';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <img 
        src={HeroBg} 
        alt="Jissho Hero Background" 
        draggable="false"
        className="w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-hero-gradient" />
    </div>
  );
}