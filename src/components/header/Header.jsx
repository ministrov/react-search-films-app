import React from 'react';
import Logo from '../../components/logo/Logo.jsx'
import NavMenu from '../../components/navMenu/NavMenu.jsx'
import NavMenuItem from "../../components/navMenuItem/NavMenuItem.jsx";
import icon from '../../assets/enter.svg';
import user from '../../assets/user.svg';
import styles from './Header.module.css';

export default function Header({ isLogged, links, profile, onClick }) {

  return (
    <header className={styles['header']}>
      <Logo />
      <NavMenu>
        <ul>
          {links.map(link => (
            <NavMenuItem
              key={link.id}
              label={link.label}
              isActive={link.isActive}
              icon={icon}
              count={link.count}
              hasCount={link.hasCount}
              hasIcon={link.hasIcon}
            >
              {link.label}
            </NavMenuItem>
          ))}
        </ul>

        <ul>
          {isLogged
            ? (
            <>
              <NavMenuItem label={profile?.name || 'Вася'} hasIcon={true} icon={user} />
              <NavMenuItem label={'Выйти'} onClick={onClick}/>
            </>
            )
            : <NavMenuItem label={'Войти'} hasIcon={true} icon={icon} />}
        </ul>
      </NavMenu>
    </header>
  )
}
