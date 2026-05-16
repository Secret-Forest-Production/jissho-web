import { motion } from "framer-motion";

import type { GalleryPhoto } from "../utils/gallery.type";

interface GalleryCardProps {
    photo: GalleryPhoto;
    className?: string;
    titleClassName?: string;
    priority?: boolean;
}

export default function GalleryCard({
    photo,
    className = "",
    titleClassName = "text-base md:text-lg",
    priority = false,
}: GalleryCardProps) {
    return (
        <motion.article
            layout
            className={`group relative overflow-hidden rounded-xl shadow-md ${className}`}
        >
            <img
                src={photo.image}
                alt={`${photo.title} - ${photo.category}`}
                loading={priority ? "eager" : "lazy"}
                fetchPriority={priority ? "high" : "auto"}
                draggable={false}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/20 to-transparent p-5 opacity-90 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                <p className="text-xs font-bold uppercase tracking-wider text-red-light-active">
                    {photo.category}
                </p>

                <h3 className={`mt-1 font-bold text-white ${titleClassName}`}>
                    {photo.title}
                </h3>
            </div>
        </motion.article>
    );
}
