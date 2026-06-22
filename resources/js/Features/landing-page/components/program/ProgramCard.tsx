import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Button from "@/Components/ui/Button";

import { programCardVariants } from "./program.animation";
import type { ProgramItem } from "./program.type";
import { Dot } from "lucide-react";

interface ProgramCardProps {
    item: ProgramItem;
    index: number;
}

export default function ProgramCard({ item, index }: ProgramCardProps) {
    const { t } = useTranslation("common");

    return (
        <motion.article
            custom={index}
            variants={programCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                margin: "-60px",
            }}
            className="flex h-full flex-col rounded-2xl border border-gray-50 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div
                aria-hidden="true"
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-red-light"
            >
                <Icon icon={item.icon} className="text-3xl text-red-normal" />
            </div>

            <div className="grow space-y-4">
                <h3 className="text-xl font-bold text-blue-dark">
                    {t(item.title)}
                </h3>

                <p className="text-base leading-relaxed text-gray-500">
                    {t(item.desc)}
                </p>

                <ul
                    aria-label={t("program_list.aria_features", { title: t(item.title) })}
                    className="space-y-3 py-4"
                >
                    {item.features.map((feature) => (
                        <li
                            key={feature}
                            className="group/item flex items-center gap-1 text-sm text-text-gray md:text-base"
                        >
                            <Dot
                                aria-hidden="true"
                                className="shrink-0 w-4 h-4 text-red-normal transition-transform group-hover/item:scale-110"
                            />

                            <span className="leading-tight">{t(feature)}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="pt-6">
                <Button
                    variant="outlinered"
                    className="w-full py-2.5"
                    aria-label={t("program_list.aria_detail", { title: t(item.title) })}
                >
                    {t("common.detail")}
                </Button>
            </div>
        </motion.article>
    );
}
