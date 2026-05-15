import SEO from "@/Components/shared/SEO";

import HeroActions from "./HeroActions";
import HeroBackground from "./HeroBackground";
import HeroServices from "./HeroServices";
import HeroTitle from "./HeroTitle";

export default function HeroSection() {
    return (
        <>
            <SEO
                title="Beranda"
                description="Yayasan Jissho membantu mewujudkan impian Anda untuk belajar dan bekerja di Jepang melalui pembelajaran bahasa Jepang dan persiapan budaya kerja profesional."
            />

            <section className="relative flex w-full flex-col">
                <HeroBackground />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-28 text-center sm:px-6 md:pb-20 md:pt-48 md:text-left lg:px-8">
                    <div className="flex flex-col gap-6">
                        <HeroTitle />
                        <HeroActions />
                    </div>
                </div>

                <div className="relative z-20 mt-4 w-full md:mt-auto md:-mb-20 lg:-mb-28">
                    <div className="mx-auto w-full md:max-w-7xl md:px-8">
                        <HeroServices />
                    </div>
                </div>
            </section>

            <div aria-hidden="true" className="h-24 md:h-40" />
        </>
    );
}
