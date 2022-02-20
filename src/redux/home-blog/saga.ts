import { call, put, takeLatest } from "redux-saga/effects";
import { CreateCategory, GetAllCategories, GetHomeBlogs } from "../../utils/api";
import { getHomeBlogsSuccess } from "./action";
import { GET_HOME_BLOGS_START } from "./type";

function* getHomeBlogs(): any {
    try {
        const res = yield call(GetHomeBlogs, null);
        if(res) yield put(getHomeBlogsSuccess(res.data))
    } catch (error: any) {
        console.log(error)
    }
}

export function* watchingGetHomeBLogs() {
    yield takeLatest(GET_HOME_BLOGS_START, getHomeBlogs)
}