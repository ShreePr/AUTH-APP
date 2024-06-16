import { AxiosError, AxiosResponse } from "axios";

export interface User {
  id: string | undefined;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  signIn: (email: string, password: string) => Promise<void | AxiosError>;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
  signUp: (name: string, emailAddress: string, password: string) => Promise<void | AxiosResponse | AxiosError>;
}

export interface AuthProviderPropsInterface {
  children: React.ReactNode;
}

export type { AxiosError };
export type { AxiosResponse };
