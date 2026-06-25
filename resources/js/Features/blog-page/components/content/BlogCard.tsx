import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { fadeUpVariants } from "../../animations/blog.animation";
import type { BlogPost } from "../../types/blog.type";

interface BlogCardProps {
    post: BlogPost;
    index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
    const { t, i18n } = useTranslation("common");

    const dateLocale = i18n.language === "ja" ? "ja-JP" : i18n.language === "en" ? "en-US" : "id-ID";

    return (
        <motion.article
            custom={index}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex h-full flex-col overflow-hidden border rounded-md border-grey-border transition-shadow hover:shadow-md"
        >
            <Link
                href={`/blog/${post.slug}`}
                className="group relative aspect-4/3 w-full overflow-hidden"
            >
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    loading={index < 2 ? "eager" : "lazy"}
                    draggable={false}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 bg-red-normal px-3 py-1 text-xs rounded-sm font-semibold uppercase tracking-wider text-white">
                    {post.category}
                </span>
            </Link>

            <div className="flex grow flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString(dateLocale, {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                        })}
                    </time>
                </div>

                <h2 className="mb-3 line-clamp-2 text-lg font-bold leading-snug text-gray-900">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="transition hover:text-red-normal"
                    >
                        {post.title}
                    </Link>
                </h2>

                <p className="mb-6 line-clamp-3 grow text-sm text-gray-600">
                    {post.excerpt}
                </p>

                <Link
                    href={`/blog/${post.slug}`}
                    aria-label={`${t("blog.card.readMore")}: ${post.title}`}
                    className="group inline-flex items-center text-sm font-semibold text-red-700 transition-colors hover:text-red-normal-hover"
                >
                    {t("blog.card.readMore")}
                    <ArrowRight
                        aria-hidden="true"
                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                </Link>
            </div>
        </motion.article>
    );
}
