import React from 'react';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import TentangContainers from '@/Features/tentang-kami/containers/tentang-containers';

export default function TentangKami({ auth }: PageProps) {
    return (
        <>
            <Head title="Tentang Kami" />
            
            <main className="pt-20"> 
                <TentangContainers />
            </main>

        </>
    );
}