import Logo from '../logo/Logo.js'
import NavMenu from '../navMenu/NavMenu.js'
import NavMenuItem from "../navMenuItem/NavMenuItem.js";
import icon from '/enter.svg';
import user from '/user.svg';
import styles from './Header.module.css';
import BasicList from '../basicList/BasicList.js';

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
              isActive={link.isActive}
              icon={icon}
              count={link.count}
              hasCount={link.hasCount}
              hasIcon={link.hasIcon}
              href='#'
            />
          ))}
        </BasicList>

        <BasicList>
          {isLogged
            ? (
              <>
                <NavMenuItem label={profile?.name || 'Вася'} hasIcon={true} icon={user} />
                <NavMenuItem label={'Выйти'} onClick={onClick} />
              </>
            )
            : <NavMenuItem label={'Войти'} hasIcon={true} icon={icon} />
          }
        </BasicList>
      </NavMenu>
    </header>
  )
}
