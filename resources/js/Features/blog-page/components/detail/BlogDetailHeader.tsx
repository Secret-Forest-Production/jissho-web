import React from 'react';
import { Icon } from '@iconify/react';

export default function BlogDetailHeader() {
  return (
    <header className="mb-8">
      {/* Category Badge */}
      <div className="inline-block bg-red-normal text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
        PENDIDIKAN
      </div>
      
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Mempersiapkan Karier di Jepang: Panduan Lengkap Program Persiapan Kerja Yayasan Jissho
      </h1>
      
      {/* Meta Info */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
        <div className="flex items-center gap-1.5">
          <Icon icon="mdi:calendar-outline" className="w-4 h-4" />
          <time dateTime="2024-10-12">12 Oktober 2024</time>
        </div>
        <div className="flex items-center gap-1.5">
          <Icon icon="mdi:account-outline" className="w-4 h-4" />
          <span>Admin Jissho</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Icon icon="mdi:clock-outline" className="w-4 h-4" />
          <span>5 Menit Baca</span>
        </div>
      </div>
    </header>
  );
}
