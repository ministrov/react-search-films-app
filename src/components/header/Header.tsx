import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.js';
import Logo from '../logo/Logo.js';
import NavMenuItem from "../navMenuItem/NavMenuItem.js";
import UserLogin from '../userLogin/UserLogin.js';
import styles from './Header.module.css';
import BurgerButton from '../burgerButton/BurgerButton.js';

function Header() {
  const [counter, setCounter] = useState<number>(0);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const favorites = useSelector((state: RootState) => state.profile.favorites);

  useEffect(() => {
    setCounter(favorites.length);
  }, [counter, favorites]);

  return (
    <header className={styles['header']}>
      <div className={styles['header__wrapper']}>
        <div className={styles['header__logo']}>
          <Logo />
        </div>
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

        <BurgerButton
          isMenuOpen={isMenuOpen}
          setMenuOpen={() => setMenuOpen(!isMenuOpen)}
        />
      </div>
    </header>
  )
}

export default Header;
