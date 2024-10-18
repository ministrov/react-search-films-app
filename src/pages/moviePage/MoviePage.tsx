// import { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
// import { useHttpRequest } from '../../hooks/http.request.hook';
// import { useParams } from 'react-router-dom';
// import { IMovie } from '../../interfaces/movie.interface';
import styles from './MoviePage.module.css';

// const PREFIX = 'https://search.imdbot.workers.dev/';

export default function MoviePage() {
    const data = useLoaderData();

    console.log(data);
    // const [film, setFilm] = useState<IMovie | {}>({});
    // const { id } = useParams();
    // const { request } = useHttpRequest();

    // useEffect(() => {
    //     request(`${PREFIX}movie/?tt=${id}`)
    //         .then((data) => {
    //             setFilm({ ...data } as IMovie);
    //         })

    //     console.log(film);
    // }, []);

    return (

        <section>
            <h2 className="visually-hidden">Страница фильма</h2>
            <div className={styles["movie-page-container"]}>
                <header className={styles["movie-page-header"]}>
                    <Link className={styles["movie-page-link"]} to={'/'}>Поиск фильмов</Link>
                    <p>{'dfdfdfdf'}</p>
                </header>

                <div className={styles["movie-page-wrapper"]}>
                    <img src={'dfldgfjldgjds'} width={300} height={450} alt="Some alt" />
                </div>
            </div>
        </section>
    )
}
