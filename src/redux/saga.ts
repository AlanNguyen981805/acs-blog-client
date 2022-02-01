import { all, call } from "redux-saga/effects";
import { watchingGetAuth } from "./auth/saga";
import { watchingGetListAddressFilter } from "./test/saga";

export default function* rootSaga() {
    yield all([
        call(watchingGetListAddressFilter),
        call(watchingGetAuth)
    ])
}