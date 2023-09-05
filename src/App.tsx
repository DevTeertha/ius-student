import './App.css';

import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/dashboard/Dashboard';
import AddStudent from './pages/dashboard/AddStudent';

import { authGuard, notAuthGuard } from './shared/guard/auth/authGuard';

import Toast, { ToastContext } from './shared/components/toast/Toast';

import { EToastStatusType } from './shared/interface/toast.interface';
import StudentProfileComponent from './components/student/StudentProfileComponent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/students/:studentId',
    element: <StudentProfileComponent />,
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

const client = new QueryClient();

function App() {
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  return (
    <QueryClientProvider client={client}>
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
    </QueryClientProvider>
  );
}

export default App;
