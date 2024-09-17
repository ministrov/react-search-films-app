import { useEffect } from "react";
import useLocaleStorage from "./hooks/use-local-storage.hook.js";
import Button from "./components/button/Button.jsx";
import Header from "./components/header/Header";
import Heading from "./components/heading/Heading";
import Paragraph from "./components/paragraph/Paragraph";
import SearchInput from "./components/searchInput/SearchInput";
import FilmsList from "./components/filmsList/FilmsList";
import EnterFrom from "./components/enterForm/EnterFrom.jsx";
import { links } from './const/const.js';

function App({ films }) {
  const [profiles, setProfiles] = useLocaleStorage('profiles');

  const onClickHandler = () => {
    console.log('button is clicked');
  };

  useEffect(() => {
    setProfiles(profiles);
    console.log(profiles);
  }, []);

  return (
    <main>
      <div className="top container">
        <Header
          links={links}
          profiles={profiles}
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
            />
          </div>
        </div>
        <div className='films-wrapper'>
          <FilmsList films={films} />
        </div>

        <EnterFrom />
      </div>
    </main>
  );
}

export default App
