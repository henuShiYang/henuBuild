import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Edit from '@/pages/edit/index';

const Index = React.lazy(() => import('@/pages/index'));

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/edit',
    element: <Edit />,
  },
]);

const Router = () => {
  return <RouterProvider router={routerConfig} />;
};
export default Router;
