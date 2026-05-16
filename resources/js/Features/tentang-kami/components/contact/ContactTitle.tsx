import React from "react";
import SectionHeader from "@/Components/ui/SectionHeader";
import { contactData } from "../../data/contact/contact-link";

export default function ContactTitle() {
    const { header } = contactData;

    return (
        <SectionHeader
            title={header.title}
            highlight={header.highlight}
            showLine={header.showLine}
            align="left"
        />
    );
}
