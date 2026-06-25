<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    use HasFactory;

    protected $fillable = [
        'image',
        'category',
        'title',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'title' => 'array',
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];
}
