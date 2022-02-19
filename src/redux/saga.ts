import { all, call } from "redux-saga/effects";
import { watchingGetAuth } from "./auth/saga";
import { watchingBlog } from "./blog/saga";
import { watchingCategory } from "./category/saga";
import { watchingGetListAddressFilter } from "./test/saga";

export default function* rootSaga() {
    yield all([
        call(watchingGetListAddressFilter),
        call(watchingGetAuth),
        call(watchingBlog),
        call(watchingCategory)
    ])
}