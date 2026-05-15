import React from 'react';
import BlogCard from './BlogCard';
import { blogPosts } from '../../data/blog';
import { Icon } from '@iconify/react';

export default function BlogList() {
  return (
    <div className="flex flex-col gap-8">
      {/* Grid of Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button className="w-10 h-10 flex items-center justify-center border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
          <Icon icon="mdi:chevron-left" className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center border border-red-normal bg-red-normal text-white font-medium">
          1
        </button>
        <button className="w-10 h-10 flex items-center justify-center border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors">
          3
        </button>
        <button className="w-10 h-10 flex items-center justify-center border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 transition-colors">
          <Icon icon="mdi:chevron-right" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
