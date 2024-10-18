import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './layouts/Layout';
import MainPage from "./pages/mainPage/MainPage";
import LoginPage from "./pages/loginPage/LoginPage";
import FavoritesPage from "./pages/favoritesPage/FavoritesPage";
import NotFound from './components/notFound/NotFound';
import MoviePage from './pages/moviePage/MoviePage';
import './index.css';

const PREFIX = 'https://search.imdbot.workers.dev/';

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
        path: '/movie/:id',
        element: <MoviePage />,
        errorElement: <>Something went wrong, sorry.....</>,
        loader: async ({ params }) => {
          console.log(typeof params.id);
          const { data } = await fetch(`${PREFIX}?tt=${params.id}`) as any;
          console.log(data);
          return data;
        }
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
