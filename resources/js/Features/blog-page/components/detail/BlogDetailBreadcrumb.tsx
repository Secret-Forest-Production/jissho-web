import React from 'react';
import { Link } from '@inertiajs/react';
import { Icon } from '@iconify/react';

export default function BlogDetailBreadcrumb() {
  return (
    <nav className="flex items-center text-sm text-gray-500 mb-6 space-x-2">
      <Link href="/blog" className="hover:text-red-normal transition-colors">
        Berita
      </Link>
      <Icon icon="mdi:chevron-right" className="w-4 h-4" />
      <span className="text-red-normal font-medium">Detail Artikel</span>
    </nav>
  );
}
