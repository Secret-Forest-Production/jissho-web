import React from "react";
import { motion } from "framer-motion";
import { bannerData } from "../../data/banner/banner-link";

export default function BannerValue() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 pt-12 border-t border-white/10">
            {bannerData.stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                        duration: 0.6,
                        delay: 0.3 + index * 0.15,
                        ease: "easeOut",
                    }}
                    className="flex flex-col items-left "
                >
                    <h3 className="text-4xl md:text-5xl font-bold text-white leading-none tracking-tight">
                        {stat.value}
                    </h3>

                    <p className="text-white/80 text-sm md:text-base mt-2.5 max-w-37.5 font-medium leading-tight">
                        {stat.label}
                    </p>

                    <p className="text-white/60 text-xs md:text-sm mt-2">
                        {stat.desc}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}
