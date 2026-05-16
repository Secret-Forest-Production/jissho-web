import type { Variants } from "framer-motion";

export const heroFadeLeftVariants: Variants = {
    hidden: {
        opacity: 0,
        x: -32,
    },
    visible: (delay: number = 0) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            delay,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};
