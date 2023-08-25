import { AxiosResponse } from 'axios';
import { IHttpResponse } from '../../shared/interface/httpResponse.interface';
import { IStudent } from './interface/student.interface';
import axiosInstance from '../../shared/interceptor/authInterceptor';

const apiEndPoint = 'http://localhost:8081/api';

export const createStudent = async (payload: IStudent): Promise<IHttpResponse<IStudent>> => {
  try {
    const loginResponse: AxiosResponse<IHttpResponse<IStudent>> = await axiosInstance.post(`${apiEndPoint}/students`, payload);
    return loginResponse.data;
  } catch (error) {
    throw error;
  }
};

export const getStudents = async (): Promise<IHttpResponse<IStudent[]>> => {
  try {
    const loginResponse: AxiosResponse<IHttpResponse<IStudent[]>> = await axiosInstance.get(`${apiEndPoint}/students`);
    return loginResponse.data;
  } catch (error) {
    throw error;
  }
};
