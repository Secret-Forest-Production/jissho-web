import SectionHero from "@/Components/ui/SectionHero";
import { heroData } from "../../data/hero/hero-link";
import type { HeroData } from "./hero.type";

export default function HeroSection() {
    const hero: HeroData = heroData;

    return (
        <SectionHero
            badge={hero.badge}
            title={hero.title}
            highlightText={hero.highlight}
            titleSuffix={hero.titleSuffix}
            description={hero.description}
            backgroundImage={hero.backgroundImage}
            headingId="tentang-kami-hero-heading"
        />
    );
}