import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { BlogPost } from "../types/blog.type";

import BlogHero from "../components/hero/BlogHero";
import BlogList from "../components/content/BlogList";
import BlogSidebar from "../components/sidebar/BlogSidebar";
import CtaWidget from "../components/sidebar/CtaWidget";

interface BlogContainerProps {
    dbPosts?: BlogPost[];
}

export default function BlogContainer({ dbPosts }: BlogContainerProps) {
    const { t } = useTranslation("common");
    const allCategoryLabel = t("blog.filter.allCategory");

    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState(allCategoryLabel);
    const [activeTag, setActiveTag] = useState<string | null>(null);

    // Sync default category when language changes
    useEffect(() => {
        setActiveCategory((prev) => {
            // If the current category was the "all" label in any language, update it
            // This handles language switches where the user hasn't picked a specific category
            const knownAllLabels = ["Semua", "All", "すべて"];
            if (knownAllLabels.includes(prev)) {
                return allCategoryLabel;
            }
            return prev;
        });
    }, [allCategoryLabel]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const tag = params.get("tag");
            const cat = params.get("category");
            if (tag) {
                setActiveTag(tag);
            }
            if (cat) {
                setActiveCategory(cat);
            }
        }
    }, []);

    const handleClearTag = () => {
        setActiveTag(null);
        if (typeof window !== "undefined") {
            const url = new URL(window.location.href);
            url.searchParams.delete("tag");
            window.history.pushState({}, "", url.toString());
        }
    };

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        if (typeof window !== "undefined") {
            const url = new URL(window.location.href);
            if (category === allCategoryLabel) {
                url.searchParams.delete("category");
            } else {
                url.searchParams.set("category", category);
            }
            window.history.pushState({}, "", url.toString());
        }
    };

    return (
        <main className="relative flex min-h-screen w-full flex-col bg-white">
            <BlogHero />

            <section
                aria-label="Daftar artikel Jissho"
                className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-16"
            >
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                    <div className="order-2 lg:order-1 lg:col-span-8">
                        <BlogList
                            searchQuery={searchQuery}
                            activeCategory={activeCategory}
                            activeTag={activeTag}
                            onClearTag={handleClearTag}
                            dbPosts={dbPosts}
                        />

                        <div className="mt-8 block lg:hidden">
                            <CtaWidget />
                        </div>
                    </div>

                    <aside className="order-1 lg:order-2 lg:sticky lg:top-24 lg:col-span-4">
                        <BlogSidebar
                            searchQuery={searchQuery}
                            activeCategory={activeCategory}
                            onSearchChange={setSearchQuery}
                            onCategoryChange={handleCategoryChange}
                            showCta={false}
                            dbPosts={dbPosts}
                        />

                        <div className="mt-6 hidden lg:block">
                            <CtaWidget />
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
}
