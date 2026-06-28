import { motion } from "framer-motion";
import { mitraData } from "../../data/mitra/mitra-link";

export default function MitraLogo() {
    return (
        <div className="mt-16 space-y-20">
            {mitraData.rows.map((row, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {row.titles.map((title) => (
                            <h3
                                key={title}
                                className="text-center text-2xl font-bold"
                            >
                                {title}
                            </h3>
                        ))}
                    </div>

                    <div
                        className={`grid gap-12 justify-items-center ${
                            row.logos.length === 3
                                ? "grid-cols-1 md:grid-cols-3"
                                : "grid-cols-1 md:grid-cols-2"
                        }`}
                    >
                        {row.logos.map((logo) => (
                            <img
                                src={logo.src}
                                alt={`${logo.name} Logo`}
                                title={logo.name}
                                loading="lazy"
                                decoding="async"
                                draggable={false}
                                className={`${logo.width} h-auto object-contain transition hover:scale-105`}
                            />
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
