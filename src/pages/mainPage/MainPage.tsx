import { useState } from "react";
import FilmsList from "../../components/filmsList/FilmsList";
import Spinner from "../../components/spinner/Spinner";
import { useUserContext } from "../../hooks/use-user-context";
import Message from "../../components/message/Message";
import { ListItem } from "../../context/user-profile.context";
import SearchRow from "../../components/searchRow/SearchRow";
import styles from './MainPage.module.css';
import axios, { AxiosError } from "axios";
// import { FilmCardType } from "../../interfaces/films-description.interface";

// const PREFIX = 'https://search.imdbot.workers.dev/';

function MainPage() {
  const { filmsState } = useUserContext();
  const [films, setFilms] = useState<ListItem[]>(filmsState);
  const [loading, setLoading] = useState<boolean>(false);

  async function getFilms(search: string) {
    setLoading(true);
    try {
      const { data } = await axios.get(`https://search.imdbot.workers.dev/?q=${search.toLowerCase()}`);
      setFilms(data.description);
      setLoading(false);

    } catch (e) {
      if (e instanceof AxiosError) {
        setLoading(false);
        console.log(e);
      }
    }
    console.log(search);
  }

  console.log(films);

  return (
    <section className={styles['main-page']}>
      <h2 className="visually-hidden">Главная страница поиска фильмов</h2>
      <SearchRow findFilms={getFilms} />
      <div className='films-wrapper'>
        {loading && <Spinner />}
        {films.length > 0 ? <FilmsList films={films} /> : <Message type='search' />}
      </div>
    </section>
  )
}

export default MainPage;
