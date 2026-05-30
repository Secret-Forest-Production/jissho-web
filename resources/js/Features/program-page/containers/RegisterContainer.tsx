import ProgramHero from "../components/hero/ProgramHero";
import RegisterForm from "../components/form/RegisterForm";

import { registerHeroData } from "../data/register.data";

export default function RegisterContainer() {
    return (
        <main className="relative w-full bg-white">
            <ProgramHero
                badgeKey={registerHeroData.badgeKey}
                titleKey={registerHeroData.titleKey}
                highlightKey={registerHeroData.highlightKey}
                titleSuffixKey={registerHeroData.titleSuffixKey}
                descriptionKey={registerHeroData.descriptionKey}
                backgroundImage={registerHeroData.backgroundImage}
                headingId="register-hero-heading"
            />

            <section className="relative bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
                <RegisterForm />
            </section>
        </main>
    );
}
