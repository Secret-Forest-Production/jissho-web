import React from 'react';
import BlogDetailBreadcrumb from '../components/detail/BlogDetailBreadcrumb';
import BlogDetailHeader from '../components/detail/BlogDetailHeader';
import BlogDetailContent from '../components/detail/BlogDetailContent';
import BlogDetailTags from '../components/detail/BlogDetailTags';
import BlogDetailNav from '../components/detail/BlogDetailNav';

export default function BlogDetailContainer() {
  return (
    <main className="relative w-full flex flex-col min-h-screen bg-white pt-20 pb-16 md:pt-20 md:pb-24">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-white  p-6 md:p-10 lg:p-14 rounded-lg">
        
        {/* Breadcrumb */}
        <BlogDetailBreadcrumb />

        {/* Header */}
        <BlogDetailHeader />

        {/* Main Content (Rich Text + Image + CTA) */}
        <BlogDetailContent />

        {/* Tags */}
        <BlogDetailTags />

        {/* Navigation (Prev/Next) */}
        <BlogDetailNav />

      </section>
    </main>
  );
}
