import { call, put, takeLatest } from 'redux-saga/effects';
import axiosClient from '../../utils/axiosClient';
import { getApi } from '../../utils/fetchAPI';
import { IUserLogin } from '../../utils/TypeScript';
import { authError, authSuccess } from './action';
import { AUTH, IAction, REFRESH_TOKEN } from './type';
import Cookie from "js-cookie"
import axios from 'axios';
import createAxios from '../../utils/axiosInstance';
import { LoginUser } from '../../utils/api';

function* getAuth({payload}: IAction): any {
    try {
        // const res = yield axios.post(`api/login`, payload)
        const res = yield call(LoginUser, payload)
        if(res.status === 200) {
            yield put(authSuccess(res.data))
            
        }
    } catch (error: any) {
        console.log(error)
        yield put(authError(error.response.data.msg))
    }
}

function* getRefreshToken(): any {
    try {
        const res = yield getApi('refresh_token')
    } catch (error) {
        console.log(error)
    }
}

export function* watchingGetAuth() {
    yield takeLatest(AUTH, getAuth)
    yield takeLatest(REFRESH_TOKEN, getRefreshToken)
}