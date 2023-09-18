import axios from 'axios';

import { authInterceptor } from './authInterceptor';
import { unauthorizedInterceptor } from './unauthorizedInterceptor';

export const axiosInstance = axios.create();

authInterceptor();
unauthorizedInterceptor();

export default axiosInstance;
