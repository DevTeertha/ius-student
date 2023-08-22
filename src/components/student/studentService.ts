import Axios, { AxiosResponse } from 'axios';
import { IHttpResponse } from '../../shared/interface/httpResponse.interface';
import { IAddStudentPayload } from './interface/student.interface';

const apiEndPoint = 'http://localhost:8081/api';

export const createStudent = async (payload: IAddStudentPayload): Promise<IHttpResponse<IAddStudentPayload>> => {
  try {
    const loginResponse: AxiosResponse<IHttpResponse<IAddStudentPayload>> = await Axios.post(`${apiEndPoint}/students`, { data: payload });
    return loginResponse.data;
  } catch (error) {
    throw error;
  }
};
