<?php

namespace App\Models;

use Database\Factories\SocialLinkFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialLink extends Model
{
    /** @use HasFactory<SocialLinkFactory> */
    use HasFactory;

    protected $fillable = ['name', 'url', 'icon', 'is_active'];

    protected $casts = [
        'is_active' => 'boolean',
    ];

    /**
     * Clear cached social links when saved or deleted.
     */
    protected static function booted(): void
    {
        static::saved(function () {
            cache()->forget('social_links');
        });

        static::deleted(function () {
            cache()->forget('social_links');
        });
    }
}
