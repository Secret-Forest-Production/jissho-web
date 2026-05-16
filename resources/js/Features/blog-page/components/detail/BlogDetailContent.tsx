import React from 'react';
import BlogDetailCta from './BlogDetailCta';

export default function BlogDetailContent() {
  // Simulasi data Rich Text (HTML string dari backend)
  const richTextContent = `
    <blockquote class="pl-4 border-l-4 border-blue-dark italic text-gray-700 text-lg md:text-xl font-medium mb-8">
      "Mewujudkan impian bekerja di Jepang bukan sekadar belajar bahasa, melainkan memahami budaya kerja, disiplin, dan profesionalisme tingkat tinggi yang menjadi standar di Negeri Sakura tersebut."
    </blockquote>
    
    <p class="mb-6 text-gray-700 leading-relaxed">
      Yayasan Jissho telah menjadi jembatan bagi ribuan talenta muda Indonesia untuk meraih karier sukses di Jepang. Melalui pendekatan yang komprehensif, kami tidak hanya membekali siswa dengan kemampuan linguistik, tetapi juga dengan mentalitas kerja yang kuat dan sesuai dengan ekspektasi perusahaan di Jepang.
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Penguasaan Bahasa yang Terstruktur</h2>
    <p class="mb-6 text-gray-700 leading-relaxed">
      Langkah pertama dan paling mendasar adalah penguasaan bahasa. Program kami dirancang untuk membawa siswa dari nol hingga mencapai level JLPT (Japanese Language Proficiency Test) yang dipersyaratkan oleh industri. Kami menggunakan metode interaktif yang menggabungkan teori tata bahasa dengan praktik percakapan harian (Kaiwa).
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Pelatihan Budaya Kerja (Business Manners)</h2>
    <p class="mb-6 text-gray-700 leading-relaxed">
      Di Jepang, cara Anda memberikan kartu nama atau membungkuk (Ojigi) bisa sama pentingnya dengan apa yang Anda katakan. Yayasan Jissho memberikan simulasi lingkungan kerja nyata, termasuk etika rapat, cara berkomunikasi dengan atasan (Hou-Ren-So), dan manajemen waktu yang sangat ketat.
    </p>

    <h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Pendampingan Karier dan Penempatan</h2>
    <p class="mb-6 text-gray-700 leading-relaxed">
      Kami memahami bahwa proses mencari kerja di luar negeri bisa terasa mengintimidasi. Oleh karena itu, tim konsultan kami memberikan pendampingan personal mulai dari pembuatan Curriculum Vitae (Rirekisho) yang menarik hingga simulasi wawancara kerja langsung dengan mitra perusahaan kami di Jepang.
    </p>
  `;

  return (
    <article className="w-full">
      {/* Featured Image */}
      <div className="w-full aspect-[16/9] overflow-hidden mb-10">
        <img 
          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1600&q=80" 
          alt="Featured Article" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Rich Text Content */}
      <div 
        className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-red-normal hover:prose-a:text-red-dark prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: richTextContent }}
      />

      {/* CTA Box (Disisipkan di akhir konten) */}
      <BlogDetailCta />

    </article>
  );
}
