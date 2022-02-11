import { IBlog, IUserLogin } from "../../utils/TypeScript";
import { CREATE_BLOG, CREATE_BLOG_ERROR, CREATE_BLOG_SUCCESS } from "./type";

export const createBlogAction = (values: IBlog) => ({
    type: CREATE_BLOG,
    payload: values
})

export const createBlogSuccess = (data: any) => ({
    type: CREATE_BLOG_SUCCESS,
    payload: data
})

export const createBlogError = (err: any) => ({
    type: CREATE_BLOG_ERROR,
    payload: err
})