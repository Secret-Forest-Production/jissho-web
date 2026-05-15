import React from "react";
import { motion } from "framer-motion";
import { completeProfileData } from "../../data/profile/profile-link";
import CompleteProfileTitle from "./ProfileTitle";

export default function CompleteProfileSection() {
    const { content } = completeProfileData;

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <CompleteProfileTitle />

                        <h3 className="text-xl md:text-2xl font-semibold text-blue-dark leading-snug mb-6">
                            {content.quote}
                        </h3>

                        <div className="space-y-6 text-justify lg:text-left">
                            {content.paragraphs.map((text, idx) => (
                                <p
                                    key={idx}
                                    className="text-text-gray leading-relaxed text-sm md:text-base"
                                >
                                    {text}
                                </p>
                            ))}
                        </div>
                    </motion.div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-normal/5 rounded-full -z-0 blur-2xl" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={content.image}
                            className="w-full h-auto aspect-4/3 object-cover"
                            alt="Tentang Yayasan Jissho"
                            draggable={false}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
