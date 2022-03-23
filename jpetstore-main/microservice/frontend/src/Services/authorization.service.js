import axiosInstance from "./interceptor";
import { ACCOUNT_BASE_URL } from "../Constants/API";

export const AuthorizationApi = {
  validateCredentials: (credentials) => {
    console.log("Credentials: " + credentials.username + credentials.password);
    const reqBody = {
      username: credentials.username,
      password: credentials.password,
    };
    return axiosInstance.post(`/${ACCOUNT_BASE_URL}/api/signin`, reqBody);
  },
  saveCredentials: (accountDetails) => {
    return axiosInstance.post(
      `/${ACCOUNT_BASE_URL}/api/signup`,
      accountDetails
    );
  },
  profileFromUserId: (userId) => {
    return axiosInstance.get(`/${ACCOUNT_BASE_URL}/api/profile/${userId}`);
  },
  accountFromUserId: (userId) => {
    return axiosInstance.get(`/${ACCOUNT_BASE_URL}/api/account/${userId}`);
  },
  bannerData: (category) => {
    return axiosInstance.get(`/${ACCOUNT_BASE_URL}/api/bannerdata/${category}`);
  },
};
