import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import LoginPage from "./pages/loginPage/LoginPage";
import { IFilms } from "./types";

type AppProps = {
  films: IFilms[];
}

function App({ films }: AppProps) {
  

  return (
    <Routes>
      <Route path="/" element={<MainPage films={films}/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>  
  );
}

export default App;