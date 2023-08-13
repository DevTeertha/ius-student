export interface IHttpResponse<T = any> {
  status: true;
  message: string;
  data: T;
}
