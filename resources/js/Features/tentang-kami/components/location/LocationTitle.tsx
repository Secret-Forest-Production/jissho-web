import React from "react";
import SectionHeader from "@/Components/ui/SectionHeader";
import { locationData } from "../../data/location/location-link";

export default function LocationTitle() {
    const { header } = locationData;

    return (
        <SectionHeader
            title={header.title}
            highlight={header.highlight}
            showLine={header.showLine}
        />
    );
}
