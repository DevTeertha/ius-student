// AuthGuard.tsx
import React, { useContext } from 'react';
import { Navigate, Route, RouteProps, useLocation } from 'react-router-dom';

import { AuthContext } from './authContext';

const AuthGuard: React.FC<RouteProps> = ({ element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();
  return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to='/login' state={{ from: location.pathname }} />;
};

export default AuthGuard;
