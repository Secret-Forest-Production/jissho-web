import { useState } from "react";

import BlogHero from "../components/hero/BlogHero";
import BlogList from "../components/content/BlogList";
import BlogSidebar from "../components/sidebar/BlogSidebar";

import { BLOG_ALL_CATEGORY } from "../constants/blog.constant";

export default function BlogContainer() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState(BLOG_ALL_CATEGORY);

    return (
        <main className="relative flex min-h-screen w-full flex-col bg-white">
            <BlogHero />

            <section
                aria-label="Daftar artikel Jissho"
                className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8"
            >
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-8">
                        <BlogList
                            searchQuery={searchQuery}
                            activeCategory={activeCategory}
                        />
                    </div>

                    <div className="lg:sticky lg:top-24 lg:col-span-4">
                        <BlogSidebar
                            searchQuery={searchQuery}
                            activeCategory={activeCategory}
                            onSearchChange={setSearchQuery}
                            onCategoryChange={setActiveCategory}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
