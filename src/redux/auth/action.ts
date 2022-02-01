import { IUserLogin } from "../../utils/TypeScript";
import { AUTH, AUTH_ERROR, AUTH_SUCCESS } from "./type";

export const authAction = (values: IUserLogin) => ({
    type: AUTH,
    payload: values
})

export const authSuccess = (data: any) => ({
    type: AUTH_SUCCESS,
    payload: data
})

export const authError = (err: any) => ({
    type: AUTH_ERROR,
    payload: err
})