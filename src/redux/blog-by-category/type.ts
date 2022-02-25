export const GET_BLOG_BY_CATEGORY_START = "GET_BLOG_BY_CATEGORY_START"
export const GET_BLOG_BY_CATEGORY_SUCCESS = "GET_BLOG_BY_CATEGORY_SUCCESS"
export const GET_BLOG_BY_CATEGORY_ERROR = "GET_BLOG_BY_CATEGORY_ERROR"

export interface IBlogByCategory {
    blogs: [],
    count: number
}

export interface IBlogByCategoryType {
    type: typeof GET_BLOG_BY_CATEGORY_START | 
        typeof GET_BLOG_BY_CATEGORY_SUCCESS | 
        typeof GET_BLOG_BY_CATEGORY_ERROR,
    payload: IBlogByCategory
}

export interface IBlogByCategorySaga {
    type: typeof GET_BLOG_BY_CATEGORY_START,
    payload: string
}