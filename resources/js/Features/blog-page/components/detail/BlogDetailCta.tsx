import React from 'react';
import { Link } from '@inertiajs/react';

export default function BlogDetailCta() {
  return (
    <div className="bg-blue-dark rounded-xl p-8 my-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
      <div className="text-white max-w-xl text-center md:text-left">
        <h3 className="text-2xl font-bold mb-2">Tertarik Bergabung?</h3>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Dapatkan konsultasi gratis mengenai peluang karier Anda di Jepang bersama tim ahli Yayasan Jissho.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
        <Link 
          href="#" 
          className="bg-red-normal hover:bg-red-normal-hover text-white font-bold py-3 px-6 rounded text-center transition-colors shadow-sm"
        >
          Hubungi Kami
        </Link>
        <Link 
          href="#" 
          className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-dark font-bold py-3 px-6 rounded text-center transition-colors"
        >
          Lihat Program
        </Link>
      </div>
    </div>
  );
}
