
import { call, put, takeLatest } from "redux-saga/effects";
import { CreateCategory, GetAllCategories, getBlogsByCategory } from "../../utils/api";
import { getBlogsByCategorySuccess } from "./actions";
import { GET_BLOG_BY_CATEGORY_START, IBlogByCategorySaga } from "./type";

function* getBLogsByCategory({payload}: IBlogByCategorySaga): any {
    try {
        const res = yield call(getBlogsByCategory, payload);
        if(res.status === 200) {
            yield put(getBlogsByCategorySuccess(res.data))
        }
    } catch (error: any) {
        yield put(getBlogsByCategorySuccess(error))
    }
}

export function* watchingGetBlogsByCategory() {
    yield takeLatest(GET_BLOG_BY_CATEGORY_START, getBLogsByCategory)
}