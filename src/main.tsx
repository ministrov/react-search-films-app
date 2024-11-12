import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
// import axios from 'axios';
import Layout from './layouts/Layout';
import LoginPage from './pages/loginPage/LoginPage';
import MainPage from "./pages/mainPage/MainPage";
import FavoritesPage from './pages/favoritesPage/FavoritesPage';
import MoviePage from './pages/moviePage/MoviePage';
import Message from './components/Message/Message';
import Spinner from './components/spinner/Spinner';
import RequireAuth from './helpers/RequireAuth';
import { store } from './store/store';
import './index.css';

// const MoviePage = lazy(() => import('./pages/moviePage/MoviePage'));

// const PREFIX = 'https://search.imdbot.workers.dev/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <RequireAuth><MainPage /></RequireAuth>
      },
      {
        path: '/movie/:id',
        element: <Suspense fallback={<Spinner />}><MoviePage /></Suspense>,
        errorElement: <Message type='error' />,
        // loader: async ({ params }) => {
        //   // return defer({
        //   //   data: await axios.get(`${PREFIX}?tt=${params.id}`)
        //   // });
        //   const { data } = await axios.get(`${PREFIX}?tt=${params.id}`);
        //   return data;
        // }
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'favorites',
        element: <RequireAuth><FavoritesPage /></RequireAuth>
      },
    ]
  },
  {
    path: '*',
    element: <Message type={'error'} />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
