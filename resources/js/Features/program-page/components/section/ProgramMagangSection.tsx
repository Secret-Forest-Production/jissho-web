import SectionHeader from "@/Components/ui/SectionHeader";

import { programMagangData } from "../../data/program.data";
import ProgramSidebarNav from "./ProgramSidebarNav";
import ProgramRequirementDetail from "../requirement/ProgramRequirementDetail";
import ProgramDurationSection from "../duration/ProgramDurationSection";
import ProgramBenefitSection from "../benefit/ProgramBenefitSection";

const sidebarItems = [
    {
        id: "detail-program",
        label: "Detail Program",
    },
    {
        id: "durasi-program",
        label: "Durasi Program",
    },
    {
        id: "benefit-program",
        label: "Benefit",
    },
];

export default function ProgramMagangSection() {
    return (
        <section
            id="program-magang"
            className="scroll-mt-28 bg-white py-16 md:py-20"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center md:mb-14">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 md:h-16 md:w-16">
                        <img
                            src={programMagangData.icon}
                            alt=""
                            draggable={false}
                            className="h-9 w-9 object-contain md:h-10 md:w-10"
                        />
                    </div>

                    <SectionHeader
                        title={programMagangData.title}
                        highlight={programMagangData.highlight}
                        suffix={programMagangData.suffix}
                        description={programMagangData.description}
                        className="mb-0"
                    />
                </div>

                <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                    <ProgramSidebarNav
                        title="Program Internship dan Jissho"
                        items={sidebarItems}
                    />

                    <div className="min-w-0 lg:col-span-9">
                        <ProgramRequirementDetail
                            data={programMagangData.detailRequirement}
                        />

                        <ProgramDurationSection
                            data={programMagangData.duration}
                        />

                        <ProgramBenefitSection
                            data={programMagangData.benefit}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
