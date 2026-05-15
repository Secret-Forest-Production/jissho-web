import React from "react";
import SectionHeader from "@/Features/landing-page/shared/SectionHeader";
import { visiMisiData } from "../../data/visi/visi-misi-link";

export default function VisiMisiTitle() {
    const { header } = visiMisiData;

    return (
        <SectionHeader
            title={header.title}
            highlight={header.highlight}
            showLine={header.showLine}
        />
    );
}
