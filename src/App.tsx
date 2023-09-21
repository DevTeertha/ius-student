import './App.css';

import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from './pages/Home';
import Login from './pages/Login';
import AddStudent from './pages/dashboard/AddStudent';

import { authGuard, notAuthGuard } from './shared/guard/auth/authGuard';

import Toast, { ToastContext } from './shared/components/toast/Toast';

import { EToastStatusType } from './shared/interface/toast.interface';
import StudentProfileComponent from './components/student/StudentProfileComponent';
import { getToken } from './shared/service/storageService';

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
    path: '/students/add',
    element: <AddStudent />,
    loader: authGuard,
  },
  {
    path: '/students/edit/:studentId',
    element: <AddStudent />,
    loader: authGuard,
  },
  {
    path: '/login',
    element: <Login />,
    loader: notAuthGuard,
  },
]);

interface IStateContext {
  adminState: [boolean, Dispatch<SetStateAction<boolean>>];
}

const client = new QueryClient();
export const StateContext = createContext<IStateContext | any>(null);

function App() {
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [isAdmin, setIsAdmin] = useState(getToken() ? true : false);

  return (
    <QueryClientProvider client={client}>
      <StateContext.Provider
        value={{
          adminState: [isAdmin, setIsAdmin],
        }}>
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
      </StateContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
