import { Link, useLoaderData } from 'react-router-dom';
import SkeletonImage from '../../components/skeletonImage/SkeletonImage';
import { IMovie } from '../../interfaces/movie.interface';
import Rating from '../../components/rating/Rating';
// import FavoritesButton from '../../components/favoritesButton/FavoritesButton';
import { removeMnemonic } from '../../helpers/functions';
import styles from './MoviePage.module.css';

function MoviePage() {
    const data = useLoaderData() as { data: IMovie };

    return (
        <section>
            <h2 className="visually-hidden">Страница фильма</h2>
            <div className={styles["movie-page-container"]}>
                <header className={styles["movie-page-header"]}>
                    <Link className={styles["movie-page-link"]} to={'/'}>Поиск фильмов</Link>
                    <p>{data.data?.top.titleText.text || 'Default title name'}</p>
                </header>

                <div className={styles["movie-page-wrapper"]}>
                    <div className={styles["movie-page-image-box"]}>
                        {!data.data?.short?.image ? (
                            <SkeletonImage />
                        ) : (
                            <img src={data.data?.short?.image} width={300} height={450} alt="Some alt" />
                        )}
                    </div>
                    <div className={styles["movie-page-text-box"]}>
                        <p className={styles['movie-page-text']}>
                            {removeMnemonic(data.data?.short?.description) || 'Default text'}
                        </p>
                        <div className={styles["movie-page-rating-block"]}>
                            <Rating count={0} />
                            {/* <FavoritesButton film={data.data.short}  /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoviePage;
