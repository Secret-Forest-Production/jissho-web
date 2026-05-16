import type { Variants } from "framer-motion";

export const bannerVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.96,
    },

    visible: {
        opacity: 1,
        scale: 1,

        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};
