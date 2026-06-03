import AboutTitle from "./AboutTitle";
import AboutVisiMisi from "./AboutVisiMisi";
import AboutValue from "./AboutValue";

export default function AboutSection() {
    return (
        <>
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
