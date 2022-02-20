import { IBlog, IUser, IUserLogin } from "../../utils/TypeScript";

export const CREATE_BLOG = "CREATE_BLOG"
export const CREATE_BLOG_SUCCESS = "CREATE_BLOG_SUCCESS"
export const CREATE_BLOG_ERROR = "CREATE_BLOG_ERROR"

export const GET_BLOG_START = "GET_BLOG_START"
export const GET_BLOG_SUCCESS = "GET_BLOG_SUCCESS"
export const GET_BLOG_ERROR = "GET_BLOG_ERROR"

export interface IBlogType {
    type: typeof CREATE_BLOG | 
        typeof CREATE_BLOG_SUCCESS | 
        typeof CREATE_BLOG_ERROR
    payload: IBlog
}

export interface IBlogActionSaga {
    payload: IBlog
    type: typeof CREATE_BLOG
}