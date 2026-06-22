import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

import SectionHeader from "@/Components/ui/SectionHeader";
import { sektorIndustriData } from "../../data/program.data";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.45,
            ease: smoothEase,
        },
    },
};

export default function SektorIndustriSection() {
    const { t } = useTranslation("common");

    const industryKeys = [
        "manufacturing",
        "food_service",
        "nursing",
        "auto_repair",
        "construction",
        "logistics",
        "agriculture",
        "cleaning"
    ];

    return (
        <section id="sektor-industri" className="scroll-mt-28 bg-gray-50 py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                        duration: 0.5,
                        ease: smoothEase,
                    }}
                    className="mb-12 text-center"
                >
                    <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-red-normal/10 text-red-normal">
                        <Icon
                            icon={sektorIndustriData.icon}
                            className="h-9 w-9"
                        />
                    </div>

                    <SectionHeader
                        title={t("program_page.industri.title")}
                        description={t("program_page.industri.description")}
                        className="mb-0"
                    />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {sektorIndustriData.industries.map((industry, idx) => (
                        <motion.article
                            key={idx}
                            variants={cardVariants}
                            whileHover={{
                                y: -5,
                                transition: {
                                    duration: 0.2,
                                    ease: "easeOut",
                                },
                            }}
                            className="bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.08,
                                    rotate: -3,
                                }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeOut",
                                }}
                                className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-red-normal/10 text-red-normal"
                            >
                                <Icon
                                    icon={industry.icon}
                                    className="text-2xl"
                                />
                            </motion.div>

                            <h3 className="text-sm font-bold text-blue-dark">
                                {t(`program_page.industri.items.${industryKeys[idx]}.title`)}
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                {t(`program_page.industri.items.${industryKeys[idx]}.desc`)}
                            </p>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
