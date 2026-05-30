import React from "react";
import { useTranslation } from "react-i18next";
import { galeriData } from "../../data/galeri/galeri-link";

const GaleriImage = () => {
    const { t } = useTranslation("common");

    return (
        <div className="mt-12 px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden">
                <img
                    src={galeriData.image}
                    alt={t("galeri.aria_main")}
                    className="w-full h-auto object-cover"
                    draggable={false}
                />
                <div className="absolute inset-0 pointer-events-none" />
            </div>
        </div>
    );
};

export default GaleriImage;
