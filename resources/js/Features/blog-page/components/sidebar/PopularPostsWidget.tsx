import type { BlogPost } from "../../types/blog.type";
import { blogPosts } from "../../data/blog";
import { Link } from "@inertiajs/react";
import { TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

interface PopularPostsWidgetProps {
    dbPosts?: BlogPost[];
}

export default function PopularPostsWidget({
    dbPosts,
}: PopularPostsWidgetProps) {
    const { t } = useTranslation("common");
    const activePosts = dbPosts && dbPosts.length > 0 ? dbPosts : blogPosts;
    const popularList = activePosts.slice(0, 3);

    return (
        <div className="bg-white border border-grey-border p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="text-red-700 w-5 h-5" />
                <h3 className="font-bold text-gray-900 text-lg">
                    {t("blog.sidebar.popularTitle")}
                </h3>
            </div>
            <ul className="space-y-4">
                {popularList.map((post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.slug}`} className="flex gap-4 group items-start">
                            <div className="w-16 h-16 shrink-0 overflow-hidden rounded-sm">
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col">
                                <h4 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-red-normal transition-colors leading-snug">
                                    {post.title}
                                </h4>
                                <span className="text-xs text-grey-border mt-1 uppercase tracking-wider">
                                    {post.views}
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
