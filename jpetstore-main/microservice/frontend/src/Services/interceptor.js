import axios from "axios";
import { BASE_URL } from "../Constants/API";

const axiosInstance = axios.create({
  // baseURL: BASE_URL,
});

const requestHandler = (request) => {
  return request;
};

const errorHandler = async (error) => {
  if (error.response.status === 401) {
    window.location.href = "/401";
  }
  if (error.response.status === 403) {
    window.location.href = "/403";
  }
  if (error.response.status === 404) {
    console.log(error);
    // window.location.href = "/404";
  }

  if (error.response.status >= 400) {
    await Promise.reject(error.response);
  }
};

const successHandler = (response) => {
  return response;
};

axiosInstance.interceptors.request.use((request) => requestHandler(request));
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
