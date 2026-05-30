import ServiceImg1 from "@/Shared/assets/home/hero/service-1.webp";
import ServiceImg2 from "@/Shared/assets/home/hero/service-2.webp";
import ServiceImg3 from "@/Shared/assets/home/hero/service-3.webp";
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
        title: "Kelas Dasar",
        desc: "Pembelajaran bahasa Jepang dari nol untuk pemula dengan metode interaktif.",
        img: ServiceImg1,
        linkText: "Lihat Selengkapnya",
    },
    {
        title: "JLPT Preparation",
        desc: "Bimbingan intensif persiapan ujian sertifikasi bahasa Jepang (N5 - N2).",
        img: ServiceImg2,
    },
    {
        title: "Bahasa & Budaya",
        desc: "Pemahaman etika dan budaya kerja di Jepang agar cepat beradaptasi.",
        img: ServiceImg3,
    },
];
