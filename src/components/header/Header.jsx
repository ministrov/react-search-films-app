import React from 'react';
import Logo from '../../components/logo/Logo.jsx'
import NavMenu from '../../components/navMenu/NavMenu.jsx'
import NavMenuItem from "../../components/navMenuItem/NavMenuItem.jsx";
import icon from '../../assets/enter.svg';
import styles from './Header.module.css';

export default function Header({ links, loggedLinks, isLogged }) {
  return (
    <header className={styles['header']}>
      <Logo />
      <NavMenu>
        <ul>
          {isLogged && links.map(link => (
            <NavMenuItem
              key={link.id}
              label={link.label}
              isActive={link.isActive}
              icon={icon}
              hasCount={link.hasCount}
              hasIcon={link.hasIcon}
            >
              {link.label}
            </NavMenuItem>
          ))}

          {!isLogged && loggedLinks.map((link) => (
            <NavMenuItem
              key={link.id}
              label={link.label}
              isActive={link.isActive}
              icon={icon}
              hasCount={link.hasCount}
              hasIcon={link.hasIcon}
            >
              {link.label}
            </NavMenuItem>
          ))}
        </ul>
      </NavMenu>

    </header>
  )
}
