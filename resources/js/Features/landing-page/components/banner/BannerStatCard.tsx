import { motion } from "framer-motion";

import { bannerStatVariants } from "./banner.animation";
import type { BannerStatItem } from "./banner.type";

interface BannerStatCardProps {
    stat: BannerStatItem;
    index: number;
}

export default function BannerStatCard({ stat, index }: BannerStatCardProps) {
    return (
        <motion.article
            custom={index}
            variants={bannerStatVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                margin: "-80px",
            }}
            className="flex flex-col items-start"
        >
            <h3 className="text-4xl font-bold leading-none tracking-tight text-white md:text-5xl">
                {stat.value}
            </h3>

            <p className="mt-2.5 max-w-37.5 text-sm font-medium leading-tight text-white/80 md:text-base">
                {stat.label}
            </p>

            <p className="mt-2 text-xs text-white/60 md:text-sm">{stat.desc}</p>
        </motion.article>
    );
}
