import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { UserContextProvider } from './context/user-profile.context';
import axios from 'axios';
import Layout from './layouts/Layout';
import LoginPage from './pages/loginPage/LoginPage';
import MainPage from './pages/mainPage/MainPage';
import AboutPage from './pages/aboutPage/AboutPage';
import ContactsPage from './pages/contactsPage/ContactsPage';
import FavoritesPage from './pages/favoritesPage/FavoritesPage';
import Message from './components/message/Message';
import Spinner from './components/spinner/Spinner';
import RequireAuth from './helpers/RequireAuth';
import { store } from './store/store';
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
        element: <RequireAuth><MainPage /></RequireAuth>
      },
      {
        path: '/movie/:id',
        element: <Suspense fallback={<Spinner />}><MoviePage /></Suspense>,
        errorElement: <Message type='error' />,
        loader: async ({ params }) => {
          const { data } = await axios.get(`${PREFIX}?tt=${params.id}`);
          return data;
        }
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'favorites',
        element: <RequireAuth><FavoritesPage /></RequireAuth>
      },
      {
        path: 'contacts',
        element: <ContactsPage />
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
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </Provider>
  </StrictMode>,
)
