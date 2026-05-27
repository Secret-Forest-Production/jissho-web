<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/tentang-kami', function () {
    return Inertia::render('TentangKami');
})->name('tentang-kami');

Route::get('/program', function () {
    return Inertia::render('Program/Index');
})->name('program');

Route::get('/daftar-sekarang', function () {
    return Inertia::render('Program/Register');
})->name('program.register');

Route::get('/blog', function () {
    return Inertia::render('Blog/Index');
})->name('blog.index');

Route::get('/blog/{slug}', function ($slug) {
    return Inertia::render('Blog/Show', [
        'slug' => $slug,
    ]);
})->name('blog.show');

Route::get('/galeri', function () {
    return Inertia::render('Galeri');
})->name('galeri');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
