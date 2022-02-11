import { put, takeLatest } from 'redux-saga/effects';
import axiosClient from '../../utils/axiosClient';
import { IBlogActionSaga, CREATE_BLOG } from './type';

function* createBlog({payload}: IBlogActionSaga): any {
    try {
        const res = yield axiosClient.post('api/blog', payload)
        console.log(res)
    } catch (error) {
        
    }
}

export function* watchingBlog() {
    yield takeLatest(CREATE_BLOG, createBlog)
}