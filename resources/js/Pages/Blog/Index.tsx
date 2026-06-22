import SEO from "@/Components/shared/SEO";
import BlogContainer from "@/Features/blog-page/containers/blog-container";
import type { BlogPost } from "@/Features/blog-page/types/blog.type";
import { useTranslation } from "react-i18next";

interface IndexProps {
    posts: {
        data: BlogPost[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

export default function Index({ posts }: IndexProps) {
    const { t } = useTranslation("common");

    return (
        <>
            <SEO
                title={t("blog.seo.title")}
                description={t("blog.seo.description")}
            />

            <BlogContainer dbPosts={posts?.data} />
        </>
    );
}