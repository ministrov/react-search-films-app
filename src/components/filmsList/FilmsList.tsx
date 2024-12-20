import { FilmsDescription } from '../../interfaces/films-description.interface';
import FilmCard from '../filmCard/FilmCard';
import styles from './FilmsList.module.css';

type FilmsListProps = {
    films: FilmsDescription[];
}

function FilmsList({ films }: FilmsListProps) {
    return (
        <ul className={styles['films-list']}>
            {films.map((film: FilmsDescription) => (
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
