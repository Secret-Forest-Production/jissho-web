import React from 'react';
import SearchWidget from './SearchWidget';
import CategoryWidget from './CategoryWidget';
import PopularPostsWidget from './PopularPostsWidget';
import CtaWidget from './CtaWidget';

export default function BlogSidebar() {
  return (
    <aside className="w-full flex flex-col gap-6">
      <SearchWidget />
      <CategoryWidget />
      <PopularPostsWidget />
      <CtaWidget />
    </aside>
  );
}
