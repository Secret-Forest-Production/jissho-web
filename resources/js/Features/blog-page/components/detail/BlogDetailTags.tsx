import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function BlogDetailTags({ tags }: { tags: string[] }) {
    const { t } = useTranslation("common");

    return (
        <div className="mt-8 flex items-center gap-3 border-b border-gray-200 py-6">
            <span className="text-sm font-medium text-gray-500">{t("blog.detail.tags")}</span>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <Link
                        key={tag}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="rounded bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        {tag}
                    </Link>
                ))}
            </div>
        </div>
    );
}
