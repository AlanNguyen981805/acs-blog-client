import {  
    GET_HOME_BLOGS_ERROR,
    GET_HOME_BLOGS_START,
    GET_HOME_BLOGS_SUCCESS,
    IHomeBlogs, 
    IHomeBlogsType 
} from "./type";

const homeBlogsReducer = (state: IHomeBlogs[] = [], action: IHomeBlogsType) => {
    switch (action.type) {
        case GET_HOME_BLOGS_START:
            return state;
        case GET_HOME_BLOGS_SUCCESS: 
            return action.payload;
        case GET_HOME_BLOGS_ERROR:
            return state
        default:
            return state;
    }
}

export default homeBlogsReducer