import NavMenuItem from '../navMenuItem/NavMenuItem';
import UserLogin from '../userLogin/UserLogin';
import styles from './NavigationMenu.module.css';

function NavigationMenu({ counter }: any) {
    return (
        <nav className={styles['header__nav']}>
            <ul className={styles['header__list']}>
                <NavMenuItem
                    label={'Поиск фильмов'}
                    hasCount={false}
                    hasIcon={false}
                    href={'/'}
                />

                <NavMenuItem
                    label={'Мои фильмы'}
                    count={counter}
                    hasCount={true}
                    hasIcon={false}
                    href={'/favorites'}
                />

                <NavMenuItem
                    label={'О нас'}
                    hasCount={false}
                    hasIcon={false}
                    href={'/about'}
                />
            </ul>

            <UserLogin />
        </nav>
    )
}

export default NavigationMenu