<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('galleries')->insert([
            [
                'image' => 'dummy/gallery1.jpg',
                'category' => 'language_class',
                'title' => json_encode([
                    'id' => 'Sesi Belajar Kaiwa Seru',
                    'en' => 'Fun Kaiwa Learning Session',
                    'ja' => '楽しい会話の学習セッション'
                ]),
                'is_active' => true,
                'sort_order' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => 'dummy/gallery2.jpg',
                'category' => 'japanese_culture',
                'title' => json_encode([
                    'id' => 'Sesi Shodo (Kaligrafi) Bersama',
                    'en' => 'Joint Shodo (Calligraphy) Session',
                    'ja' => '合同書道セッション'
                ]),
                'is_active' => true,
                'sort_order' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => 'dummy/gallery3.jpg',
                'category' => 'job_preparation',
                'title' => json_encode([
                    'id' => 'Simulasi Wawancara Kerja',
                    'en' => 'Job Interview Simulation',
                    'ja' => '就職面接シミュレーション'
                ]),
                'is_active' => true,
                'sort_order' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
