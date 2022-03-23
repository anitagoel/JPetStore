import { all } from "redux-saga/effects";
import authSaga from "./auth.saga";
import catalogueSaga from "./catalogue.saga";
import searchSaga from "./search.saga";
import cartSaga from "./cart.saga";
import orderSaga from "./order.saga";

export default function* rootSaga() {
  yield all([
    authSaga(),
    catalogueSaga(),
    searchSaga(),
    cartSaga(),
    orderSaga(),
  ]);
}
