import React from 'react';
import BannerBgImg from '@/Shared/assets/home/banner-background.webp';

export default function BannerBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <img 
        src={BannerBgImg} 
        alt="" 
        draggable={false}
        className="w-full h-full object-cover object-center"
      />
      
      <div className="absolute inset-0 bg-red-normal opacity-75" />
    </div>
  );
}