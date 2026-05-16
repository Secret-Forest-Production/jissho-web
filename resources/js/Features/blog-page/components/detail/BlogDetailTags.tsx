import React from 'react';
import { Link } from '@inertiajs/react';

export default function BlogDetailTags() {
  const tags = ["Karier Jepang", "Tips Kerja", "JLPT"];

  return (
    <div className="flex items-center gap-3 py-6 border-b border-gray-200 mt-8">
      <span className="text-sm text-gray-500 font-medium">Tags:</span>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Link 
            key={index}
            href="#" 
            className="bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded transition-colors"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
