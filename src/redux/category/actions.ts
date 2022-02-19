import { ICategory } from "../../utils/TypeScript";
import { CREATE_CATEGORY_ERROR, CREATE_CATEGORY_START, CREATE_CATEGORY_SUCCESS, GET_CATEGORIES_ERROR, GET_CATEGORIES_START, GET_CATEGORIES_SUCCESS } from "./type";

export const createCategoryStart = (values: ICategory) => ({
    type: CREATE_CATEGORY_START,
    payload: values
})

export const createCategorySuccess = (data: any) => ({
    type: CREATE_CATEGORY_SUCCESS,
    payload: data
})

export const createCategoryError = (err: any) => ({
    type: CREATE_CATEGORY_ERROR,
    payload: err
})

export const getCategoriesStart = () => ({
    type: GET_CATEGORIES_START
})

export const getCategoriesSuccess = (data: any) => ({
    type: GET_CATEGORIES_SUCCESS,
    payload: data
})

export const getCategoriesError = (error: any) => ({
    type: GET_CATEGORIES_ERROR,
    payload: error
})