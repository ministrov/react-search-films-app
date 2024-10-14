import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Heading from "../../components/heading/Heading";
import Paragraph from "../../components/paragraph/Paragraph";
import SearchInput from "../../components/searchInput/SearchInput";
import FilmsList from "../../components/filmsList/FilmsList";
import { useHttpRequest } from "../../hooks/http.request.hook";
// import { getFilmsArrayFromJSON } from "../../const/const";

const PREFIX = 'https://search.imdbot.workers.dev/';

export default function MainPage() {
  const [search, setSearch] = useState<string>('');
  const { loading, request, data } = useHttpRequest();

  // const films = getFilmsArrayFromJSON(dataObj);

  useEffect(() => {
    request(PREFIX)
  }, []);

  const updateFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  const onSubmitHandler = (event: SubmitEvent) => {
    event.preventDefault();
    console.log('submit');
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
          <form action="#">
            <SearchInput onChange={updateFilter} value={search} />
            <Button
              onSubmit={onSubmitHandler}
              className={'button-big'}
            >
              Искать
            </Button>
          </form>
        </div>
      </div>
      <div className='films-wrapper'>
        <FilmsList films={[]} />
      </div>
    </section>
  )
}
