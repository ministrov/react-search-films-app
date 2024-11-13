import { Link, useLoaderData, useParams } from 'react-router-dom';
import SkeletonImage from '../../components/skeletonImage/SkeletonImage';
// import { IMovie } from '../../interfaces/movie.interface';
import Rating from '../../components/rating/Rating';
import FavoritesButton from '../../components/favoritesButton/FavoritesButton';
// import { removeMnemonic } from '../../helpers/functions';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import styles from './MoviePage.module.css';
import { useEffect } from 'react';
import { getFilm } from '../../store/films.slice';

function MoviePage() {
    const { movieId } = useParams();
    const movie = useSelector((state: RootState) => state.movies) as any;
    const dispatch = useDispatch<AppDispatch>();
    // const data = useLoaderData() as { data: IMovie };

    useEffect(() => {
        dispatch(getFilm(Number(movieId)));
    }, []);

    function onClickHandler() {
        console.log('clicked');
    }

    return (
        // <section>
        //     <h2 className="visually-hidden">Страница фильма</h2>
        //     <div className={styles["movie-page-container"]}>
        //         <header className={styles["movie-page-header"]}>
        //             <Link className={styles["movie-page-link"]} to={'/'}>Поиск фильмов</Link>
        //             <p>{data.data?.top.titleText.text || 'Default title name'}</p>
        //         </header>

        //         <div className={styles["movie-page-wrapper"]}>
        //             <div className={styles["movie-page-image-box"]}>
        //                 {!data.data?.short?.image ? (
        //                     <SkeletonImage />
        //                 ) : (
        //                     <img src={data.data?.short?.image} width={300} height={450} alt="Some alt" />
        //                 )}
        //             </div>
        //             <div className={styles["movie-page-text-box"]}>
        //                 <p className={styles['movie-page-text']}>
        //                     {removeMnemonic(data.data?.short?.description) || 'Default text'}
        //                 </p>
        //                 <div className={styles["movie-page-rating-block"]}>
        //                     <Rating count={0} />
        //                     <FavoritesButton onClick={onClickHandler} isFavorite={false} />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section>
            <h2 className="visually-hidden">Страница фильма</h2>
            <div className={styles["movie-page-container"]}>
                <header className={styles["movie-page-header"]}>
                    <Link className={styles["movie-page-link"]} to={'/'}>Поиск фильмов</Link>
                    <p>{movie?.title || 'Default title name'}</p>
                </header>

                <div className={styles["movie-page-wrapper"]}>
                    <div className={styles["movie-page-image-box"]}>
                        {!movie?.poster ? (
                            <SkeletonImage />
                        ) : (
                            <img src={movie?.poster} width={300} height={450} alt="Some alt" />
                        )}
                    </div>
                    <div className={styles["movie-page-text-box"]}>
                        <p className={styles['movie-page-text']}>
                            {'Default text'}
                        </p>
                        <div className={styles["movie-page-rating-block"]}>
                            <Rating count={0} />
                            <FavoritesButton onClick={onClickHandler} isFavorite={false} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoviePage;
