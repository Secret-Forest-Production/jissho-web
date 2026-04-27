import React from 'react';
import KeunggulanTitle from './KeunggulanTitle';
import KeunggulanImage from './KeunggulanImage';
import KeunggulanValue from './KeunggulanValue';
import KeunggulanBgImg from '@/Shared/assets/home/keunggulan-background.webp';

export default function KeunggulanSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <KeunggulanTitle />

        <div className="relative mt-12 flex min-h-124 items-center lg:mt-20">
          <div className="absolute top-0 right-[-5vw] h-full w-screen overflow-hidden lg:right-[-10vw] lg:w-[85%]">
            <img
              src={KeunggulanBgImg}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-red-normal/15 mix-blend-multiply" />
          </div>

          <div className="relative z-10 w-full pt-10 lg:pt-0">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-0">
              <KeunggulanImage />
              <KeunggulanValue />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}