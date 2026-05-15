import React from 'react';

export default function BlogHero() {
  return (
    <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=80" 
          alt="Blog Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f172a]/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center md:items-start text-center md:text-left">
        <div className="bg-red-normal text-white px-4 py-1 text-sm font-semibold tracking-wider mb-6">
          WARTA JISSHO
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Wawasan Terbaru <span className="text-red-normal">&</span> Tips <br className="hidden md:block" />
          Sukses Karir di Jepang
        </h1>
        
        <p className="text-gray-300 max-w-2xl text-lg">
          Temukan kumpulan artikel eksklusif mengenai metode belajar bahasa Jepang, 
          persiapan dokumen kerja, hingga cerita inspiratif dari alumni Yayasan Jissho.
        </p>
      </div>
    </section>
  );
}
