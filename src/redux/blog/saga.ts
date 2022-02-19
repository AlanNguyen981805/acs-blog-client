import { call, put, takeLatest } from 'redux-saga/effects';
import { CreateBlog } from '../../utils/api';
import { IBlogActionSaga, CREATE_BLOG } from './type';

function* createBlog({payload}: IBlogActionSaga): any {
    try {
        const res = yield call(CreateBlog, payload)
        console.log(res)
    } catch (error) {
        
    }
}

export function* watchingBlog() {
    yield takeLatest(CREATE_BLOG, createBlog)
}