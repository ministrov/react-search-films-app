import { useSelector } from 'react-redux';
import Logo from '../logo/Logo.js';
import NavMenuItem from "../navMenuItem/NavMenuItem.js";
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
  isLogged: boolean | undefined;
  logout: () => void;
}

function Header({ isLogged, logout }: HeaderProps) {
  const profile = useSelector((state: RootState) => state.profile);

  return (
    <header className={styles['header']}>
      <div className={styles['header__logo']}>
        <Logo />
      </div>
      <div className={styles['header__nav-wrapper']}>
        <nav className={styles['header__nav']}>
          <ul className={styles['header__list']}>
            {links.map((link: LinkItem) => (
              <NavMenuItem
                key={link.id}
                label={link.label}
                count={link.count || 0}
                hasCount={link.hasCount}
                hasIcon={link.hasIcon}
                href={link.href}
              />
            ))}
          </ul>

          <ul className={styles['header__user-login user-login']}>
            {isLogged
              ? (
                <ul className={styles['user-login__list']}>
                  <li className={styles['user-login__list-item']}>
                    <p className={styles['user-login__user']}>
                      {profile.name || 'Default'}
                      <UserIcon />
                    </p>
                  </li>
                  <li className={styles['user-login__list-item']}>
                    <button className={styles['user-login__logout']} onClick={logout}>Выход</button>
                  </li>
                </ul>
              )
              : (
                <ul className={styles['user-login__list']}>
                  <NavMenuItem label={'Войти'} href='/login' typeIcon='enter' />
                </ul>
              )
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
