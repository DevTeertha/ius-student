import React, { createContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

const AuthProvider: React.FC = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
