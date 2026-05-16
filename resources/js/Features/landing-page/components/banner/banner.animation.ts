import type { Variants } from "framer-motion";

export const bannerStatVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 28,
    },
    visible: (index: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 0.2 + index * 0.12,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};