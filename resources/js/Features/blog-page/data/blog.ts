export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  views: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Cara Efektif Menghafal Kanji dalam 30 Hari untuk Pemula",
    excerpt: "Menghafal Kanji seringkali menjadi tantangan terbesar bagi pelajar bahasa Jepang. Tim akademik Jissho merangkum metode praktis...",
    date: "15 Okt 2024",
    category: "Tips Belajar",
    imageUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
    views: "5.2K",
  },
  {
    id: 2,
    title: "Daftar Gaji Magang di Jepang Tahun 2024",
    excerpt: "Berapa standar gaji magang di Jepang tahun ini? Temukan rincian lengkap beserta biaya hidup yang perlu dipersiapkan...",
    date: "10 Okt 2024",
    category: "Info Karir",
    imageUrl: "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?w=800&q=80",
    views: "4.8K",
  },
  {
    id: 3,
    title: "Cara Mengatur Keuangan Selama di Jepang",
    excerpt: "Mengelola penghasilan selama magang di Jepang sangat penting. Berikut adalah panduan mengatur anggaran agar tetap bisa menabung...",
    date: "05 Okt 2024",
    category: "Info Karir",
    imageUrl: "https://images.unsplash.com/photo-1462206092226-f46025ffe607?w=800&q=80",
    views: "3.9K",
  },
  {
    id: 4,
    title: "Budaya Kerja Jepang: Omotenashi dan Ho-Ren-So",
    excerpt: "Memahami budaya kerja Jepang adalah kunci sukses. Pelajari konsep dasar yang wajib diketahui oleh calon peserta magang...",
    date: "28 Sep 2024",
    category: "Budaya Jepang",
    imageUrl: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    views: "2.1K",
  },
];

export const popularPosts = blogPosts.slice(0, 3);

export const categories = [
  { name: "Info Karir", count: 12 },
  { name: "Tips Belajar", count: 24 },
  { name: "Budaya Jepang", count: 88 },
  { name: "Kegiatan Yayasan", count: 15 },
];
