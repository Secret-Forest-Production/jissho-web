import ProgramHero from "../components/hero/ProgramHero";
import ProgramMagangSection from "../components/section/ProgramMagangSection";
import ProgramKerjaSection from "../components/section/ProgramKerjaSection";
import ProgramKuliahSection from "../components/section/ProgramKuliahSection";
import SektorIndustriSection from "../components/section/SektorIndustriSection";

import { programHeroData } from "../data/program.data";

export default function ProgramContainer() {
    return (
        <main className="relative w-full bg-white">
            <ProgramHero {...programHeroData} />

            <ProgramMagangSection />
            <ProgramKerjaSection />
            <ProgramKuliahSection />
            <SektorIndustriSection />
        </main>
    );
}
