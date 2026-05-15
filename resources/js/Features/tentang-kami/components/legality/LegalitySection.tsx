import { motion } from "framer-motion";

import LegalityCard from "./LegalityCard";
import LegalityTitle from "./LegalityTitle";

import { legalityData } from "../../data/legality/legality-link";
import { legalityImageVariants } from "./legality.animation";
import type { LegalityData, LegalityItem } from "./legality.type";

export default function LegalitySection() {
    const { image, items } = legalityData as LegalityData;

    const leftItems = items.slice(0, 2);
    const rightItems = items.slice(2, 4);

    return (
        <section
            id="legalitas"
            aria-labelledby="legality-heading"
            className="overflow-hidden bg-white py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <LegalityTitle />

                <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
                    <div className="order-2 space-y-12 lg:order-1 lg:col-span-4">
                        {leftItems.map((item: LegalityItem) => (
                            <LegalityCard key={item.title} item={item} />
                        ))}
                    </div>

                    <motion.figure
                        variants={legalityImageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            margin: "-80px",
                        }}
                        className="order-1 lg:order-2 lg:col-span-4"
                    >
                        <div className="overflow-hidden rounded-[20px]">
                            <img
                                src={image}
                                alt="Gedung dan lingkungan Yayasan Jissho"
                                loading="lazy"
                                draggable={false}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </motion.figure>

                    <div className="order-3 space-y-12 lg:col-span-4">
                        {rightItems.map((item: LegalityItem) => (
                            <LegalityCard key={item.title} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
