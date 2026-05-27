import CategoryWidget from "./CategoryWidget";
import CtaWidget from "./CtaWidget";
import PopularPostsWidget from "./PopularPostsWidget";
import SearchWidget from "./SearchWidget";

interface BlogSidebarProps {
    searchQuery: string;
    activeCategory: string;
    onSearchChange: (value: string) => void;
    onCategoryChange: (value: string) => void;
    showCta?: boolean;
}

export default function BlogSidebar({
    searchQuery,
    activeCategory,
    onSearchChange,
    onCategoryChange,
    showCta = true,
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
            />

            <PopularPostsWidget />

            {showCta && <CtaWidget />}
        </aside>
    );
}
