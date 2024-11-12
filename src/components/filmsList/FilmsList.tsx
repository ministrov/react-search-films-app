import Rating from '../rating/Rating';
import { Link } from 'react-router-dom';
import FavoritesButton from '../favoritesButton/FavoritesButton';
// import { FilmsDescription } from '../../interfaces/films-description.interface';
import SkeletonImage from '../skeletonImage/SkeletonImage';
import styles from './FilmsList.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { IFilms } from '../../interfaces/films.interface';

// type FilmsListProps = {
//     films: FilmsDescription[];
// }

function FilmsList() {
    const movies = useSelector((state: RootState) => state.movies);
    function onClickHandler() {
        console.log('click');
    }
    const listItem = movies.map((movie: IFilms) => (
        // <li className={styles['films-list-item']} key={film["#IMDB_ID"]}>
        //     <Link className={styles['films-list-link']} to={`/movie/${film["#IMDB_ID"]}`}>
        //         <div className={styles['films-rating-box']}>
        //             <Rating count={film["#RANK"]} />
        //         </div>
        //         {film["#IMG_POSTER"] ? (
        //             <img className={styles["film-item-img"]}
        //                 src={film["#IMG_POSTER"]}
        //                 width={film["photo_width"] || 266}
        //                 height={film["photo_height"] || 400}
        //                 alt={`Poster name ${film["#TITLE"]}`}
        //             />
        //         ) : (
        //             <SkeletonImage />
        //         )}
        //         <div className={styles['films-bottom']}>
        //             <h3>{film["#TITLE"]}</h3>
        //             <FavoritesButton onClick={onClickHandler} isFavorite={false} />
        //         </div>
        //     </Link>
        // </li>
        <li className={styles['films-list-item']} key={movie.id}>
            <Link className={styles['films-list-link']} to={`/movie/${movie.id}`}>
                <div className={styles['films-rating-box']}>
                    <Rating count={movie.rating} />
                </div>
                {movie.poster ? (
                    <img className={styles["film-item-img"]}
                        src={movie.poster}
                        width={266}
                        height={400}
                        alt={`Poster name ${movie.title}`}
                    />
                ) : (
                    <SkeletonImage />
                )}
            </Link>
            <div className={styles['films-bottom']}>
                <h3>{movie.title}</h3>
                <FavoritesButton onClick={onClickHandler} isFavorite={movie.isFavorite} />
            </div>
        </li>
    ));

    return (
        <ul className={styles['films-list']}>
            {listItem}
        </ul>
    )
}

export default FilmsList;
