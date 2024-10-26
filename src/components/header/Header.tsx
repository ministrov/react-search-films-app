import { useContext } from 'react';
import Logo from '../logo/Logo.js';
import NavMenuItem from "../navMenuItem/NavMenuItem.js";
import { MenuItem } from '../../interfaces/links.interface.js';
import { UserProfileContext } from '../../context/user-profile.context.js';
import styles from './Header.module.css';

type HeaderProps = {
  isLogged: boolean;
  links: MenuItem[];
  onClick: () => void;
}

export default function Header({ isLogged, links, onClick }: HeaderProps) {
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

          <ul className={styles['header__list']}>
            {isLogged
              ? (
                <ul className={styles['header__list']}>
                  <NavMenuItem label={'Вася'} hasIcon={true} href='#' />
                  <NavMenuItem label={'Выйти'} href='#' onClick={onClick} />
                </ul>
              )
              : (
                <ul className={styles['header__list']}>
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
