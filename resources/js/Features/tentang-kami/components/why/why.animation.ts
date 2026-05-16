import type { Variants } from "framer-motion";

export const whyCardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 28,
    },
    visible: (index: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};
