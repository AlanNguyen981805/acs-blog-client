import { put, takeLatest } from "redux-saga/effects";
import * as types from './type';
import * as actions from './actionTest';
import axios from "axios"

function* getListAddressFilter(): any {
      try {
          const data = yield axios.get('https://be.drivadz.vn/wp-json/v1/get-banners')
          yield put(actions.getListAddressSuccess(data));
      } catch (error) {
          console.log(error)
      }
}

export function* watchingGetListAddressFilter() {
      yield takeLatest(types.GET_LIST_ADDRESS, getListAddressFilter);
}