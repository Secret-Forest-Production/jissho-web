<?php

namespace Tests\Feature;

use App\Models\Registration;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Role;
use Tests\TestCase;

class RegistrationResourceTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        // Create roles if they don't exist
        if (Role::where('name', 'Admin')->doesntExist()) {
            Role::create(['name' => 'Admin']);
        }
        if (Role::where('name', 'Candidate')->doesntExist()) {
            Role::create(['name' => 'Candidate']);
        }
        if (Role::where('name', 'Employer')->doesntExist()) {
            Role::create(['name' => 'Employer']);
        }
    }

    public function test_admin_cannot_access_create_registration_page(): void
    {
        $admin = User::factory()->create();
        $admin->assignRole('Admin');

        $response = $this->actingAs($admin)->get('/backoffice/registrations/create');

        $response->assertStatus(403);
    }

    public function test_admin_can_access_list_registrations_page(): void
    {
        $admin = User::factory()->create();
        $admin->assignRole('Admin');

        $response = $this->actingAs($admin)->get('/backoffice/registrations');

        $response->assertStatus(200);
    }

    public function test_admin_can_access_edit_registration_page(): void
    {
        $admin = User::factory()->create();
        $admin->assignRole('Admin');

        $registration = Registration::create([
            'full_name' => 'John Doe',
            'email' => 'john@example.com',
            'gender' => 'laki-laki',
            'phone_number' => '08123456789',
            'age' => 25,
            'origin' => 'Tokyo',
            'status' => 'pending',
        ]);

        $response = $this->actingAs($admin)->get("/backoffice/registrations/{$registration->id}/edit");

        $response->assertStatus(200);
    }
}
