import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Heading from "../../components/heading/Heading";
import Paragraph from "../../components/paragraph/Paragraph";
import Input from "../../components/input/Input";
import FilmsList from "../../components/filmsList/FilmsList";
import Spinner from "../../components/spinner/Spinner";
import { useUserContext } from "../../hooks/useUserContext";
import Message from "../../components/message/Message";

const PREFIX = 'https://search.imdbot.workers.dev/';

function MainPage() {
  const { filmsState } = useUserContext();
  const [films, setFilms] = useState(filmsState);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  function updateFilter(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  };

  console.log(films);

  function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(search);
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
            <Input icon={true} onChange={updateFilter} value={search} isValid={true} type={"text"} placeholder={'Введите название'} />
            <Button
              className={'button-big'}
            >
              Искать
            </Button>
          </form>
        </div>
      </div>
      <div className='films-wrapper'>
        {/* {!loading && movies.length > 0 && <FilmsList />}
        {!loading && movies.length === 0 && <Message type='search' />} */}
        {films.length > 0 && <FilmsList films={films} />}
        {films.length === 0 && <Message type='search' />}
        {loading && <Spinner />}
      </div>
    </section>
  )
}

export default MainPage;
