import { useContext } from 'react';
import Logo from '../logo/Logo.js';
import NavMenuItem from "../navMenuItem/NavMenuItem.js";
import { MenuItem } from '../../interfaces/links.interface.js';
import { UserProfileContext } from '../../context/user-profile.context.js';
import styles from './Header.module.css';
import UserIcon from '../userIcon/UserIcon.js';

type HeaderProps = {
  isLogged: boolean;
  links: MenuItem[];
  logout: () => void;
}

export default function Header({ isLogged, links, logout }: HeaderProps) {
  const context = useContext(UserProfileContext);
  console.log(context);
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
                      {'Vasay'}
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

{/* <div className={styles['login-user']}>
  {
    usersState[0]?.isLogined ? <div className={styles['login-user__login']}><p className={styles['login-user__user']}>{user[0]?.name} <img src="/user-icon.svg" /></p>  <button className={styles['login-user__logout']} onClick={Logout}> Выход </button></div> : <NavLink>Войти</NavLink>
  }
</div> */}
