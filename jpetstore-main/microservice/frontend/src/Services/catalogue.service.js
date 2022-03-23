// import axios from "axios";
import { CATALOGUE_BASE_URL } from "../Constants/API";
import axiosInstance from "./interceptor";

export const CatalogueApi = {
  productsByCategory: (id) => {
    console.log("category: " + id);
    return axiosInstance.get(
      `/${CATALOGUE_BASE_URL}/api/product/category/${id}`
    );
    // return axiosInstance.get("api/item/EST-1");
  },
  getItemByItemId: (id) => {
    return axiosInstance.get(`/${CATALOGUE_BASE_URL}/api/item/${id}`);
  },
  getItemsByProductId: (productId) => {
    console.log("productid: " + productId);
    return axiosInstance.get(
      `/${CATALOGUE_BASE_URL}/api/item/product/${productId}`
    );
  },
  getProductByProductId: (productId) => {
    console.log("productid: " + productId);
    return axiosInstance.get(`/${CATALOGUE_BASE_URL}/api/product/${productId}`);
  },
  getInventoryByItemId: (itemId) => {
    return axiosInstance.get(`/${CATALOGUE_BASE_URL}/api/item/stock/${itemId}`);
  },
};
