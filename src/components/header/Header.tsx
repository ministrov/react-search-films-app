import Logo from '../logo/Logo.js'
import NavMenu from '../navMenu/NavMenu.js'
import NavMenuItem from "../navMenuItem/NavMenuItem.js";
import BasicList from '../basicList/BasicList.js';
import icon from '/enter.svg';
import user from '/user.svg';
import styles from './Header.module.css';

export default function Header({ isLogged, links, profile, onClick }: any) {
  return (
    <header className={styles['header']}>
      <Logo />
      <NavMenu>
        <BasicList>
          {links.map((link: any) => (
            <NavMenuItem
              key={link.id}
              label={link.label}
              icon={icon}
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
                <NavMenuItem label={profile?.name || 'Вася'} hasIcon={true} href='#' icon={user} />
                <NavMenuItem label={'Выйти'} href='#' onClick={onClick} />
              </>
            )
            : <NavMenuItem label={'Войти'} href='/login' hasIcon={true} icon={icon} />
          }
        </BasicList>
      </NavMenu>
    </header>
  )
}
