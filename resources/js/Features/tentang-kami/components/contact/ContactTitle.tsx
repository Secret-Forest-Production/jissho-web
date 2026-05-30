import React from "react";
import SectionHeader from "@/Components/ui/SectionHeader";
import { contactData } from "../../data/contact/contact-link";
import { useTranslation } from "react-i18next";

export default function ContactTitle() {
    const { header } = contactData;
    const { t } = useTranslation("common");

    return (
        <SectionHeader
            title={t("about_page.contact.title")}
            highlight={t("about_page.contact.highlight")}
            showLine={header.showLine}
            align="left"
        />
    );
}
