import { ChevronRight } from 'lucide-react';
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

export default function BlogDetailBreadcrumb({ title }: { title: string }) {
    const { t } = useTranslation("common");

    return (
        <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center space-x-2 text-sm text-gray-500"
        >
            <Link
                href="/blog"
                className="transition-colors hover:text-red-normal"
            >
                {t("blog.detail.breadcrumb")}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="line-clamp-1 font-medium text-red-normal">
                {title}
            </span>
        </nav>
    );
}
