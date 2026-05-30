import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { whyCardVariants } from "./why.animation";
import type { WhyItem } from "./why.type";

interface WhyCardProps {
    item: WhyItem;
    index: number;
    translationKey: string;
}

export default function WhyCard({ item, index, translationKey }: WhyCardProps) {
    const { t } = useTranslation("common");

    return (
        <motion.article
            custom={index}
            variants={whyCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                margin: "-60px",
            }}
            className="flex items-center gap-6 border border-gray-50 bg-white p-6 shadow-md transition-shadow hover:shadow-lg md:p-8"
        >
            <div className="h-24 w-24 shrink-0 md:h-32 md:w-32">
                <img
                    src={item.image}
                    alt={t(`about_page.why.items.${translationKey}.title`)}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-contain"
                />
            </div>

            <div className="flex flex-col">
                <h3 className="mb-2 text-lg font-bold text-blue-dark md:text-xl">
                    {t(`about_page.why.items.${translationKey}.title`)}
                </h3>

                <p className="text-sm leading-relaxed text-text-gray">
                    {t(`about_page.why.items.${translationKey}.desc`)}
                </p>
            </div>
        </motion.article>
    );
}
