import { motion, Variants } from "framer-motion";

import type { ProgramBenefitItem } from "../../types/program.type";

interface ProgramBenefitGridProps {
    benefits: ProgramBenefitItem[];
}

const containerVariants = {
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
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function ProgramBenefitGrid({
    benefits,
}: ProgramBenefitGridProps) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 grid gap-5 sm:gap-6 md:grid-cols-2"
        >
            {benefits.map((benefit) => {
                return (
                    <motion.article
                        key={benefit.title}
                        variants={cardVariants}
                        whileHover={{
                            y: -4,
                            transition: {
                                duration: 0.2,
                                ease: "easeOut",
                            },
                        }}
                        className="group rounded-xl p-5 bg-gray-100 text-blue-dark hover:bg-red-normal hover:text-white transition-colors duration-300 sm:p-6"
                    >
                        <h4 className="text-base font-bold leading-snug sm:text-lg transition-colors duration-300">
                            {benefit.title}
                        </h4>

                        <p className="mt-4 text-sm leading-relaxed text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                            {benefit.description}
                        </p>
                    </motion.article>
                );
            })}
        </motion.div>
    );
}
