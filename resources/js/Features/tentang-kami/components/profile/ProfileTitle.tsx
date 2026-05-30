import React from "react";
import SectionHeader from "@/Components/ui/SectionHeader";
import { completeProfileData } from "../../data/profile/profile-link";
import { useTranslation } from "react-i18next";

export default function CompleteProfileTitle() {
    const { header } = completeProfileData;
    const { t } = useTranslation("common");

    return (
        <SectionHeader
            title={t("about_page.profile.title")}
            highlight={t("about_page.profile.highlight")}
            showLine={header.showLine}
            align="left"
            className="mb-8"
        />
    );
}
