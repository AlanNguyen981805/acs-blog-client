import { 
    GET_CATEGORIES_ERROR, 
    GET_CATEGORIES_START, 
    GET_CATEGORIES_SUCCESS,
    ICategoryReducer,
    ICategoryType 
} from "./type";

let initialState = {
    loading: false,
    categories: [],
    error: []
}

const categoryReducer = (state: ICategoryReducer = {}, action: ICategoryType): ICategoryReducer => {
    switch (action.type) {
        case GET_CATEGORIES_START:
            return {
                ...state,
                loading: true
            }
        case GET_CATEGORIES_SUCCESS: 
            return {
                ...state,
                categories: action.payload.categories,
                loading: false
            }

        case GET_CATEGORIES_ERROR: 
            return {
                ...state,
                error: [],
                loading: false
            }
        default:
            return state;
    }
}

export default categoryReducer;