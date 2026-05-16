import { useMemo, useState } from "react";

import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";

import { blogPosts } from "../../data/blog";
import { BLOG_ITEMS_PER_PAGE } from "../../constants/blog.constant";

interface BlogListProps {
    searchQuery: string;
    activeCategory: string;
}

export default function BlogList({
    searchQuery,
    activeCategory,
}: BlogListProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const filteredPosts = useMemo(() => {
        return blogPosts.filter((post) => {
            const matchSearch =
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

            const matchCategory =
                activeCategory === "Semua" || post.category === activeCategory;

            return matchSearch && matchCategory;
        });
    }, [searchQuery, activeCategory]);

    const totalPages = Math.ceil(filteredPosts.length / BLOG_ITEMS_PER_PAGE);

    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * BLOG_ITEMS_PER_PAGE,
        currentPage * BLOG_ITEMS_PER_PAGE,
    );

    return (
        <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {paginatedPosts.map((post, index) => (
                    <BlogCard key={post.id} post={post} index={index} />
                ))}
            </div>

            <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}
