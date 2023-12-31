import { QueryFunctionContext } from 'react-query';
import { AxiosResponse } from 'axios';

import { axiosInstance } from '../../shared/interceptor';

import { IHttpResponse } from '../../shared/interface/httpResponse.interface';
import { IFileUploadResponse, IStudent, IStudentPaginationResponse } from './interface/student.interface';

import { API_URL } from '../../shared/constant/apiConstant';

export const createStudent = async (payload: IStudent): Promise<IHttpResponse<IStudent>> => {
  try {
    const loginResponse: AxiosResponse<IHttpResponse<IStudent>> = await axiosInstance.post(`${API_URL}/students`, payload);
    return loginResponse.data;
  } catch (error) {
    throw error;
  }
};

export const updateStudent = async (id: number, payload: IStudent): Promise<IHttpResponse<IStudent>> => {
  try {
    const updateResponse: AxiosResponse<IHttpResponse<IStudent>> = await axiosInstance.patch(`${API_URL}/students/${id}`, payload);
    return updateResponse.data;
  } catch (error) {
    throw error;
  }
};

export const deleteStudent = async (id: number): Promise<IHttpResponse<IStudent>> => {
  try {
    const deleteResponse: AxiosResponse<IHttpResponse<IStudent>> = await axiosInstance.delete(`${API_URL}/students/${id}`);
    return deleteResponse.data;
  } catch (error) {
    throw error;
  }
};

export const getStudents = async (key: QueryFunctionContext): Promise<IHttpResponse<IStudentPaginationResponse>> => {
  try {
    const params = key?.queryKey?.[1] ?? {};
    const studentResponse: AxiosResponse<IHttpResponse<IStudentPaginationResponse>> = await axiosInstance.get(`${API_URL}/students`, {
      params: { ...params },
    });
    return studentResponse.data;
  } catch (error) {
    throw error;
  }
};

export const getOneStudent = async (studentId?: string | null): Promise<IHttpResponse<IStudent>> => {
  try {
    const studentResponse: AxiosResponse<IHttpResponse<IStudent>> = await axiosInstance.get(`${API_URL}/students/${studentId}`);
    return studentResponse.data;
  } catch (error) {
    throw error;
  }
};

export const uploadImage = async (file: any): Promise<IHttpResponse<IFileUploadResponse>> => {
  try {
    const fileFormData = new FormData();
    fileFormData.append('file', file);
    const fileReponse: AxiosResponse<IHttpResponse<IFileUploadResponse>> = await axiosInstance.post(`${API_URL}/media`, fileFormData);
    return fileReponse.data;
  } catch (error) {
    throw error;
  }
};
