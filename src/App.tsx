import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import LoginPage from "./pages/loginPage/LoginPage";
import FavoritesPage from "./pages/favoritesPage/FavoritesPage";
import { IFilms } from "./types";
import { films } from "./const/const";

type AppProps = {
  films: IFilms[];
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage films={films} />
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/favorites',
    element: <FavoritesPage/>
  }
]);

function App({ films }: AppProps) {
  return (
    // <Routes>
    //   <Route path="/" element={<MainPage films={films}/>}/>
    //   <Route path="/login" element={<LoginPage/>}/>
    //   <Route path="/favorites" element={<FavoritesPage />}/>
    // </Routes>  
    <RouterProvider router={router}/>
  );
}

export default App;