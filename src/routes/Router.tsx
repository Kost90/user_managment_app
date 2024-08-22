import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { usersLoader } from '@/pages/users_page/userLoader';
import { userDetailLoader } from '@/pages/user_details_page/userDetailLoader';
import { editUserAction } from '@/pages/edit_user_page/editeUserAction';

const HomePage = lazy(() => import('@/pages/home_page/Home.page'));
const UsersPage = lazy(() => import('../pages/users_page/Users.page'));
const UserDetailsPage = lazy(() => import('@/pages/user_details_page/User.details.page'));
const EditUserPage = lazy(() => import('@/pages/edit_user_page/Edit.user.page'));
const RootLayout = lazy(() => import('../layouts/RootLayout'));
const ErrorPage = lazy(() => import('../pages/error_page/Errore.page'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        errorElement: <ErrorPage />,
        children:[
          {
            index:true,
            element:<HomePage/>,
          },
          {
            path: 'users',
            element: <UsersPage/>,
            loader:usersLoader,
            
          },
          {
            path: 'users/userdetails/:id',
            element: <UserDetailsPage/>,
            loader:userDetailLoader,
          },
          {
            path: 'users/edit/:id',
            element: <EditUserPage/>,
            loader:userDetailLoader,
            action:editUserAction,
          },
        ]
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
