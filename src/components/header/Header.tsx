import { useSelector } from 'react-redux';
import Logo from '../logo/Logo.js';
import NavMenuItem from "../navMenuItem/NavMenuItem.js";
import UserLogin from '../userLogin/UserLogin.js';
import UserIcon from '../userIcon/UserIcon.js';
import { RootState } from '../../store/store.js';
import { links } from '../../const/const.js';
import styles from './Header.module.css';

type LinkItem = {
  id: number;
  label: string;
  isActive: boolean;
  count?: number | null;
  hasCount: boolean;
  hasIcon: boolean;
  href: string;
}

type HeaderProps = {
  logout: () => void;
}

function Header({ logout }: HeaderProps) {
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
              count={0}
              hasCount={true}
              hasIcon={false}
              href={'/favorites'}
            />
          </ul>

          <UserLogin logout={logout} />
        </nav>
      </div>
    </header>
  )
}

export default Header;
