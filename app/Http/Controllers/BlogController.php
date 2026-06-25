<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Support\Str;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // 1. Fetch all published database posts
        $dbPosts = Post::with('author:id,name')
            ->whereNotNull('published_at')
            ->where('published_at', '<=', now())
            ->orderBy('published_at', 'desc')
            ->get()
            ->map(fn ($post) => $this->transformPost($post));

        // 2. Load mock posts
        $mockPosts = $this->getMockPosts();

        // 3. Combine database and mock posts (skipping mock posts with conflicting slugs)
        $existingSlugs = $dbPosts->pluck('slug')->toArray();
        $filteredMocks = $mockPosts->filter(fn ($mock) => ! in_array($mock['slug'], $existingSlugs));

        $combinedPosts = $dbPosts->concat($filteredMocks)->values();

        return Inertia::render('Blog/Index', [
            'posts' => [
                'data' => $combinedPosts,
                'current_page' => 1,
                'last_page' => 1,
                'per_page' => $combinedPosts->count(),
                'total' => $combinedPosts->count(),
            ],
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        // 1. Fetch all published database posts
        $dbPosts = Post::with('author:id,name')
            ->whereNotNull('published_at')
            ->where('published_at', '<=', now())
            ->orderBy('published_at', 'desc')
            ->get()
            ->map(fn ($post) => $this->transformPost($post));

        // 2. Load mock posts
        $mockPosts = $this->getMockPosts();

        // 3. Combine them
        $existingSlugs = $dbPosts->pluck('slug')->toArray();
        $filteredMocks = $mockPosts->filter(fn ($mock) => ! in_array($mock['slug'], $existingSlugs));

        $combinedPosts = $dbPosts->concat($filteredMocks)->values();

        // 4. Find the current post by slug
        $postIndex = $combinedPosts->search(fn ($p) => $p['slug'] === $slug);

        if ($postIndex === false) {
            abort(404);
        }

        $formattedPost = $combinedPosts[$postIndex];

        // 5. Get previous and next posts (newer is index-1, older is index+1)
        $previousPost = $postIndex < $combinedPosts->count() - 1 ? $combinedPosts[$postIndex + 1] : null;
        $nextPost = $postIndex > 0 ? $combinedPosts[$postIndex - 1] : null;

        // 6. Get 3 recent posts (excluding current)
        $recentPosts = $combinedPosts->filter(fn ($p) => $p['slug'] !== $slug)
            ->take(3)
            ->values();

        return Inertia::render('Blog/Show', [
            'post' => $formattedPost,
            'recentPosts' => $recentPosts,
            'previousPost' => $previousPost ? [
                'title' => $previousPost['title'],
                'slug' => $previousPost['slug'],
            ] : null,
            'nextPost' => $nextPost ? [
                'title' => $nextPost['title'],
                'slug' => $nextPost['slug'],
            ] : null,
        ]);
    }

    /**
     * Transform a database Post model to the frontend BlogPost structure.
     */
    private function transformPost($post): array
    {
        $lowerTitle = strtolower($post->title);

        // Dynamic category based on keywords
        $category = 'Kegiatan Yayasan';
        if (str_contains($lowerTitle, 'gaji') || str_contains($lowerTitle, 'karir') || str_contains($lowerTitle, 'kerja')) {
            $category = 'Info Karir';
        } elseif (str_contains($lowerTitle, 'belajar') || str_contains($lowerTitle, 'kanji') || str_contains($lowerTitle, 'tips') || str_contains($lowerTitle, 'menghafal')) {
            $category = 'Tips Belajar';
        } elseif (str_contains($lowerTitle, 'budaya') || str_contains($lowerTitle, 'omotenashi') || str_contains($lowerTitle, 'etika')) {
            $category = 'Budaya Jepang';
        }

        // Dynamic tags based on keywords
        $tags = ['Jissho', 'Jepang'];
        if (str_contains($lowerTitle, 'kanji')) {
            $tags[] = 'Kanji';
            $tags[] = 'Bahasa Jepang';
        }
        if (str_contains($lowerTitle, 'gaji') || str_contains($lowerTitle, 'karir') || str_contains($lowerTitle, 'magang')) {
            $tags[] = 'Karier';
            $tags[] = 'Magang';
        }

        // Estimate reading time if not explicitly set
        $readingTimeVal = $post->reading_time;
        if (! $readingTimeVal) {
            $wordCount = str_word_count(strip_tags($post->content));
            $readingTimeVal = max(1, ceil($wordCount / 200));
        }

        return [
            'id' => $post->id,
            'slug' => $post->slug,
            'title' => $post->title,
            'excerpt' => Str::limit(strip_tags($post->content), 120),
            'date' => $post->published_at ? $post->published_at->toDateString() : $post->created_at->toDateString(),
            'category' => $category,
            'imageUrl' => $post->image ? asset('storage/'.$post->image) : 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80',
            'views' => (120 + $post->id * 17).' Views',
            'author' => $post->author ? $post->author->name : 'Admin Jissho',
            'readingTime' => $readingTimeVal.' Menit Baca',
            'tags' => $tags,
            'content' => $post->content,
        ];
    }

    /**
     * Get local mock blog posts.
     */
    private function getMockPosts()
    {
        return collect([
            [
                'id' => 1001,
                'slug' => 'cara-efektif-menghafal-kanji',
                'title' => '5 Cara Efektif Menghafal Kanji dalam 30 Hari untuk Pemula',
                'excerpt' => 'Menghafal Kanji seringkali menjadi tantangan terbesar bagi pelajar bahasa Jepang. Simak metode praktis berikut.',
                'date' => '2024-10-15',
                'category' => 'Tips Belajar',
                'imageUrl' => 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80',
                'views' => '5.2K Views',
                'author' => 'Admin Jissho',
                'readingTime' => '5 Menit Baca',
                'tags' => ['Kanji', 'Bahasa Jepang', 'JLPT'],
                'content' => '<blockquote>Menguasai Kanji membutuhkan strategi belajar yang konsisten, bukan sekadar menghafal cepat.</blockquote><p>Kanji menjadi salah satu bagian penting dalam pembelajaran bahasa Jepang. Dengan metode bertahap, siswa dapat memahami bentuk, arti, dan penggunaan Kanji dalam konteks sehari-hari.</p><h2>1. Mulai dari Kanji Dasar</h2><p>Pelajari Kanji yang paling sering digunakan terlebih dahulu agar proses belajar lebih relevan dan mudah diterapkan.</p><h2>2. Gunakan Metode Visual</h2><p>Hubungkan bentuk Kanji dengan gambar atau cerita agar lebih mudah diingat.</p>',
            ],
            [
                'id' => 1002,
                'slug' => 'daftar-gaji-magang-di-jepang',
                'title' => 'Daftar Gaji Magang di Jepang Tahun 2024',
                'excerpt' => 'Berapa standar gaji magang di Jepang tahun ini? Temukan rincian lengkap beserta biaya hidup yang perlu dipersiapkan.',
                'date' => '2024-10-10',
                'category' => 'Info Karir',
                'imageUrl' => 'https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?w=800&q=80',
                'views' => '4.8K Views',
                'author' => 'Admin Jissho',
                'readingTime' => '6 Menit Baca',
                'tags' => ['Karier Jepang', 'Magang', 'Gaji'],
                'content' => '<p>Gaji magang di Jepang dapat berbeda tergantung wilayah, bidang pekerjaan, dan perusahaan penempatan.</p><h2>Persiapan Finansial</h2><p>Selain mengetahui gaji, calon peserta juga perlu memahami biaya hidup, transportasi, dan kebutuhan harian.</p>',
            ],
            [
                'id' => 1003,
                'slug' => 'cara-mengatur-keuangan-selama-di-jepang',
                'title' => 'Cara Mengatur Keuangan Selama di Jepang',
                'excerpt' => 'Mengelola penghasilan selama magang di Jepang sangat penting agar tetap bisa menabung dan memenuhi kebutuhan harian.',
                'date' => '2024-10-05',
                'category' => 'Info Karir',
                'imageUrl' => 'https://images.unsplash.com/photo-1462206092226-f46025ffe607?w=800&q=80',
                'views' => '3.9K Views',
                'author' => 'Admin Jissho',
                'readingTime' => '4 Menit Baca',
                'tags' => ['Keuangan', 'Jepang', 'Tips Kerja'],
                'content' => '<p>Mengelola keuangan selama di Jepang membutuhkan disiplin dan perencanaan bulanan yang rapi.</p>',
            ],
            [
                'id' => 1004,
                'slug' => 'budaya-kerja-jepang-omotenashi-horenso',
                'title' => 'Budaya Kerja Jepang: Omotenashi dan Ho-Ren-So',
                'excerpt' => 'Memahami budaya kerja Jepang adalah kunci sukses bagi calon peserta yang ingin bekerja di Negeri Sakura.',
                'date' => '2024-09-28',
                'category' => 'Budaya Jepang',
                'imageUrl' => 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
                'views' => '2.1K Views',
                'author' => 'Admin Jissho',
                'readingTime' => '5 Menit Baca',
                'tags' => ['Budaya Jepang', 'Etika Kerja'],
                'content' => '<p>Ho-Ren-So adalah prinsip komunikasi kerja Jepang yang menekankan laporan, komunikasi, dan konsultasi.</p>',
            ],
        ]);
    }
}
