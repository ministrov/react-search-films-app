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

          <UserLogin logout={logout} />
        </nav>
      </div>
    </header>
  )
}

export default Header;
