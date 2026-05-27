import { motion } from "framer-motion";

interface SectionHeroProps {
    badge: string;
    title: string;
    description: string;
    backgroundImage: string;
    headingId?: string;
    highlightText?: string;
    titleSuffix?: string;
    align?: "left" | "center";
    minHeightClassName?: string;
}

export default function SectionHero({
    badge,
    title,
    description,
    backgroundImage,
    headingId = "section-hero-heading",
    highlightText,
    titleSuffix,
    align = "left",
    minHeightClassName = "min-h-130 md:min-h-155",
}: SectionHeroProps) {
    const isCenter = align === "center";

    return (
        <header
            aria-labelledby={headingId}
            className={`relative flex w-full items-center overflow-hidden py-24 ${minHeightClassName}`}
        >
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    alt=""
                    loading="eager"
                    draggable={false}
                    className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-blue-dark/70" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    className={`flex max-w-5xl flex-col ${
                        isCenter
                            ? "mx-auto items-center text-center"
                            : "items-center text-center md:items-start md:text-left"
                    }`}
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 rounded-sm bg-red-normal px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-md shadow-red-normal/10 md:text-sm"
                    >
                        {badge}
                    </motion.div>

                    <motion.h1
                        id={headingId}
                        initial={{ opacity: 0, x: isCenter ? 0 : -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
                    >
                        <span className="text-red-normal">{title}</span>

                        {highlightText && <> {highlightText}</>}

                        {titleSuffix && (
                            <>
                                <br className="hidden md:block" />
                                {titleSuffix}
                            </>
                        )}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-5xl text-base leading-relaxed text-gray-200 md:text-lg lg:text-xl"
                    >
                        {description}
                    </motion.p>
                </div>
            </div>
        </header>
    );
}
