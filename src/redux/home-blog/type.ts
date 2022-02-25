export const GET_HOME_BLOGS_START = "GET_HOME_BLOGS_START"
export const GET_HOME_BLOGS_SUCCESS = "GET_HOME_BLOGS_SUCCESS"
export const GET_HOME_BLOGS_ERROR = "GET_HOME_BLOGS_ERROR"

export interface IHomeBlogs {
    _id: string,
    name: string,
    count: number,
    slug: string,
    blog: any
}

export interface IHomeBlogsType {
    type: typeof GET_HOME_BLOGS_START | typeof GET_HOME_BLOGS_SUCCESS | typeof GET_HOME_BLOGS_ERROR ,
    payload: IHomeBlogs[]
}