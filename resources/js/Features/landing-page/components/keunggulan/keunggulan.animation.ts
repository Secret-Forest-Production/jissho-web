import type { Variants } from "framer-motion";

export const fadeInLeftVariants: Variants = {
    hidden: {
        opacity: 0,
        x: -32,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const fadeUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: (index: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            delay: index * 0.12,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};
