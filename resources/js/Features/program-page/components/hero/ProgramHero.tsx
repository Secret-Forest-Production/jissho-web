import { useTranslation } from "react-i18next";

import SectionHero from "@/Components/ui/SectionHero";
import type { ProgramHeroData } from "../../types/program.type";

interface ProgramHeroProps extends ProgramHeroData {
    headingId?: string;
}

export default function ProgramHero({
    badgeKey,
    titleKey,
    highlightKey,
    titleSuffixKey,
    descriptionKey,
    backgroundImage,
    headingId = "program-hero-heading",
}: ProgramHeroProps) {
    const { t } = useTranslation("common");

    return (
        <SectionHero
            badge={t(badgeKey)}
            title={t(titleKey)}
            highlightText={t(highlightKey)}
            titleSuffix={titleSuffixKey ? t(titleSuffixKey) : undefined}
            description={t(descriptionKey)}
            backgroundImage={backgroundImage}
            headingId={headingId}
        />
    );
}
