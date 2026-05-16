import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { fadeUpVariants } from "./keunggulan.animation";
import type { KeunggulanValueItem as KeunggulanValueItemType } from "./keunggulan.type";

interface KeunggulanValueItemProps {
    item: KeunggulanValueItemType;
    index: number;
}

export default function KeunggulanValueItem({
    item,
    index,
}: KeunggulanValueItemProps) {
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
            className="flex items-start gap-4 text-white"
        >
            <div
                aria-hidden="true"
                className="shrink-0 rounded-xl bg-white p-3"
            >
                <Icon
                    icon={item.icon}
                    className="text-2xl text-red-normal md:text-3xl"
                />
            </div>

            <div className="space-y-1">
                <h3 className="text-lg font-bold md:text-xl">{item.title}</h3>

                <p className="text-sm leading-relaxed text-white/80 md:text-base">
                    {item.description}
                </p>
            </div>
        </motion.article>
    );
}
