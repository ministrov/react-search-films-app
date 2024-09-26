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
  isActive?: boolean;
  onClick?: () => void;
}

export default function NavMenuItem({ icon, count, label, hasIcon, hasCount, href, isActive, onClick }: NavMenuItemProps) {
  return (
    <li onClick={onClick} className={cn(styles['nav-menu-item'], {
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
