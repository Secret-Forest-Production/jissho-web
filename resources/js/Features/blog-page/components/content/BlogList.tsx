import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";

import { blogPosts } from "../../data/blog";
import { BLOG_ITEMS_PER_PAGE } from "../../constants/blog.constant";

import type { BlogPost } from "../../types/blog.type";

interface BlogListProps {
    searchQuery: string;
    activeCategory: string;
    activeTag: string | null;
    onClearTag: () => void;
    dbPosts?: BlogPost[];
}

export default function BlogList({
    searchQuery,
    activeCategory,
    activeTag,
    onClearTag,
    dbPosts,
}: BlogListProps) {
    const { t } = useTranslation("common");
    const [currentPage, setCurrentPage] = useState(1);

    const activePosts = dbPosts && dbPosts.length > 0 ? dbPosts : blogPosts;

    const allCategoryLabel = t("blog.filter.allCategory");

    const filteredPosts = useMemo(() => {
        return activePosts.filter((post) => {
            const matchSearch =
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

            const matchCategory =
                activeCategory === allCategoryLabel || post.category === activeCategory;

            const matchTag =
                !activeTag ||
                post.tags.some(
                    (tag) => tag.toLowerCase() === activeTag.toLowerCase(),
                );

            return matchSearch && matchCategory && matchTag;
        });
    }, [activePosts, searchQuery, activeCategory, activeTag, allCategoryLabel]);

    const totalPages = Math.ceil(filteredPosts.length / BLOG_ITEMS_PER_PAGE);

    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * BLOG_ITEMS_PER_PAGE,
        currentPage * BLOG_ITEMS_PER_PAGE,
    );

    return (
        <div className="flex flex-col gap-8">
            {activeTag && (
                <div className="flex items-center gap-2 rounded-md bg-gray-50 px-4 py-3 border border-gray-100 text-sm text-gray-600">
                    <span>
                        {t("blog.filter.showingTag")}{" "}
                        <strong>{activeTag}</strong>
                    </span>
                    <button
                        type="button"
                        onClick={onClearTag}
                        className="ml-auto text-xs font-semibold text-red-700 hover:text-red-900 transition-colors"
                    >
                        {t("blog.filter.clearFilter")}
                    </button>
                </div>
            )}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {paginatedPosts.length > 0 ? (
                    paginatedPosts.map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} />
                    ))
                ) : (
                    <div className="col-span-2 py-12 text-center text-gray-500">
                        {t("blog.filter.noResults")}
                    </div>
                )}
            </div>

            <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}
