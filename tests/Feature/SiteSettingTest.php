<?php

namespace Tests\Feature;

use App\Models\SiteSetting;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Role;
use Tests\TestCase;

class SiteSettingTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        // Create roles
        Role::create(['name' => 'Admin']);
        Role::create(['name' => 'Candidate']);
        Role::create(['name' => 'Employer']);

        // Seed setting
        SiteSetting::create([
            'group' => 'hero',
            'key' => 'hero.landing.title',
            'type' => 'text',
            'value' => [
                'id' => 'Wujudkan Impian Belajar & Bekerja di Jepang',
                'en' => 'Realize Your Dreams to Study & Work in Japan',
                'ja' => '日本での留学と就業の夢を実現しましょう',
            ],
        ]);
    }

    public function test_landing_page_shares_site_settings(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);

        // Assert siteSettings are shared via Inertia
        $response->assertInertia(fn ($page) => $page
            ->has('siteSettings')
            ->where('siteSettings.hero.landing.title', 'Wujudkan Impian Belajar & Bekerja di Jepang')
        );
    }

    public function test_unauthorized_user_cannot_access_site_settings_in_filament(): void
    {
        $user = User::factory()->create();
        $user->assignRole('Candidate');

        $response = $this->actingAs($user)->get('/backoffice/site-settings');

        $response->assertStatus(403);
    }

    public function test_admin_can_access_site_settings_in_filament(): void
    {
        $admin = User::factory()->create();
        $admin->assignRole('Admin');

        $response = $this->actingAs($admin)->get('/backoffice/site-settings');

        $response->assertStatus(200);
    }
}
