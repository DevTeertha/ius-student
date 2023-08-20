import './App.css';

import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/dashboard/Dashboard';
import AddStudent from './pages/dashboard/AddStudent';

import { authGuard, notAuthGuard } from './shared/guard/auth/authGuard';

import Toast, { ToastContext } from './shared/components/toast/Toast';

import { EToastStatusType } from './shared/interface/toast.interface';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    loader: authGuard,
  },
  {
    path: '/dashboard/add-student',
    element: <AddStudent />,
    loader: authGuard,
  },
  {
    path: '/login',
    element: <Login />,
    loader: notAuthGuard,
  },
]);

function App() {
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  return (
    <ToastContext.Provider
      value={{
        errorState: [isError, setIsError],
        successState: [isSuccess, setIsSuccess],
        messageState: [message, setMessage],
      }}>
      {isSuccess && <Toast status={EToastStatusType.SUCCESS} state={[isSuccess, setIsSuccess]} message={message} />}
      {isError && <Toast status={EToastStatusType.ERROR} state={[isError, setIsError]} message={message} />}
      <RouterProvider router={router} />
    </ToastContext.Provider>
  );
}

export default App;
