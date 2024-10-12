import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './layouts/Layout';
import MainPage from "./pages/mainPage/MainPage";
import LoginPage from "./pages/loginPage/LoginPage";
import FavoritesPage from "./pages/favoritesPage/FavoritesPage";
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/favorites',
        element: <FavoritesPage />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
