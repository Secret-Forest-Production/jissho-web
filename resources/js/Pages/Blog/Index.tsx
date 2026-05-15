import React from 'react';
import { Head } from '@inertiajs/react';
import BlogContainer from '@/Features/blog-page/containers/blog-container';

export default function Index() {
  return (
    <>
      <Head title="Berita & Wawasan Terbaru" />
      <BlogContainer />
    </>
  );
}
