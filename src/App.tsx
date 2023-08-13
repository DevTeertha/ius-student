import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import AuthGuard from './shared/guard/auth/AuthGuard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthGuard element={<Home />} />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
