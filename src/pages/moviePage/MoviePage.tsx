import { Link, useLoaderData } from 'react-router-dom';
import SkeletonImage from '../../components/skeletonImage/SkeletonImage';
import Rating from '../../components/rating/Rating';
import FavoritesButton from '../../components/favoritesButton/FavoritesButton';
import { removeMnemonic, parseDuration } from '../../helpers/functions';
import Message from '../../components/message/Message';
import styles from './MoviePage.module.css';
import { IMovie } from '../../interfaces/movie.interface';

function MoviePage() {
    const data = useLoaderData() as any;

    return (
        <>
            {data
                ?
                <section className={styles['movie-page']}>
                    <h2 className="visually-hidden">Страница фильма</h2>
                    <div className={styles["movie-page__container"]}>
                        <header className={styles["movie-page__header"]}>
                            <Link className={styles["movie-page__link"]} to={'/'}>Поиск фильмов</Link>
                            <p>{data?.top.titleText.text || 'Default title name'}</p>
                        </header>

                        <div className={styles["movie-page__wrapper"]}>
                            <div className={styles["movie-page__image-box"]}>
                                {!data?.short?.image ? (
                                    <SkeletonImage />
                                ) : (
                                    <img src={data?.short?.image} width={480} height={720} alt="Some alt" />
                                )}
                            </div>
                            <div className={styles["movie-page__text-box"]}>
                                <p className={styles['movie-page__text']}>
                                    {removeMnemonic(data?.short?.description) || 'Default text'}
                                </p>
                                <div className={styles["movie-page__rating-block"]}>
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

                        <div className={styles['movie-page__reviews reviews']}>
                            <h2 className={styles['reviews__title']}>Отзывы</h2>
                            <ul className={styles['reviews__list']}>
                                <li className={styles['reviews__item']}>
                                    <div className={styles['review']}>
                                        <div className={styles['review__header']}>
                                            <h3 className={styles['review__title']}>
                                                {removeMnemonic(data.short.review.name) || 'Default text'}
                                            </h3>
                                            <p className={styles['review__date']}>{data.short.review.dateCreated}</p>
                                        </div>
                                        <p className={styles['review__text']}>
                                            {removeMnemonic(data.short.review.reviewBody) || 'Default text description for that film'}
                                        </p>
                                    </div>
                                </li>
                            </ul>
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
