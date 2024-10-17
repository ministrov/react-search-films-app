import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { useHttpRequest } from './hooks/http.request.hook';
import Layout from './layouts/Layout';
import MainPage from "./pages/mainPage/MainPage";
import LoginPage from "./pages/loginPage/LoginPage";
import FavoritesPage from "./pages/favoritesPage/FavoritesPage";
import NotFound from './components/notFound/NotFound';
import MoviePage from './pages/moviePage/MoviePage';
import './index.css';

// const { request } = useHttpRequest();

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
      },
      {
        path: '/movie/:id',
        element: <MoviePage />,
        // loader: async ({ params }) => {
        //   const { data }: any = await fetch(`${PREFIX}${params.id}`);
        //   return data;
        // }
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
