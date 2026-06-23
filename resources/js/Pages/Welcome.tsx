import SEO from "@/Components/shared/SEO";
import LandingContainers from "@/Features/landing-page/containers/landing-container";
import { PageProps } from "@/types";

interface WelcomeProps extends PageProps {
    testimonials: any[];
}

export default function Welcome({ auth, testimonials }: WelcomeProps) {
    return (
        <>
            <SEO
                title="Beranda"
                description="Yayasan Jissho membantu mewujudkan impian Anda untuk belajar dan bekerja di Jepang melalui pembelajaran bahasa Jepang dan persiapan budaya kerja profesional."
            />

            <main>
                <LandingContainers testimonials={testimonials} />
            </main>
        </>
    );
}