import type { Variants } from "framer-motion";

export const visiMisiCardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 28,
    },
    visible: (index: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            delay: index * 0.12,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};