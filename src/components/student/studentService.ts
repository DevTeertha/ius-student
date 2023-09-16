import { QueryFunctionContext } from 'react-query';
import axios, { AxiosResponse } from 'axios';

import { axiosInstance } from '../../shared/interceptor';

import { IHttpResponse } from '../../shared/interface/httpResponse.interface';
import { IFileUploadResponse, IStudent, IStudentPaginationResponse } from './interface/student.interface';
import { getToken } from '../../shared/service/storageService';

export const createStudent = async (payload: IStudent): Promise<IHttpResponse<IStudent>> => {
  try {
    const loginResponse: AxiosResponse<IHttpResponse<IStudent>> = await axiosInstance.post(`/students`, payload);
    return loginResponse.data;
  } catch (error) {
    throw error;
  }
};

export const getStudents = async (key: QueryFunctionContext): Promise<IHttpResponse<IStudentPaginationResponse>> => {
  try {
    const params = key?.queryKey?.[1] ?? {};
    const studentResponse: AxiosResponse<IHttpResponse<IStudentPaginationResponse>> = await axios.get(`/students`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        Accept: 'application/json',
      },
      params: { ...params },
    });
    return studentResponse.data;
  } catch (error) {
    throw error;
  }
};

export const getOneStudent = async (studentId?: string): Promise<IHttpResponse<IStudent>> => {
  try {
    const studentResponse: AxiosResponse<IHttpResponse<IStudent>> = await axiosInstance.get(`/students/${studentId}`);
    return studentResponse.data;
  } catch (error) {
    throw error;
  }
};

export const uploadImage = async (file: any): Promise<IHttpResponse<IFileUploadResponse>> => {
  try {
    const fileFormData = new FormData();
    fileFormData.append('file', file);
    const fileReponse: AxiosResponse<IHttpResponse<IFileUploadResponse>> = await axiosInstance.post(`/media`, fileFormData);
    return fileReponse.data;
  } catch (error) {
    throw error;
  }
};
