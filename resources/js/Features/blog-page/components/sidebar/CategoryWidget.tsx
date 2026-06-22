import { Shapes } from 'lucide-react';

import { BLOG_ALL_CATEGORY } from "../../constants/blog.constant";
import { categories } from "../../data/blog";

interface CategoryWidgetProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export default function CategoryWidget({
    activeCategory,
    onCategoryChange,
}: CategoryWidgetProps) {
    const categoryList = [
        {
            name: BLOG_ALL_CATEGORY,
            count: categories.reduce((total, item) => total + item.count, 0),
        },
        ...categories,
    ];

    return (
        <section className="border border-grey-border bg-white p-6 rounded-lg">
            <div className="mb-4 flex items-center gap-2">
                <Shapes
                    className="h-4 w-4 text-red-700"
                />
                <h2 className="text-lg font-bold text-gray-900">Kategori</h2>
            </div>

            <ul className="space-y-3">
                {categoryList.map((category) => {
                    const isActive = activeCategory === category.name;

                    return (
                        <li key={category.name}>
                            <button
                                type="button"
                                onClick={() => onCategoryChange(category.name)}
                                className={`group flex w-full items-center justify-between transition-colors ${
                                    isActive
                                        ? "text-red-700"
                                        : "text-[#6B7280] hover:text-red-700"
                                }`}
                            >
                                <span className="text-sm">{category.name}</span>
                                <span className="rounded-xl bg-[#E6E8EA] px-2 py-1 text-xs text-[#6B7280] font-medium transition-colors group-hover:bg-red-50 group-hover:text-red-700">
                                    {category.count}
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
