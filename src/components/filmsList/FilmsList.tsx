import FilmCard from '../filmCard/FilmCard';
import styles from './FilmsList.module.css';

function FilmsList({ films }: any) {
    return (
        <ul className={styles['films-list']}>
            {films.map((film: any) => (
                <FilmCard
                    key={film['#IMDB_ID']}
                    id={film['#IMDB_ID']}
                    title={film['#TITLE']}
                    img={film['#IMG_POSTER']}
                    rating={film['#RANK']}
                />
            ))}
        </ul>
    )
}

export default FilmsList;
