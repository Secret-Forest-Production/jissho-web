import React from 'react';
import BannerBackground from './BannerBackground';
import BannerValue from './BannerValue';

export default function BannerSection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      <BannerBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <div className="flex flex-col gap-0 items-start">
          <div className="w-full">
            <BannerValue />
          </div>
        </div>
      </div>
    </section>
  );
}