import { IUser, IUserLogin } from "../../utils/TypeScript";

export const AUTH = "AUTH"
export const AUTH_SUCCESS = "AUTH_SUCCESS"
export const AUTH_ERROR = "AUTH_ERROR"
export const REFRESH_TOKEN = "REFRESH_TOKEN"

export interface IAuth {
    msg?: string
    access_token?: string
    user?: IUser,
    loading?: boolean,
    error?: object
}

export interface IAuthType {
    type: typeof AUTH | typeof AUTH_SUCCESS | typeof AUTH_ERROR | typeof REFRESH_TOKEN,
    payload: IAuth
}

export interface IAction {
    payload: IUserLogin
    type: typeof AUTH
}