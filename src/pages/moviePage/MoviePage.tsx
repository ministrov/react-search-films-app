import { Suspense } from 'react';
import { Await, Link, useLoaderData } from 'react-router-dom';
import SkeletonImage from '../../components/skeletonImage/SkeletonImage';
import Spinner from '../../components/spinner/Spinner';
import { IMovie } from '../../interfaces/movie.interface';
import styles from './MoviePage.module.css';
import Rating from '../../components/rating/Rating';
import FavoriteCount from '../../components/favoriteCount/favoriteCount';
import FavoritesButton from '../../components/favoritesButton/FavoritesButton';

export default function MoviePage() {
    const data = useLoaderData() as { data: IMovie };

    console.log(data.data.short);

    return (
        <Suspense fallback={<Spinner />}>
            <Await resolve={data.data}>
                {({ data }: { data: IMovie }) => (
                    <section>
                        <h2 className="visually-hidden">Страница фильма</h2>
                        <div className={styles["movie-page-container"]}>
                            <header className={styles["movie-page-header"]}>
                                <Link className={styles["movie-page-link"]} to={'/'}>Поиск фильмов</Link>
                                <p>{`data: ${data?.short?.name}`}</p>
                            </header>

                            <div className={styles["movie-page-wrapper"]}>
                                <div className={styles["movie-page-image-box"]}>
                                    {data?.short?.image !== 'undefined' ? (
                                        <SkeletonImage />
                                    ) : (
                                        <img src={'dfldgfjldgjds'} width={300} height={450} alt="Some alt" />
                                    )}
                                </div>
                                <div className={styles["movie-page-text-box"]}>
                                    <p>
                                        After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.
                                    </p>
                                    <div className={styles["movie-page-rating-block"]}>
                                        <Rating count={0} />
                                        <FavoritesButton isFavorite={false} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </Await>
        </Suspense>
    )
}
