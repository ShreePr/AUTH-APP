import Cookies, { CookieAttributes } from "js-cookie";

const CookieService = {
  getCookie: (name: string): string | undefined => Cookies.get(name),
  setCookie: (name: string, value: string, options?: CookieAttributes): string | undefined => Cookies.set(name, value, options),
  removeCookie: (name: string, options?: CookieAttributes): void => Cookies.remove(name, options)
};

export default CookieService;
