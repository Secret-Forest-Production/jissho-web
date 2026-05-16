import React from 'react';
import BlogHero from '../components/hero/BlogHero';
import BlogList from '../components/content/BlogList';
import BlogSidebar from '../components/sidebar/BlogSidebar';

export default function BlogContainer() {
  return (
    <main className="relative w-full flex flex-col min-h-screen bg-gray-50">
      <BlogHero />
      
      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main List */}
          <div className="lg:col-span-8">
            <BlogList />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 sticky top-24">
            <BlogSidebar />
          </div>

        </div>
      </section>
    </main>
  );
}
