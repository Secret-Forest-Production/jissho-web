import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

interface SidebarItem {
    id: string;
    label: string;
}

interface ProgramSidebarNavProps {
    title: string;
    items: SidebarItem[];
}

export default function ProgramSidebarNav({
    title,
    items,
}: ProgramSidebarNavProps) {
    const [activeId, setActiveId] = useState(items[0]?.id ?? "");

    useEffect(() => {
        const sectionElements = items
            .map((item) => document.getElementById(item.id))
            .filter(Boolean) as HTMLElement[];

        if (!sectionElements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries.find(
                    (entry) => entry.isIntersecting,
                );

                if (visibleEntry) {
                    setActiveId(visibleEntry.target.id);
                }
            },
            {
                root: null,
                rootMargin: "-35% 0px -55% 0px",
                threshold: 0,
            },
        );

        sectionElements.forEach((section) => observer.observe(section));

        return () => {
            sectionElements.forEach((section) => observer.unobserve(section));
        };
    }, [items]);

    const handleClick = (id: string) => {
        setActiveId(id);

        const element = document.getElementById(id);

        if (!element) return;

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <aside className="lg:col-span-3">
            <div className="sticky top-20 z-30 overflow-hidden border border-gray-200 bg-white shadow-lg shadow-blue-dark/5 lg:top-28 lg:border-0 lg:bg-transparent lg:shadow-none">
                <div className="bg-white p-4 lg:p-0">
                    <h3 className="mb-4 rounded-lg bg-white text-base font-bold leading-snug text-blue-dark lg:mb-6 lg:text-lg">
                        {title}
                    </h3>

                    <nav className="grid grid-cols-3 gap-2 lg:flex lg:flex-col lg:gap-0 lg:space-y-2">
                        {items.map((item) => {
                            const isActive = activeId === item.id;

                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => handleClick(item.id)}
                                    className={`min-w-0 rounded-lg border px-3 py-2.5 text-center text-sm font-medium transition-all lg:w-full lg:rounded-none lg:border-0 lg:border-l-4 lg:px-4 lg:py-3 lg:text-left ${
                                        isActive
                                            ? "border-red-normal bg-red-light/40 text-red-normal lg:border-l-red-normal"
                                            : "border-gray-200 bg-white text-gray-600 hover:border-red-normal hover:bg-red-light/20 hover:text-red-normal lg:border-l-transparent lg:hover:border-l-red-normal lg:hover:bg-gray-50"
                                    }`}
                                >
                                    <span className="block truncate">
                                        {item.label}
                                    </span>
                                </button>
                            );
                        })}
                    </nav>

                    <Link
                        href="/daftar-sekarang"
                        className="mt-4 flex w-full items-center justify-center rounded-lg bg-red-normal px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-red-dark"
                    >
                        Daftar Sekarang
                    </Link>
                </div>
            </div>
        </aside>
    );
}
