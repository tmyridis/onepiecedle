import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClassicPage from './components/ClassicPage/ClassicPage.jsx';
import DevilFruitPage from './components/DevilFruitPage/DevilFruitPage.jsx';
import WantedPage from './components/WantedPage/WantedPage.jsx';
import LaughPage from './components/LaughPage/LaughPage.jsx';
import ErrorPage from './components/UI/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/classic',
    element: <ClassicPage />,
  },
  {
    path: '/devilfruit',
    element: <DevilFruitPage />,
  },
  {
    path: '/wanted',
    element: <WantedPage />,
  },
  {
    path: '/laugh',
    element: <LaughPage />,
  },
  {
    path: '/*',
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
);
