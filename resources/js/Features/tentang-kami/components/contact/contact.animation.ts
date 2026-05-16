import type { Variants } from "framer-motion";

export const contactFormVariants: Variants = {
    hidden: {
        opacity: 0,
        x: 32,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};