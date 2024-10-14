import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Heading from "../../components/heading/Heading";
import Paragraph from "../../components/paragraph/Paragraph";
import SearchInput from "../../components/searchInput/SearchInput";
import FilmsList from "../../components/filmsList/FilmsList";
// import { getFilmsArrayFromJSON } from "../../const/const";
import { RootData } from "../../interfaces/films-description.interface";

const PREFIX = 'https://search.imdbot.workers.dev/';

export default function MainPage() {
  const [dataObj, setSetDataObj] = useState<RootData | null>();
  const [search, setSearch] = useState<string>('');

  // const films = getFilmsArrayFromJSON(dataObj);

  // useEffect(() => {
  //   const getFilms = async () => {
  //     try {
  //       const res = await fetch(`${PREFIX}?q=${search}`);
  //       if (!res.ok) {
  //         return;
  //       }
  //       const data = await res.json() as RootData;
  //       setSetDataObj(data);

  //     } catch (e) {
  //       console.error(e);
  //       return;
  //     }
  //   };
  //   // getFilms();
  //   console.log(dataObj);
  // }, []);

  const updateFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    console.log(event.target.value);
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
          <SearchInput onChange={updateFilter} value={search} />
          <Button
            onSubmit={() => console.log('submit')}
            className={null}>
            Искать
          </Button>
        </div>
      </div>
      <div className='films-wrapper'>
        <FilmsList films={[]} />
      </div>
    </section>
  )
}
