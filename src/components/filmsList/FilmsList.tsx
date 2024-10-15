import Rating from '../rating/Rating';
import FavoritesButton from '../favoritesButton/FavoritesButton';
import BasicList from '../basicList/BasicList';
import NotFound from '../notFound/NotFound';
import { FilmsDescription } from '../../interfaces/films-description.interface';
import styles from './FilmsList.module.css';

type FilmsListProps = {
    films: FilmsDescription[];
}

export default function FilmsList({ films }: FilmsListProps) {
    const listItem = films.map((film: FilmsDescription, index: number) => (
        <li className={styles['films-list-item']} key={index + 1}>
            <div className={styles['films-rating-box']}>
                <Rating count={film.rating} />
            </div>
            <img src={film.poster} alt={`Poster name ${film.title}`} />
            <div className={styles['films-bottom']}>
                <h3>{film.title}</h3>
                <FavoritesButton isFavorite={film.isFavorite} />
            </div>
        </li>
    ));

    return (
        <BasicList className={styles['films-list']}>
            {listItem}
        </BasicList>
    )
}
