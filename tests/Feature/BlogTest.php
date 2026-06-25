<?php

namespace Tests\Feature;

use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class BlogTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test the blog index page.
     */
    public function test_blog_index_page_renders_with_posts(): void
    {
        $author = User::factory()->create();

        // Create 2 database posts
        Post::create([
            'title' => 'Gaji Magang di Jepang Sangat Menarik',
            'slug' => 'gaji-magang-di-jepang-menarik',
            'author_id' => $author->id,
            'content' => '<p>Gaji magang di jepang berkisar antara...</p>',
            'published_at' => now(),
        ]);

        Post::create([
            'title' => 'Belajar Kanji Dengan Mudah',
            'slug' => 'belajar-kanji-dengan-mudah',
            'author_id' => $author->id,
            'content' => '<p>Tips belajar kanji dengan cepat...</p>',
            'published_at' => now()->subDay(),
        ]);

        $response = $this->get('/blog');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => $page
            ->component('Blog/Index')
            ->has('posts.data', 6) // 2 database posts + 4 mock posts
            ->where('posts.data.0.title', 'Gaji Magang di Jepang Sangat Menarik')
            ->where('posts.data.0.category', 'Info Karir')
            ->where('posts.data.1.title', 'Belajar Kanji Dengan Mudah')
            ->where('posts.data.1.category', 'Tips Belajar')
        );
    }

    /**
     * Test the blog detail page for a database post.
     */
    public function test_blog_detail_page_renders_for_database_post(): void
    {
        $author = User::factory()->create();

        $post = Post::create([
            'title' => 'Panduan Belajar Bahasa Jepang',
            'slug' => 'panduan-belajar-bahasa-jepang',
            'author_id' => $author->id,
            'content' => '<p>Berikut ini adalah panduan lengkap belajar bahasa Jepang...</p>',
            'published_at' => now(),
        ]);

        $response = $this->get('/blog/panduan-belajar-bahasa-jepang');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => $page
            ->component('Blog/Show')
            ->where('post.title', 'Panduan Belajar Bahasa Jepang')
            ->where('post.category', 'Tips Belajar')
            ->has('recentPosts')
        );
    }

    /**
     * Test the blog detail page for a mock post.
     */
    public function test_blog_detail_page_renders_for_mock_post(): void
    {
        $response = $this->get('/blog/cara-efektif-menghafal-kanji');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => $page
            ->component('Blog/Show')
            ->where('post.title', '5 Cara Efektif Menghafal Kanji dalam 30 Hari untuk Pemula')
            ->where('post.category', 'Tips Belajar')
        );
    }

    /**
     * Test that an invalid slug returns 404.
     */
    public function test_blog_detail_page_returns_404_for_invalid_slug(): void
    {
        $response = $this->get('/blog/slug-tidak-valid');

        $response->assertStatus(404);
    }
}
