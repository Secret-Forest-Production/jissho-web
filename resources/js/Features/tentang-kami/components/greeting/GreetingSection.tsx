import React from "react";
import { motion } from "framer-motion";
import GreetingTitle from "./GreetingTitle";
import { greetingData } from "../../data/greeting/greeting-link";

export default function GreetingSection() {
    const { content } = greetingData;

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <GreetingTitle />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 bg-white shadow-lg rounded-r-[2.5rem] md:rounded-r-[4rem] overflow-hidden"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                        <div className="lg:col-span-5 h-full">
                            <img
                                src={content.image}
                                alt={content.name}
                                draggable={false}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="lg:col-span-7 p-8 md:p-16 lg:pr-20">
                            <div className="space-y-6">
                                {content.quotes.map((quote, idx) => (
                                    <p
                                        key={idx}
                                        className="text-text-gray italic leading-relaxed text-sm md:text-base lg:text-lg"
                                    >
                                        {quote}
                                    </p>
                                ))}
                            </div>

                            <div className="mt-10 pt-8 border-t border-gray-100">
                                <h4 className="text-2xl font-semibold text-blue-dark">
                                    {content.name}
                                </h4>
                                <p className="text-red-normal font-medium text-sm mt-1">
                                    {content.role}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
