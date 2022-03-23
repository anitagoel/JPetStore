// import axios from "axios";
import { ORDER_BASE_URL } from "../Constants/API";
import axiosInstance from "./interceptor";

export const OrderApi = {
  ordersByUserId: (userId) => {
    console.log("userid: " + userId);
    return axiosInstance.get(`/${ORDER_BASE_URL}/api/order/user/${userId}`);
  },
  orderByOrderId: (orderId) => {
    console.log("orderId inside service: " + orderId);
    return axiosInstance.get(`/${ORDER_BASE_URL}/api/order/${orderId}`);
  },
  lineItemsByOrderId: (orderId) => {
    return axiosInstance.get(`/${ORDER_BASE_URL}/api/lineitem/${orderId}`);
  },
  placeOrder: (orderDetails) => {
    console.log("orderDetails: " + orderDetails);
    return axiosInstance.post(`/${ORDER_BASE_URL}/api/order/new`, orderDetails);
  },
};
