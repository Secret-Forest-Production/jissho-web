import React from "react";
import SectionHeader from "@/Components/ui/SectionHeader";
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
