import HeroBg from "@/Shared/assets/home/hero-background.webp";

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            <img
                src={HeroBg}
                alt="Pemandangan Jepang dengan Gunung Fuji"
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
            />

            <div
                aria-hidden="true"
                className="absolute inset-0 bg-hero-gradient"
            />
        </div>
    );
}
