import { motion } from "framer-motion";

import { heroData } from "../../data/hero/hero-link";

import HeroBackground from "./HeroBackground";
import { heroFadeLeftVariants } from "./hero.animation";
import type { HeroData } from "./hero.type";

export default function HeroSection() {
    const hero: HeroData = heroData;

    return (
        <header
            aria-labelledby="tentang-kami-hero-heading"
            className="relative flex w-full items-center overflow-hidden py-24 md:py-32"
        >
            <HeroBackground />

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <motion.h1
                        custom={0}
                        variants={heroFadeLeftVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        id="tentang-kami-hero-heading"
                        className="mb-8 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
                    >
                        {hero.title}
                    </motion.h1>

                    <motion.p
                        custom={0.2}
                        variants={heroFadeLeftVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-base font-medium leading-relaxed text-gray-200 md:text-lg"
                    >
                        {hero.description}
                    </motion.p>
                </div>
            </div>
        </header>
    );
}
