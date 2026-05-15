import React from 'react';
import { Icon } from '@iconify/react';
import { BlogPost } from '../../data/blog';
import { Link } from '@inertiajs/react';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white border border-gray-200 overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-red-normal text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider">
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Date */}
        <div className="flex items-center text-sm text-gray-500 mb-3 gap-2">
          <Icon icon="mdi:calendar-outline" className="text-gray-400" />
          <time dateTime={post.date}>{post.date}</time>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-snug">
          <Link href={`#`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>

        {/* Read More Link */}
        <div className="mt-auto">
          <Link 
            href={`#`} 
            className="inline-flex items-center text-red-normal font-semibold text-sm hover:text-red-normal-hover transition-colors group"
          >
            Baca Selengkapnya
            <Icon 
              icon="mdi:arrow-right" 
              className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
