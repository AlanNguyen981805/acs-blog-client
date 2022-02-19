import { ICategory, IUser, IUserLogin } from "../../utils/TypeScript";

export const CREATE_CATEGORY_START = "CREATE_CATEGORY_START"
export const CREATE_CATEGORY_SUCCESS = "CREATE_CATEGORY_SUCCESS"
export const CREATE_CATEGORY_ERROR = "CREATE_CATEGORY_ERROR"

export const GET_CATEGORIES_START = "GET_CATEGORIES_START"
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS"
export const GET_CATEGORIES_ERROR= "GET_CATEGORIES_ERROR"

export interface ICategoryType {
    type: 
        typeof CREATE_CATEGORY_START | 
        typeof CREATE_CATEGORY_SUCCESS | 
        typeof CREATE_CATEGORY_ERROR |
        typeof GET_CATEGORIES_START |
        typeof GET_CATEGORIES_SUCCESS |
        typeof GET_CATEGORIES_ERROR
    payload: ICategory
}

export interface ICategoryReducer {
    categories?: ICategory[],
    loading?: boolean,
    error?: []
}

export interface ICategoryActionSaga {
    payload: ICategory
    type: typeof CREATE_CATEGORY_START
}