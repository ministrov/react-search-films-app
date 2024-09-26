import { useState } from "react";
import Button from "./components/button/Button";
import Header from "./components/header/Header";
import Heading from "./components/heading/Heading";
import Paragraph from "./components/paragraph/Paragraph";
import SearchInput from "./components/searchInput/SearchInput";
import FilmsList from "./components/filmsList/FilmsList";
// import EnterFrom from "./components/enterForm/EnterFrom";
import useLocaleStorage from "./hooks/use-local-storage.hook";
import { links } from './const/const';
import { IFilms } from "./types";

type AppProps = {
  films: IFilms[];
}

function App({ films }: AppProps) {
  const [profiles, setProfiles] = useLocaleStorage('user-profile');
  const [inputValue, setInputValue] = useState('');
  const [profile, setProfile] = useState({});
  const [isLogged, setIsLogged] = useState(true);

  const onClickHandler = () => {
    setIsLogged(false);
  };

  const onSubmitHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!profiles && profiles !== 'undefined') {
      setProfiles([{ name: inputValue.trim(), isLogged: true }]);
    } else {
      // setProfiles([...profiles, { name: inputValue.trim(), isLogged: true }]);
      // setProfile(...profiles);
    }
  };

  const getInputValue = (string: string) => {
    setInputValue(string);
  };

  return (
    <main>
      <div className='top container'>
        <Header
          links={links}
          profile={profile}
          onClick={onClickHandler}
          isLogged={isLogged}
        />
      </div>
      <div className='container'>
        <div className='left-box'>
          <Heading text={'Поиск'} />
          <Paragraph>
            Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
          </Paragraph>
          <div className='left-box-bottom'>
            <SearchInput />
            <Button
              content={'Искать'}
              onClick={onClickHandler} 
              className={null} />
          </div>
        </div>
        <div className='films-wrapper'>
          <FilmsList films={films} />
        </div>

        {/* <EnterFrom onSubmit={onSubmitHandler} onChange={getInputValue} /> */}
      </div>
    </main>
  );
}

export default App;