import { call, put, takeLatest } from "redux-saga/effects";
import { CatalogueApi } from "../../Services/catalogue.service";
import {
  FETCH_PRODUCTS,
  getProductByCategory,
  getItemByItemId,
  getItemsByProductId,
  FETCH_ITEM,
  FETCH_ITEM_BY_PRODUCTID,
  FETCH_INVENTORY_OF_ITEM,
  getInventoryByItemId,
  getProductByProductId,
  FETCH_PRODUCT_BY_PRODUCTID,
} from "../Actions/catalogue.actions";

function* fetchProductsByCategory(action) {
  try {
    const data = yield call(CatalogueApi.productsByCategory, action.payload);
    console.log("inside saga: " + data);
    yield put(getProductByCategory.success(data));
  } catch (e) {
    yield put(getProductByCategory.failure(e));
  }
}

function* fetchItemByItemId(action) {
  try {
    const data = yield call(CatalogueApi.getItemByItemId, action.payload);
    console.log("inside saga: " + data);
    yield put(getItemByItemId.success(data));
  } catch (e) {
    console.log(e);
    yield put(getItemByItemId.failure(e));
  }
}

function* fetchItemsByProductId(action) {
  try {
    const data = yield call(CatalogueApi.getItemsByProductId, action.payload);
    console.log("data: " + data);
    yield put(getItemsByProductId.success(data));
  } catch (e) {
    yield put(getItemsByProductId.failure(e));
  }
}

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

function* catalogueSaga() {
  yield takeLatest(FETCH_PRODUCTS.REQUEST, fetchProductsByCategory);
  yield takeLatest(FETCH_ITEM.REQUEST, fetchItemByItemId);
  yield takeLatest(FETCH_ITEM_BY_PRODUCTID.REQUEST, fetchItemsByProductId);
  yield takeLatest(FETCH_INVENTORY_OF_ITEM.REQUEST, fetchInventoryByItemId);
  yield takeLatest(FETCH_PRODUCT_BY_PRODUCTID.REQUEST, fetchProductByProductId);
}

export default catalogueSaga;
