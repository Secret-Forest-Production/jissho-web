import React from 'react';
import { Icon } from '@iconify/react';
import { categories } from '../../data/blog';
import { Link } from '@inertiajs/react';

export default function CategoryWidget() {
  return (
    <div className="bg-white border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Icon icon="mdi:shape-outline" className="text-red-normal w-5 h-5" />
        <h3 className="font-bold text-gray-900 text-lg">Kategori</h3>
      </div>
      <ul className="space-y-3">
        {categories.map((category, index) => (
          <li key={index}>
            <Link 
              href="#" 
              className="flex justify-between items-center text-gray-600 hover:text-red-normal transition-colors group"
            >
              <span className="text-sm">{category.name}</span>
              <span className="bg-gray-100 text-gray-500 text-xs py-1 px-2 rounded-full group-hover:bg-red-50 group-hover:text-red-normal transition-colors">
                {category.count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
