import React from "react";
import SectionHeader from "@/Features/landing-page/shared/SectionHeader";
import { legalityData } from "../../data/legality/legality-link";

export default function LegalityTitle() {
    const { header } = legalityData;

    return (
        <SectionHeader
            title={header.title}
            highlight={header.highlight}
            description={header.description}
            showLine={header.showLine}
        />
    );
}
