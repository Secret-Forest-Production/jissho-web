import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import GalleryTitle from "./GalleryTitle";
import AllPhotosGrid from "./AllPhotosGrid";
import FilteredPhotosGrid from "./FilteredPhotosGrid";
import GalleryPagination from "./GalleryPagination";

import { GALLERY_ITEMS_PER_PAGE } from "../utils/gallery.constant";

export default function GallerySection({ galleries }: { galleries: any[] }) {
    const { t, i18n } = useTranslation();

    const categories = [
        { id: "all", label: t("gallery.categories.all") },
        { id: "language_class", label: t("gallery.categories.language_class") },
        { id: "japanese_culture", label: t("gallery.categories.japanese_culture") },
        { id: "job_preparation", label: t("gallery.categories.job_preparation") },
        { id: "foundation_event", label: t("gallery.categories.foundation_event") },
    ];

    const [activeFilter, setActiveFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);

    const isAllPhotos = activeFilter === "all";

    const mappedPhotos = useMemo(() => {
        return galleries.map((item) => {
            const currentLang = i18n.language || "id";
            let title = item.title?.id;
            if (currentLang === "en" && item.title?.en) {
                title = item.title.en;
            } else if (currentLang === "ja" && item.title?.ja) {
                title = item.title.ja;
            }
            return {
                id: item.id,
                category: categories.find((c) => c.id === item.category)?.label || item.category,
                categoryId: item.category,
                title: title,
                image: `/storage/${item.image}`, // from Filament
            };
        });
    }, [galleries, i18n.language]);

    const filteredPhotos = useMemo(() => {
        if (isAllPhotos) return mappedPhotos;

        return mappedPhotos.filter((photo) => photo.categoryId === activeFilter);
    }, [activeFilter, mappedPhotos, isAllPhotos]);

    const totalPages = Math.ceil(filteredPhotos.length / GALLERY_ITEMS_PER_PAGE);

    const paginatedPhotos = useMemo(() => {
        const startIndex = (currentPage - 1) * GALLERY_ITEMS_PER_PAGE;

        return filteredPhotos.slice(startIndex, startIndex + GALLERY_ITEMS_PER_PAGE);
    }, [currentPage, filteredPhotos]);

    const handleFilterChange = (categoryId: string) => {
        setActiveFilter(categoryId);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <section id="galeri" aria-labelledby="gallery-heading" className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <GalleryTitle />

                <div
                    role="tablist"
                    aria-label="Filter kategori galeri"
                    className="mb-16 mt-10 flex flex-wrap justify-center gap-2"
                >
                    {categories.map((category) => {
                        const isActive = activeFilter === category.id;

                        return (
                            <button
                                key={category.id}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => handleFilterChange(category.id)}
                                className={`rounded-xl px-5 py-2 text-sm font-semibold transition-all duration-300 md:text-base ${
                                    isActive
                                        ? "bg-red-normal text-white shadow-md shadow-red-100"
                                        : "border border-gray-300 bg-gray-100 text-text-gray hover:bg-gray-200"
                                }`}
                            >
                                {category.label}
                            </button>
                        );
                    })}
                </div>

                <div className="mt-8">
                    {paginatedPhotos.length > 0 ? (
                        <div className="space-y-12">
                            {isAllPhotos ? (
                                <AllPhotosGrid photos={paginatedPhotos} />
                            ) : (
                                <FilteredPhotosGrid photos={paginatedPhotos} />
                            )}

                            <GalleryPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    ) : (
                        <p className="text-center text-text-gray">
                            Belum ada foto untuk kategori ini.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
