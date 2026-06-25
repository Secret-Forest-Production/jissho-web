import { Head } from "@inertiajs/react";
import BlogDetailContainer from "@/Features/blog-page/containers/blog-detail-container";
import type { BlogPost } from "@/Features/blog-page/types/blog.type";

interface ShowProps {
    post: BlogPost;
    recentPosts: BlogPost[];
    previousPost: { title: string; slug: string; } | null;
    nextPost: { title: string; slug: string; } | null;
}

export default function Show({ post, recentPosts, previousPost, nextPost }: ShowProps) {
    return (
        <>
            <Head title={`${post.title} - Yayasan Jissho`} />
            <BlogDetailContainer
                post={post}
                recentPosts={recentPosts}
                previousPost={previousPost}
                nextPost={nextPost}
            />
        </>
    );
}
