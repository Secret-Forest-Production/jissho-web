<?php

namespace Database\Seeders;

use App\Models\SocialLink;
use Illuminate\Database\Seeder;

class SocialLinkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $socials = [
            [
                'name' => 'instagram',
                'url' => 'https://instagram.com/yayasanjissho',
                'icon' => 'mdi:instagram',
                'is_active' => true,
            ],
            [
                'name' => 'facebook',
                'url' => 'https://facebook.com/yayasanjissho',
                'icon' => 'mdi:facebook',
                'is_active' => true,
            ],
            [
                'name' => 'youtube',
                'url' => 'https://youtube.com/@yayasanjissho',
                'icon' => 'mdi:youtube',
                'is_active' => true,
            ],
        ];

        foreach ($socials as $social) {
            SocialLink::updateOrCreate(
                ['name' => $social['name']],
                $social
            );
        }
    }
}
