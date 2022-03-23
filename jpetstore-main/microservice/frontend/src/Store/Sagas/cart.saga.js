import { call, put, takeEvery } from "redux-saga/effects";
import { CatalogueApi } from "../../Services/catalogue.service";
import {
  FETCH_INVENTORY_OF_ITEM_CART,
  FETCH_PRODUCT_BY_PRODUCTID_CART,
  getInventoryByItemId,
  getProductByProductId,
} from "../Actions/cart.actions";

// function* fetchProductFromItemId() {
//   try {
//     const { data } = yield call(AuthorizationApi.guest);
//     localStorage.setItem("token", data.access_token);
//     yield put(getGuestToken.success(data.access_token));
//   } catch (e) {
//     yield put(getGuestToken.failure(e.data));
//   }
// }

function* fetchProductByProductId(action) {
  try {
    const data = yield call(CatalogueApi.getProductByProductId, action.payload);
    console.log("data: " + data);
    yield put(getProductByProductId.success(data));
  } catch (e) {
    yield put(getProductByProductId.failure(e));
  }
}

function* fetchInventoryByItemId(action) {
  try {
    const data = yield call(CatalogueApi.getInventoryByItemId, action.payload);
    console.log("data: " + data);
    yield put(getInventoryByItemId.success(data));
  } catch (e) {
    yield put(getInventoryByItemId.failure(e));
  }
}

function* cartSaga() {
  yield takeEvery(
    FETCH_PRODUCT_BY_PRODUCTID_CART.REQUEST,
    fetchProductByProductId
  );
  yield takeEvery(FETCH_INVENTORY_OF_ITEM_CART.REQUEST, fetchInventoryByItemId);
}

export default cartSaga;
