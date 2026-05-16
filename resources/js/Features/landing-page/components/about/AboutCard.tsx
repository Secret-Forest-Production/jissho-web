import { motion } from "framer-motion";

import { fadeUpVariants } from "./about.animation";
import type { AboutVisiMisiItem } from "./about.type";

interface AboutCardProps {
    item: AboutVisiMisiItem;
    index: number;
}

export default function AboutCard({ item, index }: AboutCardProps) {
    return (
        <motion.article
            custom={index}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                margin: "-80px",
            }}
            className="group rounded-2xl border border-transparent bg-text-gray-100 p-8 shadow-lg transition-all duration-300 hover:border-red-light"
        >
            <h3 className="relative mb-4 inline-block text-xl font-bold text-blue-dark">
                {item.title}
                <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-normal transition-all duration-300 group-hover:w-full"
                />
            </h3>

            <p className="text-sm leading-relaxed text-text-gray md:text-base">
                {item.content}
            </p>
        </motion.article>
    );
}
