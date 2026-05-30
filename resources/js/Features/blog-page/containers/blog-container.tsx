import { useState } from "react";

import BlogHero from "../components/hero/BlogHero";
import BlogList from "../components/content/BlogList";
import BlogSidebar from "../components/sidebar/BlogSidebar";
import CtaWidget from "../components/sidebar/CtaWidget";

import { BLOG_ALL_CATEGORY } from "../constants/blog.constant";

export default function BlogContainer() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState(BLOG_ALL_CATEGORY);

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
                            onCategoryChange={setActiveCategory}
                            showCta={false}
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
