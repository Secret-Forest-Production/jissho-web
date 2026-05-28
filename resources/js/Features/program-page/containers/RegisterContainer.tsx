import ProgramHero from "../components/hero/ProgramHero";
import RegisterForm from "../components/form/RegisterForm";

import { registerHeroData } from "../data/register.data";

export default function RegisterContainer() {
    return (
        <main className="relative w-full bg-white">
            <ProgramHero
                badge={registerHeroData.badge}
                title={registerHeroData.title}
                highlightText={registerHeroData.highlightText}
                titleSuffix={registerHeroData.titleSuffix}
                description={registerHeroData.description}
                backgroundImage={registerHeroData.backgroundImage}
            />

            <section className="relative bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8">
                <RegisterForm />
            </section>
        </main>
    );
}
