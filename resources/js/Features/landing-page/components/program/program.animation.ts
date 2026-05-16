import type { Variants } from "framer-motion";

export const programCardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: (index: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};
