import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.js';
import Logo from '../logo/Logo.js';
import BurgerButton from '../burgerButton/BurgerButton.js';
import NavigationMenu from '../navigationMenu/NavigationMenu.js';
import useWindowSize from '../../hooks/use-window-size.js';
import styles from './Header.module.css';

function Header() {
  const [counter, setCounter] = useState<number>(0);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const { width } = useWindowSize();
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

        {width > 768 ? (
          <NavigationMenu
            counter={counter}
          />
        ) : null}

        <BurgerButton
          isMenuOpen={isMenuOpen}
          setMenuOpen={() => setMenuOpen(!isMenuOpen)}
        />
      </div>
    </header>
  )
}

export default Header;
