import { NavLink } from 'react-router-dom';
import FavoriteCount from '../favoriteCount/favoriteCount';
import HeaderIcon from '../headerIcon/HeaderIcon';
import cn from 'classnames';
import styles from './NavMenuItem.module.css';

type NavMenuItemProps = {
  icon?: SVGAElement;
  count?: number;
  label: string;
  hasIcon?: boolean;
  hasCount?: boolean;
  href?: string;
  onClick?: () => void;
}

export default function NavMenuItem({ icon, count, label, hasIcon, hasCount, href, onClick }: NavMenuItemProps) {
  return (
    <li onClick={onClick} className={styles['nav-menu-item']}>
      <NavLink className={({ isActive }) => cn(styles['nav-menu-link'], {
        [styles['active']]: isActive
      })} to={`${href}`}>
        {label}
        {hasCount && <FavoriteCount count={count} />}
        {hasIcon && <HeaderIcon icon={icon} width={24} height={24} alt={label} />}
      </NavLink>
    </li>
  )
}
