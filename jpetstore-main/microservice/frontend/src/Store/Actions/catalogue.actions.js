import { createRequestTypes, action } from "../../Utils/redux";

export const FETCH_PRODUCTS = createRequestTypes("FETCH_PRODUCTS");
export const FETCH_ITEM = createRequestTypes("FETCH_ITEM");
export const FETCH_ITEM_BY_PRODUCTID = createRequestTypes(
  "FETCH_ITEM_BY_PRODUCTID"
);
export const FETCH_PRODUCT_BY_PRODUCTID = createRequestTypes(
  "FETCH_PRODUCT_BY_PRODUCTID"
);
export const FETCH_INVENTORY_OF_ITEM = createRequestTypes(
  "FETCH_INVENTORY_OF_ITEM"
);

export const getProductByCategory = {
  request: (category) => action(FETCH_PRODUCTS.REQUEST, category),
  success: (products) => action(FETCH_PRODUCTS.SUCCESS, products),
  failure: (error) => action(FETCH_PRODUCTS.FAILURE, error),
};

export const getItemByItemId = {
  request: (category) => action(FETCH_ITEM.REQUEST, category),
  success: (products) => action(FETCH_ITEM.SUCCESS, products),
  failure: (error) => action(FETCH_ITEM.FAILURE, error),
};

export const getItemsByProductId = {
  request: (category) => action(FETCH_ITEM_BY_PRODUCTID.REQUEST, category),
  success: (products) => action(FETCH_ITEM_BY_PRODUCTID.SUCCESS, products),
  failure: (error) => action(FETCH_ITEM_BY_PRODUCTID.FAILURE, error),
};

export const getProductByProductId = {
  request: (category) => action(FETCH_PRODUCT_BY_PRODUCTID.REQUEST, category),
  success: (products) => action(FETCH_PRODUCT_BY_PRODUCTID.SUCCESS, products),
  failure: (error) => action(FETCH_PRODUCT_BY_PRODUCTID.FAILURE, error),
};

export const getInventoryByItemId = {
  request: (category) => action(FETCH_INVENTORY_OF_ITEM.REQUEST, category),
  success: (products) => action(FETCH_INVENTORY_OF_ITEM.SUCCESS, products),
  failure: (error) => action(FETCH_INVENTORY_OF_ITEM.FAILURE, error),
};
