import React from 'react';
import styles from './NavMenu.module.css';

export default function NavMenu({ children }) {
  return (
    <nav className={styles['nav-menu']}>
      {children}
    </nav>
  )
}
