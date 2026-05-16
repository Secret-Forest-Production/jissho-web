import React from 'react';
import { Head } from '@inertiajs/react';
import BlogDetailContainer from '@/Features/blog-page/containers/blog-detail-container';

export default function Show() {
  return (
    <>
      <Head title="Mempersiapkan Karier di Jepang" />
      <BlogDetailContainer />
    </>
  );
}
