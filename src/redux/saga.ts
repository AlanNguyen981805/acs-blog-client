import { all, call } from "redux-saga/effects";
import { watchingGetListAddressFilter } from "./test/saga";

export default function* rootSaga() {
    yield all([
        call(watchingGetListAddressFilter)
    ])
}