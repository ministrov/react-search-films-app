import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../button/Button';
import Heading from '../heading/Heading';
import Input from '../input/Input';
import Paragraph from '../paragraph/Paragraph';
import styles from './SearchRow.module.css';

type SearchRowProps = {
    findFilms: (search: string) => void;
}

function SearchRow({ findFilms }: SearchRowProps) {
    const [search, setSearch] = useState<string>('');
    function updateFilter(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    };

    function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        findFilms(search);
        setSearch('');
    };
    return (
        <div className={styles['search']}>
            <Heading text={'Поиск'} />
            <Paragraph>
                Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
            </Paragraph>
            <form className={styles['search__form']} onSubmit={onSubmitHandler} action="#" method="#">
                <Input icon={true} onChange={updateFilter} value={search} isValid={true} placeholder={'Введите название'} />
                <Button
                    className={'button-big'}
                >
                    Искать
                </Button>
            </form>
        </div>
    )
}

export default SearchRow;

