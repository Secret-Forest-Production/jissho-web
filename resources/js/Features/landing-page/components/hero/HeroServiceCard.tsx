import { motion } from "framer-motion";
import type { HeroServiceItem } from "./hero.type";
import { useTranslation } from "react-i18next";

interface Props {
    item: HeroServiceItem;
    index: number;
}

export default function HeroServiceCard({ item, index }: Props) {
    const { t } = useTranslation("common");

    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
            }}
            className="group relative h-64 overflow-hidden"
        >
            <img
                src={item.img}
                alt={t(item.title)}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col bg-red-normal/90 p-4 transition-all duration-500 ease-out translate-y-[75%] group-hover:translate-y-[45%]">
                <h3 className="mb-2 shrink-0 text-base font-bold text-white md:text-lg lg:text-xl">
                    {t(item.title)}
                </h3>

                <div className="opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100">
                    <p className="mb-3 line-clamp-3 text-[11px] leading-relaxed text-white/90 md:text-sm">
                        {t(item.desc)}
                    </p>

                    {item.linkText && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white underline md:text-xs">
                            {t(item.linkText)}
                        </span>
                    )}
                </div>
            </div>
        </motion.article>
    );
}
