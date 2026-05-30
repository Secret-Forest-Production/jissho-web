import React from "react";
import SectionHeader from "@/Components/ui/SectionHeader";
import { locationData } from "../../data/location/location-link";
import { useTranslation } from "react-i18next";

export default function LocationTitle() {
    const { header } = locationData;
    const { t } = useTranslation("common");

    return (
        <SectionHeader
            title={t("about_page.location.title")}
            highlight={t("about_page.location.highlight")}
            showLine={header.showLine}
        />
    );
}
