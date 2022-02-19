import { call, put, takeLatest } from "redux-saga/effects";
import { CreateCategory, GetAllCategories } from "../../utils/api";
import { getCategoriesSuccess } from "./actions";
import { CREATE_CATEGORY_START, GET_CATEGORIES_START, ICategoryActionSaga } from "./type";

function* createCategory({payload}: ICategoryActionSaga): any {
    try {
        const res = yield call(CreateCategory, payload);
        
    } catch (error: any) {
        yield put(getCategoriesSuccess(error))
    }
}

function* getCategories(): any {
    try {
        const res = yield call(GetAllCategories, null);
        if(res) {
            yield put(getCategoriesSuccess(res.data))
        }
    } catch (error: any) {
        yield put(getCategoriesSuccess(error))
    }
}

export function* watchingCategory() {
    yield takeLatest(CREATE_CATEGORY_START, createCategory)
    yield takeLatest(GET_CATEGORIES_START, getCategories)
}