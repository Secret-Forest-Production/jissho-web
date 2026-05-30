import { landingHeroData } from "../../data/hero/hero-link";

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            <img
                src={landingHeroData.backgroundImage}
                alt=""
                draggable={false}
                className="h-full w-full object-cover"
            />

            <div
                aria-hidden="true"
                className="absolute inset-0 bg-hero-gradient"
            />
        </div>
    );
}
