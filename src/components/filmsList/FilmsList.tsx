import Rating from '../rating/Rating';
import { Link } from 'react-router-dom';
import FavoritesButton from '../favoritesButton/FavoritesButton';
import { FilmsDescription } from '../../interfaces/films-description.interface';
import SkeletonImage from '../skeletonImage/SkeletonImage';
import styles from './FilmsList.module.css';

type FilmsListProps = {
    films: FilmsDescription[];
}

function FilmsList({ films }: FilmsListProps) {
    const listItem = films.map((film: FilmsDescription) => (
        <li className={styles['films-list-item']} key={film["#IMDB_ID"]}>
            <Link className={styles['films-list-link']} to={`/movie/${film["#IMDB_ID"]}`}>
                <div className={styles['films-rating-box']}>
                    <Rating count={film["#RANK"]} />
                </div>
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
        <ul className={styles['films-list']}>
            {listItem}
        </ul>
    )
}

export default FilmsList;
