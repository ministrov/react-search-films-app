import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Heading from "../../components/heading/Heading";
import Paragraph from "../../components/paragraph/Paragraph";
import SearchInput from "../../components/searchInput/SearchInput";
import FilmsList from "../../components/filmsList/FilmsList";
import { useHttpRequest } from "../../hooks/http.request.hook";
import NotFound from "../../components/notFound/NotFound";

const PREFIX = 'https://search.imdbot.workers.dev/';

export default function MainPage() {
  const [search, setSearch] = useState<string>('');
  const { loading, request, films } = useHttpRequest();

  useEffect(() => {
    request(`${PREFIX}?q=${search}`);

    console.log(films);
  }, []);

  const updateFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    request(`${PREFIX}?q=${search}`);
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
        {films.length > 0 && !loading ? (
          <FilmsList films={films} />
        ) : (
          <NotFound />
        )}
      </div>
    </section>
  )
}
