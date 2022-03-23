import { call, put, takeLatest } from "redux-saga/effects";
import { SearchApi } from "../../Services/search.service";
import {
  SEARCH_KEYWORD,
  getProductBySearchKeyword,
} from "../Actions/search.actions";

function* fetchProductsByKeyword(action) {
  try {
    console.log("inside saga: " + action.payload);

    const data = yield call(SearchApi.productsByKeyword, action.payload);
    console.log("inside saga: " + data);
    yield put(getProductBySearchKeyword.success(data));
  } catch (e) {
    yield put(getProductBySearchKeyword.failure(e));
  }
}

function* searchSaga() {
  yield takeLatest(SEARCH_KEYWORD.REQUEST, fetchProductsByKeyword);
}

export default searchSaga;
