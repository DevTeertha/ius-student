import { AxiosError } from "axios";

import { axiosInstance } from ".";
import { clearStorage } from "../service/storageService";

export const unauthorizedInterceptor = () => axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError<any>) => {
      if(error?.response?.data?.statusCode === 401 || error?.response?.data?.message === 'Unauthorized'){
        clearStorage();
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );