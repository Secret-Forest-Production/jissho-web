import React from 'react';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import TentangContainers from '@/Features/tentang-kami/containers/tentang-containers';
import { useTranslation } from "react-i18next";

export default function TentangKami({ auth }: PageProps) {
    const { t } = useTranslation("common");

    return (
        <>
            <Head title={t("nav.about")} />
            
            <main className="pt-20"> 
                <TentangContainers />
            </main>

        </>
    );
}