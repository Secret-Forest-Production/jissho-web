import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function BlogPagination({
    currentPage,
    totalPages,
    onPageChange,
}: BlogPaginationProps) {
    if (totalPages <= 1) return null;

    return (
        <nav
            aria-label="Pagination artikel"
            className="mt-8 flex items-center justify-center gap-2"
        >
            <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="flex h-10 w-10 items-center rounded-sm justify-center border border-gray-300 bg-white text-gray-500 transition hover:bg-gray-50 disabled:opacity-50"
            >
                <ChevronLeft className="h-5 w-5" />
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                    <button
                        key={page}
                        type="button"
                        aria-current={currentPage === page ? "page" : undefined}
                        onClick={() => onPageChange(page)}
                        className={`flex h-10 w-10 items-center rounded-sm justify-center border font-medium transition ${
                            currentPage === page
                                ? "border-red-700 bg-red-700 text-white"
                                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                        {page}
                    </button>
                ),
            )}

            <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="flex h-10 w-10 items-center rounded-sm justify-center border border-gray-300 bg-white text-gray-500 transition hover:bg-gray-50 disabled:opacity-50"
            >
                <ChevronRight className="h-5 w-5" />
            </button>
        </nav>
    );
}
