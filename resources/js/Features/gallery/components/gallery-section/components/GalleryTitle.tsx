import React from "react";
import SectionHeader from "@/Components/ui/SectionHeader";
import { galleryData } from "../../../data/gallery-link";

export default function GalleryTitle() {
    const { header } = galleryData;
    return (
        <SectionHeader
            title={header.title}
            description={header.description}
            showLine={header.showLine}
        />
    );
}
