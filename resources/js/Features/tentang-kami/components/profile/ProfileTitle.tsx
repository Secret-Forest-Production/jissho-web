import React from "react";
import SectionHeader from "@/Features/landing-page/shared/SectionHeader";
import { completeProfileData } from "../../data/profile/profile-link";

export default function CompleteProfileTitle() {
    const { header } = completeProfileData;

    return (
        <SectionHeader
            title={header.title}
            highlight={header.highlight}
            showLine={header.showLine}
            align="left"
            className="mb-8"
        />
    );
}
