import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClassicPage from './components/ClassicPage/ClassicPage.jsx';
import DevilFruitPage from './components/DevilFruitPage/DevilFruitPage.jsx';
import WantedPage from './components/WantedPage/WantedPage.jsx';
import LaughPage from './components/LaughPage/LaughPage.jsx';

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
);
