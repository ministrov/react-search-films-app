import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import { IMovie } from './interfaces/movie.interface';
import Layout from './layouts/Layout';
import Message from './components/Message/Message';
import Spinner from './components/spinner/Spinner';
import LoginPage from './pages/loginPage/LoginPage';
import FavoritesPage from './pages/favoritesPage/FavoritesPage';
import MainPage from "./pages/mainPage/MainPage";
import { UserProfileContextProvider } from './context/user-profile.context';
import './index.css';

const MoviePage = lazy(() => import('./pages/moviePage/MoviePage'));

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
        element: <Suspense fallback={<Spinner />}><MoviePage /></Suspense>,
        errorElement: <Message type='error' />,
        loader: async ({ params }) => {
          return defer({
            data: await fetch(`${PREFIX}?tt=${params.id}`).then(data => data.json()) as IMovie
          });
          // // console.log(typeof params.id);
          // const { data } = await fetch(`${PREFIX}?tt=${params.id}`) as any;
          // console.log(data);
          // return data;
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
    <UserProfileContextProvider>
      <RouterProvider router={router} />
    </UserProfileContextProvider>
  </StrictMode>,
)
