<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sitemap:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate the sitemap.xml for the application';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Generating sitemap...');

        $sitemap = Sitemap::create()
            ->add(Url::create(url('/'))->setPriority(1.0)->setChangeFrequency(Url::CHANGE_FREQUENCY_DAILY))
            ->add(Url::create(route('tentang-kami'))->setPriority(0.8)->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY))
            ->add(Url::create(route('program'))->setPriority(0.9)->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY))
            ->add(Url::create(route('program.register'))->setPriority(0.9)->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY))
            ->add(Url::create(route('galeri'))->setPriority(0.7)->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY))
            ->add(Url::create(route('blog.index'))->setPriority(0.8)->setChangeFrequency(Url::CHANGE_FREQUENCY_DAILY));

        // Add database blog posts
        $dbPosts = \App\Models\Post::whereNotNull('published_at')
            ->where('published_at', '<=', now())
            ->get();

        foreach ($dbPosts as $post) {
            $sitemap->add(Url::create(route('blog.show', $post->slug))
                ->setPriority(0.6)
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY));
        }

        // Add mock blog posts that are displayed on the site
        $mockSlugs = [
            'cara-efektif-menghafal-kanji',
            'daftar-gaji-magang-di-jepang',
            'cara-mengatur-keuangan-selama-di-jepang',
            'budaya-kerja-jepang-omotenashi-horenso',
        ];

        $existingSlugs = $dbPosts->pluck('slug')->toArray();
        foreach ($mockSlugs as $slug) {
            if (! in_array($slug, $existingSlugs)) {
                $sitemap->add(Url::create(route('blog.show', $slug))
                    ->setPriority(0.6)
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY));
            }
        }

        $sitemap->writeToFile(public_path('sitemap.xml'));

        $this->info('Sitemap generated successfully at public/sitemap.xml');
    }
}
