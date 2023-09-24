import Axios, { AxiosResponse } from 'axios';

import { ILoginPayload, ILoginResponse } from './login.interface';
import { IHttpResponse } from '../../../shared/interface/httpResponse.interface';

import { API_URL } from '../../../shared/constant/apiConstant';

export const postLogin = async (payload: ILoginPayload): Promise<IHttpResponse<ILoginResponse>> => {
  try {
    const loginResponse: AxiosResponse<IHttpResponse<ILoginResponse>> = await Axios.post(`${API_URL}/auth/login`, payload);
    return loginResponse.data;
  } catch (error) {
    throw error;
  }
};
