import React from 'react';
import { Link } from '@inertiajs/react';
import { Icon } from '@iconify/react';

export default function BlogDetailNav() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {/* Previous Article */}
      <Link 
        href="#" 
        className="group border border-gray-200 p-6 flex flex-col justify-center bg-white hover:border-red-normal hover:shadow-md transition-all"
      >
        <div className="flex items-center text-red-normal font-bold text-xs uppercase tracking-wider mb-2">
          <Icon icon="mdi:arrow-left" className="mr-2 w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Artikel Sebelumnya
        </div>
        <h4 className="text-gray-900 font-bold group-hover:text-red-normal transition-colors line-clamp-2">
          Tips Lulus JLPT N3 Dalam 6 Bulan
        </h4>
      </Link>

      {/* Next Article */}
      <Link 
        href="#" 
        className="group border border-gray-200 p-6 flex flex-col justify-center text-right bg-white hover:border-red-normal hover:shadow-md transition-all"
      >
        <div className="flex items-center justify-end text-red-normal font-bold text-xs uppercase tracking-wider mb-2">
          Artikel Berikutnya
          <Icon icon="mdi:arrow-right" className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
        <h4 className="text-gray-900 font-bold group-hover:text-red-normal transition-colors line-clamp-2">
          Daftar Kota Terbaik untuk Kerja di Jepang
        </h4>
      </Link>
    </div>
  );
}
