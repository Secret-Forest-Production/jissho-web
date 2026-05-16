import { motion } from "framer-motion";

interface SectionHeaderProps {
    id?: string;
    title: string;
    highlight?: string;
    description?: string;
    className?: string;
    align?: "center" | "left";
    showLine?: boolean;
}

export default function SectionHeader({
    id,
    title,
    highlight,
    description,
    className = "",
    align = "center",
    showLine = true,
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
            className={`max-w-4xl flex flex-col ${
                isLeft
                    ? "items-start text-left"
                    : "mx-auto mb-16 items-center text-center"
            } ${className}`}
        >
            <div className={`relative ${showLine ? "pb-4" : ""}`}>
                <h2
                    id={id}
                    className="text-3xl font-bold leading-tight text-blue-dark md:text-4xl"
                >
                    {title}{" "}
                    {highlight && (
                        <span className="text-red-normal">{highlight}</span>
                    )}
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
                            className="h-1 bg-red-normal"
                        />
                    </div>
                )}
            </div>

            {description && (
                <p
                    className={`text-sm leading-relaxed text-text-gray md:text-base ${
                        showLine ? "mt-6" : "mt-3"
                    } ${isLeft ? "max-w-xs" : "mx-auto max-w-2xl"}`}
                >
                    {description}
                </p>
            )}
        </motion.div>
    );
}
