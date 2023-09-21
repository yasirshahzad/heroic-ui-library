export type PaginationProps = {
    className?: string;
    currentPage: number;
    onPageChange: (x: number | string) => void;
    pageSize: number;
    siblingCount?: number;
    totalCount: number;
};
