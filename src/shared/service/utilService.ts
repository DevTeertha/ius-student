import Axios, { AxiosError } from 'axios';
import { IHttpResponse } from '../interface/httpResponse.interface';
import { getToken } from './storageService';

const globalError = {
  status: false,
  message: 'Something went wrong!',
  data: null,
};

export const getErrorResponse = <T>(error: any): IHttpResponse<any> => {
  if (Axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<IHttpResponse<T>>;
    if (axiosError.response) {
      return axiosError.response.data;
    } else {
      return globalError;
    }
  } else {
    return globalError;
  }
};

export const getHttpHeaders = () => {
  return {
    'Content-Type': 'application/json',
    Authorization: getToken(),
  };
};
