import { QueryFunctionContext } from 'react-query';
import { AxiosResponse } from 'axios';

import axiosInstance from '../../shared/interceptor/authInterceptor';

import { IHttpResponse } from '../../shared/interface/httpResponse.interface';
import { IFileUploadResponse, IStudent, IStudentPaginationResponse } from './interface/student.interface';

const apiEndPoint = 'http://localhost:8081/api';

export const createStudent = async (payload: IStudent): Promise<IHttpResponse<IStudent>> => {
  try {
    const loginResponse: AxiosResponse<IHttpResponse<IStudent>> = await axiosInstance.post(`${apiEndPoint}/students`, payload);
    return loginResponse.data;
  } catch (error) {
    throw error;
  }
};

export const getStudents = async (key: QueryFunctionContext): Promise<IHttpResponse<IStudentPaginationResponse>> => {
  try {
    const params = key?.queryKey?.[1] ?? {};
    const loginResponse: AxiosResponse<IHttpResponse<IStudentPaginationResponse>> = await axiosInstance.get(`${apiEndPoint}/students`, { params: { ...params } });
    return loginResponse.data;
  } catch (error) {
    throw error;
  }
};

export const uploadImage = async (file: any): Promise<IHttpResponse<IFileUploadResponse>> => {
  try {
    const fileFormData = new FormData();
    fileFormData.append('file', file);
    const fileReponse: AxiosResponse<IHttpResponse<IFileUploadResponse>> = await axiosInstance.post(`${apiEndPoint}/media`, fileFormData);
    return fileReponse.data;
  } catch (error) {
    throw error;
  }
};
