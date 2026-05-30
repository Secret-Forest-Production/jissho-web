import React from "react";
import SectionHeader from "@/Components/ui/SectionHeader";
import { visiMisiData } from "../../data/visi/visi-misi-link";
import { useTranslation } from "react-i18next";

export default function VisiMisiTitle() {
    const { header } = visiMisiData;
    const { t } = useTranslation("common");

    return (
        <SectionHeader
            title={t("about_page.visi_misi.title")}
            highlight={t("about_page.visi_misi.highlight")}
            showLine={header.showLine}
        />
    );
}
