import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../components/button/Button";
import Heading from "../../components/heading/Heading";
import Paragraph from "../../components/paragraph/Paragraph";
import SearchInput from "../../components/searchInput/SearchInput";
import FilmsList from "../../components/filmsList/FilmsList";
import { useHttpRequest } from "../../hooks/http.request.hook";
import NotFound from "../../components/notFound/NotFound";
import Spinner from "../../components/spinner/Spinner";
import { FilmsDescription } from "../../interfaces/films-description.interface";

const PREFIX = 'https://search.imdbot.workers.dev/';

export default function MainPage() {
  const [films, setFilms] = useState<FilmsDescription[]>([]);
  const [search, setSearch] = useState<string>('');
  const { request, loading } = useHttpRequest();

  // console.log(loading);

  // useEffect(() => {
  //   request(`${PREFIX}?q=${search}`)
  //     .then((data) => {
  //       setFilms(data?.description as any);
  //       console.log(data?.description);
  //     })

  //   console.log(films);
  // }, []);

  const updateFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    request(`${PREFIX}?q=${search}`)
      .then((data) => {
        setFilms(data?.description as any);
        console.log(data?.description);
      })
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
          {/* Обернуть эти элементы в компонент формы */}
          <form onSubmit={onSubmitHandler} action="#" method="#">
            <SearchInput onChange={updateFilter} value={search} />
            <Button
              className={'button-big'}
            >
              Искать
            </Button>
          </form>
        </div>
      </div>
      <div className='films-wrapper'>
        {!loading && films.length > 0 && <FilmsList films={films} />}
        {!loading && films.length === 0 && <NotFound />}
        {loading && <Spinner />}
      </div>
    </section>
  )
}
