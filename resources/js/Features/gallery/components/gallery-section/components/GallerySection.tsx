import { useMemo, useState } from "react";

import GalleryTitle from "./GalleryTitle";
import AllPhotosGrid from "./AllPhotosGrid";
import FilteredPhotosGrid from "./FilteredPhotosGrid";
import GalleryPagination from "./GalleryPagination";

import { galleryData } from "../../../data/gallery-link";
import {
    ALL_GALLERY_CATEGORY,
    GALLERY_ITEMS_PER_PAGE,
} from "../utils/gallery.constant";
import type {
    GalleryCategory,
    GalleryData,
    GalleryPhoto,
} from "../utils/gallery.type";

export default function GallerySection() {
    const data = galleryData as GalleryData;

    const [activeFilter, setActiveFilter] =
        useState<GalleryCategory>(ALL_GALLERY_CATEGORY);
    const [currentPage, setCurrentPage] = useState(1);

    const isAllPhotos = activeFilter === ALL_GALLERY_CATEGORY;

    const filteredPhotos = useMemo(() => {
        if (isAllPhotos) return data.photos;

        return data.photos.filter((photo) => photo.category === activeFilter);
    }, [activeFilter, data.photos, isAllPhotos]);

    const totalPages = Math.ceil(
        filteredPhotos.length / GALLERY_ITEMS_PER_PAGE,
    );

    const paginatedPhotos = useMemo(() => {
        const startIndex = (currentPage - 1) * GALLERY_ITEMS_PER_PAGE;

        return filteredPhotos.slice(
            startIndex,
            startIndex + GALLERY_ITEMS_PER_PAGE,
        );
    }, [currentPage, filteredPhotos]);

    const handleFilterChange = (category: GalleryCategory) => {
        setActiveFilter(category);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <section
            id="galeri"
            aria-labelledby="gallery-heading"
            className="bg-white py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <GalleryTitle />

                <div
                    role="tablist"
                    aria-label="Filter kategori galeri"
                    className="mb-16 mt-10 flex flex-wrap justify-center gap-2"
                >
                    {data.categories.map((category) => {
                        const isActive = activeFilter === category;

                        return (
                            <button
                                key={category}
                                type="button"
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => handleFilterChange(category)}
                                className={`rounded-xl px-5 py-2 text-sm font-semibold transition-all duration-300 md:text-base ${
                                    isActive
                                        ? "bg-red-normal text-white shadow-md shadow-red-100"
                                        : "border border-gray-300 bg-gray-100 text-text-gray hover:bg-gray-200"
                                }`}
                            >
                                {category}
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
