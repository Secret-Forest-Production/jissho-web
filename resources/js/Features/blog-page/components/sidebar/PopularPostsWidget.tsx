import React from 'react';
import { Icon } from '@iconify/react';
import { popularPosts } from '../../data/blog';
import { Link } from '@inertiajs/react';

export default function PopularPostsWidget() {
  return (
    <div className="bg-white border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Icon icon="mdi:trending-up" className="text-red-normal w-5 h-5" />
        <h3 className="font-bold text-gray-900 text-lg">Postingan Populer</h3>
      </div>
      <ul className="space-y-4">
        {popularPosts.map((post) => (
          <li key={post.id}>
            <Link href="#" className="flex gap-4 group items-start">
              <div className="w-16 h-16 shrink-0 overflow-hidden rounded-sm">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-red-normal transition-colors leading-snug">
                  {post.title}
                </h4>
                <span className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">
                  {post.views} VIEWS
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
