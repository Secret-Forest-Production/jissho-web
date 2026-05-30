import React from "react";
import SectionHeader from "@/Components/ui/SectionHeader";
import { legalityData } from "../../data/legality/legality-link";
import { useTranslation } from "react-i18next";

export default function LegalityTitle() {
    const { header } = legalityData;
    const { t } = useTranslation("common");

    return (
        <SectionHeader
            title={t("about_page.legality.title")}
            highlight={t("about_page.legality.highlight")}
            description={t("about_page.legality.description")}
            showLine={header.showLine}
        />
    );
}
