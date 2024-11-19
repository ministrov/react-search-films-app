import { useDispatch, useSelector } from 'react-redux';
import NavMenuItem from '../navMenuItem/NavMenuItem';
import UserIcon from '../userIcon/UserIcon';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store/store';
import { logout, resetUserFavorites } from '../../store/user.slice';
import styles from './UserLogin.module.css';

function UserLogin() {
    const { name } = useSelector((state: RootState) => state.profile);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const onLogoutHandler = () => {
        dispatch(logout());
        dispatch(resetUserFavorites());
        localStorage.removeItem('user-profile');
        navigate('/login');
    };

    return (
        <div className={styles['user-login']}>
            {
                name
                    ? (
                        <ul className={styles['user-login__list']}>
                            <li className={styles['user-login__list-item']}>
                                <p className={styles['user-login__user']}>
                                    {name || 'Default'}
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
