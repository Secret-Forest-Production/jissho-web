import React from "react";
import { motion } from "framer-motion";
import LegalityTitle from "./LegalityTitle";
import LegalityCard from "./LegalityCard";
import { legalityData } from "../../data/legality/legality-link";

export default function LegalitySection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <LegalityTitle />

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Sisi Kiri */}
                    <div className="lg:col-span-4 space-y-12 order-2 lg:order-1">
                        {legalityData.items.slice(0, 2).map((item, idx) => (
                            <LegalityCard key={idx} {...item} />
                        ))}
                    </div>

                    {/* Foto Tengah */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 order-1 lg:order-2"
                    >
                        <div className="rounded-[20px] overflow-hidden ">
                            <img
                                src={legalityData.image}
                                alt="Yayasan Jissho Building"
                                className="w-full h-auto object-cover"
                                draggable={false}
                            />
                        </div>
                    </motion.div>

                    {/* Sisi Kanan */}
                    <div className="lg:col-span-4 space-y-12 order-3">
                        {legalityData.items.slice(2, 4).map((item, idx) => (
                            <LegalityCard key={idx} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
