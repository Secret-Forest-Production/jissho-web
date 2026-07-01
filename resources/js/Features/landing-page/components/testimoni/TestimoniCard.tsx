import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { QuoteIcon, X } from "lucide-react";

import defaultTesti from "@/Shared/assets-optimized/home/testimoni/testi.webp";

interface TestimoniCardProps {
    item: any;
}

export default function TestimoniCard({ item }: TestimoniCardProps) {
    const [mounted, setMounted] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [needReadMore, setNeedReadMore] = useState(false);

    const messageRef = useRef<HTMLParagraphElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const roleRef = useRef<HTMLParagraphElement>(null);

    const { t, i18n } = useTranslation("common");
    const lang = i18n.language as "id" | "en" | "ja";

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (showImage || showMessage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [showImage, showMessage]);

    const getLocalizedText = (field: any) => {
        if (!field) return "";
        if (typeof field === "string") return field;

        return field[lang] || field.id || "";
    };

    const message = getLocalizedText(item.message);
    const role = getLocalizedText(item.role);

    const imageUrl = item.image ? `/storage/${item.image}` : defaultTesti;

    useEffect(() => {
        const checkOverflow = () => {
            const messageOverflow =
                !!messageRef.current &&
                messageRef.current.scrollHeight >
                    messageRef.current.clientHeight;

            const nameOverflow =
                !!nameRef.current &&
                nameRef.current.scrollHeight > nameRef.current.clientHeight;

            const roleOverflow =
                !!roleRef.current &&
                roleRef.current.scrollHeight > roleRef.current.clientHeight;

            setNeedReadMore(messageOverflow || nameOverflow || roleOverflow);
        };

        const timer = setTimeout(checkOverflow, 0);

        window.addEventListener("resize", checkOverflow);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", checkOverflow);
        };
    }, [message, role, item.name]);

    return (
        <>
            <article className="m-2 flex h-80 flex-col rounded-xl bg-white p-6 lg:p-8 shadow-md">
                {/* Quote */}
                <div className="flex h-6 items-center">
                    <QuoteIcon className="h-7 w-7 shrink-0 text-red-normal/20" />
                </div>

                <div className="mt-4 flex flex-1 gap-4 overflow-hidden">
                    {/* Avatar */}
                    <button
                        type="button"
                        onClick={() => setShowImage(true)}
                        className="h-14 w-14 lg:h-16 lg:w-16 shrink-0 overflow-hidden rounded-full border-4 border-red-light transition hover:border-red-normal"
                    >
                        <img
                            src={imageUrl}
                            alt={item.name}
                            draggable={false}
                            loading="lazy"
                            className="h-full w-full object-cover"
                        />
                    </button>

                    {/* Content */}
                    <div className="flex min-w-0 flex-1 flex-col">
                        {/* Message */}
                        <blockquote className="text-sm lg:text-base leading-6 text-text-gray">
                            <p ref={messageRef} className="line-clamp-3">
                                "{message}"
                            </p>

                            {needReadMore && (
                                <button
                                    type="button"
                                    onClick={() => setShowMessage(true)}
                                    className="mt-2 text-sm font-semibold text-red-normal hover:underline"
                                >
                                    Read more →
                                </button>
                            )}
                        </blockquote>

                        {/* Footer */}
                        <div className="mt-auto pt-4">
                            <h3
                                ref={nameRef}
                                className="line-clamp-2 lg:text-lg font-bold leading-7 text-blue-dark"
                            >
                                {item.name}
                            </h3>

                            <p
                                ref={roleRef}
                                className="mt-2 line-clamp-2 text-sm leading-5 text-red-normal"
                            >
                                {role}
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            {mounted &&
                createPortal(
                    <AnimatePresence>
                        {showImage && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 p-6"
                                onClick={() => setShowImage(false)}
                            >
                                <button
                                    className="absolute right-6 top-6 text-white"
                                    onClick={() => setShowImage(false)}
                                >
                                    <X size={28} />
                                </button>

                                <motion.img
                                    initial={{
                                        scale: 0.9,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                    }}
                                    exit={{
                                        scale: 0.9,
                                        opacity: 0,
                                    }}
                                    src={imageUrl}
                                    alt={item.name}
                                    onClick={(e) => e.stopPropagation()}
                                    className="max-h-[85vh] max-w-[90vw] rounded-2xl"
                                />
                            </motion.div>
                        )}

                        {showMessage && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 p-5"
                                onClick={() => setShowMessage(false)}
                            >
                                <motion.div
                                    initial={{
                                        scale: 0.95,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                    }}
                                    exit={{
                                        scale: 0.95,
                                        opacity: 0,
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-2xl"
                                >
                                    <div className="mb-5 flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-blue-dark">
                                            {item.name}
                                        </h3>

                                        <button
                                            onClick={() =>
                                                setShowMessage(false)
                                            }
                                        >
                                            <X />
                                        </button>
                                    </div>

                                    <p className="mb-4 text-red-normal">
                                        {role}
                                    </p>

                                    <p className="whitespace-pre-wrap text-justify leading-8 text-text-gray">
                                        {message}
                                    </p>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body,
                )}
        </>
    );
}
