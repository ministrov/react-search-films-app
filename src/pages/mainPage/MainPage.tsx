import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Heading from "../../components/heading/Heading";
import Paragraph from "../../components/paragraph/Paragraph";
import Input from "../../components/Input/Input";
import FilmsList from "../../components/filmsList/FilmsList";
import Spinner from "../../components/spinner/Spinner";
import Message from "../../components/Message/Message";
import { useHttpRequest } from "../../hooks/http.request.hook";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../store/store";
// import { addFilms } from "../../store/films.slice";
// import { FilmsDescription } from "../../interfaces/films-description.interface";

const PREFIX = 'https://search.imdbot.workers.dev/';

function MainPage() {
  const [films, setFilms] = useState([]) as any;
  const [search, setSearch] = useState<string>('');
  const { request, loading } = useHttpRequest();
  // const films = useSelector((state: RootState) => state.films.films[0]) as unknown as FilmsDescription[];
  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   function getAllFilms() {

  //   }
  //   getAllFilms();
  // }, [search, onSubmitHandler]);



  function updateFilter(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  };

  function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // request(`${PREFIX}?q=${search}`)
    //   .then((data) => {
    //     setFilms(data?.description);
    //     // dispatch(addFilms(data?.description));
    //     console.log(data?.description);
    //   })
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
        {!loading && films.length > 0 && <FilmsList films={films} />}
        {!loading && films.length === 0 && <Message type='search' />}
        {loading && <Spinner />}
      </div>
    </section>
  )
}

export default MainPage;
function getAllFilms() {
  throw new Error("Function not implemented.");
}

