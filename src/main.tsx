import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './layouts/Layout';
import Message from './components/Message/Message';
import MainPage from "./pages/mainPage/MainPage";
import LoginPage from "./pages/loginPage/LoginPage";
import FavoritesPage from "./pages/favoritesPage/FavoritesPage";
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
        errorElement: <Message type='error' />,
        loader: async ({ params }) => {
          // console.log(typeof params.id);
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
    element: <Message type={'error'} />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
