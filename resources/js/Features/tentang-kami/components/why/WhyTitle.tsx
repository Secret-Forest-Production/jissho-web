import React from "react";
import SectionHeader from "@/Components/ui/SectionHeader";
import { whyData } from "../../data/why/why-link";
import { useTranslation } from "react-i18next";

export default function WhyHeader() {
    const { header } = whyData;
    const { t } = useTranslation("common");

    return (
        <SectionHeader
            title={t("about_page.why.title")}
            highlight={t("about_page.why.highlight")}
            showLine={header.showLine}
        />
    );
}
