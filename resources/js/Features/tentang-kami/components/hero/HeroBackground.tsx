import { heroData } from "../../data/hero/hero-link";

export default function HeroBackground() {
    return (
        <div aria-hidden="true" className="absolute inset-0 -z-10">
            <img
                src={heroData.backgroundImage}
                alt="Suasana pembelajaran dan budaya Jepang Yayasan Jissho"
                loading="eager"
                fetchPriority="high"
                draggable={false}
                className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-hero-gradient" />
        </div>
    );
}
