import CategoryWidget from "./CategoryWidget";
import CtaWidget from "./CtaWidget";
import PopularPostsWidget from "./PopularPostsWidget";
import SearchWidget from "./SearchWidget";

import type { BlogPost } from "../../types/blog.type";

interface BlogSidebarProps {
    searchQuery: string;
    activeCategory: string;
    onSearchChange: (value: string) => void;
    onCategoryChange: (value: string) => void;
    showCta?: boolean;
    dbPosts?: BlogPost[];
}

export default function BlogSidebar({
    searchQuery,
    activeCategory,
    onSearchChange,
    onCategoryChange,
    showCta = true,
    dbPosts,
}: BlogSidebarProps) {
    return (
        <aside
            aria-label="Sidebar artikel"
            className="flex w-full flex-col gap-6"
        >
            <SearchWidget value={searchQuery} onChange={onSearchChange} />

            <CategoryWidget
                activeCategory={activeCategory}
                onCategoryChange={onCategoryChange}
                dbPosts={dbPosts}
            />

            <PopularPostsWidget dbPosts={dbPosts} />

            {showCta && <CtaWidget />}
        </aside>
    );
}
