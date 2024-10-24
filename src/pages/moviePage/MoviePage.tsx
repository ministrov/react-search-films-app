import { Suspense } from 'react';
import { Await, Link, useLoaderData } from 'react-router-dom';
import SkeletonImage from '../../components/skeletonImage/SkeletonImage';
import Spinner from '../../components/spinner/Spinner';
import { IMovie } from '../../interfaces/movie.interface';
import Rating from '../../components/rating/Rating';
import FavoritesButton from '../../components/favoritesButton/FavoritesButton';
import styles from './MoviePage.module.css';

export default function MoviePage() {
    const data = useLoaderData() as { data: IMovie };

    console.log(data.data);

    return (
        <Suspense fallback={<Spinner />}>
            <Await resolve={data.data}>
                {({ data }: { data: IMovie }) => (
                    <section>
                        {data.top.titleText.text}
                        <h2 className="visually-hidden">Страница фильма</h2>
                        <div className={styles["movie-page-container"]}>
                            <header className={styles["movie-page-header"]}>
                                <Link className={styles["movie-page-link"]} to={'/'}>Поиск фильмов</Link>
                                <p>{data?.top.titleText.text || 'Default title name'}</p>
                            </header>

                            <div className={styles["movie-page-wrapper"]}>
                                <div className={styles["movie-page-image-box"]}>
                                    {data?.short?.image !== 'undefined' ? (
                                        <SkeletonImage />
                                    ) : (
                                        <img src={data?.short?.image || 'dfldgfjldgjds'} width={300} height={450} alt="Some alt" />
                                    )}
                                </div>
                                <div className={styles["movie-page-text-box"]}>
                                    <p>
                                        {data?.short?.descrtiption || 'llsfjslfjsdfjsdkf'}
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
