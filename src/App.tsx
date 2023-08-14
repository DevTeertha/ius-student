import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

import { authGuard, notAuthGuard } from './shared/guard/auth/authGuard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: authGuard,
  },
  {
    path: '/login',
    element: <Login />,
    loader: notAuthGuard,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
