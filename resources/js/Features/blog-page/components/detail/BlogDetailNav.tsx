import { Link } from "@inertiajs/react";

import { blogPosts } from "../../data/blog";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

interface BlogDetailNavProps {
    currentPostId: number;
}

export default function BlogDetailNav({ currentPostId }: BlogDetailNavProps) {
    const currentIndex = blogPosts.findIndex(
        (post) => post.id === currentPostId,
    );

    const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

    const nextPost =
        currentIndex < blogPosts.length - 1
            ? blogPosts[currentIndex + 1]
            : null;

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
                        Artikel Sebelumnya
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
                        Artikel Berikutnya
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
