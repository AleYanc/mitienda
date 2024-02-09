export interface PagedResponse<T> {
    pageNumber:   number;
    pageSize:     number;
    firstPage:    string;
    lastPage:     string;
    totalPages:   number;
    totalRecords: number;
    nextPage:     null;
    previousPage: null;
    data:         T;
    succeeded:    boolean;
    errors:       null;
    message:      string;
}