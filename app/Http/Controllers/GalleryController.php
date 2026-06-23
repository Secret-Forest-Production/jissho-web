<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public function index()
    {
        $galleries = Gallery::where('is_active', true)
            ->orderBy('sort_order')
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Galeri', [
            'galleries' => $galleries,
        ]);
    }
}
