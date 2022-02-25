import { 
    GET_BLOG_BY_CATEGORY_ERROR, 
    GET_BLOG_BY_CATEGORY_START,
    GET_BLOG_BY_CATEGORY_SUCCESS, 
    IBlogByCategoryType 
} from "./type";

export const getBlogsByCategoryStart = (slug: string) => ({
    type: GET_BLOG_BY_CATEGORY_START,
    payload: slug
})

export const getBlogsByCategorySuccess = (data: any) => ({
    type: GET_BLOG_BY_CATEGORY_SUCCESS,
    payload: data
})

export const getBlogByCategoryError = (error: any) => ({
    type: GET_BLOG_BY_CATEGORY_ERROR
})