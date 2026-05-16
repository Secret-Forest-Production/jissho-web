import BannerBackground from "./BannerBackground";
import BannerValue from "./BannerValue";

export default function BannerSection() {
    return (
        <section
            id="pencapaian"
            aria-labelledby="banner-stats-heading"
            className="relative overflow-hidden py-16 md:py-20"
        >
            <BannerBackground />

            <div className="relative z-10 mx-auto max-w-7xl px-4 text-left sm:px-6 lg:px-8">
                <h2 id="banner-stats-heading" className="sr-only">
                    Pencapaian Yayasan Jissho
                </h2>

                <BannerValue />
            </div>
        </section>
    );
}
