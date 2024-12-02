import Heading from "../../components/heading/Heading";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FilmCard from "../../components/filmCard/FilmCard";
import styles from './Favorites.module.css';

function FavoritesPage() {
  const favoritesFilms = useSelector((state: RootState) => state.profile.favorites);

  return (
    <div className={styles['favorites']}>
      <Heading text={'Избранное'} />

      {favoritesFilms.length > 0 ? (
        <ul className={styles['favorites__list']}>
          {favoritesFilms.map((favorite: any) => (
            <FilmCard
              key={favorite.id}
              id={favorite.id}
              title={favorite.title}
              img={favorite.img}
              rating={favorite.rating}
            />
          ))}
        </ul>
      ) : (
        <div className={styles['favorites__message']}>
          <h2 className={styles['favorites__message-title']}>Упс... В Избранном пусто</h2>
          <p className={styles['favorites__message-text']}>Добавьте в избранное понравившийся фильм</p>
        </div>
      )}
    </div>
  )
}

export default FavoritesPage;
