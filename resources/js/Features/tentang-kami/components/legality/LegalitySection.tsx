import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import LegalityCard from "./LegalityCard";
import LegalityTitle from "./LegalityTitle";

import { legalityData } from "../../data/legality/legality-link";
import { legalityImageVariants } from "./legality.animation";
import type { LegalityData, LegalityItem } from "./legality.type";

export default function LegalitySection() {
    const { image, items } = legalityData as LegalityData;

    const leftItems = items.slice(0, 2);
    const rightItems = items.slice(2, 4);

    const legalityKeys = ["kemenaker", "npwp", "notary", "international"];
    const { t } = useTranslation("common");

    return (
        <section
            id="legalitas"
            aria-labelledby="legality-heading"
            className="overflow-hidden bg-white py-16 md:py-20 lg:py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <LegalityTitle />

                <div className="mt-10 grid grid-cols-1 items-center gap-8 md:mt-14 md:grid-cols-2 md:gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
                    <motion.figure
                        variants={legalityImageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-80px",
                        }}
                        className="order-1 md:col-span-2 lg:order-2 lg:col-span-4"
                    >
                        <div className="mx-auto max-w-md overflow-hidden rounded-[20px] md:max-w-lg lg:max-w-none">
                            <img
                                src={image}
                                alt={t("about_page.legality.aria_img")}
                                loading="lazy"
                                draggable={false}
                                className="aspect-4/3 h-full w-full object-cover md:aspect-16/9 lg:aspect-auto lg:h-auto"
                            />
                        </div>
                    </motion.figure>

                    <div className="order-2 space-y-6 md:space-y-8 lg:order-1 lg:col-span-4 lg:space-y-12">
                        {leftItems.map((item: LegalityItem, idx: number) => (
                            <LegalityCard
                                key={item.title}
                                item={item}
                                translationKey={legalityKeys[idx]}
                            />
                        ))}
                    </div>

                    <div className="order-3 space-y-6 md:space-y-8 lg:col-span-4 lg:space-y-12">
                        {rightItems.map((item: LegalityItem, idx: number) => (
                            <LegalityCard
                                key={item.title}
                                item={item}
                                translationKey={legalityKeys[idx + 2]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
