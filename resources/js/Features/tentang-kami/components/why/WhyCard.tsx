import React from "react";
import { motion } from "framer-motion";

interface WhyCardProps {
    title: string;
    desc: string;
    image: string;
    index: number;
}

export default function WhyCard({ title, desc, image, index }: WhyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white p-6 md:p-8 shadow-md border border-gray-50 flex items-center gap-6 hover:shadow-lg transition-shadow"
        >
            <div className="w-24 h-24 md:w-32 md:h-32 shrink-0">
                <img
                    src={image}
                    alt={title}
                    draggable={false}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex flex-col">
                <h4 className="text-lg md:text-xl font-bold text-blue-dark mb-2">
                    {title}
                </h4>
                <p className="text-sm text-text-gray leading-relaxed">{desc}</p>
            </div>
        </motion.div>
    );
}
