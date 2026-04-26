import React from 'react';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import LandingContainers from '@/Features/landing-page/containers/landing-container';

// Welcome.tsx
export default function Welcome({ auth }: PageProps) {
    return (
        <main> {/* Hapus user={auth.user} di sini */}
            <Head title="Welcome" />
            <LandingContainers />
        </main>
    );
}