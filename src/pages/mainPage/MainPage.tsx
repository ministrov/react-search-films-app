import { ChangeEvent, useEffect, useState } from "react";
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
  const [search, setSearch] = useState<string>('');
  // const params = useParams();
  // console.log(params);

  useEffect(() => {
    const getFilms = async (name?: string) => {
      try {
        const res = await fetch(`${PREFIX}?q=${search}`);
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
    // getFilms();
    console.log(films);
  }, []);

  const updateFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  const onClickHandler = () => {
    console.log('click');
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
          <SearchInput onChange={updateFilter} value={search} />
          <Button
            // onClick={onClickHandler}
            className={null}>
            Искать
          </Button>
        </div>
      </div>
      <div className='films-wrapper'>
        {/* <FilmsList films={films} /> */}
      </div>
    </section>
  )
}
