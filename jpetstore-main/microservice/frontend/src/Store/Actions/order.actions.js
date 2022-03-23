import { createRequestTypes, action } from "../../Utils/redux";

export const GET_ORDER = createRequestTypes("GET_ORDER");
export const GET_ORDER_BY_ORDERID = createRequestTypes("GET_ORDER_BY_ORDERID");
export const PLACE_ORDER = createRequestTypes("PLACE_ORDER");
export const GET_LINEITEMS = createRequestTypes("GET_LINEITEMS");
export const SET_LINEITEMS = "SET_LINEITEMS";
export const SET_PAYMENT_DETAILS = "SET_PAYMENT_DETAILS";
export const SET_BILLING_DETAILS = "SET_BILLING_DETAILS";
export const SET_SHIPPING_DETAILS = "SET_SHIPPING_DETAILS";

export const getOrdersByUserId = {
  request: (userId) => action(GET_ORDER.REQUEST, userId),
  success: (orders) => action(GET_ORDER.SUCCESS, orders),
  failure: (error) => action(GET_ORDER.FAILURE, error),
};

export const getOrderByOrderId = {
  request: (orderId) => action(GET_ORDER_BY_ORDERID.REQUEST, orderId),
  success: (order) => action(GET_ORDER_BY_ORDERID.SUCCESS, order),
  failure: (error) => action(GET_ORDER_BY_ORDERID.FAILURE, error),
};

export const getLineItemsByOrderId = {
  request: (orderId) => action(GET_LINEITEMS.REQUEST, orderId),
  success: (lineItems) => action(GET_LINEITEMS.SUCCESS, lineItems),
  failure: (error) => action(GET_LINEITEMS.FAILURE, error),
};

export const placeOrder = {
  request: (orderDetails) => action(PLACE_ORDER.REQUEST, orderDetails),
  success: (data) => action(PLACE_ORDER.SUCCESS, data),
  failure: (error) => action(PLACE_ORDER.FAILURE, error),
};

export const setLineItems = {
  request: (lineItems) => action(SET_LINEITEMS, lineItems),
};

export const setPaymentDetails = {
  request: (paymentDetails) => action(SET_PAYMENT_DETAILS, paymentDetails),
};

export const setBillingDetails = {
  request: (billingDetails) => action(SET_BILLING_DETAILS, billingDetails),
};

export const setShippingDetails = {
  request: (shippingDetails) => action(SET_SHIPPING_DETAILS, shippingDetails),
};
