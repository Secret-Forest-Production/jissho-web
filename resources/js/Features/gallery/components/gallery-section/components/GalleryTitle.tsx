import React from "react";
import SectionHeader from "@/Components/ui/SectionHeader";
import { useTranslation } from "react-i18next";

export default function GalleryTitle() {
    const { t } = useTranslation();
    return (
        <SectionHeader
            title={t("gallery.title")}
            description={t("gallery.description")}
            showLine={false}
        />
    );
}
