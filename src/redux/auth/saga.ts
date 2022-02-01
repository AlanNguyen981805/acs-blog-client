import { put, takeLatest } from 'redux-saga/effects';
import axiosClient from '../../utils/axiosClient';
import { IUserLogin } from '../../utils/TypeScript';
import { authError, authSuccess } from './action';
import { AUTH, IAction } from './type';

function* getAuth({payload}: IAction): any {
    try {
        const res = yield axiosClient.post(`api/login`, payload)
        if(res.status === 200) {
            yield put(authSuccess(res.data))
        }
    } catch (error: any) {
        yield put(authError(error.response.data.msg))
    }
}

export function* watchingGetAuth() {
    yield takeLatest(AUTH, getAuth)
}