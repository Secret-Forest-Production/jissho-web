import React from "react";
import GallerySection from "../components/gallery-section/components/GallerySection";
import CallToActionBanner from "../components/banner/CallToActionBanner";

export default function GalleryContainers() {
    return (
        <main className="relative w-full">
            <GallerySection />
            <CallToActionBanner />
        </main>
    );
}
