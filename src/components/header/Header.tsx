import { useContext } from 'react';
import Logo from '../logo/Logo.js';
import NavMenuItem from "../navMenuItem/NavMenuItem.js";
import UserIcon from '../userIcon/UserIcon.js';
import { MenuItem } from '../../interfaces/links.interface.js';
import { MyContexType, UserProfile, UserProfileContext } from '../../context/user-profile.context.js';
import styles from './Header.module.css';

type HeaderProps = {
  isLogged: boolean | undefined;
  links: MenuItem[];
  logout: () => void;
}

export default function Header({ isLogged, links, logout }: HeaderProps) {
  const { users } = useContext<MyContexType | any>(UserProfileContext);

  return (
    <header className={styles['header']}>
      <Logo />
      <div className={styles['header__nav-wrapper']}>
        <nav className={styles['header__nav']}>
          <ul className={styles['header__list']}>
            {links.map((link: any) => (
              <NavMenuItem
                key={link.id}
                label={link.label}
                count={link.count}
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
                      {users?.map((item: UserProfile) => item.name).join('') || 'Default'}
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
