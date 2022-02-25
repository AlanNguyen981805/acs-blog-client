import {
    GET_BLOG_BY_CATEGORY_ERROR, 
    GET_BLOG_BY_CATEGORY_START, 
    GET_BLOG_BY_CATEGORY_SUCCESS, 
    IBlogByCategory, IBlogByCategoryType } from "./type";

const initialState: IBlogByCategory = {
    blogs: [],
    count: 0
}
const blogsByCategoryReducer = (state: IBlogByCategory = initialState, action: IBlogByCategoryType) => {
    switch (action.type) {
        case GET_BLOG_BY_CATEGORY_START:
            return {
                ...state, 
                loading: true
            };
        case GET_BLOG_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                blogs: action.payload.blogs,
                count: action.payload.count
            }
        
        case GET_BLOG_BY_CATEGORY_ERROR: 
            return state

        default:
            return state;
    }
}

export default blogsByCategoryReducer