import { Link } from "@inertiajs/react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface BlogDetailNavProps {
    previousPost: { title: string; slug: string; } | null;
    nextPost: { title: string; slug: string; } | null;
}

export default function BlogDetailNav({
    previousPost,
    nextPost,
}: BlogDetailNavProps) {
    const { t } = useTranslation("common");

    if (!previousPost && !nextPost) return null;

    return (
        <nav
            aria-label="Navigasi artikel"
            className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
            {previousPost ? (
                <Link
                    href={`/blog/${previousPost.slug}`}
                    className="group flex flex-col justify-center border rounded-lg border-gray-200 bg-white p-6 transition-all hover:border-red-normal hover:shadow-md"
                >
                    <div className="mb-2 flex items-center text-xs font-bold uppercase tracking-wider text-red-normal">
                        <ArrowLeftIcon
                            aria-hidden="true"
                            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
                        />
                        {t("blog.detail.previousPost")}
                    </div>

                    <h3 className="line-clamp-2 font-bold text-gray-900 transition-colors group-hover:text-red-normal">
                        {previousPost.title}
                    </h3>
                </Link>
            ) : (
                <div />
            )}

            {nextPost ? (
                <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group flex flex-col justify-center border rounded-lg border-gray-200 bg-white p-6 text-right transition-all hover:border-red-normal hover:shadow-md"
                >
                    <div className="mb-2 flex items-center justify-end text-xs font-bold uppercase tracking-wider text-red-normal">
                        {t("blog.detail.nextPost")}
                        <ArrowRightIcon
                            aria-hidden="true"
                            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        />
                    </div>

                    <h3 className="line-clamp-2 font-bold text-gray-900 transition-colors group-hover:text-red-normal">
                        {nextPost.title}
                    </h3>
                </Link>
            ) : (
                <div />
            )}
        </nav>
    );
}
