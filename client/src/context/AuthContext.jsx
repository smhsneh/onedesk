import { createContext, useContext, useEffect, useState } from "react";

import {
  login as loginService,
  signup as signupService,
  getMe,
} from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (userData) => {
    const data = await loginService(userData);

    localStorage.setItem("token", data.token);

    setUser(data.user);

    return data;
  };

  const signup = async (userData) => {
    const data = await signupService(userData);

    localStorage.setItem("token", data.token);

    setUser(data.user);

    return data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    const restoreSession = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const user = await getMe();
        setUser(user);
      } catch (error) {
        localStorage.removeItem("token");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};