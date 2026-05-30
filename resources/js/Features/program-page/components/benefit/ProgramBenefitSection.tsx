import { motion } from "framer-motion";

import ProgramBenefitGrid from "./ProgramBenefitGrid";
import type { ProgramBenefitSectionData } from "../../types/program.type";

interface ProgramBenefitSectionProps {
    data: ProgramBenefitSectionData;
}

export default function ProgramBenefitSection({
    data,
}: ProgramBenefitSectionProps) {
    return (
        <section id="benefit-program" className="mt-16 scroll-mt-28">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <p className="mb-2 text-lg font-medium text-red-normal">
                    {data.eyebrow}
                </p>

                <h3 className="max-w-3xl text-2xl font-bold leading-tight text-blue-dark">
                    {data.title}
                </h3>

                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
                    {data.description}
                </p>
            </motion.div>

            <ProgramBenefitGrid benefits={data.benefits} />
        </section>
    );
}
