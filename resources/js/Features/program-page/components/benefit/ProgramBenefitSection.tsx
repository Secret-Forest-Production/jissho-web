import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import ProgramBenefitGrid from "./ProgramBenefitGrid";
import { programMagangData } from "../../data/program.data";

export default function ProgramBenefitSection() {
    const { t } = useTranslation("common");

    const benefits = programMagangData.benefit.benefits.map((item, index) => ({
        ...item,
        title: t(`program_page.magang.benefit.b${index + 1}.title`),
        description: t(`program_page.magang.benefit.b${index + 1}.desc`),
    }));

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
                    {t("program_page.magang.benefit.eyebrow")}
                </p>

                <h3 className="max-w-3xl text-2xl font-bold leading-tight text-blue-dark">
                    {t("program_page.magang.benefit.title")}
                </h3>

                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
                    {t("program_page.magang.benefit.description")}
                </p>
            </motion.div>

            <ProgramBenefitGrid benefits={benefits} />
        </section>
    );
}
