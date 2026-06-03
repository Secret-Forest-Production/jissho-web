import ServiceImg1 from "@/Shared/assets-optimized/home/hero/service-1.webp";
import ServiceImg2 from "@/Shared/assets-optimized/home/hero/service-2.webp";
import ServiceImg3 from "@/Shared/assets-optimized/home/hero/service-3.webp";
import { heroImages } from "@/Shared/data/hero-images";
import type { TranslatedHeroData } from "@/Shared/types/hero.type";

export interface HeroService {
    title: string;
    desc: string;
    img: string;
    linkText?: string;
}

export const landingHeroData: TranslatedHeroData = {
    titleKey: "hero.landing.title",
    descriptionKey: "hero.landing.description",
    backgroundImage: heroImages.landing,
};

export const heroServicesData: HeroService[] = [
    {
        title: "hero.services.basicClass.title",
        desc: "hero.services.basicClass.description",
        img: ServiceImg1,
        linkText: "hero.services.more",
    },
    {
        title: "hero.services.jlpt.title",
        desc: "hero.services.jlpt.description",
        img: ServiceImg2,
    },
    {
        title: "hero.services.culture.title",
        desc: "hero.services.culture.description",
        img: ServiceImg3,
    },
];
