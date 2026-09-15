import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import HomePage from '../Pages/HomePage/HomePage';
import Login from '../Pages/LoginPage/Login';
import Dashboard from '../Pages/Dashboard/Dashboard';

// =================== Admin Route ========================
import AdminOverview from '../Pages/Dashboard/Admin/Overview';
import AdminProducts from '../Pages/Dashboard/Admin/Products';
import AdminOrders from '../Pages/Dashboard/Admin/Orders';
import Users from '../Pages/Dashboard/Admin/Users';
import Analytics from '../Pages/Dashboard/Admin/Analytics';
import AdminUsers from '../Pages/Dashboard/Admin/Users';
import AdminAnalytics from '../Pages/Dashboard/Admin/Analytics';
import Signup from '../Pages/SignupPage/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
  {
    path: '/admin',
    element: <Dashboard />,
    children: [
      {
        path: 'overview',
        element: <AdminOverview />,
      },
      {
        path: 'products',
        element: <AdminProducts />,
      },
      {
        path: 'orders',
        element: <AdminOrders />,
      },
      {
        path: 'users',
        element: <AdminUsers />,
      },
      {
        path: 'analytics',
        element: <AdminAnalytics />,
      },
    ],
  },
]);

export default router;
