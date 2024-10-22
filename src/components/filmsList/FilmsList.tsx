import Rating from '../rating/Rating';
import FavoritesButton from '../favoritesButton/FavoritesButton';
import BasicList from '../basicList/BasicList';
import NotFound from '../Message/Message';
import { FilmsDescription } from '../../interfaces/films-description.interface';
import styles from './FilmsList.module.css';
import SkeletonImage from '../skeletonImage/SkeletonImage';
import { Link } from 'react-router-dom';

type FilmsListProps = {
    films: FilmsDescription[];
}

export default function FilmsList({ films }: FilmsListProps) {
    const listItem = films.map((film: FilmsDescription) => (
        <li className={styles['films-list-item']} key={film["#IMDB_ID"]}>
            <Link className={styles['films-list-link']} to={`/movie/${film["#IMDB_ID"]}`}>
                <div className={styles['films-rating-box']}>
                    <Rating count={film["#RANK"]} />
                </div>
                {/* Если картинки нет , показать заглушку */}
                {film["#IMG_POSTER"] ? (
                    <img className={styles["film-item-img"]}
                        src={film["#IMG_POSTER"]}
                        width={film["photo_width"] || 266}
                        height={film["photo_height"] || 400}
                        alt={`Poster name ${film["#TITLE"]}`}
                    />
                ) : (
                    <SkeletonImage />
                )}
                <div className={styles['films-bottom']}>
                    <h3>{film["#TITLE"]}</h3>
                    <FavoritesButton isFavorite={false} />
                </div>
            </Link>
        </li>
    ));

    return (
        <BasicList className={styles['films-list']}>
            {listItem}
        </BasicList>
    )
}
