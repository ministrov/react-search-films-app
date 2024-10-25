import Logo from '../logo/Logo.js'
import NavMenu from '../navMenu/NavMenu.js'
import NavMenuItem from "../navMenuItem/NavMenuItem.js";
import BasicList from '../basicList/BasicList.js';
import { MenuItem } from '../../interfaces/links.interface.js';
import icon from '/enter.svg';
import user from '/user.svg';
import styles from './Header.module.css';

type HeaderProps = {
  isLogged: boolean;
  links: MenuItem[];
  onClick: () => void;
}

export default function Header({ isLogged, links, onClick }: HeaderProps) {
  // console.log(profile);
  return (
    <header className={styles['header']}>
      <Logo />
      <NavMenu>
        <BasicList>
          {links.map((link: any) => (
            <NavMenuItem
              key={link.id}
              label={link.label}
              count={link.count}
              hasCount={link.hasCount}
              hasIcon={link.hasIcon}
              href={link.href}
            />
          ))}
        </BasicList>

        <BasicList>
          {isLogged
            ? (
              <>
                <NavMenuItem label={'Вася'} hasIcon={true} href='#' />
                <NavMenuItem label={'Выйти'} href='#' onClick={onClick} />
              </>
            )
            : <NavMenuItem label={'Войти'} href='/login' hasIcon={true} />
          }
        </BasicList>
      </NavMenu>
    </header>
  )
}
