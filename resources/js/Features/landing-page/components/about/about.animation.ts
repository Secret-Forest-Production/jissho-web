import type { Variants } from "framer-motion";

export const fadeUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 32,
    },
    visible: (index: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};
