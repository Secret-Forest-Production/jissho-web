import { motion } from "framer-motion";
import { blogHeroData } from "../../data/blog";

export default function BlogHero() {
    return (
        <header
            aria-labelledby="blog-hero-heading"
            className="relative flex min-h-130 w-full items-center overflow-hidden py-24 md:min-h-155 md:py-32 lg:py-40"
        >
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=80"
                    alt=""
                    loading="eager"
                    fetchPriority="high"
                    draggable={false}
                    className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-blue-dark/70" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex max-w-4xl flex-col items-center text-center md:items-start md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 rounded-sm bg-red-normal px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-md shadow-red-normal/10 md:text-sm"
                    >
                        {blogHeroData.badge}
                    </motion.div>

                    <motion.h1
                        id="blog-hero-heading"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
                    >
                        <span className="text-red-normal">
                            {blogHeroData.title}
                        </span>{" "}
                        {blogHeroData.highlight}
                        <br className="hidden md:block" />
                        {blogHeroData.titleSuffix}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg lg:text-xl"
                    >
                        {blogHeroData.description}
                    </motion.p>
                </div>
            </div>
        </header>
    );
}
