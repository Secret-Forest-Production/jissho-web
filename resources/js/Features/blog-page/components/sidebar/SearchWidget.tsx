import React from 'react';
import { Icon } from '@iconify/react';

export default function SearchWidget() {
  return (
    <div className="bg-white border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Icon icon="mdi:magnify" className="text-red-normal w-5 h-5" />
        <h3 className="font-bold text-gray-900 text-lg">Cari Artikel</h3>
      </div>
      <div className="relative">
        <Icon icon="mdi:magnify" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input 
          type="text" 
          placeholder="Masukkan kata kunci..." 
          className="w-full border border-gray-300 rounded-none py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-red-normal focus:border-red-normal transition-colors"
        />
      </div>
    </div>
  );
}
