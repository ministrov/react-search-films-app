import { useState } from "react";
import Button from "./components/button/Button.jsx";
import Header from "./components/header/Header";
import Heading from "./components/heading/Heading";
import Paragraph from "./components/paragraph/Paragraph";
import SearchInput from "./components/searchInput/SearchInput";
import FilmsList from "./components/filmsList/FilmsList";
import EnterFrom from "./components/enterForm/EnterFrom.jsx";
import useLocaleStorage from "./hooks/use-local-storage.hook.js";
import { links } from './const/const.js';

function App({ films }) {
  const [profiles, setProfiles] = useLocaleStorage('profiles');
  const [inputValue, setInputValue] = useState("");

  console.log(profiles);

  const onClickHandler = () => {
    console.log('button is clicked');
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(inputValue);
    // setProfiles(profiles.slice().push({ name: getLocation(inputValue), isLogged: true }));
    getLocation('');
  };

  const getLocation = (string) => {
    setInputValue(string);
  };

  // useEffect(() => {
  //   setProfiles(profiles.map((item) => ({
  //     ...item,
  //     isLogged: true
  //   })));
  // }, []);

  return (
    <main>
      <div className="top container">
        <Header
          links={links}
          // profile={  }
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

        <EnterFrom onSubmit={onSubmitHandler} onChange={getLocation}/>
      </div>
    </main>
  );
}

export default App
