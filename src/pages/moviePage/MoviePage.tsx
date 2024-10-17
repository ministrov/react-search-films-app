// import { useLoaderData } from 'react-router-dom';
import styles from './MoviePage.module.css';

export default function MoviePage() {
    // const data = useLoaderData() as any;

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
