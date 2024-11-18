import { useDispatch, useSelector } from 'react-redux';
import NavMenuItem from '../navMenuItem/NavMenuItem';
import UserIcon from '../userIcon/UserIcon';
import { AppDispatch, RootState } from '../../store/store';
import { logout, resetUserFavorites } from '../../store/user.slice';
import styles from './UserLogin.module.css';

function UserLogin() {
    const profile = useSelector((state: RootState) => state.profile);
    const dispatch = useDispatch<AppDispatch>();

    const onLogoutHandler = () => {
        dispatch(logout());
        dispatch(resetUserFavorites());
        localStorage.removeItem('user-profile');
    };

    return (
        <div className={styles['user-login']}>
            {
                profile.isLogged
                    ? (
                        <ul className={styles['user-login__list']}>
                            <li className={styles['user-login__list-item']}>
                                <p className={styles['user-login__user']}>
                                    {profile.name || 'Default'}
                                    <UserIcon />
                                </p>
                            </li>
                            <li className={styles['user-login__list-item']}>
                                <button className={styles['user-login__logout']} onClick={onLogoutHandler}>Выйти</button>
                            </li>
                        </ul>
                    )
                    : (
                        <ul className={styles['user-login__list']}>
                            <NavMenuItem label={'Войти'} href='/login' typeIcon='enter' />
                        </ul>
                    )
            }
        </div>
    )
}

export default UserLogin;
