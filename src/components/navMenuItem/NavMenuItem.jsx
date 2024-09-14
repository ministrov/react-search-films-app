import React from 'react';
import cn from 'classnames';
import styles from './NavMenuItem.module.css';

export default function NavMenuItem({ icon, label, hasIcon, hasCount, href, isActive }) {
  return (
    <li className={cn(styles['nav-menu-item'], {
      [styles['active']]: isActive
    })}>
      <a className={styles['nav-menu-link']} href={href}>
        {label}
        {hasCount && <span>2</span>}
        {hasIcon && <img src={icon} width={24} height={24} alt="Иконка входа" />}
      </a>
    </li>
  )
}
