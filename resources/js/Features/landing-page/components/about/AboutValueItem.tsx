import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { fadeUpVariants } from "./about.animation";
import type { AboutValueItem as AboutValueItemType } from "./about.type";

interface AboutValueItemProps {
    item: AboutValueItemType;
    index: number;
}

export default function AboutValueItem({ item, index }: AboutValueItemProps) {
    const { t } = useTranslation("common");

    return (
        <motion.article
            custom={index}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                margin: "-60px",
            }}
            className="flex flex-col items-center space-y-4 text-center"
        >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-light shadow-sm">
                <Icon
                    icon={item.icon}
                    aria-hidden="true"
                    className="text-3xl text-red-normal"
                />
            </div>

            <h3 className="text-lg font-bold text-blue-dark">{t(item.title)}</h3>

            <p className="max-w-xs text-sm leading-relaxed text-text-gray">
                {t(item.description)}
            </p>
        </motion.article>
    );
}
