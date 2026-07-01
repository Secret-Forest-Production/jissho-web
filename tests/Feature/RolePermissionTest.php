<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Tests\TestCase;

class RolePermissionTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        // Ensure default roles exist
        Role::firstOrCreate(['name' => 'Admin', 'guard_name' => 'web']);
        Role::firstOrCreate(['name' => 'Candidate', 'guard_name' => 'web']);
        Role::firstOrCreate(['name' => 'Employer', 'guard_name' => 'web']);
    }

    public function test_admin_role_can_access_everything_implicitly(): void
    {
        $admin = User::factory()->create();
        $admin->assignRole('Admin');

        // Admin should be able to access the dashboard and registration resource
        $this->actingAs($admin)->get('/backoffice')->assertStatus(200);
        $this->actingAs($admin)->get('/backoffice/registrations')->assertStatus(200);
    }

    public function test_candidate_and_employer_roles_cannot_access_backoffice(): void
    {
        $candidate = User::factory()->create();
        $candidate->assignRole('Candidate');

        $employer = User::factory()->create();
        $employer->assignRole('Employer');

        $this->actingAs($candidate)->get('/backoffice')->assertStatus(403);
        $this->actingAs($employer)->get('/backoffice')->assertStatus(403);
    }

    public function test_custom_role_can_access_backoffice_panel(): void
    {
        $customRole = Role::create(['name' => 'Staff', 'guard_name' => 'web']);
        $staffUser = User::factory()->create();
        $staffUser->assignRole($customRole);

        // Custom role user should be allowed to access the panel base
        $this->actingAs($staffUser)->get('/backoffice')->assertStatus(200);
    }

    public function test_custom_role_access_is_restricted_without_permission(): void
    {
        $customRole = Role::create(['name' => 'Staff', 'guard_name' => 'web']);
        $staffUser = User::factory()->create();
        $staffUser->assignRole($customRole);

        // Without view any registration permission, should return 403
        $this->actingAs($staffUser)->get('/backoffice/registrations')->assertStatus(403);
    }

    public function test_custom_role_access_is_allowed_with_permission(): void
    {
        $customRole = Role::create(['name' => 'Staff', 'guard_name' => 'web']);
        $permission = Permission::firstOrCreate(['name' => 'ViewAny:Registration', 'guard_name' => 'web']);
        $customRole->givePermissionTo($permission);

        $staffUser = User::factory()->create();
        $staffUser->assignRole($customRole);

        // With the specific permission, should be allowed to list registrations
        $this->actingAs($staffUser)->get('/backoffice/registrations')->assertStatus(200);
    }

    public function test_admin_can_access_users_management(): void
    {
        $admin = User::factory()->create();
        $admin->assignRole('Admin');

        $this->actingAs($admin)->get('/backoffice/users')->assertStatus(200);
        $this->actingAs($admin)->get('/backoffice/users/create')->assertStatus(200);
    }

    public function test_custom_role_without_permission_cannot_access_users_management(): void
    {
        $customRole = Role::create(['name' => 'Staff', 'guard_name' => 'web']);
        $staffUser = User::factory()->create();
        $staffUser->assignRole($customRole);

        $this->actingAs($staffUser)->get('/backoffice/users')->assertStatus(403);
    }

    public function test_custom_role_with_permission_can_access_users_management(): void
    {
        $customRole = Role::create(['name' => 'Staff', 'guard_name' => 'web']);
        $permission = Permission::firstOrCreate(['name' => 'ViewAny:User', 'guard_name' => 'web']);
        $customRole->givePermissionTo($permission);

        $staffUser = User::factory()->create();
        $staffUser->assignRole($customRole);

        $this->actingAs($staffUser)->get('/backoffice/users')->assertStatus(200);
    }
}
