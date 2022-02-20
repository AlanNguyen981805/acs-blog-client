import { GET_HOME_BLOGS_ERROR, GET_HOME_BLOGS_START, GET_HOME_BLOGS_SUCCESS } from "./type";

export const getHomeBlogsStart = () => ({
    type: GET_HOME_BLOGS_START,
})

export const getHomeBlogsSuccess = (data: any) => ({
    type: GET_HOME_BLOGS_SUCCESS,
    payload: data
})

export const getHomeBlogsError = (error: any) => ({
    type: GET_HOME_BLOGS_ERROR,
    payload: error
})