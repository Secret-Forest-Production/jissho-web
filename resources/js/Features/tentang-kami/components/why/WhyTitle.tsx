import React from "react";
import SectionHeader from "@/Features/landing-page/shared/SectionHeader";
import { whyData } from "../../data/why/why-link";

export default function WhyHeader() {
    const { header } = whyData;

    return (
        <SectionHeader
            title={header.title}
            highlight={header.highlight}
            showLine={header.showLine}
        />
    );
}
