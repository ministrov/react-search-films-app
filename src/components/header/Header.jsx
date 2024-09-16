import React from 'react';
import Logo from '../../components/logo/Logo.jsx'
import NavMenu from '../../components/navMenu/NavMenu.jsx'
import NavMenuItem from "../../components/navMenuItem/NavMenuItem.jsx";
import icon from '../../assets/enter.svg';
import user from '../../assets/user.svg';
import styles from './Header.module.css';

export default function Header({ links, profiles }) {
  const profile = profiles.map((item) => item)[0];

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
          {profile?.isLogged
            ? (
            <>
              <NavMenuItem label={profile?.name} hasIcon={true} icon={user} />
              <NavMenuItem label={'Выйти'}/>
            </>
            )
            : <NavMenuItem label={'Войти'} hasIcon={true} icon={icon} />}
        </ul>
      </NavMenu>
    </header>
  )
}
