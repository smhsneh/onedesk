import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  login as loginService,
  signup as signupService,
  getMe,
  updateMode as updateModeService,
} from "../services/authService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (userData) => {
    try {
      const data = await loginService(userData);

      localStorage.setItem("token", data.token);

      setUser(data.user);

      return data;
    } catch (error) {
      throw error;
    }
  };

  const signup = async (userData) => {
    try {
      const data = await signupService(userData);

      localStorage.setItem("token", data.token);

      setUser(data.user);

      return data;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const updateMode = async (mode) => {
    try {
      const updatedUser = await updateModeService(mode);

      setUser(updatedUser);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const restoreSession = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const data = await getMe();

        // Handle either:
        // { user: {...} }
        // OR directly {...}
        setUser(data.user || data);
      } catch (error) {
        console.error("Session restore failed:", error);

        localStorage.removeItem("token");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  const value = {
    user,
    setUser,
    loading,
    login,
    signup,
    logout,
    updateMode,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within an AuthProvider"
    );
  }

  return context;
};