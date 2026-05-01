import { motion } from "framer-motion";

interface SectionHeaderProps {
    title: string;
    highlight?: string;
    description?: string;
    className?: string;
    align?: "center" | "left";
}

export default function SectionHeader({
    title,
    highlight,
    description,
    className = "",
    align = "center",
}: SectionHeaderProps) {
    const isLeft = align === "left";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`max-w-4xl flex flex-col ${isLeft ? "text-left items-start" : "text-center items-center mx-auto mb-16"} ${className}`}
        >
            <div className="relative pb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-dark leading-tight">
                    {title}{" "}
                    {highlight && (
                        <span className="text-red-normal">{highlight}</span>
                    )}
                </h2>

                <div
                    className={`absolute -bottom-1 w-full flex ${isLeft ? "justify-start" : "justify-center"}`}
                >
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "64px" }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.6,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="h-1 bg-red-normal"
                    />
                </div>
            </div>

            {description && (
                <p
                    className={`leading-relaxed text-sm md:text-base text-text-gray mt-6 ${isLeft ? "max-w-xs" : "max-w-2xl mx-auto"}`}
                >
                    {description}
                </p>
            )}
        </motion.div>
    );
}
