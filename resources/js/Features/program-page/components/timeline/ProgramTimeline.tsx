import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";

import type { ProgramTimelineItem } from "../../types/program.type";

interface ProgramTimelineProps {
    timelines: ProgramTimelineItem[];
}

export default function ProgramTimeline({ timelines }: ProgramTimelineProps) {
    const firstItemWithImages = timelines.find((item) => item.images?.length);
    const [openPhase, setOpenPhase] = useState<string | null>(
        firstItemWithImages?.phase ?? null,
    );
    const [activePhase, setActivePhase] = useState<string | null>(
        timelines[0]?.phase ?? null,
    );

    useEffect(() => {
        const handleScroll = () => {
            const viewportCenter = window.innerHeight / 2;
            let closestPhase: string | null = null;
            let minDistance = Infinity;

            timelines.forEach((item) => {
                const el = document.getElementById(`timeline-item-${item.phase}`);
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const elementCenter = rect.top + rect.bottom; // Wait, top + bottom is 2 * elementCenter. Let's do (rect.top + rect.bottom) / 2
                const distance = Math.abs(viewportCenter - (rect.top + rect.bottom) / 2);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestPhase = item.phase;
                }
            });

            if (closestPhase) {
                setActivePhase((prev) => prev !== closestPhase ? closestPhase : prev);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll, { passive: true });
        
        // Run check after component has mounted and styles settled
        const timeoutId = setTimeout(handleScroll, 100);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            clearTimeout(timeoutId);
        };
    }, [timelines]);

    const togglePhase = (phase: string, hasImages: boolean) => {
        if (!hasImages) return;

        setOpenPhase((currentPhase) => (currentPhase === phase ? null : phase));
    };

    return (
        <div className="mt-8 rounded-2xl bg-gray-50 p-3 sm:p-4 md:p-6">
            <div className="space-y-4 md:space-y-5">
                {timelines.map((item, index) => {
                    const hasImages = Boolean(item.images?.length);
                    const isOpen = openPhase === item.phase;
                    const isActive = activePhase === item.phase;

                    return (
                        <motion.div
                            id={`timeline-item-${item.phase}`}
                            key={item.phase}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 0.45,
                                delay: index * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative grid grid-cols-[44px_1fr] gap-3 sm:grid-cols-[48px_1fr] sm:gap-5"
                        >
                            <div className="flex flex-col items-center">
                                <div
                                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-white p-1 text-xs font-bold transition-all duration-300 sm:h-11 sm:w-11 sm:text-sm ${
                                        isActive
                                            ? "border-red-normal scale-105"
                                            : "border-blue-dark/30 scale-100"
                                    }`}
                                >
                                    <span
                                        className={`flex h-full w-full items-center justify-center rounded-full transition-all duration-300 ${
                                            isActive
                                                ? "bg-red-normal text-white"
                                                : "bg-white text-blue-dark"
                                        }`}
                                    >
                                        {item.phase}
                                    </span>
                                </div>

                                {index !== timelines.length - 1 && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        whileInView={{
                                            height: "100%",
                                            opacity: 1,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.08 + 0.15,
                                            ease: "easeOut",
                                        }}
                                        className="mt-4 min-h-20 w-[1.5px] bg-[repeating-linear-gradient(to_bottom,rgba(30,41,59,0.35)_0_6px,transparent_6px_16px)]"
                                    />
                                )}
                            </div>

                            <motion.article
                                whileHover={{ y: -3 }}
                                transition={{
                                    duration: 0.25,
                                    ease: "easeOut",
                                }}
                                className="min-w-0 rounded-xl border border-gray-200 bg-white p-4 sm:p-5"
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        togglePhase(item.phase, hasImages)
                                    }
                                    disabled={!hasImages}
                                    aria-expanded={
                                        hasImages ? isOpen : undefined
                                    }
                                    className={`flex w-full items-start justify-between gap-3 text-left ${
                                        hasImages
                                            ? "cursor-pointer"
                                            : "cursor-default"
                                    }`}
                                >
                                    <div className="flex min-w-0 flex-1 gap-3 sm:gap-4">
                                        <motion.div
                                            whileHover={{ scale: 1.06 }}
                                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-normal/10 text-red-normal sm:h-10 sm:w-10"
                                        >
                                            <Icon
                                                icon="lucide:briefcase"
                                                className="text-lg sm:text-xl"
                                            />
                                        </motion.div>

                                        <div className="min-w-0">
                                            <h4 className="text-sm font-bold leading-snug text-blue-dark sm:text-base">
                                                {item.title}
                                            </h4>

                                            <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
                                                Durasi : {item.duration}
                                            </p>
                                        </div>
                                    </div>

                                    {hasImages && (
                                        <motion.div
                                            animate={{
                                                rotate: isOpen ? 180 : 0,
                                            }}
                                            transition={{ duration: 0.25 }}
                                            className="mt-1 shrink-0 text-lg text-blue-dark sm:text-xl"
                                        >
                                            <Icon icon="heroicons:chevron-down-20-solid" />
                                        </motion.div>
                                    )}
                                </button>

                                <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
                                    {item.description}
                                </p>

                                <AnimatePresence initial={false}>
                                    {hasImages && isOpen && (
                                        <motion.div
                                            key="timeline-images"
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                                marginTop: 0,
                                            }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                                marginTop: 20,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                                marginTop: 0,
                                            }}
                                            transition={{
                                                duration: 0.35,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                                                {item.images?.map(
                                                    (image, imageIndex) => (
                                                        <motion.img
                                                            key={`${item.phase}-${imageIndex}`}
                                                            src={image}
                                                            alt={`${item.title} ${imageIndex + 1}`}
                                                            draggable={false}
                                                            initial={{
                                                                opacity: 0,
                                                                y: 12,
                                                                scale: 0.98,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                scale: 1,
                                                            }}
                                                            exit={{
                                                                opacity: 0,
                                                                y: 8,
                                                                scale: 0.98,
                                                            }}
                                                            transition={{
                                                                duration: 0.3,
                                                                delay:
                                                                    imageIndex *
                                                                    0.06,
                                                            }}
                                                            className="h-40 w-full rounded-2xl object-cover sm:h-36 md:h-40"
                                                        />
                                                    ),
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.article>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
