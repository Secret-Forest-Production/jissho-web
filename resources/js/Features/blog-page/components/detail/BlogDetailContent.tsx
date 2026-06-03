import type { BlogPost } from "../../types/blog.type";
import BlogDetailCta from "./BlogDetailCta";

export default function BlogDetailContent({ post }: { post: BlogPost }) {
    return (
        <>
            <div className="mb-10 aspect-video w-full overflow-hidden">
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    loading="eager"
                    draggable={false}
                    className="h-full w-full object-cover"
                />
            </div>

            <div
                className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-red-normal hover:prose-a:text-red-dark prose-blockquote:border-blue-dark prose-blockquote:text-gray-700 prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <BlogDetailCta />
        </>
    );
}
