export function getPaginationRange(
    currentPage: number,
    totalPages: number,
    maxVisiblePages: number,
) {
    const half = Math.floor(maxVisiblePages / 2);

    let start = Math.max(currentPage - half, 1);
    const end = Math.min(start + maxVisiblePages - 1, totalPages);

    start = Math.max(end - maxVisiblePages + 1, 1);

    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}
