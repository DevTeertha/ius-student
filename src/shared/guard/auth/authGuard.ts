import { redirect } from 'react-router-dom';

import { getToken } from '../../service/storageService';

export const authGuard = () => {
  const token = getToken();

  if (!token) {
    return redirect('/login');
  }

  return null;
};

export const notAuthGuard = () => {
  const token = getToken();

  if (token) {
    return redirect('/');
  }

  return null;
};
