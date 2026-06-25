import type { BlogPost } from "../../types/blog.type";
import { Calendar, Clock, User } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function BlogDetailHeader({ post }: { post: BlogPost }) {
    const { i18n } = useTranslation("common");

    const dateLocale = i18n.language === "ja" ? "ja-JP" : i18n.language === "en" ? "en-US" : "id-ID";

    return (
        <header className="mb-8">
            <p className="mb-4 inline-block rounded-full bg-red-normal px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                {post.category}
            </p>

            <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#434656]">
                <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString(dateLocale, {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                        })}
                    </time>
                </div>

                <div className="flex items-center gap-1.5">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                </div>

                <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>{post.readingTime}</span>
                </div>
            </div>
        </header>
    );
}
