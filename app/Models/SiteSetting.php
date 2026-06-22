<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    protected $fillable = ['group', 'key', 'value', 'type'];

    protected $casts = [
        'value' => 'array',
    ];

    /**
     * Otomatis bersihkan cache ketika data diperbarui
     */
    protected static function booted(): void
    {
        static::saved(function ($setting) {
            foreach (['id', 'en', 'ja'] as $locale) {
                cache()->forget("site_settings_{$locale}");
            }
        });
    }
}
