import { createRequestTypes, action } from "../../Utils/redux";

export const SEARCH_KEYWORD = createRequestTypes("SEARCH_KEYWORD");

export const getProductBySearchKeyword = {
  request: (keyword) => action(SEARCH_KEYWORD.REQUEST, keyword),
  success: (products) => action(SEARCH_KEYWORD.SUCCESS, products),
  failure: (error) => action(SEARCH_KEYWORD.FAILURE, error),
};
