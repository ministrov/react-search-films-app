import { Link, useLoaderData } from 'react-router-dom';
import SkeletonImage from '../../components/skeletonImage/SkeletonImage';
// import { IMovie } from '../../interfaces/movie.interface';
import Rating from '../../components/rating/Rating';
import FavoritesButton from '../../components/favoritesButton/FavoritesButton';
import { removeMnemonic } from '../../helpers/functions';
import styles from './MoviePage.module.css';
import Message from '../../components/message/Message';

function MoviePage() {
    const data = useLoaderData() as any;

    function parseDuration(duration: any) {
        throw new Error('Function not implemented.');
    }

    return (
        <>
            {data
                ?
                <section className={styles['movie-page']}>
                    <h2 className="visually-hidden">Страница фильма</h2>
                    <div className={styles["movie-page-container"]}>
                        <header className={styles["movie-page-header"]}>
                            <Link className={styles["movie-page-link"]} to={'/'}>Поиск фильмов</Link>
                            <p>{data?.top.titleText.text || 'Default title name'}</p>
                        </header>

                        <div className={styles["movie-page-wrapper"]}>
                            <div className={styles["movie-page-image-box"]}>
                                {!data?.short?.image ? (
                                    <SkeletonImage />
                                ) : (
                                    <img src={data?.short?.image} width={300} height={450} alt="Some alt" />
                                )}
                            </div>
                            <div className={styles["movie-page-text-box"]}>
                                <p className={styles['movie-page-text']}>
                                    {removeMnemonic(data?.short?.description) || 'Default text'}
                                </p>
                                <div className={styles["movie-page-rating-block"]}>
                                    <Rating count={0} />
                                    <FavoritesButton film={data.short} />
                                </div>

                                <table className={styles['movie-page__data-table']}>
                                    <tbody className={styles['movie-page__data-content']}>
                                        <tr className={styles['movie-page__data-table-row']}>
                                            <th className={styles['movie-page__data_table-header']}>Тип</th>
                                            <td className={styles['movie-page__data-table-text']}>{data.short['@type']}</td>
                                        </tr>
                                        <tr className={styles['movie-page__data-table-row']}>
                                            <th className={styles['movie-page__data_table-header']}>Дата выхода</th>
                                            <td className={styles['movie-page__data-table-text']}>{data.short.datePublished}</td>
                                        </tr>
                                        <tr className={styles['movie-page__data-table-row']}>
                                            <th className={styles['movie-page__data_table-header']}>Длительность</th>
                                            <td className={styles['movie-page__data-table-text']}>{`${parseDuration(data.short.duration)} мин`}</td>
                                        </tr>
                                        <tr className={styles['movie-page__data-table-row']}>
                                            <th className={styles['movie-page__data_table-header']}>Жанр</th>
                                            <td className={styles['movie-page__data-table-text']}>{data.short.genre.join(', ')}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <Message type='search' />
            }
        </>
    )
}

export default MoviePage;
