import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { QuoteIcon, X } from "lucide-react";
import defaultTesti from "@/Shared/assets-optimized/home/testimoni/testi.webp";
import { AnimatePresence, motion } from "framer-motion";

interface TestimoniCardProps {
    item: any;
}

export default function TestimoniCard({ item }: TestimoniCardProps) {
    const [isImageExpanded, setIsImageExpanded] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { t, i18n } = useTranslation("common");
    const lang = i18n.language as 'id' | 'en' | 'ja';

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isImageExpanded) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isImageExpanded]);

    const getLocalizedText = (field: any) => {
        if (!field) return '';
        if (typeof field === 'string') return field;
        return field[lang] || field['id'] || '';
    };

    const imageUrl = item.image ? `/storage/${item.image}` : defaultTesti;

    const modalContent = (
        <AnimatePresence>
            {isImageExpanded && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsImageExpanded(false)}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md cursor-zoom-out"
                >
                    <button
                        type="button"
                        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 md:right-8 md:top-8 focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setIsImageExpanded(false)}
                    >
                        <X className="h-6 w-6" />
                    </button>
                    <motion.img
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        src={imageUrl}
                        alt={item.name}
                        className="max-h-[85vh] max-w-[90vw] cursor-default rounded-2xl object-contain shadow-2xl ring-1 ring-white/10"
                        onClick={(e) => e.stopPropagation()}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <>
            <article className="relative m-1 bg-white p-6 shadow-md md:m-2 md:p-8">
                <QuoteIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-red-normal opacity-20"
                />

                <figure className="flex items-center gap-6">
                    <div className="mt-2 shrink-0">
                        <button
                            type="button"
                            onClick={() => setIsImageExpanded(true)}
                            className="group h-16 w-16 overflow-hidden rounded-full border-4 border-red-light-active focus:outline-none focus:ring-2 focus:ring-red-normal focus:ring-offset-2 transition-all hover:border-red-normal cursor-zoom-in"
                        >
                            <img
                                src={imageUrl}
                                alt={t("testimoni.aria_photo", {
                                    name: item.name,
                                })}
                                loading="lazy"
                                draggable={false}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </button>
                    </div>

                    <figcaption className="flex flex-col gap-4">
                        <blockquote className="line-clamp-4 text-sm leading-relaxed text-text-gray md:text-base">
                            “{getLocalizedText(item.message)}”
                        </blockquote>

                        <div>
                            <h3 className="text-lg font-bold text-blue-dark">
                                {item.name}
                            </h3>

                            <p className="text-sm text-red-normal md:text-base">
                                {getLocalizedText(item.role)}
                            </p>
                        </div>
                    </figcaption>
                </figure>
            </article>

            {mounted && createPortal(modalContent, document.body)}
        </>
    );
}
