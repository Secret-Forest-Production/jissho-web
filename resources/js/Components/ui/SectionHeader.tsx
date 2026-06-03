import { motion } from "framer-motion";

interface SectionHeaderProps {
    id?: string;
    title: string;
    highlight?: string;
    suffix?: string;
    description?: string;
    className?: string;
    align?: "center" | "left";
    showLine?: boolean;
    descriptionClassName?: string;
}

export default function SectionHeader({
    id,
    title,
    highlight,
    suffix,
    description,
    className = "",
    align = "center",
    showLine = true,
    descriptionClassName = "",
}: SectionHeaderProps) {
    const isLeft = align === "left";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={`flex max-w-4xl flex-col ${
                isLeft
                    ? "items-start text-left"
                    : "mx-auto items-center text-center"
            } mb-10 md:mb-12 lg:mb-16 ${className}`}
        >
            <div className={`relative ${showLine ? "pb-4 md:pb-5" : ""}`}>
                <h2
                    id={id}
                    className="text-2xl font-bold leading-tight text-blue-dark sm:text-3xl lg:text-4xl"
                >
                    {title}

                    {highlight && (
                        <>
                            {" "}
                            <span className="text-red-normal">{highlight}</span>
                        </>
                    )}

                    {suffix && ` ${suffix} `}
                </h2>

                {showLine && (
                    <div
                        className={`absolute -bottom-1 flex w-full ${
                            isLeft ? "justify-start" : "justify-center"
                        }`}
                    >
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "64px" }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.6,
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-1 rounded-full bg-red-normal"
                        />
                    </div>
                )}
            </div>

            {description && (
                <p
                    className={`text-sm leading-relaxed text-gray-600 md:text-base ${
                        showLine ? "mt-6 md:mt-7" : "mt-3 md:mt-4"
                    } ${
                        isLeft ? "max-w-xl" : "mx-auto max-w-3xl"
                    } ${descriptionClassName}`}
                >
                    {description}
                </p>
            )}
        </motion.div>
    );
}
