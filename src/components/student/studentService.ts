import { AxiosResponse } from 'axios';
import { IHttpResponse } from '../../shared/interface/httpResponse.interface';
import { IAddStudentPayload } from './interface/student.interface';
import axiosInstance from '../../shared/interceptor/authInterceptor';

const apiEndPoint = 'http://localhost:8081/api';

export const createStudent = async (payload: IAddStudentPayload): Promise<IHttpResponse<IAddStudentPayload>> => {
  try {
    const loginResponse: AxiosResponse<IHttpResponse<IAddStudentPayload>> = await axiosInstance.post(`${apiEndPoint}/students`, payload);
    return loginResponse.data;
  } catch (error) {
    throw error;
  }
};
