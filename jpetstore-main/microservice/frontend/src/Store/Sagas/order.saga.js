import { call, put, takeLatest } from "redux-saga/effects";
import { OrderApi } from "../../Services/order.service";

import { emptyCart, EMPTY_CART } from "../Actions/cart.actions";

import {
  GET_ORDER,
  getOrdersByUserId,
  placeOrder,
  PLACE_ORDER,
  getOrderByOrderId,
  GET_ORDER_BY_ORDERID,
  getLineItemsByOrderId,
  GET_LINEITEMS,
} from "../Actions/order.actions";

function* fetchOrdersByUserId(action) {
  try {
    const data = yield call(OrderApi.ordersByUserId, action.payload);

    yield put(getOrdersByUserId.success(data));
  } catch (e) {
    yield put(getOrdersByUserId.failure(e));
  }
}

function* fetchOrderByOrderId(action) {
  try {
    console.log("Action.payload: ", action);
    const data = yield call(OrderApi.orderByOrderId, action.payload);

    yield put(getOrderByOrderId.success(data));
  } catch (e) {
    console.log("e: ", e);
    yield put(getOrderByOrderId.failure(e));
  }
}

function* fetchLineItemsByOrderId(action) {
  try {
    const data = yield call(OrderApi.lineItemsByOrderId, action.payload);

    yield put(getLineItemsByOrderId.success(data));
  } catch (e) {
    console.log("e: ", e);
    yield put(getLineItemsByOrderId.failure(e));
  }
}

function* placeOrderSaga(action) {
  try {
    const data = yield call(OrderApi.placeOrder, action.payload);

    yield put(placeOrder.success(data));
    yield put(emptyCart.request());
  } catch (e) {
    yield put(placeOrder.failure(e));
  }
}

function* orderSaga() {
  yield takeLatest(GET_ORDER.REQUEST, fetchOrdersByUserId);
  yield takeLatest(GET_ORDER_BY_ORDERID.REQUEST, fetchOrderByOrderId);
  yield takeLatest(GET_LINEITEMS.REQUEST, fetchLineItemsByOrderId);
  yield takeLatest(PLACE_ORDER.REQUEST, placeOrderSaga);
}

export default orderSaga;
