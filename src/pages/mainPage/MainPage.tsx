import { useState } from "react";
import Button from "../../components/button/Button";
// import Header from "../../components/header/Header";
import Heading from "../../components/heading/Heading";
import Paragraph from "../../components/paragraph/Paragraph";
import SearchInput from "../../components/searchInput/SearchInput";
import FilmsList from "../../components/filmsList/FilmsList";
// import EnterFrom from "../../components/enterForm/EnterFrom";
// import useLocaleStorage from "../../hooks/use-local-storage.hook";
import { IFilms } from "../../types";

type MainPageProps = {
  films: IFilms[]
}

export default function MainPage({ films }: MainPageProps) {
  const [isLogged, setIsLogged] = useState(true);

  const onClickHandler = () => {
    setIsLogged(false);
  };

  return (
    <section>
      <h2 className="visually-hidden">Главная страница поиска фильмов</h2>
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
    </section>
  )
}
