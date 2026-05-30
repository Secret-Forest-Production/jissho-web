import type { BlogCategory, BlogHeroData, BlogPost } from "../types/blog.type";

import { heroImages } from "@/Shared/data/hero-images";

export const blogHeroData: BlogHeroData = {
    badgeKey: "hero.blog.badge",
    titleKey: "hero.blog.title",
    highlightKey: "hero.blog.highlight",
    titleSuffixKey: "hero.blog.titleSuffix",
    descriptionKey: "hero.blog.description",
    backgroundImage: heroImages.blog,
};

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        slug: "cara-efektif-menghafal-kanji",
        title: "5 Cara Efektif Menghafal Kanji dalam 30 Hari untuk Pemula",
        excerpt:
            "Menghafal Kanji seringkali menjadi tantangan terbesar bagi pelajar bahasa Jepang. Simak metode praktis berikut.",
        date: "2024-10-15",
        category: "Tips Belajar",
        imageUrl:
            "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
        views: "5.2K",
        author: "Admin Jissho",
        readingTime: "5 Menit Baca",
        tags: ["Kanji", "Bahasa Jepang", "JLPT"],
        content: `
            <blockquote>Menguasai Kanji membutuhkan strategi belajar yang konsisten, bukan sekadar menghafal cepat.</blockquote>
            <p>Kanji menjadi salah satu bagian penting dalam pembelajaran bahasa Jepang. Dengan metode bertahap, siswa dapat memahami bentuk, arti, dan penggunaan Kanji dalam konteks sehari-hari.</p>
            <h2>1. Mulai dari Kanji Dasar</h2>
            <p>Pelajari Kanji yang paling sering digunakan terlebih dahulu agar proses belajar lebih relevan dan mudah diterapkan.</p>
            <h2>2. Gunakan Metode Visual</h2>
            <p>Hubungkan bentuk Kanji dengan gambar atau cerita agar lebih mudah diingat.</p>
        `,
    },
    {
        id: 2,
        slug: "daftar-gaji-magang-di-jepang",
        title: "Daftar Gaji Magang di Jepang Tahun 2024",
        excerpt:
            "Berapa standar gaji magang di Jepang tahun ini? Temukan rincian lengkap beserta biaya hidup yang perlu dipersiapkan.",
        date: "2024-10-10",
        category: "Info Karir",
        imageUrl:
            "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?w=800&q=80",
        views: "4.8K",
        author: "Admin Jissho",
        readingTime: "6 Menit Baca",
        tags: ["Karier Jepang", "Magang", "Gaji"],
        content: `
            <p>Gaji magang di Jepang dapat berbeda tergantung wilayah, bidang pekerjaan, dan perusahaan penempatan.</p>
            <h2>Persiapan Finansial</h2>
            <p>Selain mengetahui gaji, calon peserta juga perlu memahami biaya hidup, transportasi, dan kebutuhan harian.</p>
        `,
    },
    {
        id: 3,
        slug: "cara-mengatur-keuangan-selama-di-jepang",
        title: "Cara Mengatur Keuangan Selama di Jepang",
        excerpt:
            "Mengelola penghasilan selama magang di Jepang sangat penting agar tetap bisa menabung dan memenuhi kebutuhan harian.",
        date: "2024-10-05",
        category: "Info Karir",
        imageUrl:
            "https://images.unsplash.com/photo-1462206092226-f46025ffe607?w=800&q=80",
        views: "3.9K",
        author: "Admin Jissho",
        readingTime: "4 Menit Baca",
        tags: ["Keuangan", "Jepang", "Tips Kerja"],
        content: `<p>Mengelola keuangan selama di Jepang membutuhkan disiplin dan perencanaan bulanan yang rapi.</p>`,
    },
    {
        id: 4,
        slug: "budaya-kerja-jepang-omotenashi-horenso",
        title: "Budaya Kerja Jepang: Omotenashi dan Ho-Ren-So",
        excerpt:
            "Memahami budaya kerja Jepang adalah kunci sukses bagi calon peserta yang ingin bekerja di Negeri Sakura.",
        date: "2024-09-28",
        category: "Budaya Jepang",
        imageUrl:
            "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
        views: "2.1K",
        author: "Admin Jissho",
        readingTime: "5 Menit Baca",
        tags: ["Budaya Jepang", "Etika Kerja"],
        content: `<p>Ho-Ren-So adalah prinsip komunikasi kerja Jepang yang menekankan laporan, komunikasi, dan konsultasi.</p>`,
    },
    {
        id: 5,
        slug: "budaya-kerja-jepang-omotenashi-horenso",
        title: "Budaya Kerja Jepang: Omotenashi dan Ho-Ren-So",
        excerpt:
            "Memahami budaya kerja Jepang adalah kunci sukses bagi calon peserta yang ingin bekerja di Negeri Sakura.",
        date: "2024-09-28",
        category: "Budaya Jepang",
        imageUrl:
            "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
        views: "2.1K",
        author: "Admin Jissho",
        readingTime: "5 Menit Baca",
        tags: ["Budaya Jepang", "Etika Kerja"],
        content: `<p>Ho-Ren-So adalah prinsip komunikasi kerja Jepang yang menekankan laporan, komunikasi, dan konsultasi.</p>`,
    },
];

export const categories: BlogCategory[] = [
    { name: "Info Karir", count: 12 },
    { name: "Tips Belajar", count: 24 },
    { name: "Budaya Jepang", count: 88 },
    { name: "Kegiatan Yayasan", count: 15 },
];

export const popularPosts = blogPosts.slice(0, 3);
