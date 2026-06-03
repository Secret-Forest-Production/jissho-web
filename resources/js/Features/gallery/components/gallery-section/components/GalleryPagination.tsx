import { MAX_VISIBLE_PAGES } from "../utils/gallery.constant";
import { getPaginationRange } from "../utils/gallery.utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function GalleryPagination({
    currentPage,
    totalPages,
    onPageChange,
}: GalleryPaginationProps) {
    if (totalPages <= 1) return null;

    const pages = getPaginationRange(
        currentPage,
        totalPages,
        MAX_VISIBLE_PAGES,
    );

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    return (
        <nav
            aria-label="Pagination galeri"
            className="flex items-center justify-center gap-2 pt-4"
        >
            <button
                type="button"
                disabled={isFirstPage}
                onClick={() => onPageChange(currentPage - 1)}
                aria-label="Halaman galeri sebelumnya"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-light-active text-sm font-semibold text-[#191C1E] transition hover:bg-red-light disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-300 disabled:hover:bg-transparent"
            >
                <ChevronLeft aria-hidden="true" className="h-4 w-4" />
            </button>

            {pages.map((page) => {
                const isActive = page === currentPage;

                return (
                    <button
                        key={page}
                        type="button"
                        onClick={() => onPageChange(page)}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex h-9 min-w-9 items-center justify-center rounded-lg border px-3 text-sm font-semibold transition ${
                            isActive
                                ? "border-red-light-active bg-red-normal text-white"
                                : "border-red-light-active text-[#191C1E] hover:bg-red-light"
                        }`}
                    >
                        {page}
                    </button>
                );
            })}

            <button
                type="button"
                disabled={isLastPage}
                onClick={() => onPageChange(currentPage + 1)}
                aria-label="Halaman galeri berikutnya"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-light-active text-sm font-semibold text-[#191C1E] transition hover:bg-red-light disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-300 disabled:hover:bg-transparent"
            >
                <ChevronRight aria-hidden="true" className="h-4 w-4" />
            </button>
        </nav>
    );
}
