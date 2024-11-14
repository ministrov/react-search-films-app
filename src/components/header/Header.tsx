import Logo from '../logo/Logo.js';
import NavMenuItem from "../navMenuItem/NavMenuItem.js";
import UserLogin from '../userLogin/UserLogin.js';
import styles from './Header.module.css';

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
