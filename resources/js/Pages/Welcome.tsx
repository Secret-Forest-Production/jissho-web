import React from 'react';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import LandingContainers from '@/Features/landing-page/containers/landing-container';

export default function Welcome({ auth }: PageProps) {
    return (
        <main>
            <Head title="Welcome" />
            <LandingContainers />
        </main>
    );
}