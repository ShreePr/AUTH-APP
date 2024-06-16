import cookieService from "./cookie.service";
import { JwtPayload, jwtDecode } from "jwt-decode";

const TOKEN_KEY = "token";
const TokenService = {
  getToken: (key: string = TOKEN_KEY): string | undefined => cookieService.getCookie(key),
  setToken: (key: string = TOKEN_KEY, token: string, options?: { path: string | undefined; expires: number | Date | undefined }): string | undefined => cookieService.setCookie(key, token, options),
  isTokenValid: async (token: string): Promise<boolean> => {
    return true;
  },
  removeToken: (key: string = TOKEN_KEY): void => cookieService.removeCookie(key),
  decodeToken: (token: string) => jwtDecode<JwtPayload>(token)
};

export default TokenService;
