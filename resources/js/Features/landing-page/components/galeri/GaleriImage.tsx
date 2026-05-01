import React from "react";
import { galeriData } from "../../data/galeri/galeri-link";

const GaleriImage = () => {
    return (
        <div className="mt-12 px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden">
                <img
                    src={galeriData.image}
                    alt="Galeri Aktivitas Yayasan Jissho"
                    className="w-full h-auto object-cover"
                    draggable={false}
                />
                <div className="absolute inset-0 pointer-events-none" />
            </div>
        </div>
    );
};

export default GaleriImage;
