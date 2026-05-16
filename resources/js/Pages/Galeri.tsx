import React from "react";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import GalleryContainers from "@/Features/gallery/containers/gallery-containers";

export default function Galeri({ auth }: PageProps) {
    return (
        <>
            <Head title="Galeri" />

            <main className="pt-20">
                <GalleryContainers />
            </main>
        </>
    );
}
