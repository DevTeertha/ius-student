import { axiosInstance } from '.';

import { getToken } from '../service/storageService';

export const authInterceptor = () =>
  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers['Accept'] = 'application/json';
      config.headers['Authorization'] = `Bearer ${getToken()}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
