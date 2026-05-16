import { useMemo } from "react";

import BlogDetailBreadcrumb from "../components/detail/BlogDetailBreadcrumb";
import BlogDetailContent from "../components/detail/BlogDetailContent";
import BlogDetailHeader from "../components/detail/BlogDetailHeader";
import BlogDetailNav from "../components/detail/BlogDetailNav";
import BlogDetailTags from "../components/detail/BlogDetailTags";

import { blogPosts } from "../data/blog";

interface BlogDetailContainerProps {
    slug?: string;
}

export default function BlogDetailContainer({
    slug,
}: BlogDetailContainerProps) {
    const post = useMemo(
        () => blogPosts.find((item) => item.slug === slug) ?? blogPosts[0],
        [slug],
    );

    return (
        <main className="relative flex min-h-screen w-full flex-col bg-white pb-16 pt-24 md:pb-24">
            <article className="mx-auto w-full max-w-7xl rounded-lg bg-white px-4 sm:px-6 md:p-10 lg:p-14">
                <BlogDetailBreadcrumb title={post.title} />
                <BlogDetailHeader post={post} />
                <BlogDetailContent post={post} />
                <BlogDetailTags tags={post.tags} />
                <BlogDetailNav currentPostId={post.id} />
            </article>
        </main>
    );
}
