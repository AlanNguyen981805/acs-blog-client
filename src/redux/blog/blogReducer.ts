import { IBlog } from "../../utils/TypeScript"
import { CREATE_BLOG, CREATE_BLOG_ERROR, CREATE_BLOG_SUCCESS, IBlogType } from "./type"

const blogReducer = (state: IBlog[] = [], action: IBlogType) => {
    switch(action.type) {
        case CREATE_BLOG: 
            return {
                ...state,
                loading: true,
                error: {}
            }
        
        case CREATE_BLOG_SUCCESS:
            localStorage.setItem("logged", "true")
            return {
                ...state,
                loading: false,
                error: {}
            }
        
        case CREATE_BLOG_ERROR:
            return {
                ...state,
                error: action.payload,
                access_token: '',
                loading: false
            }
        
        default: 
            return state
        
    }
}

export default blogReducer