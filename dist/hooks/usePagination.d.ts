interface Pagination {
    totalCount: number;
    pageSize: number;
    siblingCount?: number;
    currentPage: number;
}
export declare const DOTS = "...";
export declare const usePagination: ({ totalCount, pageSize, siblingCount, currentPage }: Pagination) => (string | number)[];
export {};
