import { useTranslation } from "react-i18next";

import SectionHero from "@/Components/ui/SectionHero";
import { heroData } from "../../data/hero/hero-link";

export default function HeroSection() {
    const { t } = useTranslation("common");

    return (
        <SectionHero
            badge={heroData.badgeKey ? t(heroData.badgeKey) : ""}
            title={t(heroData.titleKey)}
            highlightText={
                heroData.highlightKey ? t(heroData.highlightKey) : undefined
            }
            titleSuffix={
                heroData.titleSuffixKey ? t(heroData.titleSuffixKey) : undefined
            }
            description={t(heroData.descriptionKey)}
            backgroundImage={heroData.backgroundImage}
            headingId="tentang-kami-hero-heading"
        />
    );
}
