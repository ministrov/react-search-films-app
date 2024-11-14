import { Link } from 'react-router-dom';
import SkeletonImage from '../skeletonImage/SkeletonImage';
import FavoritesButton from '../favoritesButton/FavoritesButton';
import { FilmCardType } from '../../interfaces/films-description.interface';
import Rating from '../rating/Rating';
import styles from './FilmCard.module.css';

function FilmCard(props: FilmCardType) {
    const { id, title, rating, img }: FilmCardType = props;
    return (
        <li className={styles['films-list-item']}>
            <Link className={styles['films-list-link']} to={`/movie/${id}`}>
                <div className={styles['films-rating-box']}>
                    <Rating count={rating} />
                </div>
                {img ? (
                    <img className={styles["film-item-img"]}
                        src={img}
                        width={266}
                        height={400}
                        alt={`Poster name ${title}`}
                    />
                ) : (
                    <SkeletonImage />
                )}
            </Link>
            <div className={styles['films-bottom']}>
                <h3>{title}</h3>
                <FavoritesButton film={props} />
            </div>
        </li>
    )
}

export default FilmCard;