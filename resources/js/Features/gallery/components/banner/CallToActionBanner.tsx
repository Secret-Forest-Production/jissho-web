import { motion } from "framer-motion";

import Button from "@/Components/ui/Button";

import { bannerData } from "../../data/banner-link";

import { bannerVariants } from "./utils/banner.animation";
import type { BannerButton, BannerData } from "./utils/banner.type";

export default function CallToActionBanner() {
    const { title, description, buttons } = bannerData as BannerData;

    const buttonList: BannerButton[] = [buttons.cta, buttons.program];

    return (
        <section
            aria-labelledby="cta-banner-heading"
            className="w-full px-4 py-12 sm:px-6 lg:px-8"
        >
            <motion.div
                variants={bannerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    margin: "-80px",
                }}
                className="mx-auto flex max-w-7xl flex-col gap-8 rounded-2xl bg-blue-dark p-8 text-white shadow-xl md:p-12 lg:flex-row lg:items-center lg:justify-between lg:p-16"
            >
                <div className="max-w-2xl space-y-3">
                    <h2
                        id="cta-banner-heading"
                        className="text-xl font-semibold leading-tight tracking-wide md:text-2xl"
                    >
                        {title}
                    </h2>

                    <p className="text-sm font-light leading-relaxed text-gray-300 md:text-base">
                        {description}
                    </p>
                </div>

                <nav
                    aria-label="Call to action"
                    className="flex shrink-0 flex-wrap items-center gap-4"
                >
                    {buttonList.map((button, index) => {
                        const isPrimary = index === 0;

                        return (
                            <Button
                                key={button.href}
                                href={button.href}
                                variant={isPrimary ? "primary" : "ghost"}
                                size="md"
                                className={
                                    isPrimary
                                        ? "shadow-lg shadow-red-normal/20"
                                        : "border border-red-light text-white hover:bg-red-light-hover"
                                }
                            >
                                {button.text}
                            </Button>
                        );
                    })}
                </nav>
            </motion.div>
        </section>
    );
}
