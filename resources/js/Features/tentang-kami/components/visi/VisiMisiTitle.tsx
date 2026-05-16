import React from "react";
import SectionHeader from "@/Components/ui/SectionHeader";
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
