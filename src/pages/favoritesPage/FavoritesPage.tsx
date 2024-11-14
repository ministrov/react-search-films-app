import Heading from "../../components/heading/Heading";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FilmCard from "../../components/filmCard/FilmCard";
import styles from './Favorites.module.css';

function FavoritesPage() {
  const favoritesFilms = useSelector((state: RootState) => state.profile.favorites);

  return (
    <div>
      <Heading text={'Избранное'} />

      {favoritesFilms.length > 0 ? (
        <ul className={styles['favorites-list']}>
          {favoritesFilms.map((favorite) => (
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
        <div className={styles['favorites-message']}>
          <h2 className={styles['favorites-message-title']}>Упс... В Избранном пусто</h2>
          <p className={styles['favorites-message-text']}>Добавьте в избранное понравившийся фильм</p>
        </div>
      )}
    </div>
  )
}

export default FavoritesPage;
