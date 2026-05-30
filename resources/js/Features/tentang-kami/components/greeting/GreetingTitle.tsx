import React from "react";
import SectionHeader from "@/Components/ui/SectionHeader";
import { greetingData } from "../../data/greeting/greeting-link";
import { useTranslation } from "react-i18next";

export default function GreetingTitle() {
    const { header } = greetingData;
    const { t } = useTranslation("common");

    return (
        <SectionHeader
            title={t("about_page.greeting.title")}
            highlight={t("about_page.greeting.highlight")}
            description={t("about_page.greeting.description")}
            showLine={header.showLine}
        />
    );
}
