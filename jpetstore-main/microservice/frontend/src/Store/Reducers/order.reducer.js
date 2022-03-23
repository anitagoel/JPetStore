import * as OrderActions from "../Actions/order.actions";

const initialState = {
  orders: [],
  order: {},
  fetchedLinteItems: [],
  paymentDetails: {},
  billingDetails: {},
  shippingDetails: {},
  lineItems: [],
  confirmOrderDetails: {},
  orderDetails: {},
  nextId: "",
  getOrders: false,
  getOrder: false,
  getNextId: false,
  settingPaymentDetails: false,
  settingBillingDetails: false,
  settingShippingDetails: false,
  settingConfirmOrderDetails: false,
  getLineItems: false,
  errorLineItems: null,
  errorNextId: null,
  errorOrders: null,
  errorOrder: null,
  placingOrder: false,
  errorPlacingOrder: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OrderActions.GET_ORDER.REQUEST:
      return {
        ...state,
        getOrders: true,
      };
    case OrderActions.GET_ORDER.SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        orders: action.payload.data,
        getOrders: false,
      };
    case OrderActions.GET_ORDER.FAILURE:
      return {
        ...state,
        getOrders: false,
        errorOrders: action.payload,
      };
    case OrderActions.GET_ORDER_BY_ORDERID.REQUEST:
      return {
        ...state,
        getOrder: true,
      };
    case OrderActions.GET_ORDER_BY_ORDERID.SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        order: action.payload.data,
        getOrder: false,
      };
    case OrderActions.GET_ORDER_BY_ORDERID.FAILURE:
      console.log(action.payload);
      return {
        ...state,
        getOrder: false,
        errorOrder: action.payload,
      };
    case OrderActions.GET_LINEITEMS.REQUEST:
      return {
        ...state,
        getLineItems: true,
      };
    case OrderActions.GET_LINEITEMS.SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        fetchedLinteItems: action.payload.data,
        getLineItems: false,
      };
    case OrderActions.GET_LINEITEMS.FAILURE:
      console.log(action.payload);
      return {
        ...state,
        getLineItems: false,
        errorLineItems: action.payload,
      };
    case OrderActions.PLACE_ORDER.REQUEST:
      return {
        ...state,
        placingOrder: true,
      };
    case OrderActions.PLACE_ORDER.SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        orderDetails: action.payload.data,
        placingOrder: false,
      };
    case OrderActions.PLACE_ORDER.FAILURE:
      return {
        ...state,
        placingOrder: false,
        errorPlacingOrder: action.payload,
      };
    case OrderActions.SET_LINEITEMS:
      return {
        ...state,
        lineItems: action.payload,
      };
    case OrderActions.SET_PAYMENT_DETAILS:
      return {
        ...state,
        paymentDetails: action.payload,
      };
    case OrderActions.SET_BILLING_DETAILS:
      return {
        ...state,
        billingDetails: action.payload,
      };
    case OrderActions.SET_SHIPPING_DETAILS:
      return {
        ...state,
        shippingDetails: action.payload,
      };
    default:
      return state;
  }
}
