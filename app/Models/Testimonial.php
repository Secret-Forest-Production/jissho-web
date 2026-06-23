<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'role',
        'message',
        'image',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'role' => 'array',
        'message' => 'array',
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];
}
