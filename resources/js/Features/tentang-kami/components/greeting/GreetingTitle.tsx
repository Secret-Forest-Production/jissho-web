import React from "react";
import SectionHeader from "@/Features/landing-page/shared/SectionHeader";
import { greetingData } from "../../data/greeting/greeting-link";

export default function GreetingTitle() {
    const { header } = greetingData;

    return (
        <SectionHeader
            title={header.title}
            highlight={header.highlight}
            description={header.description}
            showLine={header.showLine}
        />
    );
}
