import type { PostI } from "./postI";

export interface GetPostsResponse {
    success: boolean;
    message: string;
    data:    Data;
    meta:    Meta;
}

export interface Data {
    posts: PostI[];
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    currentPage:   number;
    numberOfPages: number;
    limit:         number;
    nextPage:      number;
    total:         number;
}
