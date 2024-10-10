import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Heading from "../../components/heading/Heading";
import Paragraph from "../../components/paragraph/Paragraph";
import SearchInput from "../../components/searchInput/SearchInput";
// import FilmsList from "../../components/filmsList/FilmsList";
import { FilmsDescription } from "../../interfaces/films-description.interface";
import { useParams } from "react-router-dom";
// import { PREFIX } from "../../const/const";

const PREFIX = 'https://search.imdbot.workers.dev';

export default function MainPage() {
  const [isLogged, setIsLogged] = useState(true);
  const [films, setFilms] = useState<FilmsDescription[]>([]);
  // const params = useParams();
  // console.log(params);

  const getFilms = async () => {
    try {
      const res = await fetch(`${PREFIX}?q=${'#'}`);
      if (!res.ok) {
        return;
      }
      const data = await res.json() as FilmsDescription[];
      setFilms(data);

    } catch (e) {
      console.error(e);
      return;
    }
  };

  useEffect(() => {
    // getFilms();
    console.log(films);
  }, []);

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
        {/* <FilmsList films={films} /> */}
      </div>
    </section>
  )
}
