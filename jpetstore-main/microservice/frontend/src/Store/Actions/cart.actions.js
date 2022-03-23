import { createRequestTypes, action } from "../../Utils/redux";

export const UPDATE_CART = createRequestTypes("UPDATE_CART");
export const EMPTY_CART = "EMPTY_CART";

export const FETCH_PRODUCT_BY_PRODUCTID_CART = createRequestTypes(
  "FETCH_PRODUCT_BY_PRODUCTID_CART"
);
export const FETCH_INVENTORY_OF_ITEM_CART = createRequestTypes(
  "FETCH_INVENTORY_OF_ITEM_CART"
);
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const UPDATE_QUANTITY_OF_ITEM = "UPDATE_QUANTITY_OF_ITEM";

export const updateQuantityOfItem = {
  request: (data) => action(UPDATE_QUANTITY_OF_ITEM, data),
};

export const getProductByProductId = {
  request: (category) =>
    action(FETCH_PRODUCT_BY_PRODUCTID_CART.REQUEST, category),
  success: (products) =>
    action(FETCH_PRODUCT_BY_PRODUCTID_CART.SUCCESS, products),
  failure: (error) => action(FETCH_PRODUCT_BY_PRODUCTID_CART.FAILURE, error),
};

export const getInventoryByItemId = {
  request: (category) => action(FETCH_INVENTORY_OF_ITEM_CART.REQUEST, category),
  success: (products) => action(FETCH_INVENTORY_OF_ITEM_CART.SUCCESS, products),
  failure: (error) => action(FETCH_INVENTORY_OF_ITEM_CART.FAILURE, error),
};

export const emptyCart = {
  request: () => action(EMPTY_CART),
};

export const setCartItem = {
  request: (data) => action(ADD_ITEM, data),
};

export const removeItemFromCart = {
  request: (data) => action(REMOVE_ITEM, data),
};
