// import axios from "axios";
import { CATALOGUE_BASE_URL } from "../Constants/API";
import axiosInstance from "./interceptor";

export const SearchApi = {
  productsByKeyword: (keyword) => {
    console.log("keyword: " + keyword);
    return axiosInstance.post(`/${CATALOGUE_BASE_URL}/api/product/search`, {
      keyword: keyword,
    });
  },
};
