import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { VisiMisiItem } from "../../data/visi/visi-misi-link";

export default function VisiMisiCard({
    title,
    content,
    type,
    icon,
}: VisiMisiItem) {
    const isVisi = type === "visi";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-8 md:p-12 rounded-2xl flex flex-col gap-6 h-full ${
                isVisi ? "bg-red-normal text-white" : "bg-blue-dark text-white"
            }`}
        >
            <div
                className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    isVisi ? "bg-white/20" : "bg-white/10"
                }`}
            >
                <Icon icon={icon} className="text-3xl" />
            </div>

            <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
                <p className="text-sm md:text-base leading-relaxed opacity-90">
                    {content}
                </p>
            </div>
        </motion.div>
    );
}
