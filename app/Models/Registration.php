<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'full_name',
        'email',
        'gender',
        'phone_number',
        'age',
        'origin',
        'jft_certificate_path',
        'senmonkyu_certificate_path',
        'skill_test_certificate_path',
        'japan_experience',
        'status',
    ];
}
