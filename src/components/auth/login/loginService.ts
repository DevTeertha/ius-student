import Axios, { AxiosResponse } from 'axios';

import { ILoginPayload, ILoginResponse } from './login.interface';
import { IHttpResponse } from '../../../shared/interface/httpResponse.interface';

const apiEndPoint = 'http://localhost:8081/api';

export const postLogin = async (payload: ILoginPayload): Promise<IHttpResponse<ILoginResponse>> => {
  try {
    const loginResponse: AxiosResponse<IHttpResponse<ILoginResponse>> = await Axios.post(`${apiEndPoint}/auth/login`, payload);
    return loginResponse.data;
  } catch (error) {
    throw error;
  }
};
