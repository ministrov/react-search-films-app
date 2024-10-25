import { NavLink } from 'react-router-dom';
import FavoriteCount from '../favoriteCount/favoriteCount';
import UserIcon from '../userIcon/UserIcon';
import cn from 'classnames';
import styles from './NavMenuItem.module.css';
import EnterIcon from '../enterIcon/EnterIcon';

type NavMenuItemProps = {
  count?: number;
  label: string;
  hasIcon?: boolean;
  hasCount?: boolean;
  href?: string;
  typeIcon?: string;
  onClick?: () => void;
}

export default function NavMenuItem({ count, label, hasIcon, hasCount, href, onClick, typeIcon }: NavMenuItemProps) {
  return (
    <li onClick={onClick} className={styles['nav-menu-item']}>
      <NavLink className={({ isActive }) => cn(styles['nav-menu-link'], {
        [styles['active']]: isActive
      })} to={`${href}`}>
        {label}
        {hasCount && <FavoriteCount count={count} />}
        {hasIcon && <UserIcon />}
        {typeIcon && <EnterIcon />}
      </NavLink>
    </li>
  )
}
