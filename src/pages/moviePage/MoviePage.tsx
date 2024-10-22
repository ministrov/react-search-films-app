import { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
// import { useHttpRequest } from '../../hooks/http.request.hook';
// import { useParams } from 'react-router-dom';
// import { IMovie } from '../../interfaces/movie.interface';
import { IMovie } from '../../interfaces/movie.interface';
import styles from './MoviePage.module.css';

// const PREFIX = 'https://search.imdbot.workers.dev/';

export default function MoviePage() {
    // const [film, setFilm] = useState<IMovie | {}>({});
    const data = useLoaderData() as IMovie;

    console.log(data);
    // const { id } = useParams();
    // const { request } = useHttpRequest();

    // useEffect(() => {
    //     if (data) {
    //         setFilm(data);
    //     }
    // }, [data]);

    // console.log(film);

    useEffect(() => {
        console.log(data.short);
    }, []);

    return (

        <section>
            <h2 className="visually-hidden">Страница фильма</h2>
            <div className={styles["movie-page-container"]}>
                <header className={styles["movie-page-header"]}>
                    <Link className={styles["movie-page-link"]} to={'/'}>Поиск фильмов</Link>
                    <p>{data?.short.name}</p>
                </header>

                <div className={styles["movie-page-wrapper"]}>
                    <img src={'dfldgfjldgjds'} width={300} height={450} alt="Some alt" />
                </div>
            </div>
        </section>
    )
}
