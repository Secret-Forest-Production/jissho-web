<?php

namespace App\Http\Middleware;

use App\Models\SiteSetting;
use App\Models\SocialLink;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Schema;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $locale = app()->getLocale();

        $siteSettings = cache()->remember("site_settings_{$locale}", 3600, function () use ($locale) {
            if (! Schema::hasTable('site_settings')) {
                return [];
            }
            $settings = SiteSetting::all()->mapWithKeys(function ($setting) use ($locale) {
                return [$setting->key => $setting->value[$locale] ?? $setting->value['id'] ?? ''];
            })->toArray();

            return Arr::undot($settings);
        });

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'locale' => $locale,
            'siteSettings' => $siteSettings,
            'socialLinks' => cache()->remember('social_links', 3600, function () {
                if (! Schema::hasTable('social_links')) {
                    return [];
                }

                return SocialLink::where('is_active', true)
                    ->get(['name', 'url', 'icon'])
                    ->keyBy('name')
                    ->toArray();
            }),
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error'),
            ],
        ];
    }
}
