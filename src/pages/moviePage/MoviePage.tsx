// import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './MoviePage.module.css';
import { useHttpRequest } from '../../hooks/http.request.hook';
import { useParams } from 'react-router-dom';

const PREFIX = 'https://search.imdbot.workers.dev/';

export default function MoviePage() {
    const [film, setFilm] = useState([]);
    const { id } = useParams();
    const { request } = useHttpRequest();
    // const data = useLoaderData() as any;

    useEffect(() => {
        request(`${PREFIX}movie/?tt=${id}`)
            .then((data) => {
                setFilm(data as any);
            })

        console.log(film);
    }, []);

    // console.log(data);
    return (

        <section>
            <h2 className="visually-hidden">Страница фильма</h2>
            <div className={styles["movie-page-container"]}>
                <header className={styles["movie-page-header"]}>
                    <h3>Поиск фильмов</h3>
                    <p>{'dfdkfdf'}</p>
                </header>

                <div className={styles["movie-page-wrapper"]}>
                    <img src={'dfldgfjldgjds'} width={300} height={450} alt="Some alt" />
                </div>
            </div>
        </section>
    )
}
