import axios from "axios";
import { setCookie, getCookie } from 'cookies-next';
import { ApiResponse } from './../models/AppModel';

// Cấu hình axios
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Interceptor cho request
axiosInstance.interceptors.request.use(
  async (config: any) => {
    // Lấy token từ cookie và thêm vào headers nếu có
    const token = getCookie("token");
    config.headers = {
      Authorization: token ? `Bearer ${token}` : undefined,
      ...config.headers,
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor cho response
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error:any) => {

    // // Xử lý lỗi toàn cục (ví dụ: xử lý lỗi 401, 500)
    // if (error.response?.status === 401) {
    //   // Nếu token hết hạn hoặc không hợp lệ, bạn có thể redirect đến trang login
    //   window.location.href = '/login';
    // }
    return Promise.reject(error.response.data);
  }
);

export default axiosInstance;
