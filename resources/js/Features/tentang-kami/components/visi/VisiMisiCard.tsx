import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { visiMisiCardVariants } from "./visi-misi.animation";
import type { VisiMisiItem } from "./visi-misi.type";

interface VisiMisiCardProps {
    item: VisiMisiItem;
    index: number;
}

export default function VisiMisiCard({ item, index }: VisiMisiCardProps) {
    const isVisi = item.type === "visi";

    return (
        <motion.article
            custom={index}
            variants={visiMisiCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                margin: "-60px",
            }}
            className={`flex h-full flex-col gap-6 rounded-2xl p-8 text-white md:p-12 ${
                isVisi ? "bg-red-normal" : "bg-blue-dark"
            }`}
        >
            <div
                aria-hidden="true"
                className={`flex h-14 w-14 items-center justify-center rounded-full ${
                    isVisi ? "bg-white/20" : "bg-white/10"
                }`}
            >
                <Icon icon={item.icon} className="text-3xl" />
            </div>

            <div className="space-y-4">
                <h3 className="text-2xl font-bold md:text-3xl">{item.title}</h3>

                <p className="text-sm leading-relaxed opacity-90 md:text-base">
                    {item.content}
                </p>
            </div>
        </motion.article>
    );
}
