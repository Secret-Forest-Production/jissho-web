import { motion } from "framer-motion";

import GreetingTitle from "./GreetingTitle";
import { greetingData } from "../../data/greeting/greeting-link";

import { greetingCardVariants } from "./greeting.animation";
import type { GreetingData } from "./greeting.type";

export default function GreetingSection() {
    const { content } = greetingData as GreetingData;

    return (
        <section
            id="sambutan"
            aria-labelledby="greeting-heading"
            className="overflow-hidden bg-white py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <GreetingTitle />

                <motion.figure
                    variants={greetingCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        margin: "-80px",
                    }}
                    className="mt-16 overflow-hidden rounded-r-[2.5rem] bg-white shadow-lg md:rounded-r-[4rem]"
                >
                    <div className="grid grid-cols-1 items-center lg:grid-cols-12">
                        <div className="h-full lg:col-span-5">
                            <img
                                src={content.image}
                                alt={`Foto ${content.name}`}
                                loading="lazy"
                                draggable={false}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <figcaption className="p-8 md:p-16 lg:col-span-7 lg:pr-20">
                            <blockquote className="space-y-6">
                                {content.quotes.map((quote) => (
                                    <p
                                        key={quote}
                                        className="text-sm italic leading-relaxed text-text-gray md:text-base lg:text-lg"
                                    >
                                        {quote}
                                    </p>
                                ))}
                            </blockquote>

                            <div className="mt-10 border-t border-gray-100 pt-8">
                                <h3 className="text-2xl font-semibold text-blue-dark">
                                    {content.name}
                                </h3>

                                <p className="mt-1 text-sm font-medium text-red-normal">
                                    {content.role}
                                </p>
                            </div>
                        </figcaption>
                    </div>
                </motion.figure>
            </div>
        </section>
    );
}
