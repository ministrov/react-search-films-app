import React from 'react';
import FavoriteCount from '../favoriteCount/favoriteCount';
import HeaderIcon from '../headerIcon/HeaderIcon';
import cn from 'classnames';
import styles from './NavMenuItem.module.css';

export default function NavMenuItem({ icon, count, label, hasIcon, hasCount, href, isActive}) {
  return (
    <li className={cn(styles['nav-menu-item'], {
      [styles['active']]: isActive
    })}>
      <a className={styles['nav-menu-link']} href={href}>
        {label}
        {hasCount && <FavoriteCount count={count}/>}
        {hasIcon && <HeaderIcon icon={icon} width={24} height={24} alt={label}/>}
      </a>
    </li>
  )
}
