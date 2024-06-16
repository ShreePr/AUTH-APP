import dayjs from "dayjs";
import { ROUTES } from "../../navigation/CONSTANTS";
import React, { createContext, FC, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { post } from "../../services/api";
import { API } from "../../services/api/CONSTANTS";
import SessionStorageService from "../../services/sessionstorage.service";
import TokenService from "../../services/token.service";
import api from "../../axios/client"; // Import the custom Axios instance here
import { AuthContextType, AuthProviderPropsInterface, AxiosError, AxiosResponse, User } from "./auth-context-provider.interace";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthContextProvider: FC<AuthProviderPropsInterface> = ({ children }) => {
  const tokenKey = "token";
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const verifyToken = async () => {
    // Get token from storage and set it to the instance's headers
    setLoading(true);
    const storedToken = TokenService.getToken(tokenKey);
    const decodedToken = TokenService.decodeToken(storedToken ?? "");
    setUser({
      id: decodedToken.sub
    });
    const isInValid = await TokenService.isTokenValid(storedToken ?? "");
    setIsAuthenticated(isInValid);
    setToken(storedToken ?? null);
    if (!isInValid) {
      api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    } else if (isInValid) {
      navigate(ROUTES.SIGN_IN);
    }
    setLoading(false);
  };

  useEffect(() => {
    verifyToken().catch(() => {
      setLoading(false);
      !pathname.includes("auth") && navigate(ROUTES.SIGN_IN);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Add a response interceptor to handle unauthorized requests
    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          // Handle unauthorized requests here
          logout(); // Clear token and user data
        }
        return Promise.reject(error);
      }
    );

    return () => {
      // Remove the response interceptor when the component unmounts
      api.interceptors.response.eject(responseInterceptor);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = async (email: string, password: string): Promise<void | AxiosError> => {
    try {
      setLoading(true);
      const response = await post(API.SECURITY.TOKEN.CREATE, { email, password });
      const newToken = response?.data?.access_token;
      // Create a Day.js object from the Unix timestamp
      const expirationDate = dayjs.unix(TokenService.decodeToken(newToken).exp ?? 0);
      // Convert the Day.js object to a JavaScript Date object for the TokenService
      const expirationDateJS = expirationDate.toDate();

      TokenService.setToken(tokenKey, newToken, { path: "/", expires: expirationDateJS }); //to update as tokens exp time
      setToken(newToken);
      getUserData();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return error as AxiosError;
    }
  };

  const signUp = async (name: string, email: string, password: string): Promise<void | AxiosResponse | AxiosError> => {
    try {
      setLoading(true);
      const response = await post(API.SECURITY.ACCOUNT.RECOVERY.SIGNUP, { name, email, password });
      signIn(email, password);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      return error as AxiosError;
    }
  };

  const logout = (): void => {
    // Remove the token from the instance's headers on logout
    SessionStorageService.clear();
    TokenService.removeToken(tokenKey);
    delete api.defaults.headers.common["Authorization"];
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    setLoading(false);
    navigate(ROUTES.SIGN_IN);
  };

  const getUserData = async (): Promise<void> => {
    try {
      verifyToken().catch(() => {
        setLoading(false);
        navigate(ROUTES.SIGN_IN);
      });
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const contextValue: AuthContextType = {
    user,
    token,
    signIn,
    logout,
    isAuthenticated,
    loading,
    signUp
  };
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
