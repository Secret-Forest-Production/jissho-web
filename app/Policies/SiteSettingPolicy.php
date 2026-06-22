<?php

namespace App\Policies;

use App\Models\SiteSetting;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class SiteSettingPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return $user->hasAnyRole(['Admin', 'admin']);
    }

    public function view(User $user, SiteSetting $siteSetting): bool
    {
        return $user->hasAnyRole(['Admin', 'admin']);
    }

    public function create(User $user): bool
    {
        return $user->hasAnyRole(['Admin', 'admin']);
    }

    public function update(User $user, SiteSetting $siteSetting): bool
    {
        return $user->hasAnyRole(['Admin', 'admin']);
    }

    public function delete(User $user, SiteSetting $siteSetting): bool
    {
        return $user->hasAnyRole(['Admin', 'admin']);
    }

    public function restore(User $user, SiteSetting $siteSetting): bool
    {
        return $user->hasAnyRole(['Admin', 'admin']);
    }

    public function forceDelete(User $user, SiteSetting $siteSetting): bool
    {
        return $user->hasAnyRole(['Admin', 'admin']);
    }
}
