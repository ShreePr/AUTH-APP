import { InternalAxiosRequestConfig } from "axios";
import TokenService from "../../services/token.service";

//ToDo: add intercepting logic
export const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = TokenService.getToken();
  config.headers.Authorization = `Bearer ${token}`;
  config.headers["Content-Type"] = "application/json, text/plain";
  return config;
};
