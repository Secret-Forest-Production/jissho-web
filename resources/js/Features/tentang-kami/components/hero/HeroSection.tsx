import React from "react";
import { motion } from "framer-motion";
import { heroData } from "../../data/hero/hero-link";
import HeroBackground from "./HeroBackground";

export default function HeroSection() {
    return (
        <section className="relative w-full py-24 md:py-32 overflow-hidden flex items-center">
            <HeroBackground />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8"
                    >
                        {heroData.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-base md:text-lg text-gray-200 leading-relaxed font-medium"
                    >
                        {heroData.description}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
