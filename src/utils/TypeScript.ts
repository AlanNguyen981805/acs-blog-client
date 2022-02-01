import { NextRouter } from "next/router";
import rootReducer from "../redux/rootReducer";

export type RootStore = ReturnType<typeof rootReducer>

export interface IUserRegister {
    name: string,
    account: string,
    password: string,
    cf_password: string
}

export interface IUserLogin {
    email: string,
    password: string
}

export interface IParams extends NextRouter {
    slug?: string
}

export interface IUser {
    account: string
    avatar: string
    createdAt: string
    name: string
    role: string
    type: string
    updatedAt: string
    _id: string
}