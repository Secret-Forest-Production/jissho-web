import SEO from "@/Components/shared/SEO";

import AboutTitle from "./AboutTitle";
import AboutVisiMisi from "./AboutVisiMisi";
import AboutValue from "./AboutValue";

import { aboutData } from "../../data/about/about-link";

export default function AboutSection() {
    return (
        <>
            <SEO title="Tentang Kami" description={aboutData.description} />

            <section
                id="tentang-kami"
                aria-labelledby="about-heading"
                className="overflow-hidden bg-white py-20 lg:py-32"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <AboutTitle />
                    <AboutVisiMisi />
                    <AboutValue />
                </div>
            </section>
        </>
    );
}
