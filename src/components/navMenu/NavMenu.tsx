import { ReactNode } from 'react';
import styles from './NavMenu.module.css';

type NavMenuProps = {
  children: ReactNode
}

export default function NavMenu({ children }: NavMenuProps) {
  return (
    <nav className={styles['nav-menu']}>
      {children}
    </nav>
  )
}
