<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Testimonial::create([
            'name' => 'Budi Santoso',
            'role' => [
                'id' => 'Peserta Program Magang',
                'en' => 'Internship Program Participant',
                'ja' => 'インターンシッププログラム参加者',
            ],
            'message' => [
                'id' => 'Pelatihan di Yayasan Jissho sangat luar biasa. Saya dibekali dengan kemampuan bahasa dan budaya kerja yang kuat, sehingga saya cepat beradaptasi di Jepang.',
                'en' => 'The training at Jissho Foundation is extraordinary. I was equipped with strong language and work culture skills, enabling me to adapt quickly in Japan.',
                'ja' => '実習財団での研修は素晴らしいものでした。語学力と職場文化に関するスキルをしっかりと身につけたため、日本で素早く適応できました。',
            ],
            'image' => null,
            'is_active' => true,
            'sort_order' => 1,
        ]);
    }
}
